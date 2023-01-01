import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/auth/authSlice';


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3500',
    credentials: 'include',
    prepareHeaders:(headers, {getState}:any) =>{
        const token = getState()?.auth?.token;
        if(token){
            headers.set("authorization",`BEARER ${token}`)
        }
        return headers;
    }
})


const baseQueryWithReauth = async (args:any,api:any, extraOptions:any) =>{
    let result = await baseQuery(args, api, extraOptions);

    if(result?.error?.status === 403){

        //request to get a new token
        const refreshResult = await baseQuery('/auth/refresh',api,extraOptions);
        console.log(refreshResult)
        if(refreshResult?.data){
            const user = api.getState().auth.user;
            console.log(user)
            // stores a new token
            api.dispatch(setCredentials({...refreshResult.data, user}))
            // retry the original query with the new token
            result = await baseQuery(args,api, extraOptions)
        }else{
            api.dispatch(logOut())
        }
    }
    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builders) =>({})

})