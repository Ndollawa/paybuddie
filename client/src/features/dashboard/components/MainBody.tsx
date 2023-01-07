import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
import Preloader from "./Preloader";
import { useIsLoading } from "./PreloaderSlice";
import Header from "./Header";
import SideBar from "./SideBar";
import Chatbox from "./ChatBox";
import Footer from "./Footer";
import { useSelector } from 'react-redux';
import {useCompanyDetails,useDashboardConfig} from '../pages/Settings/settingsConfigSlice';
import useWindowSize from "../../../app/utils/hooks/useWindowSize";
import AppSettiings from "./AppSettiings";
import ThemePanel from "./ThemePanel";


const MainBody = ({children}:any) => {

    const isLoading = useSelector(useIsLoading);
    console.log(isLoading)
    const [isToggled,setIsToggled] = useState(false);
    const {width, height} =useWindowSize();  
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
let menuWrapperStyle = isToggled? "menu-toggle" : "";
menuWrapperStyle += !isLoading ? "show" :"";


useEffect(() => {
var body = $('#body');
var html = $('html');
    if(width! < 1200) {
        body.attr("data-layout", "vertical");
        body.attr("data-container", "wide");
    }

    if(width! > 767 && width! < 1200) {
        body.attr("data-sidebar-style", "mini");
    }

    if(width! < 768) {
        body.attr("data-sidebar-style", "overlay");
    }
//   return () => {
//     effect
//   };
}, [width])

var handleMiniSidebar = function() {
    $("ul#menu>li").on('click', function() {
        const sidebarStyle = $('#body').attr('data-sidebar-style');
        if (sidebarStyle === 'mini') {
            // console.log($(this).find('ul'))
            $(this).find('ul').stop()
        }
    })
}
handleMiniSidebar()

var handleMinHeight = function() {
    var win_h = window.outerHeight;
    var win_h = window.outerHeight;
    if (win_h > 0 ? win_h : height) {
        $(".content-body").css("min-height", (win_h + 60) + "px");
    };
}
handleMinHeight()

var handleHeaderHight = function() {
    const headerHight = $('.header').innerHeight();
    $(window).scroll(function() {
        if ($('#body').attr('data-layout') === "horizontal" && $('#body').attr('data-header-position') === "static" && $('#body').attr('data-sidebar-position') === "fixed")
            $(this.window).scrollTop()! >= headerHight! ? $('.deznav').addClass('fixed') : $('.deznav').removeClass('fixed')
    });
}
handleHeaderHight()


  return (
   <>
   <div  id="body" data-typography={typography} data-theme-version={version} data-layout={layout} data-nav-headerbg={headerBg} data-headerbg={navheaderBg} data-sidebar-style={sidebarStyle} data-sidebarbg={sidebarBg} data-sidebar-position={sidebarPosition} data-header-position={headerPosition} data-container={containerLayout} data-direction={direction} data-primary={primary}>

{/* <!--*******************
    Preloader startdirection={direction}
********************--> */}
{<Preloader/>}
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
              {(isToggled || width! < 728) ?<img src={favicon} alt={siteName} width='30'/> :<img src={version === 'dark'? logoDark : logo} alt={siteName} width='150'/>} 
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
					<Link to="" role="button" className="btn btn-secondary mb-2"><i className="las la-calendar scale5 me-3"></i>Filter Periode</Link>
				</div>
   {children}
   
   </div>
        </div>
        <Footer />
      </div>
        <AppSettiings/>
        <ThemePanel/>
    </div>
   </>
  )
}

export default MainBody

