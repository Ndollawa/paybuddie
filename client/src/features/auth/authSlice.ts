import {createSlice, Selector} from '@reduxjs/toolkit';


const authSlice = createSlice({
    name:'auth',
    initialState:{user:null, token: null},
    reducers:{
        setCredentials: (state, action) =>{
            const {user, accessToken} = action.payload;
            state.user = user;
            state.token = accessToken;
        },
        register:(state,action)=>{
            const {user, email, pwd} = action.payload;
        },
        logOut: (state) =>{
            state.user = null;
            state.token = null;
        }
    },
})


 export const {setCredentials, logOut} = authSlice.actions;

 export default authSlice.reducer;

 export const selectCurrentUser = (state:any) => state.auth.user;
 export const selectCurrentToken = (state:any) => state.auth.token;