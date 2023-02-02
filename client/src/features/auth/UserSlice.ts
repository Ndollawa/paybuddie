import {createSlice} from '@reduxjs/toolkit';


export interface userInterface{
    _id:string | undefined | null;
    first_name: string | undefined | null;
    last_name: string | undefined | null;
    email: string | null;
    password?: string | null;
    username: string | undefined | null;
    phone: string | undefined | null;
    dob: string | undefined | null;
    user_image: string | undefined | null;
    accountStatus:string | number | null;
    accountSecurity_2FA: boolean | string | null;
    roles:  {
        User: number | null;
        Admin?: number | undefined | null;
        Dev?: number | undefined | null;
        Staff?: number | undefined | null;
    } | null;
    refreshToken?: string[];
}
const UserSlice = createSlice({
    name:'user',
    initialState:{
       user:{ 
        _id:null,
        email:null,
        userImage:null,
        fullname:null,
        username:null,
        first_name:null,
        last_name:null,
        phone:null,
        dob:null,
        user_image:null,
        accountStatus:null,
        accountSecurity_2FA:null,
        roles:null,
    } as userInterface,
},
    reducers:{
        setCurrentUser: (state, action) =>{
           console.log(action.payload) ;
        },
       
        setCurrentUserBalance: (state, action) =>{
           return action.payload;
        },
       
    },
   
})


 export const {setCurrentUser} = UserSlice.actions;

 export default UserSlice.reducer;

 export const selectCurrentUser = (state:any) => state.User.user;