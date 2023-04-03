import React from 'react'
import { Outlet } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import Head from '../dashboard/components/Head';
import pageProps from '../../app/utils/props/pageProps';
import {  setPreloader } from '../dashboard/components/PreloaderSlice';
import './dashboardStyles/styles.css';
import $ from 'jquery'
import Js from '../dashboard/components/Js';


const Layout:React.FC<pageProps> = ({pageData}:pageProps) => { 
 
   const dispatch = useDispatch()


  React.useEffect(() => {
setTimeout(()=>{
dispatch(setPreloader(false))
// alert(isLoading)
},4500)
const handleChatbox = function() {
  $('.bell-link').on('click',function(){
    $('.chatbox').addClass('active');
  });
  $('.chatbox-close').on('click',function(){
    $('.chatbox').removeClass('active');
  });
}
handleChatbox()


return ()=>{

}
  }, [])

// // console.log(response) 
  return (
    <>
        <Head pageData={pageData}/>
      
          <Outlet/>
          <Js/>
    </>
  )
}

export default React.memo(Layout)
