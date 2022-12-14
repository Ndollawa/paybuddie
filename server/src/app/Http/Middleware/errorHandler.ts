  import { logEvents } from './logEvents.js';
import { MRequest,MResponse } from '../../../interfaces/interfaces.js';
import { NextFunction } from 'express';

const errorHandler = (err:any, req:MRequest, res:MResponse, next:NextFunction) =>{
logEvents(`${err.name}: ${err.messsage}`, 'errLog.txt');
console.error(err.stack)
res.status(500).send(err.message);

}

export default errorHandler;
