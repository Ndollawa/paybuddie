import  SettingModel from '../../Models/Setting';
import asyncHandler from 'express-async-handler';
// import {fileURLToPath} from 'url';
import { Request, Response } from 'express';
// require('dotenv').config()
//  const __filename = fileURLToPath(import.meta.url);

        // 
        // const __dirname = path.dirname(__filename);
class SettingsController{
    constructor(){
        this.index = this.index.bind(this);
       

   }
index = asyncHandler(async(req:Request, res:Response)=>{

    const result = await SettingModel.findOne() 
    res.status(200).json({"settings":result});  

})
createSettings = asyncHandler(async(req:Request, res:Response)=>{
   const {data} = req.body;
//  
    // try {

    // const result = await SettingModel.findOneAndUpdate({_id},{dashboardConfig:{layoutOptions:Theme}}) 
    // res.status(200).json({"settings":result});  
    // } catch (error) {
    //     res.status(500).json({"error":error})
    // }

})
deleteSettings = asyncHandler(async(req:Request, res:Response)=>{
   const {_id,data} = req.body;

    const result = await SettingModel.findOneAndDelete({_id}) 
    res.status(200).json({"settings":result});  
    
})
updateHomepageSettings = asyncHandler(async(req:Request, res:Response)=>{
   const {_id,data} = req.body;
    const result = await SettingModel.findOneAndUpdate({_id},{landingPageConfig:{...data}}) 
    res.status(200).json({"settings":result});  

})

updateDashboardSettings = asyncHandler(async(req:Request, res:Response)=>{
    const{_id,Theme } =  req.body
   
    const result = await SettingModel.findOneAndUpdate({_id},{dashboardConfig:{layoutOptions:Theme}}) 
    res.status(200).json({"response":'success'});

})

updatePagesSettings = asyncHandler(async(req:Request, res:Response)=>{
   const {_id, data} = req.body;

    const result = await SettingModel.findOneAndUpdate({_id},{pages:{...data}}) 
    res.status(200).json({"settings":result});  
})
updateGeneralSettings = asyncHandler(async(req:Request, res:Response)=>{
   const {_id,data} = req.body;
    console.log(req.body)
    const result = await SettingModel.findOneAndUpdate({_id:_id},{companyDetails:{...data}}) 
    res.status(200).json({"settings":result});  
 
})





}

export default new SettingsController();