import express, {Request,Response , NextFunction } from 'express';
const router = express.Router();
import path  from 'path';
import ROLES_LIST  from '../../../config/roleList';
import verifyRoles  from '../../Http/Middleware/verifyRoles';
import UsersController from '../../Http/Controllers/UsersController';






router.route('/')
.get((req:Request, res:Response, next:NextFunction) => UsersController.list(req,res,next))
// .post((req:Request, res:Response, next:NextFunction) => UsersController.create(req,res))
// .put((req:Request, res:Response, next:NextFunction) => UsersController.update(req,res))
// .delete((req:Request, res:Response, next:NextFunction) => UsersController.delete(req,res))
export default router; 

