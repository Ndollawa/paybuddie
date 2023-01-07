import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useCompanyDetails} from '../dashboard/pages/Settings/settingsConfigSlice';
import Nav from './components/Nav';
import Head from './components/Head';
import Footer from './components/Footer';
import Js from './components/Js';
import MobileNav from './components/MobileNav';
import Search from './components/Search';

import pageProps from "../../app/utils/props/pageProps";


    
const Home:React.FC<pageProps> = ({pageData}:pageProps) => {

    const {favicon}  = useSelector(useCompanyDetails); 
  return (
    <>
    <Head pageData={pageData}/>
 
    <div className="custom-cursor">

    <div className="custom-cursor__cursor"></div>
    <div className="custom-cursor__cursor-two"></div>

    <div className="preloader">
        <div className="preloader__image" style={{backgroundImage:favicon}}></div>
    </div>
    {/* // <!-- /.preloader --> */}
    <div className="page-wrapper">
       
        <Nav/>
        {/* <!-- /.stricky-header --> */}
      
  
            <Outlet/>

      
        <Footer />
        {/* <!-- /.bottom-footer --> */}

    </div>
    {/* <!-- /.page-wrapper --> */}

        <MobileNav/>
    
    {/* <!-- /.mobile-nav__wrapper --> */}

 
        <Search/>
    
    {/* <!-- /.search-popup --> */}

    <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link>
        </div>

        <Js/>
    </>
  )
}

export default Home