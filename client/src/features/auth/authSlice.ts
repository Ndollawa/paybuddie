import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../../app/stores/store';

interface authProp{
    token: string | null;
}
const authSlice = createSlice({
    name:'auth',
    initialState:{ token: null} as authProp,
    reducers:{
        setCredentials: (state, action) =>{
            const {accessToken} = action.payload;
            state.token = accessToken;
            // console.log(state.token)
        },
        logOut: (state):void =>{
            state.token = null;
        }
    },
   
})


 export const {setCredentials, logOut} = authSlice.actions;

 export default authSlice.reducer;
 export const selectCurrentToken = (state:RootState) => state.auth.token;