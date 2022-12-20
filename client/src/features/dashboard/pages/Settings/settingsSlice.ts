import {createSelector} from '@reduxjs/toolkit';
import { apiSlice } from '../../../../app/api/apiSlice';


const initialState ={
    _id:"",
    general:{
        name:"",
        email:"",
        address:"",
        contact:"",
        zipcode:'',
        country:'',
        state:'',
        city:'',
        activeHours:'',
        facebookHandle:'',
        twitterHandle:'',
        instagram:'',
        whatsapp:'',
        description:'',

    }
}
const settingApiSlice = apiSlice.injectEndpoints({
    endpoints:builder =>({
        getSettings: builder.query({
            query:()=>'/settings',
             // provideTags: (result, err, args)=>{
        //     {type:'setting'},
        //     ...result

        // }
        }),
        updateGeneralSettings:builder.mutation({
            query: generalSetting=>({
                url:'/settings',
                method: 'PUT',
                body:{
                    ...generalSetting,
                }
            })
    
        }),
        updateHomePageSettings:builder.mutation({
            query: homeSetting=>({
                url:'/settings',
                method: 'PUT',
                body:{
                    ...homeSetting,
                }
            })
    
        }),
        updateAboutUsSettings:builder.mutation({
            query: aboutUsSetting=>({
                url:'/settings',
                method: 'PUT',
                body:{
                    ...aboutUsSetting,
                }
            })
    
        }),
        updatePrivacyPolicySettings:builder.mutation({
            query: privacyPolicySetting=>({
                url:'/settings',
                method: 'PUT',
                body:{
                    ...privacyPolicySetting,
                }
            })
    
        }),
        updateTermsCoditionsSettings:builder.mutation({
            query: termsConditionSetting=>({
                url:'/settings',
                method: 'PUT',
                body:{
                    ...termsConditionSetting,
                }
            }),
            // invalidatesTags:['settings']
    
        })
    })

})

 export const {useGetSettingsQuery} = settingApiSlice;

//  export default settingApiSlice.reducer;

 export const selectAllSettings = settingApiSlice.endpoints.getSettings.select(settingApiSlice);

 const selectSettingsData = createSelector(
    selectAllSettings, settingsResult => settingsResult.data
 )

 export const {
    // selectAll,
    // selectById,
    // selectIds

 } = (state:any) => selectSettingsData(state).settingApiSlice ?? initialState;