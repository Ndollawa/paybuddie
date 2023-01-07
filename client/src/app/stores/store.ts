import { configureStore }  from  '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { apiSlice } from '../api/apiSlice';
import authReducer from '../../features/auth/authSlice';
import settingReducer from '../../features/dashboard/pages/Settings/settingsConfigSlice';
import PreloaderReducer from '../../features/dashboard/components/PreloaderSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        settingsConfig: settingReducer,
        preloader:PreloaderReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
        devTools:true
})



export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch
setupListeners(store.dispatch)