import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import { useSelector } from 'react-redux';
import {useCompanyDetails,useLandingPageConfig} from '../../dashboard/pages/Settings/settingsConfigSlice';
import { selectCurrentUser } from '../../auth/authSlice';

 enum Styles{STYLE_1,STYLE_2, STYLE_3};

const Nav = () => {
   const {email,address,facebookHandle,twitterHandle,instagram,whatsapp}   = useSelector(useCompanyDetails); 
const currentUser = useSelector(selectCurrentUser)
    const {navStyle} = useSelector(useLandingPageConfig);
  return (
    <>
   
   
   {
   ((((navStyle as Styles) === Styles.STYLE_1)) || (((navStyle as Styles) === Styles.STYLE_2))) && <div className={((navStyle as Styles) === Styles.STYLE_1)?"topbar":((navStyle as Styles) === Styles.STYLE_2)?  "topbar topbar--two": "topbar"}>
    <div className={((navStyle as Styles) === Styles.STYLE_1)? "container-fluid":((navStyle as Styles) === Styles.STYLE_2)?  "container": "container-fluid"}>
        <div className="topbar__info">
            <Link to="#"><i className="icon-pin"></i>{address}</Link>
            
            <a href={`mailto:${email}`}><i className="icon-email"></i> {email}</a>
        </div>
        {/* 
        // <!-- /.topbar__info --> */}
       {!navStyle && <div className="topbar__links">
          {!currentUser && <><Link to="/auth/login">Login</Link> <Link to="/auth/register">Sign Up</Link></>}
            <Link to="/blog">Company News</Link>
            <Link to="/faqs">FAQs</Link>
        </div>}
        {/* 
        // <!-- /.topbar__links --> */}
     <div className="topbar__social">
           {twitterHandle && <Link to={twitterHandle}><i className="fab fa-twitter"></i></Link>}
           {facebookHandle && <Link to={facebookHandle}><i className="fab fa-facebook"></i></Link>}
           {whatsapp && <Link to={whatsapp}><i className="fab fa-whatsapp"></i></Link>} 
           {instagram && <Link to={instagram}><i className="fab fa-instagram"></i></Link>} 
        </div>
        {/* <!-- /.topbar__social --> */}
    </div> 
    {/* <!-- /.container-fluid --> */}
</div> }
       <nav className={((navStyle as Styles) === Styles.STYLE_1)? "main-menu":((navStyle as Styles) === Styles.STYLE_2)?  "main-menu main-menu--two": "main-menu main-menu--three"}>
            <div className={((navStyle as Styles) === Styles.STYLE_1)? "container-fluid":((navStyle as Styles) === Styles.STYLE_2)?  "container": "container-fluid"}>
                {
                ((navStyle as Styles) === Styles.STYLE_2)?
                <div className='main-menu--two__inner'><NavBar /></div>:<NavBar />
                }
            </div>
            {/* <!-- /.container-fluid --> */}
        </nav>
        {/* <!-- /.main-menu --> */}

        <div className={((navStyle as Styles) === Styles.STYLE_1)? "stricky-header stricked-menu main-menu":((navStyle as Styles) === Styles.STYLE_2)?  "stricky-header stricked-menu main-menu main-menu--two": "stricky-header stricked-menu main-menu main-menu--three"}>
            <div className="sticky-header__content"></div>
            {/* <!-- /.sticky-header__content --> */}
        </div>
    </>
  )
}

export default React.memo(Nav)