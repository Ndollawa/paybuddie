import React from 'react';
import { useSelector } from 'react-redux';
import {useCompanyDetails} from '../../app/appConfigSlice'

const MobileNav = () => {
    const {siteName,logo,email,contact,description,activeHours,facebookHandle,twitterHandle,instagram,whatsapp} = useSelector(useCompanyDetails);
  return (
    <div className="mobile-nav__wrapper">
    <div className="mobile-nav__overlay mobile-nav__toggler"></div>
    
    {/* <!-- /.mobile-nav__overlay --> */}
    <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>

        <div className="logo-box">
            <a href="/" aria-label="logo image"><img src={logo} width="155" alt="" /></a>
        </div>
        
        {/* <!-- /.logo-box --> */}
        <div className="mobile-nav__container"></div>
        
        {/* <!-- /.mobile-nav__container --> */}

        <ul className="mobile-nav__contact list-unstyled">
            <li>
                <i className="icon-email"></i>
                 
            <a href={`mailto:${email}`}><i className="icon-email"></i> {email}</a>
            </li>
            <li>
                <i className="icon-telephone"></i>  
            <a href={`mailto:${contact}`}><i className="icon-contact"></i> {email}</a>
            </li>
        </ul>
        {/* <!-- /.mobile-nav__contact --> */}

        <div className="mobile-nav__social">
        {twitterHandle && <a href={twitterHandle}><i className="fab fa-twitter"></i></a>}
        {facebookHandle && <a href={facebookHandle}><i className="fab fa-facebook"></i></a>}
        {whatsapp && <a href={whatsapp}><i className="fab fa-whatsapp"></i></a>} 
        {instagram && <a href={instagram}><i className="fab fa-instagram"></i></a>} 
        </div>
        {/* <!-- /.mobile-nav__social --> */}

    </div>
    
    {/* <!-- /.mobile-nav__content --> */}
</div>
  )
}

export default React.memo(MobileNav)
