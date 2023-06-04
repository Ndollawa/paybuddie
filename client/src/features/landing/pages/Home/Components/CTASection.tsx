import React from 'react'
import { useSelector } from 'react-redux';
import {useCompanyDetails,useLandingPageConfig} from '../../../../dashboard/pages/Settings/settingsConfigSlice';


const CTASection = () => {
    const {siteName} = useSelector(useCompanyDetails); 
  return (
    <>
            <section className="call-to-action-two">
            <div className="call-to-action-two-edge"></div>
            <div className="rhombus"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="000ms" data-wow-duration="1500ms">
                        <div className="call-to-action-two__image">
                            <img src="assets/images/backgrounds/cta-2-1-bg.png" alt="" />
                        </div>
                        {/* <!-- /.call-to-action-two__image --> */}
                    </div>
                    {/* <!-- /.col-lg-6 --> */}
                    <div className="col-lg-6">
                        <div className="call-to-action-two__content">
                            <ul className="list-unstyled call-to-action-two__list">
                                <li>Simple</li>
                                <li>Transparent</li>
                                <li>Secure</li>
                            </ul>
                            {/* <!-- /.call-to-action-two__list --> */}
                            <h3 className="call-to-action-two__title mb-3">All Payments made easy</h3>
                            <p className='text-white text-justify'>
                                Experience the convenience and security of online transactions with {siteName}. Whether you're buying or selling, we're here to make your transactions smooth, secure, and worry-free.
Get started with {siteName} today and join thousands of satisfied users who trust us with their online transactions.</p>
                            {/* <!-- /.call-to-action-two__title --> */}
                            <a href="auth/register" className="thm-btn">Sign Up Now</a>
                            {/* <!-- /.thm-btn --> */}
                            <span className="call-to-action-two__arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.49 76.07">
                                    <path d="M153.74,101.43l1.56-.21c1-.12,2.49-.38,4.44-.53s4.28-.35,7-.49l4.29-.07c1.51,0,3.1.05,4.75.13,3.31.18,6.89.43,10.65,1a116,116,0,0,1,11.73,2.27,123,123,0,0,1,12.26,3.66,120.32,120.32,0,0,1,23.84,11.47,113.33,113.33,0,0,1,10.53,7.41c1.61,1.33,3.21,2.62,4.7,4s2.93,2.69,4.31,4,2.62,2.73,3.87,4,2.34,2.67,3.39,4,2.06,2.55,2.93,3.8,1.74,2.41,2.48,3.54l2,3.21c.61,1,1.12,2,1.6,2.8s.9,1.61,1.22,2.29l.84,1.73c.45.93.68,1.43.68,1.43a.95.95,0,0,1-1.62,1l0,0s-.33-.44-.93-1.27-1.43-2.06-2.59-3.57l-1.87-2.52c-.71-.89-1.47-1.86-2.28-2.9-1.63-2.06-3.55-4.32-5.68-6.75-1.07-1.21-2.24-2.41-3.4-3.71s-2.44-2.56-3.79-3.82c-2.61-2.62-5.53-5.2-8.62-7.8-.77-.65-1.58-1.26-2.38-1.91s-1.61-1.28-2.45-1.88l-2.52-1.88L232.07,122a126.44,126.44,0,0,0-11-6.71,117.91,117.91,0,0,0-11.65-5.54,106.37,106.37,0,0,0-11.85-4c-1-.29-2-.54-2.93-.77l-2.88-.69c-1.93-.37-3.8-.79-5.65-1-3.68-.63-7.2-.93-10.45-1.16-1.63-.09-3.19-.1-4.67-.15l-4.22.06-3.7.21c-1.14.07-2.18.22-3.12.31-1.87.17-3.37.44-4.38.6l-1.56.24a.94.94,0,0,1-1.08-.78,1,1,0,0,1,.79-1.09h0" transform="translate(-152.92 -100.13)" />
                                    <path d="M280.58,151.16c-.13,1-.19,1.94-.26,2.9s-.06,1.92-.07,2.89a50.5,50.5,0,0,0,.37,5.77c.12,1,.27,1.91.44,2.86s.38,1.89.6,2.83c.47,1.86,1,3.7,1.65,5.51a1.71,1.71,0,0,1-2.18,2.18l-.26-.09-2.46-.85c-.82-.28-1.64-.55-2.45-.85s-1.64-.57-2.44-.87l-2.44-.89c-1.61-.6-3.21-1.27-4.78-2a33,33,0,0,1-4.62-2.58,1.07,1.07,0,0,1-.25-1.44,1,1,0,0,1,.8-.48h0a21.85,21.85,0,0,1,2.7.26c.88.13,1.76.3,2.62.51a37.62,37.62,0,0,1,5.08,1.54q2.48.93,4.89,2c1.61.73,3.19,1.52,4.75,2.35l-2.44,2.09c-.18-1-.33-2-.47-3s-.23-2-.34-3-.17-2-.25-3-.13-2-.18-3-.07-2-.09-3l0-3c0-1-.06-2,0-3l0-3v0a1,1,0,0,1,1.08-.91,1,1,0,0,1,1,1s0,0,0,.08" transform="translate(-152.92 -100.13)" />
                                </svg></span>
                            
                            {/* <!-- /.call-to-action-two__arrow --> */}
                        </div>
                        {/* <!-- /.call-to-action-two__content --> */}
                    </div>
                    {/* <!-- /.col-lg-6 --> */}
                </div>
                {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
        </section>
    </>
  )
}

export default CTASection