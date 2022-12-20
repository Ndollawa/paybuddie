import { configureStore }  from  '@reduxjs/toolkit';
import siteInfoReducer  from '../../features/site/siteInfoSlice';
import { apiSlice } from '../api/apiSlice';
import authReducer from '../../features/auth/authSlice';
import appConfigReducer from '../../features/app/appConfigSlice';


export const store = configureStore({
    reducer:{
        siteInfo: siteInfoReducer, 
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        appConfig: appConfigReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
        devTools:true
})





