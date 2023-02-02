import  UserModel from '../../Models/User';
import bcrypt from 'bcrypt';
// import {fileURLToPath} from 'url';
import { Request, Response } from 'express';
import BaseController from './BaseController';
// require('dotenv').config()
//  const __filename = fileURLToPath(import.meta.url);

        // 
        // const __dirname = path.dirname(__filename);
class UsersController extends BaseController{
    constructor(){
        super(UserModel)
        this.getAllUsers = this.getAllUsers.bind(this);
       

   }
// @desc Get all users
// @route GET /users
// @access Private
public getAllUsers = async (req:Request, res:Response) => {
    // Get all users from MongoDB
    const users = await UserModel.find().select('-password').lean()

    // If no users 
    if (!users?.length) {
        return res.status(200).json({ message: 'No users found' })
    }

    res.json(users)
}

// @desc Create new user
// @route POST /users
// @access Private
public createNewUser = async (req:Request, res:Response) => {
    const {email, username, password, roles } = req.body

    // Confirm data
    if (!email || !username || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate username
    const duplicate = await UserModel.findOne({ username } || {email}).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    // Hash password 
    const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

    const userObject = (!Array.isArray(roles) || !roles.length)
        ? { email, username, "password": hashedPwd }
        : { email, username, "password": hashedPwd, roles }

    // Create and store new user 
    const user = await UserModel.create(userObject)

    if (user) { //created 
        res.status(201).json({ message: `New user ${username} created` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
}

// @desc Update a user
// @route PATCH /users
// @access Private
public updateUser = async (req:Request, res:Response) => {
    const { id, username, roles, active, password } = req.body

    // Confirm data 
    if (!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
        return res.status(400).json({ message: 'All fields except password are required' })
    }

    // Does the user exist to update?
    const user = await UserModel.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    // Check for duplicate 
    const duplicate = await UserModel.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean().exec()

    // Allow updates to the original user 
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    user.username = username
    // user?.roles = roles
    user.accountStatus = 'active'

    if (password) {
        // Hash password 
        user.password = await bcrypt.hash(password, 10) // salt rounds 
    }

    const updatedUser = await user.save()

    res.json({ message: `${updatedUser.username} updated` })
}

// @desc Delete a user
// @route DELETE /users
// @access Private
public deleteUser = async (req:Request, res:Response) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'User ID Required' })
    }

    // // Does the user still have assigned notes?
    // const note = await Note.findOne({ user: id }).lean().exec()
    // if (note) {
    //     return res.status(400).json({ message: 'User has assigned notes' })
    // }

    // Does the user exist to delete?
    const user = await UserModel.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const result = await user.deleteOne()

    const reply = `Username ${result.username} with ID ${result._id} deleted`

    res.json(reply)
}

}
export default new UsersController()



//   const upload = multer({ dest: path.join(__dirname, 'uploads') }); 
//   // Set configuration options 
//   const uploadPath = path.join(__dirname, 'uploads'); 
//   const acceptedFileTypes = ["image/jpg", "image/gif"];
//    const acceptedFileSize = 10;
//    // 10 MB // Create new file upload object 
//    const fileUpload = new FileUpload(uploadPath, acceptedFileTypes, acceptedFileSize);
//     // Set the route 
//     app.post('/upload', upload.single('uploadedFile'), fileUpload.multerErrorHandler, fileUpload.uploadFile);
    