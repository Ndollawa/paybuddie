import  SettingsModel from '../../Models/Setting';
import { Request, Response } from 'express';
import deleteItem from '../../utils/deleteItem';
import BaseController from './BaseController';

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

uploads = async(req:Request, res:Response)=>{
   console.log(req.file)
    const {_id,type} = req.body
    const file = req?.file!
    const destination = '../../../../public/settings'
    if(file){
        try {
                    
            const result = await SettingsModel.findOne({_id}).exec() 
            switch (type) {
                case 'favicon':
                    if(result){
                    const oldFile =result.companyDetails!.favicon! 
                    if(oldFile) deleteItem(destination,oldFile)
                    result.companyDetails!.favicon! = file.filename
                    result?.save()
                   return res.status(200).json({messsage:'success'});
                 }   
                    break;
                case 'logo':
                    if(result){
                   const oldFile = result.companyDetails!.logo! 
                   if(oldFile) deleteItem(destination,oldFile)
                    result.companyDetails!.logo! = file.filename
                    result?.save()
                   return res.status(200).json({messsage:'success'}); 
                 }   
                    break;
                case 'darklogo':
                    if(result){
                   const oldFile = result.companyDetails!.logoDark! 
                   if(oldFile) deleteItem(destination,oldFile)
                    result.companyDetails!.logoDark! = file.filename
                    result?.save()
                   return res.status(200).json({messsage:'success'}); 
                 }   
                    break;
                case 'pageBg':
                    if(result){
                   const oldFile = result.companyDetails!.pagesBg! 
                   if(oldFile) deleteItem(destination,oldFile)
                    result.companyDetails!.pagesBg! = file.filename
                    result?.save()
                   return res.status(200).json({messsage:'success'}); 
                 }   
                    break;
                case 'bgImage':
                    if(result){
                    const oldFile =result.companyDetails!.backgroundImage! 
                    if(oldFile) deleteItem(destination,oldFile)
                    result.companyDetails!.backgroundImage! = file.filename
                    result?.save()
                   return res.status(200).json({messsage:'success'}); 
                 }   
                    break;
                case 'aboutUsBg':
                    if(result){
                   const oldFile = result.companyDetails!.aboutUsBg! 
                   if(oldFile) deleteItem(destination,oldFile)
                    result.companyDetails!.aboutUsBg! = file.filename
                    result?.save()
                   return res.status(200).json({messsage:'success'}); 
                 }   
                    break;
            
                default:
                    return res.status(400).json({message:'Bad Request'})
                    break;
            }
            // console.log(Object.keys(files))
            // console.log(Object.values(files))
            // console.log(files.upload)
//             Object.keys(files['upload']).forEach((key:any)=>{
//                 const {path,mimetype}= files['upload'][key]
//    const img = fs.readFileSync(path)
// const encode_img = img.toString('base64')
    // console.log(encode_img)              
// const finalImg = {
//     ContentType:mimetype,
//     image:Buffer.from(encode_img,'base64')
// }     
//     })   
        } catch (error) {
        //    next(error) 
        console.log(error)
        }

}
}
removeUploads = async(req:Request, res:Response)=>{
   
    const {_id,type,file} = req.body
     const destination = '../../../public/uploads/settings'
    if(file){
        try {
                    
            const result = await SettingsModel.findOne({_id}).exec() 
            switch (type) {
                case 'favicon':
                    if(result){
                    result.companyDetails!.favicon! = ''
                    result?.save()
                   deleteItem(destination, file)
                   return res.status(200).json({messsage:'success'}); 
                   
                 }   
                    break;
                case 'logo':
                    if(result){
                    result.companyDetails!.logo! = ''
                    result?.save()
                   deleteItem(destination, file)
                   return res.status(200).json({messsage:'success'}); 
                 }   
                    break;
                case 'logoDark':
                    if(result){
                    result.companyDetails!.logoDark! = ''
                    result?.save()
                   deleteItem(destination, file)
                   return res.status(200).json({messsage:'success'}); 
                 }   
                    break;
                case 'pageBg':
                    if(result){
                    result.companyDetails!.pagesBg! = ''
                    result?.save()
                    deleteItem(destination, file)
                    res.status(200).json({messsage:'success'}); 
                 }   
                    break;
                case 'bgImage':
                    if(result){
                    result.companyDetails!.backgroundImage! = ''
                    result?.save()
                   deleteItem(destination, file)
                   return res.status(200).json({messsage:'success'}); 
                 }   
                    break;
                case 'aboutUsBg':
                    if(result){
                    result.companyDetails!.aboutUsBg! = ''
                    result?.save()
                   deleteItem(destination, file)
                   return res.status(200).json({messsage:'success'}); 
                 }   
                    break;
            
                default:
                    return res.status(400).json({message:'Bad Request'})
                    break;
            }   
        } catch (error) {
        //    next(error) 
        console.log(error)
        }

}
}





}

export default new SettingsController();