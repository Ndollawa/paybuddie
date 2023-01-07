import { apiSlice } from "../../app/api/apiSlice";
import { logOut , setCredentials} from "./authSlice";


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        login: builder.mutation({
            query:credentials=>({
                url: '/auth/login',
                method: 'POST',
                body:{
                    ...credentials
                }
            })
        }),
        register:builder.mutation({
            query:credentials=>({
                url:'/auth/register',
                method:'POST',
                body:{
                    ...credentials
                }
            })
        }),
        sendLogout:builder.mutation<any, void>({
            query:()=>({
                url:'/auth/logout',
                method:'POST',
            }),
            async onQueryStarted(arg,{dispatch,queryFulfilled}){
                try {
                //    const data =
                    await queryFulfilled
                   dispatch(logOut())
                    setTimeout(()=>{
                   dispatch(apiSlice.util.resetApiState())
                    },1000) 
                } catch (error) {
                    console.log(error)
                }
            }
        }),   
         refresh:builder.mutation<any, void>({
            query:()=>({
                url:'/auth/refresh',
                method:'GET',
            }),
            async onQueryStarted(args,{dispatch,queryFulfilled}){
                try {
                    const {data}= await queryFulfilled
                    const{accessToken} = data
                    dispatch(setCredentials({accessToken}))
                } catch (error) {
                    
                }
            }
        }),
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useRefreshMutation,
    useSendLogoutMutation 
} = authApiSlice;