import dotenv from 'dotenv';
import express, { Application } from "express";
// import fileUpload from 'express-fileupload';
import { Server,createServer } from "http"; 
import socketIO, { Server as SocketIOServer, Socket } from "socket.io";  
import path from 'path';
import cors from 'cors';
import  'express-async-errors';
import { logger } from './src/app/Http/Middleware/logEvents';
import errorHandler from './src/app/Http/Middleware/errorHandler';
import corsOptions from './src/config/corsOptions';
import verifyJWT from './src/app/Http/Middleware/verifyJWT';
import cookieParser from 'cookie-parser';
import credentials from './src/app/Http/Middleware/credentials';
import mongoose from 'mongoose';
import connectDB from './src/config/dbConn';
import SettingsRoutes from './src/app/Routes/api/settings'
import FaqRoutes from './src/app/Routes/api/faq';
import SlideRoutes from './src/app/Routes/api/slide';
import ServiceRoutes from './src/app/Routes/api/service';
import RoomRoutes from './src/app/Routes/api/room';
import ContactsRoutes from './src/app/Routes/api/contacts';
import UserRoutes from './src/app/Routes/api/users';
import MessageRoutes from './src/app/Routes/api/messages';
import ConversationRoutes from './src/app/Routes/api/conversations';
import MessageModel from './src/app/Models/Message';
import UserModel from './src/app/Models/User';
import ConversationModel from './src/app/Models/Conversation';
import AuthRoutes from './src/app/Routes/api/auth';
import TeamRoutes from './src/app/Routes/api/team';
import PostRoutes from './src/app/Routes/api/post';
import CategoryRoutes from './src/app/Routes/api/postcategory';
// import  PostModel from './src/app/Models/Post';
import CheckDuplicateRoutes from './src/app/Http/Controllers/DuplicateController';
import { Seed } from './src/app/Seeders/Seeder';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


dotenv.config(); 

// connect to Database
connectDB();

const app:Application = express();
const PORT:string |number | undefined = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

//Handle file uploads
// app.use(fileUpload({ createParentPath: true }));

//Handle credentials check before cors
app.use(credentials);


//Cross origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencodedn data
//in other words, form data
//content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());
//set view engine to ejs
// app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.static(path.join(__dirname, '/public/uploads')));
///routes

//server static files
// app.get("^/$|/index(.html)?", (req, res, next)=>{

//     res.render(path.join(__dirname,'views','index'), {} );
// });
// app.post("^/$|/index(.html)?", (req, res, next)=>{
// console.log(req)
//     res.send(JSON.stringify(req))
// });

// const server = new Server(app); 
const server = createServer(app); 
const io = new SocketIOServer(server,{
    cors:{
        origin:'*',
        methods: ['GET','POST']
    }
    });
    type connectedUser = {userId:string;socketId:string}
    let users:connectedUser[] = []
    const addUser = (userId:string,socketId:string) =>{
        !users.some((user:connectedUser)=>user.userId === userId) && users.push({userId,socketId})
    }
    const removeUser = (socketId:string) =>{
    users = users.filter(user => user.socketId !== socketId)
    }

 //Handle private chat 
 io.on("connection", (socket:Socket) => {
    socket.on('addUser',userId=>{
        addUser(userId,socket.id)
        socket.emit('activeUsers',users)
        //  console.log(users)
    })
    socket.on('userActivity',async({_id,online})=>{
            await UserModel.findByIdAndUpdate(_id,{online},{new:true})      
        // socket.emit('activeUsers',users)
        //  console.log(online)
    })
     socket.on("sendMessage", async(data,res) => { 
        const { sender, receiver, message } = data;
let conversation;
         conversation = await ConversationModel.findOne({members:{$all:[sender,receiver]}}).exec()
        if(!conversation){
        conversation = await ConversationModel.create({members:[sender,receiver]}) 
        } 
        const sendMsg = await MessageModel.create({sender,message,conversationId:conversation?._id})
        // sendMsg.save()
        const user = users.find(user => user.userId === receiver)
       user && io.to(user?.socketId).emit("receivedMessage",sendMsg);
        res(null,sendMsg) 
            }); 

    //Handle group chat 
    socket.on("joinGroup", (groupName:string) => { 
        socket.join(groupName);
         socket.on("groupMessage", (message) => {
             io.to(groupName).emit("groupMessage", message); 
            });
         });
    socket.on('disconnect',()=>{
removeUser(socket.id)
socket.emit('activeUsers',users)
    })
        });
        

    //Start the server 
    server.listen(3501, () => { console.log(`Realtime Server listening on port 3501`);
 })
  
app.use('/checkduplicate', CheckDuplicateRoutes);
app.use('/auth',AuthRoutes);
app.use('/slides', SlideRoutes);
app.use('/users', UserRoutes);
app.use('/faqs', FaqRoutes);
app.use('/posts', PostRoutes);
app.use('/categories', CategoryRoutes);
app.use('/services', ServiceRoutes);
app.use('/teams', TeamRoutes);
app.use('/settings', SettingsRoutes);

// //post routes
// app.use('/post', PostRoutes);


//user routes

app.use(verifyJWT);
app.use('/messages', MessageRoutes);
app.use('/conversations', ConversationRoutes);
app.use('/contacts', ContactsRoutes);
app.use('/rooms', RoomRoutes);
app.all('*',(req,res)=>{
    res.status(404).json({message: 'Resource not Found!'});
});

// custom middleware for handling errors
app.use(errorHandler);

mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB');
    // Seed();
    app.listen(PORT, ()=>console.log(`Server running on Port ${PORT}`));

});
