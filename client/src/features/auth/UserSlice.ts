import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name:'auth',
    initialState:{user:null, token: null,loading:false, error:''},
    reducers:{
        setCredentials: (state, action) =>{
            const {user, accessToken} = action.payload;
            state.user = user;
            state.token = accessToken;
            // console.log(state.token)
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