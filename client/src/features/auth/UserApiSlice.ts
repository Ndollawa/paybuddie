import { apiSlice } from "../../app/api/apiSlice";
import { setCurrentUser } from "./UserSlice";
import { userInterface } from "./UserSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getCurrentUser:builder.mutation<userInterface, string>({
            query:(id)=>({
                url:`/user/${id}`,
                method:'GET',
            }),
            async onQueryStarted(arg,{dispatch,queryFulfilled}){
                try {
                   const data = await queryFulfilled
                   dispatch(setCurrentUser(data))
                    setTimeout(()=>{
                   dispatch(apiSlice.util.resetApiState())
                    },1000) 
                } catch (error) {
                    console.log(error)
                }
            }
        }),
       
    })
})

export const {useGetCurrentUserMutation} = authApiSlice;