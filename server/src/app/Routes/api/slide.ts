import express, {Request,Response , NextFunction } from 'express';
const router = express.Router();
import path  from 'path';
import ROLES_LIST  from '../../../config/roleList';
import verifyRoles  from '../../Http/Middleware/verifyRoles';
import SlideController from '../../Http/Controllers/SlideController';
import useMulter from '../../utils/useMulter';
import verifyJWT from '../../Http/Middleware/verifyJWT';

const upload = useMulter('slide')



router.route('/')
.get((req:Request, res:Response, next:NextFunction) => SlideController.list(req,res,next))
.post(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV),upload.single('slideBg'),(req:Request, res:Response, next:NextFunction) => SlideController.create(req,res))
.put(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV),upload.single('slideBg'),(req:Request, res:Response, next:NextFunction) => SlideController.update(req,res))
.patch(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV),upload.single('slideBg'),(req:Request, res:Response, next:NextFunction) => SlideController.update(req,res))
.delete(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV),(req:Request, res:Response, next:NextFunction) => SlideController.delete(req,res));

router.route('/update').post(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV),(req:Request, res:Response, next:NextFunction) => SlideController.update(req,res))

export default router; 

