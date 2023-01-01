import { apiSlice } from "../../app/api/apiSlice";


export const appConfigApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
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

export const {useGeneralSettingsMutation,useDashboardConfigSettingsMutation, useHomepageSettingsMutation,usePagesSettingsMutation} = appConfigApiSlice;