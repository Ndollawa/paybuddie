import { apiSlice } from "../../app/api/apiSlice";

export const uploadApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
 
        uploadFile:builder.mutation<any, any>({
            query:(arg:{data:FormData,url:string})=>({
                url:arg.url,
                method:'POST',
                body:{
                   data:arg.data,
                },  headers:{"Content-Type":"multipart/form-data"}
            
            }),
        }),
    }),    
})

export const {
    useUploadFileMutation,
  
} = uploadApiSlice