import ServiceModel from '../../Models/Service'
// import UserModel from '../../Models/User'
import {Request, Response} from 'express'
import BaseController from './BaseController'
import deleteItem from '../../utils/deleteItem'


class ServiceController extends BaseController {
    constructor(){
        super(ServiceModel)   

   }

// @desc Get all notes 
// @route GET /notes
// @access public
 public selectAll = async (req:Request, res:Response) => {
    // Get all notes from MongoDB
    const service = await ServiceModel.find().lean()

    // If no notes 
    if (!service?.length) {
        return res.status(400).json({ message: 'No service found' })
    }

    // Add username to each note before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    // const serviceWithUser = await Promise.all(service.map(async (service) => {
    //     const user = await User.findById(ServiceModel.user).lean().exec()
    //     return { ...service, username: user.username }
    // }))

    res.json(service)
}

// @desc Create new service
// @route POST /service
// @access authorized user
 public create = async (req:Request, res:Response) => {
    const { title, description,icon, body, status } = req.body
    const file = req.file!
    // Confirm data
    if (!body || !title || !status || !req.file) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title
    const duplicate = await ServiceModel.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate service title' })
    }

    // Create and store the new user 
    const service = await ServiceModel.create({ title,description,body,icon,image:file.filename })

    if (service) { // Created 
        return res.status(201).json({ message: 'New service created' })
    } else {
        return res.status(400).json({ message: 'Invalid service data received' })
    }

}

// @desc Update a service
// @route PATCH /service
// @access authorized user
public update = async (req:Request, res:Response) => {
    const {title, description,_id,status,body,icon } = req.body
const image = req?.file!
    // Confirm data
    if (!title || !description) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm service exists to update
    const service = await ServiceModel.findById({_id}).exec()

    if (!service) {
        return res.status(400).json({ message: 'Service not found' })
    }

    // Check for duplicate title
    const duplicate = await ServiceModel.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    // Allow renaming of the original note 
    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate Service title' })
    }

    service.body = body
    service.title = title
    if(image){
        const destination = '../../../../public/service'
        const oldFile = service.image! 
        if(oldFile) deleteItem(destination,oldFile)
        service.image = image.filename}
    
    service.description = description
    service.status = status
    service.icon = icon

    const updatedService = await service.save()

    res.json(`'${updatedService.title}' updated`)
}

// @desc Delete a service
// @route DELETE /service
// @access authorized user
public delete = async (req:Request, res:Response) => {
    const { _id } = req.body

    // Confirm data
    if (!_id) {
        return res.status(400).json({ message: 'Service ID required' })
    }

    // Confirm service exists to delete 
    const service = await ServiceModel.findById(_id).exec()

    if (!service) {
        return res.status(400).json({ message: 'service not found' })
    }
    const destination = '../../../../public/service'
    const oldFile = service.image! 
    if(oldFile) deleteItem(destination,oldFile)
    const result = await ServiceModel.deleteOne({_id})

    res.status(200).json({message:"success"})
}

}

export default new ServiceController();