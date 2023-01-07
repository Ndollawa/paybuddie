import { apiSlice } from "../../../../app/api/apiSlice";
import { setSettings } from "./settingsConfigSlice";

export const settingApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getSettings: builder.mutation<any, void>({
            query:()=>({
                url: '/settings',
                method: 'GET',
            }),
            async onQueryStarted(args,{dispatch,queryFulfilled}){
                try {
                    const {data:{settings}}= await queryFulfilled
                    // console.log(settings)
                    dispatch(setSettings({...settings}))
                } catch (error) {
                    
                }
        },
        }),
        generalSettings: builder.mutation({
            query:data=>({
                url: '/settings/general',
                method: 'POST',
                body:{
                    ...data
                }
            })
        }),
        homepageSettings:builder.mutation({
            query:data=>({
                url:'/settings/homepage-config',
                method:'POST',
                body:{
                    ...data
                }
            })
        }),
        pagesSettings:builder.mutation({
            query:data=>({
                url:'/settings/pages',
                method:'POST',
                body:{
                    ...data
                }
            })
        }),
        
        dashboardConfigSettings:builder.mutation({
            query:data=>({
                url:'/settings/dashboard-config',
                method:'POST',
                body:{
                    ...data
                }
            })
        }),
    })
})

export const {useGetSettingsMutation, useGeneralSettingsMutation,useDashboardConfigSettingsMutation, useHomepageSettingsMutation,usePagesSettingsMutation} = settingApiSlice;