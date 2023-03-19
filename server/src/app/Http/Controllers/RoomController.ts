import RoomModel from '../../Models/Room'
// import UserModel from '../../Models/User'
import {Request, Response} from 'express'
import BaseController from './BaseController'



class RoomController extends BaseController {
    constructor(){
        super(RoomModel)   

   }

// @desc Get all notes 
// @route GET /notes
// @access public
 public selectAll = async (req:Request, res:Response) => {
    // Get all notes from MongoDB
    const room = await RoomModel.find().lean()

    // If no notes 
    if (!room?.length) {
        return res.status(400).json({ message: 'No room found' })
    }

    // Add username to each note before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    // const roomWithUser = await Promise.all(room.map(async (room) => {
    //     const user = await User.findById(RoomModel.user).lean().exec()
    //     return { ...room, username: user.username }
    // }))

    res.json(room)
}

// @desc Create new room
// @route POST /room
// @access authorized user
 public create = async (req:Request, res:Response) => {
    const { title, description, body, status } = req.body
    const file = req.file!
    // Confirm data
    if (!body || !title || !status || !req.file) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title
    const duplicate = await RoomModel.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate room title' })
    }

    // Create and store the new user 
    const room = await RoomModel.create({ title,description,body,image:file.filename })

    if (room) { // Created 
        return res.status(201).json({ message: 'New room created' })
    } else {
        return res.status(400).json({ message: 'Invalid room data received' })
    }

}

// @desc Update a room
// @route PATCH /room
// @access authorized user
public update = async (req:Request, res:Response) => {
    const {title, description,_id,status,body } = req.body
const image = req?.file!
    // Confirm data
    if (!title || !description) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm room exists to update
    const room = await RoomModel.findById({_id}).exec()

    if (!room) {
        return res.status(400).json({ message: 'room not found' })
    }

    // Check for duplicate title
    const duplicate = await RoomModel.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    // Allow renaming of the original note 
    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate note title' })
    }

    room.body = body
    room.title = title
    if(image)room.image = image.filename
    
    room.description = description
    room.status = status

    const updatedRoom = await room.save()

    res.json(`'${updatedRoom.title}' updated`)
}

// @desc Delete a room
// @route DELETE /room
// @access authorized user
public delete = async (req:Request, res:Response) => {
    const { _id } = req.body

    // Confirm data
    if (!_id) {
        return res.status(400).json({ message: 'Room ID required' })
    }

    // Confirm room exists to delete 
    const room = await RoomModel.findById(_id).exec()

    if (!room) {
        return res.status(400).json({ message: 'room not found' })
    }

    const result = await RoomModel.deleteOne()

    res.status(200).json({message:"success"})
}

}

export default new RoomController();