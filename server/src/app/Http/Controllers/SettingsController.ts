import  SettingsModel from '../../Models/Setting';
import asyncHandler from 'express-async-handler';
// import {fileURLToPath} from 'url';
import { Request, Response } from 'express';
import BaseController from './BaseController';
// require('dotenv').config()
//  const __filename = fileURLToPath(import.meta.url);

        // 
        // const __dirname = path.dirname(__filename);
class SettingsController extends BaseController{
    constructor(){
       super(SettingsModel)
       

   }

updateHomepageSettings = async(req:Request, res:Response)=>{
   const {_id,data} = req.body;
//    console.log(data)
    const result = await SettingsModel.findOneAndUpdate({_id},{landingPageConfig:{...data}}) 
    res.status(200).json({message:'success'});  

}

updateDashboardSettings = async(req:Request, res:Response)=>{
    const{_id,data} =  req.body
   
    console.log(req.body)
    const result = await SettingsModel.findOneAndUpdate({_id},{dashboardConfig:{layoutOptions:{...data}}}) 
    res.status(200).json({message:'success'});

}

updatePagesSettings = async(req:Request, res:Response)=>{
   const {_id, data} = req.body;
    const result = await SettingsModel.findOneAndUpdate({_id},{pages:{...data}}) 
    res.status(200).json({message:'sucess'});  
}
updateGeneralSettings = async(req:Request, res:Response)=>{
   const {_id,data} = req.body;
    const result = await SettingsModel.findOneAndUpdate({_id},{companyDetails:{...data}}) 
    res.status(200).json({messsage:'success'});  
 
}





}

export default new SettingsController();