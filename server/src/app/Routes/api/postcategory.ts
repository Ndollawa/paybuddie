import express,{Response,Request,NextFunction} from 'express';
const router = express.Router();
import verifyJWT from '../../Http/Middleware/verifyJWT';
// import path from 'path';
import ROLES_LIST from '../../../config/roleList';
import verifyRoles from '../../Http/Middleware/verifyRoles';
import PostCategoryController from '../../Http/Controllers/PostCategoryController';

router.route('/')
.get((req:Request, res:Response, next:NextFunction) => PostCategoryController.list(req, res, next))
.post(verifyJWT, verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.DEV), (req:Request, res:Response, next:NextFunction) => PostCategoryController.create(req, res))
.put(verifyJWT, verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.DEV), (req:Request, res:Response, next:NextFunction) => PostCategoryController.update(req, res))
.delete(verifyJWT, verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.DEV), (req:Request, res:Response, next:NextFunction) => PostCategoryController.delete(req, res));


// router.route('/search/:q').get((req, res, next) => PostCategoryController.search(req, res, next));
// router.route('/author/:author/').get((req, res, next) => PostCategoryController.showPostByAuthor(req, res, next));


// router.route('/:id/')
// .get((req, res, next) => PostCategoryController.show(req, res, next))
// .post(verifyJWT, verifyRoles(ROLES_LIST.ADMIN), (req:Request, res:Response, next:NextFunction) => PostCategoryController.update(req, res))
// .put(verifyJWT, verifyRoles(ROLES_LIST.ADMIN), (req:Request, res:Response, next:NextFunction) => PostCategoryController.update(req, res))
// .delete(verifyJWT, verifyRoles(ROLES_LIST.ADMIN), (req:Request, res:Response, next:NextFunction) => PostCategoryController.delete(req, res))




export default  router; 