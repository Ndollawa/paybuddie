import express, {Request,Response , NextFunction } from 'express';
const router = express.Router();
import path  from 'path';
import ROLES_LIST  from '../../../config/roleList';
import verifyRoles  from '../../Http/Middleware/verifyRoles';
import ConversationController from '../../Http/Controllers/ConversationController';
import verifyJWT from '../../Http/Middleware/verifyJWT';





router.route('/')
.get(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF),(req:Request, res:Response, next:NextFunction) => ConversationController.list(req,res))
.post(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF),(req:Request, res:Response, next:NextFunction) => ConversationController.create(req,res))
.put(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF),(req:Request, res:Response, next:NextFunction) => ConversationController.update(req,res))
.patch(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF),(req:Request, res:Response, next:NextFunction) => ConversationController.update(req,res))
.delete(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF),(req:Request, res:Response, next:NextFunction) => ConversationController.delete(req,res))


router.route('/:id')
.get((req, res, next) => ConversationController.read(req, res, next))
// .post(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF), (req:Request, res:Response, next:NextFunction) => PostHandler.update(req, res))
// .put(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF), (req:Request, res:Response, next:NextFunction) => PostHandler.update(req, res))
// .delete(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF), (req:Request, res:Response, next:NextFunction) => PostHandler.delete(req, res))
router.route('/uploads')
.get((req, res, next) => ConversationController.read(req, res, next))
// .post(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF), (req:Request, res:Response, next:NextFunction) => ConversationController.uploadUserImage(req, res))
// .put(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF), (req:Request, res:Response, next:NextFunction) => ConversationController.uploadUserImage(req, res))
// .delete(verifyJWT,verifyRoles(ROLES_LIST.ADMIN,ROLES_LIST.DEV, ROLES_LIST.USER,ROLES_LIST.STAFF), (req:Request, res:Response, next:NextFunction) => PostHandler.delete(req, res))


export default router; 

