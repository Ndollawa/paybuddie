import React from 'react';
import { useSelector } from 'react-redux';
import {useCompanyDetails,useSiteImages} from '../../dashboard/pages/Settings/settingsConfigSlice';
import { settingsProps } from '../../../app/utils/props/settingsProps';



const Footer = () => {

  const {siteName,email,contact,description,activeHours,socialMedia:{facebookHandle,twitterHandle,instagram,whatsapp}={}}= useSelector(useCompanyDetails);
  const {logoDark} = useSelector(useSiteImages);

// :settingsProps['companyDetails'] 

  return (
    <>
              <footer className="main-footer footer-top">
            <div className="container">
                <div className="row row-gutter-y-30 justify-content-between">
                    <div className="col-xs-12 col-lg-4 col-md-6 footer-widget-area">
                        <div className="footer-widget footer-widget--about">
                            <a href="/" className="footer-widget__logo">
                                <img src={process.env.REACT_APP_BASE_URL+"/uploads/settings/"+logoDark} alt={siteName} width="150" height="51" />
                            </a>
                            <p className="footer-widget__text s-card-7">{description}</p>
                            <ul className="list-unstyled footer-widget__info">
                              { 
                              email?.map((e:string)=>(
                                <li key={e}>
                                    <i className="icon-email"></i>
                                    <a href={`mailto:${e}`}>{e}</a>
                                </li>
                              )) }
                            
                              { contact?.map((c:string)=>(
                                    <li key={c}>
                                    <i className="icon-telephone"></i>
                                    <a href={`tel:${c}`}>{c}</a>
                                </li>
                                  ))
                                }
                            </ul>
                            {/* <!-- /.list-unstyled --> */}
                        </div>
                        {/* <!-- /.footer-widget --> */}
                    </div>
                    {/* <!-- /.col-lg-4 --> */}
                    <div className="col-xs-12 col-lg-2 col-md-6 footer-widget-area">
                        <div className="footer-widget footer-widget--links">
                            <h3 className="footer-widget__title">
                                Explore
                            </h3>
                            {/* <!-- /.footer-widget__title --> */}
                            <ul className="list-unstyled footer-widget__menu">
                                <li><a href="/about">About</a></li>
                                <li><a href="/services">Our Services</a></li>
                                <li><a href="/blog">Latest News</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                            {/* <!-- /.list-unstyled footer-widget__menu --> */}
                        </div>
                        {/* <!-- /.footer-widget --> */}
                    </div>
                    {/* <!-- /.col-lg-2 --> */}
                    <div className="col-xs-12 col-lg-3 col-md-6 footer-widget-area">
                        <div className="footer-widget footer-widget--time">
                            <h3 className="footer-widget__title">
                                Timing
                            </h3>
                            {/* <!-- /.footer-widget__title --> */}
                            <p className="footer-widget__text">{activeHours}</p>
                            <div className="footer-widget__social">
                            {twitterHandle && <a href={twitterHandle}><i className="fab fa-twitter"></i></a>}
                            {facebookHandle && <a href={facebookHandle}><i className="fab fa-facebook"></i></a>}
                            {whatsapp && <a href={whatsapp}><i className="fab fa-whatsapp"></i></a>} 
                            {instagram && <a href={instagram}><i className="fab fa-instagram"></i></a>} 
                                    </div>
                            {/* <!-- /.footer-widget__social --> */}
                        </div>
                        {/* <!-- /.footer-widget --> */}
                    </div>
                    {/* <!-- /.col-lg-3 --> */}
                    <div className="footer-widget col-xs-12 col-md-6 col-sm-6 col-lg-3 footer-widget-area"><div  className="widget footer-widget"><h3 className="footer-widget__title">Newsletter</h3>
                    <form >
                        <div className="mc4wp-form-fields">
                            <div className="footer-widget__mailchimp">
                                <div className="footer-widget__mailchimp_inner"> 
                            <input type="email" name="email" placeholder="Email address"/> 
                            <input type="submit" value="Send" className="thm-btn"/>
                                </div><p className="footer-widget__mailchimp__text">
                                 <span>I agree to all your terms and policies</span></p></div>
                        </div>
                    </form>
                    </div>
                </div>
                    {/* <!-- /.col-lg-3 --> */}
                </div>
                {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
        </footer>
        {/* <!-- /.main-footer --> */}
        <div className="bottom-footer">
            <div className="container">
                <p className="bottom-footer__text text-center">Copyright &copy; {siteName} 2022 All Rights Reserved.</p>
                
                {/* <!-- /.bottom-footer__text --> */}
            </div>
            {/* <!-- /.container --> */}
        </div>
    </>
  )
}

export default React.memo(Footer)
