import {createSlice, Selector} from '@reduxjs/toolkit';
import { buildCreateApi } from '@reduxjs/toolkit/dist/query';
import { apiSlice } from '../../app/api/apiSlice';


const userApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getUsers: builder.query({
            query:()=>'/users',
            keepUnusedDataFor: 5,
        }),
    })
})

//  export const {useGetUsersQuery} = userApiSlice.actions;

 export default userApiSlice.reducer;

 export const selectCurrentUser = (state:any) => state.auth.user;
 export const selectCurrentToken = (state:any) => state.auth.token;