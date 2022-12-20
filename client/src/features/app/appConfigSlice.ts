import {createSlice, Selector} from '@reduxjs/toolkit';
import logo from '../../paybuddie4.png'
import logoDark from '../../paybuddie-white.png'
import favicon from '../../favicon.png'

enum Styles{STYLE_1,STYLE_2, STYLE_3};
enum homeStyles {STYLE_1, STYLE_2, STYLE_3}
const initialState = {
        landingPageConfig:{
            navStyle:Styles.STYLE_1,
            homeStyle:homeStyles.STYLE_1
        },
        dashboardConfig:{
            layoutOptions: {
            typography: "poppins",
            version: "light",
            layout: "vertical",
            headerBg: "color_1",
            primary: "color_1",
            navheaderBg: "color_1",
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
            description:"Some brief description here about the company would do!",
            email:["paybuddie@support.com"],
            contact:['08155393750'],
            address:"14 Etta Agbor Road Calabar, CRS",
            activeHours:"Mon - Fri: 7:00am - 6:00pm  Saturday: 9:00am - 5:00pm  Sunday: Closed",
            facebookHandle:"https://www.facebook.com/paybuddie",
            twitterHandle:"https://www.twitter.com/paybuddie",
            instagram:"https://www.instagram.com/paybuddie",
            whatsapp:"https://www.whatsapp.com/paybuddie"
        }
}


export const appConfigSlice = createSlice({
    name:'appConfig',
    initialState,
    reducers:{

    }
})

export const useCompanyDetails = (state:any)=>state.appConfig.companyDetails;
export const useLandingPageConfig = (state:any)=>state.appConfig.landingPageConfig;
export const useDashboardConfig = (state:any)=>state.appConfig.dashboardConfig;

export default appConfigSlice.reducer;