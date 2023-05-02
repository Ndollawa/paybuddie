import express, {Request,Response , NextFunction } from 'express';
const router = express.Router();
import ROLES_LIST  from '../../../config/roleList';
import verifyRoles  from '../../Http/Middleware/verifyRoles';
import ServiceController from '../../Http/Controllers/ServiceController';
import useMulter from '../../utils/useMulter';
import verifyJWT from '../../Http/Middleware/verifyJWT';

const upload = useMulter('service')



router.route('/')
.get((req:Request, res:Response, next:NextFunction) => ServiceController.list(req,res,next))
.post(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV),upload.single('upload'),(req:Request, res:Response, next:NextFunction) => ServiceController.create(req,res))
.put(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV),upload.single('upload'),(req:Request, res:Response, next:NextFunction) => ServiceController.update(req,res))
.patch(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV),upload.single('upload'),(req:Request, res:Response, next:NextFunction) => ServiceController.update(req,res))
.delete(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV),(req:Request, res:Response, next:NextFunction) => ServiceController.delete(req,res))
export default router; 

