import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import Head from './components/Head';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Chatbox from './components/ChatBox';
import Footer from './components/Footer';
import Js from './components/Js';
import Preloader from './components/Preloader';
import pageProps from "../../app/utils/props/pageProps";
import { useSelector } from 'react-redux';
import {useCompanyDetails} from '../app/appConfigSlice'


    
const Home:React.FC<pageProps> = ({pageData}:pageProps) => {
  

    const {siteName,logo,logoDark} = useSelector(useCompanyDetails);

  return (
    <>
    <Head pageData={pageData}/>
<body>

{/* <!--*******************
    Preloader start
********************--> */}
<Preloader/>
{/* <!--*******************
    Preloader end
********************-->

<!--**********************************
    Main wrapper start
***********************************-->className="show menu-toggle" */}
<div id="main-wrapper" >
{/* 
    <!--**********************************
        Nav header start
    ***********************************--> */}
           <div className="nav-header">
            <Link to="/dashboard" className="brand-logo">
               {siteName}
            </Link>

            <div className="nav-control">
                <div className="hamburger">
                    <span className="line"></span><span className="line"></span><span className="line"></span>
                </div>
            </div>
        </div>
        {/* <!--**********************************
            Nav header end
        ***********************************--> */}
	    {/* <!--**********************************
            Chat box Start
        ***********************************--> */}
          <Chatbox/>
        {/* <!--**********************************
            Chat box End
        ***********************************--> */}
        <Header />
        <SideBar />
        	
		{/* <!--**********************************
            Content body start
        ***********************************--> */}
        <div className="content-body">
			<div className="container-fluid">
				<div className="form-head mb-sm-5 mb-3 d-flex flex-wrap align-items-center">
					<h2 className="font-w600 title mb-2 me-auto ">{pageData?.pageTitle}</h2>
					<div className="weather-btn mb-2">
						<span className="me-3 font-w600 text-black"><i className="fa fa-cloud me-2"></i>21</span>
						<select className="form-control style-1 default-select  me-3 ">
							<option>Medan, IDN</option>
							<option>Jakarta, IDN</option>
							<option>Surabaya, IDN</option>
						</select>
					</div>
					<a href="javascript:void(0);" className="btn btn-secondary mb-2"><i className="las la-calendar scale5 me-3"></i>Filter Periode</a>
				</div>
          <Outlet/>

          </div>
        </div>
        <Footer />
      </div>
    <Js/>
    </body>
    </>
  )
}

export default Home