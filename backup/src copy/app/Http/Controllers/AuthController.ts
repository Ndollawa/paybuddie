import  UserModel from '../models/User.js';
import  bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import path from 'path';
import {fileURLToPath} from 'url';
// require('dotenv').config()
  const __filename = fileURLToPath(import.meta.url);

        // 
        const __dirname = path.dirname(__filename);

  
class AuthController{
    constructor(){
        this.index = this.index.bind(this);
      
    // handles form
 }
   index =(req, res)=>{
    res.render(path.join(__dirname,'../','views','login.ejs'));
   }
    //hanles user login
    login = async (req, res)=>{
        const cookies = req.cookies;
        const {user, password} = req.body;
        console.log(user)
    if(!user || !password)return res.status(400).json({'message': 'Email and password are required!'});

    //check for user  in the DB || username:username

    const foundUser = await UserModel.findOne({email:user}).exec();
    console.log(foundUser)
    if(!foundUser)return res.sendStatus(401);// unauthorized
    try{

        //evaluate password
        const match = await bcrypt.compare(password,foundUser.password);
        if(match){
            //create JWTs
            const roles = Object.values(foundUser.roles);
            const accessToken = jwt.sign(
                {
                    'userInfo':{

                        'user':foundUser._id,
                        'userEmail':foundUser.email, 
                        'username':foundUser.username,
                        'roles':roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '3m'}
            );
            const newRefreshToken = jwt.sign(
                {'userEmail':foundUser.email},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn:'15m'}
            );

            const newRefeshTokenArray = !cookies?.jwt
                        ?foundUser.refreshToken 
                        : foundUser.refreshToken.filter(rt =>rt !== cookies.jwt);
      

             if(cookies.jwt) res.cookie('jwt', newRefreshToken,{httpOnly:true, secure:true, sameSite:'None', maxAge: 24
             *60*60*7});


                //save refresh token of current user 
                foundUser.refreshToken = [...newRefeshTokenArray,newRefreshToken];
                const result = await foundUser.save() 
                
            res.cookie('jwt', newRefreshToken,{httpOnly:true, secure:true, sameSite:'None', maxAge: 24
            *60*60*7});
            res.json({accessToken})

        // res.status(201).json({'success':   `User ${user_email?.username} logged in!`
        // })
    } else{
            res.sendStatus(401);
        }
      
    }catch(err){
        res.status(500).json({'message': err.message});
    }
}
logout = async (req, res)=>{
    const cookies = req.cookies;
    if(!cookies?.jwt)return res.sendStatus(401);

    //on logout delete access token
    const foundUser = await UserModel.findOne({refreshToken}).exec();
    if(!foundUser)return res.sendStatus(204);// unauthorized
    res.clearCookie('jwt',{httpOnly:true, secure:true, sameSite:'None' })   
  
    
   //delete refresh token from DB
    foundUser.refreshToken =  foundUser.refreshToken.filter(rt =>rt !== refreshToken);
    ;
    const result = await foundUser.save();

}
refreshTokenHandler = async (req, res)=>{
    const cookies = req.cookies;
    if(!cookies?.jwt)return res.sendStatus(401);
    const refreshToken = cookies.jwt;
   res.clearCookie('jwt',{httpOnly:true, secure:true, sameSite:'None' })   
    //check for user  in the DB

    const foundUser = await UserModel.findOne({refreshToken}).exec();
   
   
    // Detect refresh token reuse! (Hacked token)
    if(!foundUser){
       jwt.verify(
        refreshToken,
        process.env.ACCESS_TOKEN_SECRET,
       async (err, decodedToken)=>{
        // delete all tokens on reuse
            if(err) return res.sendStatus(403); //Forbidden
            const hackedUser = await UserModel.findOne({email:decodedToken.userEmail}).exec();
            hackedUser.refreshToken = [];
            const result = await hackedUser.save();

        })
        return res.sendStatus(403);// Forbidden
       

    }

    const newRefeshTokenArray = foundUser.refreshToken.filter(rt =>rt !== refreshToken);
        //evaluate jwt


       jwt.verify(
        refreshToken,
        process.env.ACCESS_TOKEN_SECRET,
       async  (err, decodedToken)=>{

        if(err){
            foundUser.refreshToken = [...newRefeshTokenArray];
            const result = await foundUser.save();
        }
            if(err || foundUser.email !== decodedToken.userEmail) return res.sendStatus(403);// forbidden
            const roles = Object.values(foundUser.roles);
            const accessToken =jwt.sign(
                {
                    "userInfo":{
                        'user':decodedToken.user,
                        'userEmail':decodedToken.userEmail, 
                        'username':decodedToken.username, 
                        'roles':roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '3m'}
            )

            const newRefreshToken = jwt.sign(
                {'userEmail':foundUser.email},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn:'15m'}
            );
                //save refresh token of current user 
                foundUser.refreshToken = [...newRefeshTokenArray,newRefreshToken];
                const result = await foundUser.save();

                res.cookie('jwt', newRefreshToken,{httpOnly:true, secure:true, sameSite:'None', maxAge: 24
                *60*60*7});
                res.json({accessToken})
        }
        );
        
}

}

export default new AuthController();