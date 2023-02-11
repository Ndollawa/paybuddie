import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../../app/stores/store';


export interface userInterface{
   user:{
    _id:string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    username: string | undefined;
    phone: string | undefined;
    dob: string | undefined;
    gender: string | undefined;
    address: string | undefined;
    city: string | undefined;
    state: string | undefined;
    country: string | undefined;
    occupation: string | undefined;
    bio: string | undefined;
    userImage: string | undefined;
    accountStatus:string | number | null |undefined;
    verificationStatus:number | boolean | undefined;
    accountSecurity_2FA: boolean | string | null |undefined;
    roles:  {
        User: number | null |undefined;
        Admin?: number | undefined | null;
        Dev?: number | undefined | null;
        Staff?: number | undefined | null;
    } | null | undefined;
 
   }
}
interface authProps extends userInterface{
    token: string | null;
}
const authSlice = createSlice({
    name:'auth',
    initialState:{ 
        token: null, 
        user: { 
            _id:undefined,
            email:undefined,
            firstName:undefined,
            lastName:undefined,
            username:undefined,
            phone:undefined,
            dob:undefined,
            gender: undefined,
            address: undefined,
            city: undefined,
            state: undefined,
            country: undefined,
            occupation: undefined,
            bio: undefined,
            userImage:undefined,
            accountStatus:undefined,
            verificationStatus:undefined,
            accountSecurity_2FA:undefined,
            roles:undefined,
            

        }
    } as authProps, 
    reducers:{
        setCredentials: (state, action) =>{
            const {accessToken , user_info} = action.payload;
            state.token = accessToken;
            if(user_info){
            state.user = user_info;
            }
        },
        logOut: (state):void =>{
            state.token = null;
            state.user = { 
                _id:undefined,
                email:undefined,
                firstName:undefined,
                lastName:undefined,
                username:undefined,
                phone:undefined,
                dob:undefined,
                gender: undefined,
                address: undefined,
                city: undefined,
                state: undefined,
                country: undefined,
                occupation: undefined,
                bio: undefined,
                userImage:undefined,
                accountStatus:undefined,
                verificationStatus:undefined,
                accountSecurity_2FA:undefined,
                roles:undefined,
                }
        }
    },
   
})


 export const {setCredentials, logOut} = authSlice.actions;

 export default authSlice.reducer;
 export const selectCurrentToken = (state:RootState) => state.auth.token;
 export const selectCurrentUser = (state:RootState) => state.auth.user;