import React from 'react'
import { Link } from 'react-router-dom'
import SideNav from './SideBarComponent/SideNav'
import pageProps from '../../../app/utils/props/pageProps'
import { useSelector } from 'react-redux';
import { useCompanyDetails } from '../pages/Settings/settingsConfigSlice';
import { selectCurrentUser } from '../../auth/authSlice';
import useUserImage from '../../../app/utils/hooks/useUserImage';

enum Styles{STYLE_1,STYLE_2, STYLE_3};

const SideBar:React.FC<pageProps> = ({pageData,}:pageProps) => {

     const {siteName} = useSelector(useCompanyDetails);
    const currentUser= useSelector(selectCurrentUser)
    const userImage = useUserImage(currentUser)
    return (
        <>        
    <div className="deznav">
        <div className="deznav-scroll">
            <div className="main-profile">
                <div className="image-bx">
                    <img src={userImage} alt={currentUser.username}/>
                    <Link to="/dashboard/profile/edit"><i className="fa fa-cog" aria-hidden="true"></i></Link>
                </div>
                <h5 className="name"><span className="font-w400">Hello,</span> {(currentUser.firstName && currentUser.lastName)? currentUser.firstName+" "+currentUser.lastName : currentUser.username}</h5>
                <p className="email">{currentUser.email}</p>
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

