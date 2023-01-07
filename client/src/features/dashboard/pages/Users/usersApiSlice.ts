import { apiSlice } from "../../../../app/api/apiSlice";
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

interface UserQuery{
    type:string;
    id:any;
}

const usersAdapter = createEntityAdapter({})
const initialState = usersAdapter.getInitialState()

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getUsers:builder.query<any, UserQuery|any>({
        query:()=>({
            url:'/users',
        validateStatus:(response:any, result:any)=>{
            return response.status === 200 && !result.isError
        },
        keepUnsusedDataFor:5,
        transformResponse:(responseData:any) =>{
            const loadedUsers = responseData.map((user:any) =>{
                user.id = user._id
                return user
            });
            return usersAdapter.setAll(initialState,loadedUsers)
        },
        providesTags:(result:any,error:any,arg:any)=>{
            if(result?.id){
                return [
                    {type: 'User', id:'LIST'},
                    ...result.ids.map((id:string)=>({type:'User',id}))
                ]
            }else return [{type: 'User', id:'LIST'}]
                
        }
          }),
       }),
    }),
})

export const {useGetUsersQuery} = usersApiSlice;
const selectUsersResult = usersApiSlice.endpoints.getUsers.select('User')
// returns query result object
const selectUserData = createSelector(
    selectUsersResult,
    usersResult =>usersResult?.data // normalized state object with ids and entities
)

// getSelectors
export const{
    selectAll:selectAllUsers,
    selectById:selectUserById,
    selectIds:selectUserIds
    // pass in a selector that returnd the users slice of state
} = usersAdapter.getSelectors((state:any)=>selectUserData(state) ?? initialState)
