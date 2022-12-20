import { EnumMember } from "typescript";
import {NextFunction} from 'express'
 import {MRequest, MResponse } from "../../../interfaces/interfaces";

 const verifyRoles = (...allowedRoles:number[]) =>{
    return(req:MRequest, res:MResponse, next:NextFunction)=>{
      const roles = req.roles;
        if(!roles)return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        console.log(roles);
      const  result = roles.map((role:number) => rolesArray.includes(role)).find((val:boolean) => val === true);
        if(!result) return res.sendStatus(401);
        next();
    }

 }

export default  verifyRoles;