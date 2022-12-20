import  express ,{Response,Request,NextFunction} from 'express';
const router = express.Router();
import path from 'path';
import AuthController from '../../Http/Controllers/AuthController';

router.route('/')
.get((req:Request, res:Response,next:NextFunction)=>AuthController.index(req, res))
.post((req:Request, res:Response,next:NextFunction)=>AuthController.login(req, res))
router.route('/login')
.get((req:Request, res:Response,next:NextFunction)=>AuthController.index(req, res))
.post((req:Request, res:Response,next:NextFunction)=>AuthController.login(req, res))

export default router;  