import SlideModel from '../../Models/Slide'
// import UserModel from '../../Models/User'
import {Request, Response} from 'express'
import BaseController from './BaseController'
import deleteItem from '../../utils/deleteItem'


class SlideController extends BaseController {
    constructor(){
        super(SlideModel)   

   }

// @desc Get all notes 
// @route GET /notes
// @access public
 public selectAll = async (req:Request, res:Response) => {
    // Get all notes from MongoDB
    const slide = await SlideModel.find().lean()

    // If no notes 
    if (!slide?.length) {
        return res.status(400).json({ message: 'No slide found' })
    }

    // Add username to each note before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    // const slideWithUser = await Promise.all(slide.map(async (slide) => {
    //     const user = await User.findById(SlideModel.user).lean().exec()
    //     return { ...slide, username: user.username }
    // }))

    res.json(slide)
}

// @desc Create new slide
// @route POST /slide
// @access authorized user
 public create = async (req:Request, res:Response) => {
    const { title, description, body, status,cto_option, link, cto_text } = req.body
    const file = req.file!
    // Confirm data
    if (!body || !title || !status || !req.file) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title
    const duplicate = await SlideModel.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate slide title' })
    }
    var reqdata:any = { title,description,body,image:file.filename }
    const cto = {cto_text, link}
    if(cto_option) reqdata = {...reqdata,cto}    // Create and store the new user 
    const slide = await SlideModel.create(reqdata)

    if (slide) { // Created 
        return res.status(201).json({ message: 'New slide created' })
    } else {
        return res.status(400).json({ message: 'Invalid slide data received' })
    }

}

// @desc Update a slide
// @route PATCH /slide
// @access authorized user
public update = async (req:Request, res:Response) => {
    const {title, description,_id,status,body,cto_option, link, cto_text } = req.body
const image = req.file
console.log(req.body)
    // Confirm data
    if (!title || !description) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm slide exists to update
    const slide = await SlideModel.findById({_id}).exec()

    if (!slide) {
        return res.status(400).json({ message: 'slide not found' })
    }

    // Check for duplicate title
    const duplicate = await SlideModel.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    // Allow renaming of the original note 
    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate note title' })
    }

    slide.body = body
    slide.title = title
    if(cto_option) slide.cto = {link,cto_text}
    if(image){
       const destination = '../../../../public/slide'
       const oldFile = slide.image! 
       if(oldFile) deleteItem(destination,oldFile)
       slide.image = image.filename 
    } 
    slide.description = description
    slide.status = status

    const updatedSlide = await slide.save()

    res.json(`${updatedSlide.title} updated`)
}

// @desc Delete a slide
// @route DELETE /slide
// @access authorized user
public delete = async (req:Request, res:Response) => {
    const { _id } = req.body

    // Confirm data
    if (!_id) {
        return res.status(400).json({ message: 'Slide ID required' })
    }

    // Confirm slide exists to delete 
    const slide = await SlideModel.findById(_id).exec()

    if (!slide) {
        return res.status(400).json({ message: 'slide not found' })
    }

    const destination = '../../../../public/slide'

    const oldFile = slide.image! 
    if(oldFile) deleteItem(destination,oldFile)
     const result = await SlideModel.deleteOne({_id})

    res.status(200).json({message:"success"})
}

}

export default new SlideController();