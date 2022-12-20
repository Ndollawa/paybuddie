import React,{useState} from "react";
import { Link } from "react-router-dom";
import Preloader from "./Preloader";
import Header from "./Header";
import SideBar from "./SideBar";
import Chatbox from "./ChatBox";
import Footer from "./Footer";
import { useSelector } from 'react-redux';
import {useCompanyDetails,useDashboardConfig} from '../../app/appConfigSlice'

const MainBody = ({children}:any) => {
    const [isToggled,setIsToggled] = useState(false);

  const isPreloading = true;    
const pageData ={
    pageTitle: ''
}
const {siteName,logo,favicon,logoDark} = useSelector(useCompanyDetails);
const {layoutOptions} = useSelector(useDashboardConfig);
const {
    typography,
    version,
    layout,
    headerBg,
    primary,
    navheaderBg,
    sidebarBg,
    sidebarStyle,
    sidebarPosition,
    headerPosition,
    containerLayout,
    direction
} = layoutOptions;

const toggleMenu = ()=>{
setIsToggled(prev=> !prev);

}
let  menuWrapperStyle = isPreloading ? "show" : "";
menuWrapperStyle += isToggled? " menu-toggle" : ""
  return (
   <>
   <body  data-typography={typography} data-theme-version={version} data-layout={layout} data-nav-headerbg={headerBg} data-headerbg={navheaderBg} data-sidebar-style={sidebarStyle} data-sidebarbg={sidebarBg} data-sidebar-position={sidebarPosition} data-header-position={headerPosition} data-container={containerLayout} data-direction={direction} data-primary={primary}>

{/* <!--*******************
    Preloader startdirection={direction}
********************--> */}
{/* <Preloader/> */}
{/* <!--*******************
    Preloader end
********************-->

<!--**********************************
    Main wrapper start
***********************************-->className="show menu-toggle" */}
<div id="main-wrapper" className={ menuWrapperStyle} >
{/* 
    <!--**********************************
        Nav header start
    ***********************************--> */}
           <div className="nav-header">
            <Link to="/dashboard" className="brand-logo">
              {isToggled?<img src={favicon} alt={siteName} width='50'/> :<img src={logo} alt={siteName} width='150'/>} 
            </Link>

            <div className="nav-control">
                <div className={isToggled?"hamburger is-active": "hamburger"} onClick={toggleMenu}>
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
   {children}
   
   </div>
        </div>
        <Footer />
      </div>
    </body>
   </>
  )
}

export default MainBody

