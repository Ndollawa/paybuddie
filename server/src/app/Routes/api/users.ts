import express, {Request,Response , NextFunction } from 'express';
const router = express.Router();
import path  from 'path';
import ROLES_LIST  from '../../../config/roleList';
import verifyRoles  from '../../Http/Middleware/verifyRoles';
import UsersController from '../../Http/Controllers/UsersController';






router.route('/')
.get((req:Request, res:Response, next:NextFunction) => UsersController.list(req,res))
.post((req:Request, res:Response, next:NextFunction) => UsersController.create(req,res))
.patch((req:Request, res:Response, next:NextFunction) => UsersController.update(req,res))
.delete((req:Request, res:Response, next:NextFunction) => UsersController.delete(req,res))


router.route('/:id')
.get((req, res, next) => UsersController.read(req, res, next))
// .post(verifyJWT, verifyRoles(ROLES_LIST.ADMIN), (req:Request, res:Response, next:NextFunction) => PostHandler.update(req, res))
// .put(verifyJWT, verifyRoles(ROLES_LIST.ADMIN), (req:Request, res:Response, next:NextFunction) => PostHandler.update(req, res))
// .delete(verifyJWT, verifyRoles(ROLES_LIST.ADMIN), (req:Request, res:Response, next:NextFunction) => PostHandler.delete(req, res))


export default router; 

