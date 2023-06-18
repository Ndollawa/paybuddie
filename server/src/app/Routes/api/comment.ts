import express,{Response,Request,NextFunction} from 'express';
const router = express.Router();
import CommentController from '../../Http/Controllers/CommentController';

router.route('/')
.get((req:Request, res:Response, next:NextFunction) => CommentController.list(req, res, next))
.post( (req:Request, res:Response, next:NextFunction) => CommentController.create(req, res))
.put( (req:Request, res:Response, next:NextFunction) => CommentController.update(req, res))
.patch( (req:Request, res:Response, next:NextFunction) => CommentController.update(req, res))
.delete( (req:Request, res:Response, next:NextFunction) => CommentController.delete(req, res));

router.route('/reply')
// .get((req:Request, res:Response, next:NextFunction) => CommentController.list(req, res, next))
.post( (req:Request, res:Response, next:NextFunction) => CommentController.createReply(req, res))
.put( (req:Request, res:Response, next:NextFunction) => CommentController.updateReply(req, res))
.patch( (req:Request, res:Response, next:NextFunction) => CommentController.updateReply(req, res))
.delete( (req:Request, res:Response, next:NextFunction) => CommentController.deleteReply(req, res));




export default  router; 