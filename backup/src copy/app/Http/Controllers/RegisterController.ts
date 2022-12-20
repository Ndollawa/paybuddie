import  UserModel from '../../Models/User';
import  bcrypt from 'bcrypt';
import path from 'path';
import {fileURLToPath} from 'url';
import { MRequest, MResponse } from '../../../interfaces/interfaces';
// require('dotenv').config()
 const __filename = fileURLToPath(import.meta.url);

        // 
        const __dirname = path.dirname(__filename);
class RegisterController{
    constructor(){
        this.index = this.index.bind(this);
       

   }
index = (req:Request, res:Response)=>{

    res.render(path.join(__dirname,'../','views','register.ejs'));
}
    // handles user registration
register = async (req:MRequest, res:MResponse)=>{
    const {first_name, last_name, user_email, password, username} = req.body;
    if(!user_email || !password)return res.status(400).json({'message': 'Email and password are required!'});

    //check for duplicate emails in the DB
    const duplicate = await UserModel.findOne({email:user_email}).exec();
    if(duplicate)return res.sendStatus(409);// conflict
    try{

        //encrypt password
        const hashedPassword = await bcrypt.hash(password,10);

        // create and save new User
        const newUser = await UserModel.create({
            "first_name":first_name,
            "last_name":last_name,
            'email': user_email,
            'username' : username,
            // 'roles':{'Registeror':3},
            'password':hashedPassword});
        // userDB.
        res.status(201).json({'message':   `New user ${user_email} created!`});
    }catch(err:any){
        res.status(500).json({'message': err.message});
    }
}


checkDuplicate = async (req, res)=>{
    const username = req?.body?.username;
    const email = req?.body?.email ;
   if(username) {
    console.log(username)
    // if(!username)return res.status(400).json({'message': 'Email and password are required!'});

    //check for duplicate username in the DB
    const duplicate = await UserModel.findOne({username}).exec();
    if(duplicate)return res.status(409).json({'message':  "taken"});// conflict
   }else if(email){
    if(!email)return res.status(400).json({'message': 'E!'});

    //check for duplicate emails in the DB
    const duplicate = await UserModel.findOne({email}).exec();
    if(duplicate)return res.status(409).json({'message':  "taken"});// conflict
   }
        
    
}


}

export default new RegisterController();