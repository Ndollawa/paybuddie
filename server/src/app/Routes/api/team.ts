import express, {Request,Response , NextFunction } from 'express';
const router = express.Router();
import path  from 'path';
import ROLES_LIST  from '../../../config/roleList';
import verifyRoles  from '../../Http/Middleware/verifyRoles';
import TeamController from '../../Http/Controllers/TeamController';
import useMulter from '../../utils/useMulter';
import verifyJWT from '../../Http/Middleware/verifyJWT';

const upload = useMulter('team')



router.route('/')
.get((req:Request, res:Response, next:NextFunction) => TeamController.list(req,res,next))
.post(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV),upload.single('upload'),(req:Request, res:Response, next:NextFunction) => TeamController.create(req,res))
.patch(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV),upload.single('upload'),(req:Request, res:Response, next:NextFunction) => TeamController.update(req,res))
.put(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV),upload.single('upload'),(req:Request, res:Response, next:NextFunction) => TeamController.update(req,res))
.delete(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV),(req:Request, res:Response, next:NextFunction) => TeamController.delete(req,res))
export default router; 

