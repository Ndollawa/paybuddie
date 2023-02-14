// import {useState,useEffect} from 'react'
// import $ from 'jquery'
// import showToast from './showToast'



const useFileUpload = ()=>{    
// const [files, setFiles] = useState([])
const getFile = (fileInput:any)=>{

        const formData = new FormData()
        Object.keys(fileInput).forEach(key => {
            formData.append('files[]', fileInput?.item(key))
        })
        return formData
}
// const uploadFile =(formData:FormData, url:string)=>{
//     if(formData?.files){
//     $.ajax({
//         url,
//         method:"POST",
//         enctype:"multipart/form-data",
//         data:formData,
//         contentType: false,
//         processData: false,
//         success:function(data){
//           alert(data);
//         try{
//            data = JSON.parse(data);
//            data.map(file=>file)
            
          
//           }catch (e:any){
//       showToast('error','Alert! warning..<br/>Caught: '+e.message)
// ;
//  console.log(e.message);  }
        
// }
// });

// }

return [getFile]
}

export default useFileUpload