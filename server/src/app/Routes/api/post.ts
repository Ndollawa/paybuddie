import express,{Response,Request,NextFunction} from 'express';
const router = express.Router();
import verifyJWT from '../../Http/Middleware/verifyJWT';
// import path from 'path';
import ROLES_LIST from '../../../config/roleList';
import verifyRoles from '../../Http/Middleware/verifyRoles';
import useMulter from '../../utils/useMulter';
import PostController from '../../Http/Controllers/PostController';

const upload = useMulter('posts')

router.route('/')
.get((req:Request, res:Response, next:NextFunction) => PostController.list(req, res, next))
.post(verifyJWT, verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.DEV),upload.single('coverImage'), (req:Request, res:Response, next:NextFunction) => PostController.create(req, res))
.put(verifyJWT, verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.DEV),upload.single('coverImage'), (req:Request, res:Response, next:NextFunction) => PostController.update(req, res))
.patch(verifyJWT, verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.DEV),upload.single('coverImage'), (req:Request, res:Response, next:NextFunction) => PostController.update(req, res))
.delete(verifyJWT, verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.DEV), (req:Request, res:Response, next:NextFunction) => PostController.delete(req, res));




export default  router; 