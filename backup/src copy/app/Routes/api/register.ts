import  express,{Response,Request,NextFunction} from 'express';
const router = express.Router();
import path from 'path';
import { MRequest, MResponse } from '../../../interfaces/interfaces';
import RegisterController  from '../../Http/Controllers/RegisterController';

router.route('/')
.get((req:MRequest, res:MResponse,next:NextFunction)=>RegisterController.index(req, res))
.post((req:MRequest, res:MResponse,next:NextFunction)=>RegisterController.register(req, res))

export default router;  