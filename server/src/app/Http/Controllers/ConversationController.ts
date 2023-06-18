import  ConversationModel from '../../Models/Conversation';
import bcrypt from 'bcrypt';
// import {fileURLToPath} from 'url';
import { Request, Response } from 'express';
import BaseController from './BaseController';

class ConversationController extends BaseController{
    constructor(){
        super(ConversationModel)   

   }
// @desc Get all conversation
// @route GET /conversation
// @access Private
public list = async (req:Request, res:Response) => {
    // Get all conversation from MongoDB
    const conversation = await ConversationModel.find().lean()

    // If no conversation 
    if (!conversation?.length) {
        return res.status(200).json({ message: 'No conversation found' })
    }

    res.json(conversation)
}

// @desc Create new conversation
// @route POST /conversation
// @access Private
public create = async (req:Request, res:Response) => {
    const {email, conversationname, password, roles } = req.body

    // Confirm data
    if (!email || !conversationname || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate conversationname
    const duplicate = await ConversationModel.findOne({ conversationname } || {email}).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate conversationname' })
    }

    // Hash password 
    const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

    const conversationObject = (!Array.isArray(roles) || !roles.length)
        ? { email, conversationname, "password": hashedPwd }
        : { email, conversationname, "password": hashedPwd, roles }

    // Create and store new conversation 
    const conversation = await ConversationModel.create(conversationObject)

    if (conversation) { //created 
        res.status(201).json({ message: `New conversation ${conversationname} created` })
    } else {
        res.status(400).json({ message: 'Invalid conversation data received' })
    }
}

// @desc Update a conversation
// @route PATCH /conversation
// @access Private
public update = async (req:Request, res:Response) => {
    const { _id,type, data } = req.body
    console.log(req.body)
switch (type) {
    case 'passwordUpdate':
        const {password} = req.body
        // Hash password 
        const hashedPwd = await bcrypt.hash(password, 10) // salt rounds
        await ConversationModel.findByIdAndUpdate(_id,{password:hashedPwd},{new:true})
        res.status(200).json({message:'success'})   
        break;
    case 'profileUpdate':
        await ConversationModel.findByIdAndUpdate(_id,data,{new:true})
        res.status(200).json({message:'success'})
        break;

    default:
        res.status(400).json({message:'Bad Request'})
        break;
}
   
}

// @desc Update a conversation
// @route PATCH /conversation
// @access Private
public uploadConversationImage = async (req:Request, res:Response) => {
    const { _id,type, data } = req.body
    console.log(req.files)
    console.log(req.body)
switch (type) {
    case 'passwordUpdate':
        const {password} = req.body
        // Hash password 
        const hashedPwd = await bcrypt.hash(password, 10) // salt rounds
        await ConversationModel.findByIdAndUpdate(_id,{password:hashedPwd},{new:true})
        res.status(200).json({message:'success'})   
        break;
    case 'profileUpdate':
        await ConversationModel.findByIdAndUpdate(_id,data,{new:true})
        res.status(200).json({message:'success'})
        break;

    default:
        res.status(400).json({message:'Bad Request'})
        break;
}
   
}

// @desc Delete a conversation
// @route DELETE /conversation
// @access Private
public delete = async (req:Request, res:Response) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Conversation ID Required' })
    }

    // // Does the conversation still have assigned notes?
    // const note = await Note.findOne({ conversation: id }).lean().exec()
    // if (note) {
    //     return res.status(400).json({ message: 'Conversation has assigned notes' })
    // }

    // Does the conversation exist to delete?
    const conversation = await ConversationModel.findById(id).exec()

    if (!conversation) {
        return res.status(400).json({ message: 'Conversation not found' })
    }

    const result = await ConversationModel.deleteOne({_id})

    const reply = `Conversationname ${result.conversationname} with ID ${result._id} deleted`

    res.json(reply)
}

}
export default new ConversationController()



//   const upload = multer({ dest: path.join(__dirname, 'uploads') }); 
//   // Set configuration options 
//   const uploadPath = path.join(__dirname, 'uploads'); 
//   const acceptedFileTypes = ["image/jpg", "image/gif"];
//    const acceptedFileSize = 10;
//    // 10 MB // Create new file upload object 
//    const fileUpload = new FileUpload(uploadPath, acceptedFileTypes, acceptedFileSize);
//     // Set the route 
//     app.post('/upload', upload.single('uploadedFile'), fileUpload.multerErrorHandler, fileUpload.uploadFile);
    