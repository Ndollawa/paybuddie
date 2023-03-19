import PostCategoryModel from '../../Models/PostCategory'
// import UserModel from '../../Models/User'
import {Request, Response} from 'express'
import BaseController from './BaseController'



class PostCategoryController extends BaseController {
    constructor(){
        super(PostCategoryModel)   

   }

// @desc Get all categories 
// @route GET /categories
// @access public
 public selectAll = async (req:Request, res:Response) => {
    // Get all categories from MongoDB
    const category = await PostCategoryModel.find().lean()

    // If no categories 
    if (!category?.length) {
        return res.status(400).json({ message: 'No post found' })
    }

    // Add username to each note before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    // const postWithUser = await Promise.all(post.map(async (post) => {
    //     const user = await User.findById(PostCategoryModel.user).lean().exec()
    //     return { ...post, username: user.username }
    // }))

    res.status(200).json(category)
}

// @desc Create new category
// @route POST /category
// @access authorized user
 public create = async (req:Request, res:Response) => {
    const {author, title, status } = req.body
   
    // Confirm data
    if ( !title || !status ) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title
    const duplicate = await PostCategoryModel.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate post category' })
    }

    // Create and store the new Category 
    const category = await PostCategoryModel.create({author, title, status })

    if (category) { // Created 
        return res.status(201).json({ message: 'New category created' })
    } else {
        return res.status(400).json({ message: 'Invalid category data received' })
    }

}

// @desc Update a category
// @route PATCH /category
// @access authorized user
public update = async (req:Request, res:Response) => {
    const {title, _id,status} = req.body

    // Confirm data
    if (!title || !status) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm category exists to update
    const category = await PostCategoryModel.findById({_id}).exec()

    if (!category) {
        return res.status(400).json({ message: 'Category not found' })
    }

    // Check for duplicate title
    const duplicate = await PostCategoryModel.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    // Allow renaming of the original note 
    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate Category title' })
    }

    category.title = title
    category.status = status

    const updatedCategory = await category.save()

    res.json(`'${updatedCategory.title}' updated`)
}

// @desc Delete a category
// @route DELETE /category
// @access authorized user
public delete = async (req:Request, res:Response) => {
    const { _id } = req.body

    // Confirm data
    if (!_id) {
        return res.status(400).json({ message: 'Category ID required' })
    }

    // Confirm category exists to delete 
    const category = await PostCategoryModel.findById(_id).exec()

    if (!category) {
        return res.status(400).json({ message: 'Category not found' })
    }

    const result = await PostCategoryModel.deleteOne()

    res.status(200).json({message:"success"})
}

}

export default new PostCategoryController();