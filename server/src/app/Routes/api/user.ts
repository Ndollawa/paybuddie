import express, { NextFunction } from 'express';
const router = express.Router();
import path  from 'path';
import ROLES_LIST  from '../../../config/roleList';
import verifyRoles  from '../../Http/Middleware/verifyRoles.js';
import UserController from '../../Http/Controllers/UserController.js';
import { MRequest, MResponse } from '../../../interfaces/interfaces';






router.route('/')
.get((req:MRequest, res:MResponse, next:NextFunction) => UserController.index(req, res))
.post((req:MRequest, res:MResponse, next:NextFunction) => UserController.create(req, res))
.put((req:MRequest, res:MResponse, next:NextFunction) => UserController.update(req, res))
.delete((req:MRequest, res:MResponse, next:NextFunction) => UserController.delete(req, res))
export default router; 

