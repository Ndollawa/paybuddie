import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useCompanyDetails,useLandingPageConfig} from '../../app/appConfigSlice'


enum Styles{STYLE_1,STYLE_2, STYLE_3};


const NavBar = () => {

  
const {siteName,logoDark,contact,activeHours}  = useSelector(useCompanyDetails);
const {navStyle} = useSelector(useLandingPageConfig);

    return (
        <>
                <div className="main-menu__logo">

                {
                ((navStyle as Styles) === Styles.STYLE_1) && <><svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-1" viewBox="0 0 317 120">
                        <path d="M259.856,120H0V0H274l43,37.481Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="main-menu__logo__shape-2" viewBox="0 0 317 120">
                        <path d="M259.856,120H0V0H274l43,37.481Z" />
                    </svg></>
                        }

                    <Link to="/">
                        <img src={logoDark} width="140" height="51" alt={siteName} />
                    </Link>
                </div>
                {/* <!-- /.main-menu__logo --> */}
                <div className="main-menu__nav">
                    <ul className="main-menu__list">
                        <li >
                            <NavLink className={({isActive})=> isActive ?"current":""} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"  className={({isActive})=> isActive ?"current":""} >About</NavLink>
                        </li>

                        <li><NavLink to="/services" className={({isActive})=> isActive ?"current":""} >Services</NavLink> </li>
                        {/* <li><a to="#">Pages</a></li> */}
                        <li><NavLink to="/our-team" className={({isActive})=> isActive ?"current":""} >Our Team</NavLink></li>
                        <li><NavLink to="/our-blog" className={({isActive})=> isActive ?"current":""} >News</NavLink></li>
                        <li><NavLink to="/contact" className={({isActive})=> isActive ?"current":""} >Contact</NavLink></li>
                    </ul>
                </div>
                {/* <!-- /.main-menu__nav --> */}
                <div className="main-menu__right">
                    <Link to="#" className="main-menu__toggler mobile-nav__toggler">
                        <i className="fa fa-bars"></i>
                    </Link>
                    <Link to="#" className="main-menu__search search-toggler">
                        <i className="icon-magnifying-glass"></i>
                    </Link>
                    <Link to="/register" className="thm-btn main-menu__btn">Sign Up</Link>
                    {/* <!-- /.thm-btn --> */}
                    {
                (((navStyle as Styles) === Styles.STYLE_1) || ((navStyle as Styles) === Styles.STYLE_3)) &&  <a href={`tel:${contact}`} className="main-menu__contact">
                        <span className="main-menu__contact__icon">
                            <i className="icon-phone"></i>
                        </span>
                        {/* <!-- /.main-menu__contact__icon --> */}
                        <span className="main-menu__contact__text">
                            <strong>{contact}</strong>
                            {activeHours.slice(0,28)}
                        </span>
                    </a>}
                    {/* <!-- /.main-menu__contact --> */}
                </div>
                {/* <!-- /.main-menu__right --> */}
               </>
  )
}

export default React.memo(NavBar)

