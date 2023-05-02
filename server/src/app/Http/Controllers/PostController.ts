import PostModel from '../../Models/Post'
// import UserModel from '../../Models/User'
import {Request, Response} from 'express'
import BaseController from './BaseController'
import deleteItem from '../../utils/deleteItem'


class PostController extends BaseController {
    constructor(){
        super(PostModel)   

   }

// @desc Get all notes 
// @route GET /notes
// @access public
 public selectAll = async (req:Request, res:Response) => {
    // Get all notes from MongoDB
    const post = await PostModel.find().lean()

    // If no notes 
    if (!post?.length) {
        return res.status(400).json({ message: 'No post found' })
    }

    // Add username to each note before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    // const postWithUser = await Promise.all(post.map(async (post) => {
    //     const user = await User.findById(PostModel.user).lean().exec()
    //     return { ...post, username: user.username }
    // }))

    res.json(post)
}

// @desc Create new post
// @route POST /post
// @access authorized user
 public create = async (req:Request, res:Response) => {
    const {author, title, description, body, status,tags,category } = req.body
    const file = req.file!
    console.log(req.body)
    // Confirm data
    if (!body || !title || !status || !req.file || !tags || !category) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title
    const duplicate = await PostModel.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate post title' })
    }

    // Create and store the new user 
    const post = await PostModel.create({author, title,description,body,coverImage:file.filename,category,tags:tags.split(',') , status})

    if (post) { // Created 
        return res.status(201).json({ message: 'New post created' })
    } else {
        return res.status(400).json({ message: 'Invalid post data received' })
    }

}

// @desc Update a post
// @route PATCH /post
// @access authorized user
public update = async (req:Request, res:Response) => {
    const {title, description,_id,status,body,category, tags } = req.body
    const file = req.file!
    console.log(req.body)
    // Confirm data
    if (!body || !title || !status || !tags || !category) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm post exists to update
    const post = await PostModel.findById({_id}).exec()

    if (!post) {
        return res.status(400).json({ message: 'post not found' })
    }

    // Check for duplicate title
    const duplicate = await PostModel.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    // Allow renaming of the original note .split(',')
    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate note title' })
    }

    post.body = body
    post.title = title
   if(file){
    const destination = '../../../../public/posts'
    const oldFile = post.coverImage! 
    if(oldFile) deleteItem(destination,oldFile)
    post.coverImage = file.filename
   } 
    post.description = description
    post.status = status
    post.category = category
    post.tags = tags

    const updatedPost = await post.save()

    res.json(`'${updatedPost.title}' updated`)
}

// @desc Delete a post
// @route DELETE /post
// @access authorized user
public delete = async (req:Request, res:Response) => {
    const { _id } = req.body

    // Confirm data
    if (!_id) {
        return res.status(400).json({ message: 'Post ID required' })
    }

    // Confirm post exists to delete 
    const post = await PostModel.findById(_id).exec()

    if (!post) {
        return res.status(400).json({ message: 'post not found' })
    }
    const destination = '../../../../public/posts'
    const oldFile = post.coverImage! 
    if(oldFile) deleteItem(destination,oldFile)
    const result = await PostModel.deleteOne()

    res.status(200).json({message:"success"})
}

}

export default new PostController();