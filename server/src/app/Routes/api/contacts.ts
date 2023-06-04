import express, {Request,Response , NextFunction } from 'express';
const router = express.Router();
import ROLES_LIST  from '../../../config/roleList';
import verifyRoles  from '../../Http/Middleware/verifyRoles';
import ContactsController from '../../Http/Controllers/ContactsController';
import verifyJWT from '../../Http/Middleware/verifyJWT';



router.route('/')
.get(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF),(req:Request, res:Response, next:NextFunction) => ContactsController.list(req,res,next))
.post(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF),(req:Request, res:Response, next:NextFunction) => ContactsController.addContact(req,res))
.patch(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF),(req:Request, res:Response, next:NextFunction) => ContactsController.removeContact(req,res))
.put(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF),(req:Request, res:Response, next:NextFunction) => ContactsController.removeContact(req,res))
.delete(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF),(req:Request, res:Response, next:NextFunction) => ContactsController.delete(req,res))
export default router; 

