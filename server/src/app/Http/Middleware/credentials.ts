import { NextFunction } from 'express';
import allowedOrigins from '../../../config/allowedOrigins.js';
import { MRequest, MResponse } from '../../../interfaces/interfaces.js';



const credentials = (req:MRequest, res:MResponse, next:NextFunction)=>{
    const origin = req.headers.origin;
    if(allowedOrigins.includes(origin!)){
        res.header('Access-Control-Allow-Credentials', 'true');

    }
    next();
}

export default credentials;
