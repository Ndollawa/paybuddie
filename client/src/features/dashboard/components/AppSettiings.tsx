import React,{ChangeEvent, FormEvent, FormEventHandler, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useDashboardConfigSettingsMutation } from "../pages/Settings/settingApiSlice";
import { useSettings } from "../pages/Settings/settingsConfigSlice";
import { setDashboardSetting } from '../pages/Settings/settingsConfigSlice';
import $ from 'jquery';

const AppSettiings = () => {
  const settings = useSelector(useSettings)
  const {_id} =settings
  const body = $('body');
  const html = $('html');

  

const dispatch = useDispatch();
const [dashboardConfigSetting,isLoading] = useDashboardConfigSettingsMutation();
  useEffect(()=>{
$('.nav.nav-tabs .nav-link').on('click',(e)=>{
 const tab = e.currentTarget.getAttribute('data-tab');
 for(let i=1; i <4;i++){
  if(tab !== `tab${i}`){
$(`#tab${i}`).removeClass('active show');
$(`[data-tab="tab${i}"]`).removeClass('active');
 }
 e.currentTarget.setAttribute('class','nav-link active');
//  alert(tab)
 $(`#${tab}`).addClass('active show')
}
})
  },[])

//change the theme typography controller
   const typographySelect:FormEventHandler =(e:FormEvent<HTMLInputElement>)=> {
      e.persist();
        const data = {typography:e.currentTarget.value};
        (async()=>{
          try {
               await dashboardConfigSetting({_id,data}).unwrap();
               dispatch(setDashboardSetting(data))
             } catch (error) {
               
             }
       })(); 
    }

    //change the theme version controller
  const  versionSelect:FormEventHandler = (e:FormEvent<HTMLInputElement>) =>{
      e.persist();
      const data = {version:e.currentTarget.value};
    
      (async()=>{
        try {
             await dashboardConfigSetting({_id,data}).unwrap();
             dispatch(setDashboardSetting(data))
           } catch (error) {
             
           }
     })(); 
		
    }
	
	

    //change the sidebar position controller
  const  sidebarPositionSelect:FormEventHandler = (e:FormEvent<HTMLInputElement>)=> {
      e.persist();
       if(e.currentTarget.value === "fixed" && body.attr('data-sidebar-style') === "modern" && body.attr('data-layout') === "vertical" ){
        alert("Sorry, Modern sidebar layout dosen't support fixed position!") 
       }else{
        const data = {layout:e.currentTarget.value};
    
        (async()=>{
          try {
               await dashboardConfigSetting({_id,data}).unwrap();
               dispatch(setDashboardSetting(data))
             } catch (error) {
               
             }
       })(); 
      }
    }

    //change the header position controller
  const  headerPositionSelect:FormEventHandler = (e:FormEvent<HTMLInputElement>) =>{
      e.persist();
      const data = {headerPosition:e.currentTarget.value};
    
      (async()=>{
        try {
             await dashboardConfigSetting({_id,data}).unwrap();
             dispatch(setDashboardSetting(data))
           } catch (error) {
             
           }
     })(); 
    }

    //change the theme direction (rtl, ltr) controller
    const themeDirectionSelect:FormEventHandler =(e:FormEvent<HTMLInputElement>)=> {
      e.persist(); 
      html.attr('dir', e.currentTarget.value);
        html.attr('class', '');
        html.addClass(`${e.currentTarget.value}`);
        const data = {direction:e.currentTarget.value};
    console.log(e.currentTarget.value);
    (async()=>{
       try {
            await dashboardConfigSetting({_id,data}).unwrap();
            dispatch(setDashboardSetting(data))
          } catch (error) {
            
          }
    })();   
    }

    //change the theme layout controller
    const layoutSelect:FormEventHandler=(e:FormEvent<HTMLInputElement>)=> {
      e.persist();
        if(body.attr('data-sidebar-style') === 'overlay') {
    const data = {sidebarStyle:"full",layout:e.currentTarget.value};
    
    (async()=>{
      try {
           await dashboardConfigSetting({_id,data}).unwrap();
           dispatch(setDashboardSetting(data))
         } catch (error) {
           
         }
   })(); 
            return;
        }

        const data = {layout:e.currentTarget.value};
    
        (async()=>{
          try {
               await dashboardConfigSetting({_id,data}).unwrap();
               dispatch(setDashboardSetting(data))
             } catch (error) {
               
             }
       })(); 
    }
    
    //change the container layout controller
  const  containerLayoutSelect:FormEventHandler = (e:FormEvent<HTMLInputElement>)=> {
      e.persist();
        if(e.currentTarget.value === "boxed") {

            if(body.attr('data-layout') === "vertical" && body.attr('data-sidebar-style') === "full") {
                const data = {sidebarStyle:"overlay",containerLayout:e.currentTarget.value};
    
                (async()=>{
                  try {
                       await dashboardConfigSetting({_id,data}).unwrap();
                       dispatch(setDashboardSetting(data))
                     } catch (error) {
                       
                     }
               })();  
                setTimeout(function(){
                    $(window).trigger('resize');
                },200);
                
                return;
            }
            
            
        }

        const data = {containerLayout:e.currentTarget.value};
    
        (async()=>{
          try {
               await dashboardConfigSetting({_id,data}).unwrap();
               dispatch(setDashboardSetting(data))
             } catch (error) {
               
             }
       })(); 
    }
	/* Move LTR to RTL and RTL to LTR */
	
	// var currentURL      = window.location.href; 
	
	// $('#theme_direction').on('change',function(){
	// 	if(currentURL.indexOf('xhtml-rtl') > -1){
	// 		currentURL = currentURL.replace('xhtml-rtl', 'xhtml')
	// 	}else{
	// 		currentURL = currentURL.replace('xhtml', 'xhtml-rtl')
	// 	}
		
	// 	window.location.href = currentURL;
		
	// });

    //change the sidebar style controller
   const sidebarStyleSelect:FormEventHandler = (e:FormEvent<HTMLInputElement>)=> {
      e.persist();
        if(body.attr('data-layout') === "horizontal") {
            if(e.currentTarget.value === "overlay") {
                alert("Sorry! Overlay is not possible in Horizontal layout.");
                return;
            }
        }

        if(body.attr('data-layout') === "vertical") {
            if(body.attr('data-container') === "boxed" && e.currentTarget.value === "full") {
                alert("Sorry! Full menu is not available in Vertical Boxed layout.");
                return;
            }

            if(e.currentTarget.value === "modern" && body.attr('data-sidebar-position') === "fixed") {
                alert("Sorry! Modern sidebar layout is not available in the fixed position. Please change the sidebar position into Static.");
                return;
            }
        }

        const data = {sidebarStyle:e.currentTarget.value};
    
        (async()=>{
          try {
               await dashboardConfigSetting({_id,data}).unwrap();
               dispatch(setDashboardSetting(data))
             } catch (error) {
               
             }
       })(); 

         if(body.attr('data-sidebar-style') === 'icon-hover') {
            $('.deznav').on('hover',function() {
			$('#main-wrapper').addClass('iconhover-toggle'); 
            }, function() {
			$('#main-wrapper').removeClass('iconhover-toggle'); 
            });
        } 
		
	}

    
  const handleRightSidebar = ()=>$('.sidebar-right').toggleClass('show');
  const handleRightSidebarclose = ()=>$('.sidebar-right').removeClass('show');

  	//change the nav-header background controller
    $('input[name="navigation_header"]').on('click',(e)=> {
  //  alert(e.currentTarget.value)  
   const data = {navheaderBg:e.currentTarget.getAttribute('value')};
    
  (async()=>{
 try {
        await dashboardConfigSetting({_id,data}).unwrap();
        dispatch(setDashboardSetting(data))
      } catch (error) {
        
      }
  })(); 

      });
    
      //change the header background controller
      $('input[name="header_bg"]').on('click', (e)=> {      
    const data = {headerBg:e.currentTarget.getAttribute('value')};
(async()=>{
       try {
            await dashboardConfigSetting({_id,data}).unwrap();
            dispatch(setDashboardSetting(data))
          } catch (error) {
            
          }
    })();       });
  
      //change the sidebar background controller
      $('input[name="sidebar_bg"]').on('click', (e)=> { 
    const data = {sidebarBg:e.currentTarget.getAttribute('value')};
(async()=>{
       try {
            await dashboardConfigSetting({_id,data}).unwrap();
            dispatch(setDashboardSetting(data))
          } catch (error) {
            
          }
    })();       });
    
    //change the primary color controller
      $('input[name="primary_bg"]').on('click', (e)=> {
    const data = {primary:e.currentTarget.getAttribute('value')};
(async()=>{
       try {
            await dashboardConfigSetting({_id,data}).unwrap();
            dispatch(setDashboardSetting(data))
          } catch (error) {
            
          }
    })();       });
  
 
  const deleteAllCookie=()=>{
    
  }
  return (
    <>
      <div className="sidebar-right">
        <div className="bg-overlay"></div>
        <Link
          className="sidebar-right-trigger wave-effect wave-effect-x"
          data-bs-toggle="tooltip"
          data-placement="right"
          data-original-title="Change Layout"
          to=""
          role="button"
          onClick={handleRightSidebar}
        >
          <span>
            <i className="fa fa-cog fa-spin"></i>
          </span>
        </Link>
        <Link className="sidebar-close-trigger" to=""  role="button"
          onClick={handleRightSidebarclose}>
          <span>
            <i className="la-times las"></i>
          </span>
        </Link>
        <div className="sidebar-right-inner">
          <h4>
            Pick your style
            <Link
              to=""
              onClick={deleteAllCookie}
              className="btn btn-primary btn-sm pull-right"
              role="button"
              // onClick={handleRightSidebar}
            >
              Delete All Cookie
            </Link>
          </h4>
          <div className="card-tabs">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <Link role="button"
                 data-tab="tab1" 
                  className="nav-link active"
                  to="#tab1"
                  data-bs-toggle="tab"
                >
                  Theme
                </Link>
              </li>
              <li className="nav-item">
                <Link role="button"
                 className="nav-link" data-tab="tab2" to="#tab2" data-bs-toggle="tab">
                  Header
                </Link>
              </li>
              <li className="nav-item">
                <Link role="button"  data-tab="tab3" className="nav-link" to="#tab3" data-bs-toggle="tab">
                  Content
                </Link>
              </li>
            </ul>
          </div>
          <div className="tab-content tab-content-default tabcontent-border">
            <div className="fade tab-pane active show" id="tab1">
              <div className="admin-settings">
                <div className="row">
                  <div className="col-sm-12">
                    <p>Background</p>
                    <select
                      className="default-select form-control"
                      id="theme_version"
                      name="theme_version"
                      onChange={versionSelect}
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <p>Primary Color</p>
                    <div>
                      
                      <span
                        data-placement="top"
                        data-bs-toggle="tooltip"
                        title="Color 1"
                      >
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_1"
                          name="primary_bg"
                          type="radio"
                          value="color_1"
                        />
                        <label
                          htmlFor="primary_color_1"
                          className="bg-label-pattern"
                        ></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_2"
                          name="primary_bg"
                          type="radio"
                          value="color_2"
                        />
                        <label htmlFor="primary_color_2"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_3"
                          name="primary_bg"
                          type="radio"
                          value="color_3"
                        />
                        <label htmlFor="primary_color_3"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_4"
                          name="primary_bg"
                          type="radio"
                          value="color_4"
                        />
                        <label htmlFor="primary_color_4"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_5"
                          name="primary_bg"
                          type="radio"
                          value="color_5"
                        />
                        <label htmlFor="primary_color_5"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_6"
                          name="primary_bg"
                          type="radio"
                          value="color_6"
                        />
                        <label htmlFor="primary_color_6"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_7"
                          name="primary_bg"
                          type="radio"
                          value="color_7"
                        />
                        <label htmlFor="primary_color_7"></label>
                      </span>
                      <span>
                        
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_9"
                          name="primary_bg"
                          type="radio"
                          value="color_9"
                        />
                        <label htmlFor="primary_color_9"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_10"
                          name="primary_bg"
                          type="radio"
                          value="color_10"
                        />
                        <label htmlFor="primary_color_10"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_11"
                          name="primary_bg"
                          type="radio"
                          value="color_11"
                        />
                        <label htmlFor="primary_color_11"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_12"
                          name="primary_bg"
                          type="radio"
                          value="color_12"
                        />
                        <label htmlFor="primary_color_12"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_13"
                          name="primary_bg"
                          type="radio"
                          value="color_13"
                        />
                        <label htmlFor="primary_color_13"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_14"
                          name="primary_bg"
                          type="radio"
                          value="color_14"
                        />
                        <label htmlFor="primary_color_14"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_15"
                          name="primary_bg"
                          type="radio"
                          value="color_15"
                        />
                        <label htmlFor="primary_color_15"></label>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <p>Navigation Header</p>
                    <div>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_1"
                          name="navigation_header"
                          type="radio"
                          value="color_1"
                        />
                        <label
                          htmlFor="nav_header_color_1"
                          className="bg-label-pattern"
                        ></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_2"
                          name="navigation_header"
                          type="radio"
                          value="color_2"
                        />
                        <label htmlFor="nav_header_color_2"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_3"
                          name="navigation_header"
                          type="radio"
                          value="color_3"
                        />

                        <label htmlFor="nav_header_color_3"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_4"
                          name="navigation_header"
                          type="radio"
                          value="color_4"
                        />

                        <label htmlFor="nav_header_color_4"></label>
                      </span>
                      <span>
                        
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_5"
                          name="navigation_header"
                          type="radio"
                          value="color_5"
                        />
                        <label htmlFor="nav_header_color_5"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_6"
                          name="navigation_header"
                          type="radio"
                          value="color_6"
                        />

                        <label htmlFor="nav_header_color_6"></label>
                      </span>
                      <span>
                        
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_7"
                          name="navigation_header"
                          type="radio"
                          value="color_7"
                        />
                        <label htmlFor="nav_header_color_7"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_8"
                          name="navigation_header"
                          type="radio"
                          value="color_8"
                        />
                        <label
                          htmlFor="nav_header_color_8"
                          className="border"
                        ></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_9"
                          name="navigation_header"
                          type="radio"
                          value="color_9"
                        />
                        <label htmlFor="nav_header_color_9"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_10"
                          name="navigation_header"
                          type="radio"
                          value="color_10"
                        />
                        <label htmlFor="nav_header_color_10"></label>
                      </span>
                      <span>
                        
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_11"
                          name="navigation_header"
                          type="radio"
                          value="color_11"
                        />
                        <label htmlFor="nav_header_color_11"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_12"
                          name="navigation_header"
                          type="radio"
                          value="color_12"
                        />
                        <label htmlFor="nav_header_color_12"></label>
                      </span>
                      <span>
                        
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_13"
                          name="navigation_header"
                          type="radio"
                          value="color_13"
                        />
                        <label htmlFor="nav_header_color_13"></label>
                      </span>
                      <span>
                        
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_14"
                          name="navigation_header"
                          type="radio"
                          value="color_14"
                        />
                        <label htmlFor="nav_header_color_14"></label>
                      </span>
                      <span>
                        
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_15"
                          name="navigation_header"
                          type="radio"
                          value="color_15"
                        />
                        <label htmlFor="nav_header_color_15"></label>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <p>Header</p>
                    <div>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_1"
                          name="header_bg"
                          type="radio"
                          value="color_1"
                        />
                        <label
                          htmlFor="header_color_1"
                          className="bg-label-pattern"
                        ></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_2"
                          name="header_bg"
                          type="radio"
                          value="color_2"
                        />
                        <label htmlFor="header_color_2"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_3"
                          name="header_bg"
                          type="radio"
                          value="color_3"
                        />
                        <label htmlFor="header_color_3"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_4"
                          name="header_bg"
                          type="radio"
                          value="color_4"
                        />
                        <label htmlFor="header_color_4"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_5"
                          name="header_bg"
                          type="radio"
                          value="color_5"
                        />
                        <label htmlFor="header_color_5"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_6"
                          name="header_bg"
                          type="radio"
                          value="color_6"
                        />
                        <label htmlFor="header_color_6"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_7"
                          name="header_bg"
                          type="radio"
                          value="color_7"
                        />
                        <label htmlFor="header_color_7"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_8"
                          name="header_bg"
                          type="radio"
                          value="color_8"
                        />
                        <label htmlFor="header_color_8" className="border"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_9"
                          name="header_bg"
                          type="radio"
                          value="color_9"
                        />
                        <label htmlFor="header_color_9"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_10"
                          name="header_bg"
                          type="radio"
                          value="color_10"
                        />
                        <label htmlFor="header_color_10"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_11"
                          name="header_bg"
                          type="radio"
                          value="color_11"
                        />
                        <label htmlFor="header_color_11"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_12"
                          name="header_bg"
                          type="radio"
                          value="color_12"
                        />
                        <label htmlFor="header_color_12"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_13"
                          name="header_bg"
                          type="radio"
                          value="color_13"
                        />
                        <label htmlFor="header_color_13"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_14"
                          name="header_bg"
                          type="radio"
                          value="color_14"
                        />
                        <label htmlFor="header_color_14"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_15"
                          name="header_bg"
                          type="radio"
                          value="color_15"
                        />
                        <label htmlFor="header_color_15"></label>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <p>Sidebar</p>
                    <div>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_1"
                          name="sidebar_bg"
                          type="radio"
                          value="color_1"
                        />
                        <label
                          htmlFor="sidebar_color_1"
                          className="bg-label-pattern"
                        ></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_2"
                          name="sidebar_bg"
                          type="radio"
                          value="color_2"
                        />
                        <label htmlFor="sidebar_color_2"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_3"
                          name="sidebar_bg"
                          type="radio"
                          value="color_3"
                        />

                        <label htmlFor="sidebar_color_3"></label>
                      </span>
                      <span>
                        
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_4"
                          name="sidebar_bg"
                          type="radio"
                          value="color_4"
                        />
                        <label htmlFor="sidebar_color_4"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_5"
                          name="sidebar_bg"
                          type="radio"
                          value="color_5"
                        />
                        <label htmlFor="sidebar_color_5"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_6"
                          name="sidebar_bg"
                          type="radio"
                          value="color_6"
                        />
                        <label htmlFor="sidebar_color_6"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_7"
                          name="sidebar_bg"
                          type="radio"
                          value="color_7"
                        />
                        <label htmlFor="sidebar_color_7"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_8"
                          name="sidebar_bg"
                          type="radio"
                          value="color_8"
                        />
                        <label htmlFor="sidebar_color_8" className="border"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_9"
                          name="sidebar_bg"
                          type="radio"
                          value="color_9"
                        />
                        <label htmlFor="sidebar_color_9"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_10"
                          name="sidebar_bg"
                          type="radio"
                          value="color_10"
                        />
                        <label htmlFor="sidebar_color_10"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_11"
                          name="sidebar_bg"
                          type="radio"
                          value="color_11"
                        />
                        <label htmlFor="sidebar_color_11"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_12"
                          name="sidebar_bg"
                          type="radio"
                          value="color_12"
                        />
                        <label htmlFor="sidebar_color_12"></label>
                      </span>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_13"
                          name="sidebar_bg"
                          type="radio"
                          value="color_13"
                        />
                        <label htmlFor="sidebar_color_13"></label>
                      </span>
                      <span>
                        
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_14"
                          name="sidebar_bg"
                          type="radio"
                          value="color_14"
                        />
                        <label htmlFor="sidebar_color_14"></label>
                      </span>
                      <span>
                        
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_15"
                          name="sidebar_bg"
                          type="radio"
                          value="color_15"
                        />
                        <label htmlFor="sidebar_color_15"></label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade tab-pane" id="tab2">
              <div className="admin-settings">
                <div className="row">
                  <div className="col-sm-6">
                    <p>Layout</p>
                    <select
                      className="default-select form-control"
                      id="theme_layout"
                      name="theme_layout"
                      onChange={layoutSelect}
                    >
                      <option value="vertical">Vertical</option>
                      <option value="horizontal">Horizontal</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <p>Header position</p>
                    <select
                      className="default-select form-control"
                      id="header_position"
                      name="header_position"
                      onChange={headerPositionSelect}
                    >
                      <option value="static">Static</option>
                      <option value="fixed">Fixed</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <p>Sidebar</p>
                    <select
                      className="default-select form-control"
                      id="sidebar_style"
                      name="sidebar_style"
                      onChange={sidebarStyleSelect}
                    >
                      <option value="full">Full</option>
                      <option value="mini">Mini</option>
                      <option value="compact">Compact</option>
                      <option value="modern">Modern</option>
                      <option value="overlay">Overlay</option>
                      <option value="icon-hover">Icon-hover</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <p>Sidebar position</p>
                    <select
                      className="default-select form-control"
                      id="sidebar_position"
                      name="sidebar_position"
                      onChange={sidebarPositionSelect}
                    >
                      <option value="static">Static</option>
                      <option value="fixed">Fixed</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade tab-pane" id="tab3">
              <div className="admin-settings">
                <div className="row">
                  <div className="col-sm-6">
                    <p>Container</p>
                    <select
                      className="default-select form-control"
                      id="container_layout"
                      name="container_layout"
                      onChange={containerLayoutSelect}
                    >
                      <option value="wide">Wide</option>
                      <option value="boxed">Boxed</option>
                      <option value="wide-boxed">Wide Boxed</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <p>Direction</p>
                    <select
                      className="default-select form-control"
                      id="theme_direction"
                      name="theme_direction"
                      onChange={themeDirectionSelect}
                    >
                      <option value="ltr">LTR</option>
                      <option value="rtl">RTL</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <p>Body Font</p>
                    <select
                      className="default-select form-control"
                      id="typography"
                      name="typography"
                      onChange={typographySelect}
                    >
                      <option value="roboto">Roboto</option>
                      <option value="poppins">Poppins</option>
                      <option value="opensans">Open Sans</option>
                      <option value="HelveticaNeue">HelveticaNeue</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSettiings;
