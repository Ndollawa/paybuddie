import express,{Response,Request,NextFunction} from 'express';
const router = express.Router();
// import path from 'path';
import ROLES_LIST from '../../../config/roleList';
import verifyRoles from '../../Http/Middleware/verifyRoles';
import SettingsController from '../../Http/Controllers/SettingsController';
import verifyJWT from '../../Http/Middleware/verifyJWT';





router.route('/')
.get((req:Request, res:Response, next:NextFunction) => SettingsController.index(req, res, next))
.post(verifyJWT,verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.DEV), (req:Request, res:Response, next:NextFunction) => SettingsController.createSettings(req, res,next))
.put(verifyJWT,verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.DEV), (req:Request, res:Response, next:NextFunction) => SettingsController.deleteSettings(req, res,next));

router.route('/homepage-config')
.post(verifyJWT,verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.DEV), (req:Request, res:Response, next:NextFunction) => SettingsController.updateHomepageSettings(req, res,next));

router.route('/general')
.post(verifyJWT,verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.DEV), (req:Request, res:Response, next:NextFunction) => SettingsController.updateGeneralSettings(req, res,next));

router.route('/pages')
.post(verifyJWT,verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.DEV), (req:Request, res:Response, next:NextFunction) => SettingsController.updatePagesSettings(req, res,next));

router.route('/dashboard-config')
.get(verifyJWT,verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.DEV),(req:Request, res:Response, next:NextFunction) => SettingsController.index(req, res,next))
.post(verifyJWT,verifyRoles(ROLES_LIST.ADMIN, ROLES_LIST.DEV),(req:Request, res:Response, next:NextFunction) => SettingsController.updateDashboardSettings(req, res,next));




export default  router; 