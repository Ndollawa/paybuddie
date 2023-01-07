import React from 'react'
import { Link } from 'react-router-dom'
import SideNav from './SideBarComponent/SideNav'
import pageProps from '../../../app/utils/props/pageProps'
import { useSelector } from 'react-redux';
import { useCompanyDetails } from '../pages/Settings/settingsConfigSlice';

enum Styles{STYLE_1,STYLE_2, STYLE_3};

const SideBar:React.FC<pageProps> = ({pageData,}:pageProps) => {

     const {siteName,logo,logoDark,email,contact,address,activeHours,facebookHandle,twitterHandle,instagram,whatsapp} = useSelector(useCompanyDetails);
 
    return (
        <>        
    <div className="deznav">
        <div className="deznav-scroll">
            <div className="main-profile">
                <div className="image-bx">
                    <img src="dashboard-assets/images/Untitled-1.jpg" alt=""/>
                    <Link to=""><i className="fa fa-cog" aria-hidden="true"></i></Link>
                </div>
                <h5 className="name"><span className="font-w400">Hello,</span> Marquez</h5>
                <p className="email">marquezzzz@mail.com</p>
            </div>
            <SideNav/>
            <div className="copyright bottom-0">
                <p><strong>{siteName}</strong><br/> © 2022 -  All Rights Reserved</p>
                <p className="fs-12">Made with <span className="fa fa-heart"></span> by <a href="mailto:foundictsolutions@gmail.com">Found ICT Solutions</a></p>
            </div>
        </div>
    </div>
               </>
  )
}

export default React.memo(SideBar)

