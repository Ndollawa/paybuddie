import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState ={
    width:window.innerWidth ,
    height:window.innerHeight
    }
const windowSize = createSlice({
    name:'windowSize',
    initialState,
    reducers:{
        setWindowSize:(state)=>{
                    
               
                
                
        }

    }
})