import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCompanyDetails, useLandingPageConfig, usePages, useSiteImages } from '../../../../dashboard/pages/Settings/settingsConfigSlice';

const AboutUs = () => {
  const {siteName} = useSelector(useCompanyDetails);
  const {aboutStyle}= useSelector(useLandingPageConfig)
  const {aboutUs} = useSelector(usePages);
  const {aboutUsBg} = useSelector(useSiteImages);
  const startDate = new Date('2022-01-01').getFullYear()
  const endDate =   new Date(Date.now()).getFullYear()
  const yearsExp = endDate- startDate
let aboutUsSection;
switch (aboutStyle) {
case 1:
aboutUsSection = (<section className="about-four pt-120 pb-120">
  <div className="about-four__shape"></div>
  <div className="container">
      <div className="row row-gutter-y-50">
          <div className="col-lg-6 col-sm-12">
              <div className="about-four__content">
                  <div className="block-title text-left">
                      <p className="block-title__tagline">About Us</p>
                      <h2 className="block-title__title">Make Payments and Transactions with ease </h2>
                  </div>
                  <div className="about-four__box">
                      <div className="about-four__box__icon">
                          <i className="icon-loan"></i>
                      </div>
                      <div className="about-four__box__content">
                          <h3 className="about-four__box__title">We’re in this business since 2022 and we provide the best
                              services.</h3>
                      </div>
                  </div>
                  <p className="about-four__text text-justify w-100" dangerouslySetInnerHTML={{__html:aboutUs}}></p>
                  
                  <div className="row row-gutter-y-20">
                      <div className="col-md-6 col-sm-12">
                          <div className="about-four__feature">
                              <div className="about-four__feature__content">
                                  <div className="about-four__feature__icon">
                                      <i className="icon-confirmation"></i>
                                  </div>
                                  <h4 className="about-four__feature__title fs-16">Escrow Services</h4>
                                  
                              </div>
                              <div className="about-four__feature__text text-justify">Our core offering is our escrow service, where we act as a trusted third party, holding funds until both the buyer and seller fulfill their obligations. This ensures that your money is protected, and you can buy or sell with confidence.
                              In the unlikely event of a dispute, {siteName} provides a fair and impartial resolution process.
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                          <div className="about-four__feature">
                              <div className="about-four__feature__content">
                                  <div className="about-four__feature__icon">
                                      <i className="icon-confirmation"></i>
                                  </div>
                                  <h4 className="about-four__feature__title fs-16 flex-no-wrap">Buyer and Seller Protection</h4>
                                  
                              </div>
                              <div className="about-four__feature__text  text-justify">We prioritize the safety and satisfaction of both buyers and sellers. By using {siteName}, buyers can be confident that their funds are protected until they receive the goods or services they paid for. Sellers, on the other hand, can rest assured that they will be paid promptly once the buyer's requirements are met.
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="about-four__btns m-3">
                      <Link to="/about-us" className="thm-btn thm-btn--dark-hover">Discover More</Link>
                  </div>
              </div>
          </div>
          <div className="col-lg-6">
              <div className="about-four__image image-style-1 clearfix">
                   <div className="about-four__image__bg"></div> 
                  <div className="about-four__image-inner">
                  <img src={process.env.REACT_APP_BASE_URL+"uploads/settings/"+aboutUsBg} alt={siteName} />
                  <div className="about-four__image__caption  image-caption caption-right">
                      <h3 className="about-four__image__caption__year">{yearsExp}<i>+</i></h3>
                      <p className="about-four__image__caption__text">Years
                          Experience</p>
                  </div>
                  <div className="about-four__image__floated">{siteName}</div>
              </div>
            </div>
          </div>
        
      </div>
  </div>
</section>)
    break;
  case 2:
    aboutUsSection = (
      <>
      <section className="about-five pt-120 pb-120">
    <div className="about-five__shape-1"></div>
    <div className="about-five__shape-2"></div>
    <div className="about-five__shape-3"></div>
    <div className="container">
        <div className="row row-gutter-y-60">
            <div className="col-lg-6">
                <div className="about-five__image wow fadeInLeft p-5" data-wow-duration="1500ms">
                    <img src={process.env.REACT_APP_BASE_URL+"uploads/settings/"+aboutUsBg} alt={siteName}/>
                    <div className="about-five__image__caption">
                        <div className="about-five__image__caption__shape-1"></div>
                        
                        <div className="about-five__image__caption__shape-2"></div>
                        
                        <div className="about-five__image__caption__shape-3"></div>
                        
                        <h3 className="about-five__image__title">
                            {yearsExp}<i>+</i>
                        </h3>
                        <p className="about-five__image__text m-5">Years Experiecne</p>
                    </div>
                    <div className="about-five__image__floated">{siteName}</div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="about-five__content">
                    <div className="block-title text-left">
                        <p className="block-title__tagline">About Company</p>
                        <h2 className="block-title__title">We Provide Reliable Escrow Services</h2>
                    </div>
                    <h3 className="about-five__subtitle">Why Choose {siteName}: Your Trusted Escrow Partner</h3>
                    
                    <p className="about-five__text" dangerouslySetInnerHTML={{__html:aboutUs}}></p>
                    <div className="team-progress__item">
                        <h4 className="team-progress__title">Our Story: Building Trust in Online Transactions</h4>
                        <div className="team-progress__bar">
                            <div className="team-progress__bar__inner count-bar" data-percent="99%">
                                <div className="team-progress__bar__text count-text">99%</div>
                            </div>
                        </div>
                    </div>
                    <div className="team-progress__item">
                        <h4 className="team-progress__title"></h4>
                        <div className="team-progress__bar">
                            <div className="team-progress__bar__inner count-bar" data-percent="98%">
                                <div className="team-progress__bar__text count-text">98%</div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-gutter-y-30">
                        <div className="col-md-6">
                            <ul className="list-unstyled ml-0 about-two__list">
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    Transparency

                                </li>
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    Reliability
                                </li>
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    Customer Satisfaction
                                </li>
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    Transaction Management
                                </li>
                                {/* <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    Escrow Services

                                </li>
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    Buyer and Seller Protection.
                                </li>
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    Dispute Resolution
                                </li>
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    Transaction Risk Management
                                </li> */}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="about-five__video">
                                <img src={process.env.REACT_APP_BASE_URL+"uploads/settings/"+aboutUsBg} alt={siteName}/>
                                <a href="#" className="video-popup about-five__video__btn">
                                    <i className="fa fa-play"></i>
                                    <span className="ripple"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</>
    )
    break;
  case 3:
    aboutUsSection = (
      <section className="about-six pt-120 pb-120">
    <div className="container">
        <div className="row row-gutter-y-60">
            <div className="col-lg-6">
                <div className="about-six__image">
                    <img src={process.env.REACT_APP_BASE_URL+"uploads/settings/"+aboutUsBg} alt={siteName}/>
                    <div className="about-six__image__caption wow fadeInRight" data-wow-duration="1500ms">
                        <h4 className="about-six__image__caption__year count-box">
                            <span className="count-text" data-stop="20" data-speed="1500"></span>
                        </h4>
                        <p className="about-six__image__caption__text">Seamlessly Transition to Trustworthy Transactions</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="about-six__content">
                    <div className="block-title text-left">
                        <p className="block-title__tagline">About Company</p>
                        <h2 className="block-title__title">We offer a range of services to facilitate secure transactions</h2>
                    </div>
                    <ul className="list-unstyled about-six__list">
                        <li>
                            <i className="fa fa-check-circle"></i>
                            Escrow Services
                        </li>
                        <li>
                            <i className="fa fa-check-circle"></i>
                            Buyer and Seller Protection
                        </li>
                        <li>
                            <i className="fa fa-check-circle"></i>
                            Dispute Resolution
                        </li>
                    </ul>
                    <h3 className="about-six__subtitle">Our Mission: Empowering Safe and Secure Online Commerce</h3>
                    
                    <p className="about-six__text" dangerouslySetInnerHTML={{__html:aboutUs}}></p>
                    <div className="about-six__author">
                        <div className="about-six__author__image">
                            <img src={process.env.REACT_APP_BASE_URL+"uploads/settings/"+aboutUsBg} alt={siteName}/>
                        </div>
                        <div className="about-six__author__name">
                            Kevin Martin
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    )
    break;

  default:
    aboutUsSection = null
    break;
}

  return (
    <>
      {aboutUsSection}
    </>
  )
}

export default React.memo(AboutUs)
