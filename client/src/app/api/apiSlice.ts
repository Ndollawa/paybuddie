import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/auth/authSlice';


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3500',
    credentials: 'include',
    prepareHeaders:(headers, {getState}:any) =>{
        const token = getState()?.auth?.token;
        if(token){
            headers.set("authorization",`Bearer ${token}`)
        }
        return headers;
    }
})


const baseQueryWithReauth:BaseQueryFn = async (args,api, extraOptions) =>{
    let result = await baseQuery(args, api, extraOptions);

    if(result?.error?.status === 403){

        //request to get a new token
        const refreshResult =  await baseQuery('/auth/refresh',api,extraOptions);
        // console.log(refreshResult)
        if(refreshResult?.data){
            // stores a new token
            api.dispatch(setCredentials({...refreshResult.data}))
            // retry the original query with the new token
            result = await baseQuery(args,api, extraOptions)
        }else{
            if(refreshResult?.error?.status === 403){
                refreshResult.error.data =  "Your login session has expired"
            }
            return refreshResult
        }
    }
    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes:['User','Blog','Faq','Setting'],
    endpoints: (builders) =>({})

})