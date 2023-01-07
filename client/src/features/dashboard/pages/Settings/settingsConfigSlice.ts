import {createSlice, Selector} from '@reduxjs/toolkit';
import logo from '../../../../paybuddie4.png'
import logoDark from '../../../../paybuddie-white.png'
import favicon from '../../../../favicon.png'

enum Styles{STYLE_1=1,STYLE_2, STYLE_3};
const initialState = {
        _id:"",
        landingPageConfig:{
            navStyle:Styles.STYLE_1,
            sliderStyle:Styles.STYLE_1,
            aboutStyle:Styles.STYLE_1,
            testimonialStyle:Styles.STYLE_1,
            ourBenefitStyle:Styles.STYLE_2,
            whatWeOfferStyle:Styles.STYLE_1
        },
        dashboardConfig:{
            layoutOptions: {
            typography: "poppins",
            version: "light",
            layout: "vertical",
            headerBg: "color_4",
            primary: "color_4",
            navheaderBg: "color_4",
            sidebarBg: "color_1",
            sidebarStyle: "full",
            sidebarPosition: "fixed",
            headerPosition: "fixed",
            containerLayout: "full",
            direction: 'ltr'

            }
        },
        companyDetails:{
            siteName:"PayBuddie",
            logo:logo,
            logoDark:logoDark,
            favicon:favicon,
            city:"",
            state:"",
            country:"",
            zip:"",
            description:"Some brief description here about the company would do!",
            email:["paybuddie@support.com"],
            contact:['08155393750'],
            address:"14 Etta Agbor Road Calabar, CRS",
            activeHours:"Mon - Fri: 7:00am - 6:00pm  Saturday: 9:00am - 5:00pm  Sunday: Closed",
            facebookHandle:"https://www.facebook.com/paybuddie",
            twitterHandle:"https://www.twitter.com/paybuddie",
            instagram:"https://www.instagram.com/paybuddie",
            whatsapp:"https://www.whatsapp.com/paybuddie"
        },
        pages:{
            aboutUs:"",
            privacyPolicy:"",
            termsCondition:""
        }
}


export const settingsConfigSlice = createSlice({
    name:'settingsConfig',
    initialState,
    reducers:{
        setSettings:(state,action)=>{
            // console.log(action.payload);
            // console.log(state);
            state ={...action.payload}
        },
        setAppGeneralSetting:(state,action)=>{
            // const {}=action.payload;
            state.companyDetails={ ...state.companyDetails, ...action.payload };
        },
        setDashboardSetting:(state,action)=>{
            console.log(action.payload)
            state.dashboardConfig.layoutOptions ={ ...state.dashboardConfig.layoutOptions, ...action.payload};
        },
        setPagesSetting:(state,action)=>{
            // const {}=action.payload;
            state.pages={...state.pages,...action.payload}
        },
        setAppHomepageSetting:(state,action)=>{
            // const {}=action.payload;
            state.landingPageConfig={...state.landingPageConfig,...action.payload}
        },
    

    }
})

export const useCompanyDetails = (state:any)=>state.settingsConfig.companyDetails;
export const useLandingPageConfig = (state:any)=>state.settingsConfig.landingPageConfig;
export const useDashboardConfig = (state:any)=>state.settingsConfig.dashboardConfig;
export const usePages = (state:any)=>state.settingsConfig.pages;
export const use_id = (state:any)=>state.settingsConfig._id;
export const {setAppGeneralSetting,setDashboardSetting,setPagesSetting,setAppHomepageSetting,setSettings} = settingsConfigSlice.actions;
export default settingsConfigSlice.reducer;