import ContactsModel from '../../Models/Contacts'
// import UserModel from '../../Models/User'
import {Request, Response} from 'express'
import BaseController from './BaseController'



class ContactsController extends BaseController {
    constructor(){
        super(ContactsModel)   

   }

// @desc Get all notes 
// @route GET /notes
// @access public
 public selectAll = async (req:Request, res:Response) => {
    // Get all notes from MongoDB
    const contacts = await ContactsModel.find().lean()

    // If no notes 
    if (!contacts?.length) {
        return res.status(400).json({ message: 'No contacts found' })
    }

    // Add username to each note before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    // const contactsWithUser = await Promise.all(contacts.map(async (contacts) => {
    //     const user = await User.findById(ContactsModel.user).lean().exec()
    //     return { ...contacts, username: user.username }
    // }))

    res.json(contacts)
}

// @desc Create new contacts
// @route POST /contacts
// @access authorized user
 public create = async (req:Request, res:Response) => {
    const { email, firstName, lastName, phone, bio, status } = req.body
    const file = req.file!
    // Confirm data
    if (!email || !firstName || !lastName || !bio || !status || !req.file) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const userObj = {...req.body,userImage:file}
    // Create and store the new user 
    const contacts = await ContactsModel.create(userObj)

    if (contacts) { // Created 
        return res.status(201).json({ message: 'New contacts Memeber created' })
    } else {
        return res.status(400).json({ message: 'Invalid contacts member data received' })
    }

}

// @desc Update a contacts
// @route PATCH /contacts
// @access authorized user
public update = async (req:Request, res:Response) => {
    const { email, firstName, lastName, phone, bio, status ,_id} = req.body
    const file = req.file!
    // Confirm data
    if (!email || !firstName || !lastName || !bio || !status || !req.file) {
        return res.status(400).json({ message: 'All fields are required' })
    }
  const userObj = file?  {...req.body,userImage:file}: {...req.body}
    // Confirm contacts exists to update
    const contacts = await ContactsModel.findByIdAndUpdate(_id,userObj,{new:true})

    if (!contacts) {
        return res.status(400).json({ message: 'Contacts member not found' })
    }


    res.status(200).json({message:'success'})
}

// @desc Delete a contacts
// @route DELETE /contacts
// @access authorized user
public delete = async (req:Request, res:Response) => {
    const { _id } = req.body

    // Confirm data
    if (!_id) {
        return res.status(400).json({ message: 'Contacts ID required' })
    }

    // Confirm contacts exists to delete 
    const contacts = await ContactsModel.findById(_id).exec()

    if (!contacts) {
        return res.status(400).json({ message: 'Contacts member not found' })
    }

    const result = await ContactsModel.deleteOne()

    res.status(200).json({message:"success"})
}

}

export default new ContactsController();