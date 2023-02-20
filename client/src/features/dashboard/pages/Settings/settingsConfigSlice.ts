import {createSlice, Selector} from '@reduxjs/toolkit';

enum Styles{STYLE_1=1,STYLE_2, STYLE_3};
const initialState = {
        _id:"",
        landingPageConfig:{
            showBlog:null,
            showAffiliate:null,
            showTestimonial:null,
            navStyle:Styles.STYLE_1,
            sliderStyle:Styles.STYLE_1,
            aboutStyle:Styles.STYLE_1,
            testimonialStyle:Styles.STYLE_1,
            ourBenefitStyle:Styles.STYLE_2,
            whatWeOfferStyle:Styles.STYLE_1
        },
        dashboardConfig:{
            layoutOptions: {
            typography: "",
            version: "",
            layout: "",
            headerBg: "",
            primary: "",
            navheaderBg: "",
            sidebarBg: "",
            sidebarStyle: "",
            sidebarPosition: "",
            headerPosition: "",
            containerLayout: "",
            direction: ''

            }
        },
        companyDetails:{
            siteName:null,
            logo:"",
            logoDark:"",
            favicon:null,
            pagesBg:"",
            aboutUsBg:'',
            backgroundImage:'',
            city:null,
            state:null,
            country:null,
            zip:null,
            description:null,
            email:[],
            contact:[],
            address:null,
            activeHours:null,
            facebookHandle:null,
            twitterHandle:null,
            instagram:null,
            whatsapp:null
        },
        pages:{
            aboutUs:null,
            privacyPolicy:null,
            termsCondition:null
        }
}


export const settingsConfigSlice = createSlice({
    name:'settingsConfig',
    initialState,
    reducers:{
        setSettings:(state,action)=>{
            // console.log(action.payload);
            return action.payload
            // console.log(state);
        },
        setAppGeneralSetting:(state,action)=>{
            // const {}=action.payload;
            state.companyDetails={ ...state.companyDetails, ...action.payload };
        },
        setDashboardSetting:(state,action)=>{
            // console.log(action.payload)
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
export const useSettings = (state:any)=>state.settingsConfig
export const {setAppGeneralSetting,setDashboardSetting,setPagesSetting,setAppHomepageSetting,setSettings} = settingsConfigSlice.actions;
export default settingsConfigSlice.reducer;