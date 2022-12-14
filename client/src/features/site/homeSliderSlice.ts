import { createSlice } from "@reduxjs/toolkit";
import siteInfo from "../../app/utils/data";


const initialState ={
// ...siteInfo
}

export const siteInfoSlice =  createSlice({
    name:'siteInfo',
    initialState,
    reducers:{
       getSiteInfo:async(state, action) => {

       },
       setSiteInfo: async(state, action)=>{
            // state.push(action.payload); 
       }
    }

});
export const { getSiteInfo,setSiteInfo } = siteInfoSlice.actions;
export default  siteInfoSlice.reducer;