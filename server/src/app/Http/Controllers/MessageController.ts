import  MessageModel from '../../Models/Message';
import bcrypt from 'bcrypt';
// import {fileURLToPath} from 'url';
import { Request, Response } from 'express';
import BaseController from './BaseController';
import ConversationModel from '../../Models/Conversation';

class MessageController extends BaseController{
    constructor(){
        super(MessageModel)   

   }
// @desc Get all message
// @route GET /message
// @access Private
public list = async (req:Request, res:Response) => {
    // Get all message from MongoDB
    const message = await MessageModel.find().lean()

    // If no message 
    if (!message?.length) {
        return res.status(200).json({ message: 'No message found' })
    }

    res.json(message)
}

// @desc Create new message
// @route POST /message
// @access Private
public create = async (req:Request, res:Response) => {
    const { sender, receiver, message } = req.body;
    console.log(req.body)
let conversation;
     conversation = await ConversationModel.findOne({members:[sender,receiver]}).exec()
    if(!conversation){
    conversation = await ConversationModel.create({members:[sender,receiver]}) 
    } 
   
    const sendMsg = await MessageModel.create({sender,receiver,message,conversationId:conversation._id})
    if (message)  res.status(200).send(sendMsg)
        
   
}


// @desc Update a message
// @route PATCH /message
// @access Private
public uploadMessageImage = async (req:Request, res:Response) => {
    const { _id,type, data } = req.body
    console.log(req.files)
    console.log(req.body)
switch (type) {
    case 'passwordUpdate':
        const {password} = req.body
        // Hash password 
        const hashedPwd = await bcrypt.hash(password, 10) // salt rounds
        await MessageModel.findByIdAndUpdate(_id,{password:hashedPwd},{new:true})
        res.status(200).json({message:'success'})   
        break;
    case 'profileUpdate':
        await MessageModel.findByIdAndUpdate(_id,data,{new:true})
        res.status(200).json({message:'success'})
        break;

    default:
        res.status(400).json({message:'Bad Request'})
        break;
}
   
}

// @desc Delete a message
// @route DELETE /message
// @access Private
public delete = async (req:Request, res:Response) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Message ID Required' })
    }

    // // Does the message still have assigned notes?
    // const note = await Note.findOne({ message: id }).lean().exec()
    // if (note) {
    //     return res.status(400).json({ message: 'Message has assigned notes' })
    // }

    // Does the message exist to delete?
    const message = await MessageModel.findById(id).exec()

    if (!message) {
        return res.status(400).json({ message: 'Message not found' })
    }

    const result = await message.deleteOne()

    const reply = `Messagename ${result.messagename} with ID ${result._id} deleted`

    res.json(reply)
}

}
export default new MessageController()



//   const upload = multer({ dest: path.join(__dirname, 'uploads') }); 
//   // Set configuration options 
//   const uploadPath = path.join(__dirname, 'uploads'); 
//   const acceptedFileTypes = ["image/jpg", "image/gif"];
//    const acceptedFileSize = 10;
//    // 10 MB // Create new file upload object 
//    const fileUpload = new FileUpload(uploadPath, acceptedFileTypes, acceptedFileSize);
//     // Set the route 
//     app.post('/upload', upload.single('uploadedFile'), fileUpload.multerErrorHandler, fileUpload.uploadFile);
    