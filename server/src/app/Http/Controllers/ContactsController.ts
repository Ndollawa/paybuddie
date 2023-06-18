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
    const contacts = await ContactsModel.find().populate('contacts').exec()

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
 public addContact = async (req:Request, res:Response) => {
    const {userId, contactId } = req.body
    // Confirm data
    if (!userId || !contactId) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    if(contactId !== userId){
    // Create and store the new user contact
    const userContacts = await ContactsModel.findOne({user:userId}).exec()
    if (userContacts) {
        if(userContacts.contacts?.includes(contactId)) return res.status(200).json({message:'Contact already exist'})
    const newContact = await ContactsModel.findByIdAndUpdate({_id:userContacts?._id},{$addToSet:{contacts:contactId}},{new:true,upsert:true})
    } else {
     const newContact = await ContactsModel.create({user:userId, contacts:[contactId]})
    
    }
}
    res.status(200).json({message:'success'})
}
// @desc Update contacts
// @route POST /contacts
// @access authorized user
 public removeContact = async (req:Request, res:Response) => {
    const {userId, contactId } = req.body
    // Confirm data
    if (!userId || !contactId) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    // Create and store the new user contact
    const userContacts = await ContactsModel.findOne({user:userId}).lean().exec()
if(!userContacts) return res.sendStatus(404).json({message:'Not Found'})
    
        // const updatedContact = userContacts?.contacts?.filter(contact => contact !== contactId)
        const updatedContact = await ContactsModel.findByIdAndUpdate({_id:userContacts?._id},{$pull:{contacts:contactId}},{new:true,upsert:true})

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

    const result = await ContactsModel.deleteOne({_id})

    res.status(200).json({message:"success"})
}

}

export default new ContactsController();