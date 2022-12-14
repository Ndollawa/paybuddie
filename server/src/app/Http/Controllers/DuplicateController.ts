import  UserModel from '../../Models/User.js';
import  bcrypt from 'bcrypt';
import path from 'path';
import { MRequest, MResponse } from '../../../interfaces/interfaces.js';
import {fileURLToPath} from 'url';
// require('dotenv').config()
 const __filename = fileURLToPath(import.meta.url);

        // 
        const __dirname = path.dirname(__filename);

const checkDuplicate = async (req:MRequest, res:MResponse)=>{
    const username = req?.body?.username;
    const email = req?.body?.email ;
   if(username) {
    //check for duplicate username in the DB
    try{

        const duplicate = await UserModel.findOne({username:username}).exec();
            console.log(username)
            if(duplicate){return res.status(409).json({'message':  "taken"});// conflict
        }else{
            return res.status(200).json({'message':  "available"})
        }
    }catch(err){
      return res.status(500).json({'error':  err})  
    }
    
    
   }else if(email){
try{
 //check for duplicate emails in the DB
            const duplicate = await UserModel.findOne({email}).exec();
            if(duplicate){return res.status(409).json({'message':  "taken"});// conflict
        }else{
            return res.status(200).json({'message':  "available"})
        }
    }catch(err){
        return res.status(500).json({'error':  err})  
    }
   
   }
    
}




export default checkDuplicate;