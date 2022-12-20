import React from 'react';
import { useSelector } from 'react-redux';
import {useCompanyDetails} from '../../app/appConfigSlice'



const Footer = () => {

  const {siteName,logoDark,email,contact,description,activeHours,facebookHandle,twitterHandle,instagram,whatsapp} = useSelector(useCompanyDetails);



  return (
    <>
              <footer className="main-footer">
            <div className="container">
                <div className="row row-gutter-y-30">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget footer-widget--about">
                            <a href="/" className="footer-widget__logo">
                                <img src={logoDark} alt="finlon" width="140" height="51" />
                            </a>
                            <p className="footer-widget__text">{description}</p>
                            <ul className="list-unstyled footer-widget__info">
                                <li>
                                    <i className="icon-email"></i>
                                    <a href={`mailto:${email}`}>{email}</a>
                                </li>
                                <li>
                                    <i className="icon-telephone"></i>
                                    <a href={`tel:${contact}`}>{contact}</a>
                                </li>
                            </ul>
                            {/* <!-- /.list-unstyled --> */}
                        </div>
                        {/* <!-- /.footer-widget --> */}
                    </div>
                    {/* <!-- /.col-lg-4 --> */}
                    <div className="col-lg-2 col-md-6">
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
                    <div className="col-lg-3 col-md-6">
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
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget footer-widget--newsletter">
                            <h3 className="footer-widget__title">
                                Newsletter
                            </h3>
                            {/* <!-- /.footer-widget__title --> */}
                            <form className="footer-widget__mailchimp">
                                <input type="email" placeholder="Email address" />
                                <p className="footer-widget__mailchimp__text">
                                    <i className="fa fa-check"></i>
                                    I agree to all your terms and policies
                                </p>
                                {/* <!-- /.footer-widget__mailchimp --> */}
                            </form>
                            {/* <!-- /.footer-widget__mailchimp --> */}
                        </div>
                        {/* <!-- /.footer-widget --> */}
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
