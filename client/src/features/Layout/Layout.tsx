import React from 'react'
import { Outlet } from 'react-router-dom';
import useAxiosFunc from '../../app/utils/hooks/useAxiosFunc';
import axios from '../../app/api/axios';
import {setSettings } from '../dashboard/pages/Settings/settingsConfigSlice';
import { useDispatch,useSelector } from 'react-redux';
import Head from '../dashboard/components/Head';
import pageProps from '../../app/utils/props/pageProps';
import { setPreloader } from '../dashboard/components/PreloaderSlice';
import { useIsLoading } from '../dashboard/components/PreloaderSlice';
import $ from 'jquery';

const Layout:React.FC<pageProps> = ({pageData}:pageProps) => { 
  
const isLoading = useSelector(useIsLoading)
  const dispatch = useDispatch();
const [response,error,loading,axiosFetch] = useAxiosFunc();

React.useEffect(() => {

// const handlePreloader = ()=>{

// $('#preloader').fadeOut(500);
// $('#main-wrapper').addClass('show');
// }
// handlePreloader()
  // return () => {
  
  // };
}, [])
setTimeout(()=>{
dispatch(setPreloader(false))
// alert(isLoading)
},4500)
// // console.log(response) 
  return (
    <>
        <Head pageData={pageData}/>
      
          <Outlet/>
    </>
  )
}

export default Layout
