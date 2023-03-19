import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCompanyDetails, useLandingPageConfig, usePages } from '../../../../dashboard/pages/Settings/settingsConfigSlice';

const AboutUs = () => {
  const {siteName} = useSelector(useCompanyDetails);
  const {aboutStyle}= useSelector(useLandingPageConfig)
  const {aboutUs} = useSelector(usePages);
let aboutUsSection;
switch (aboutStyle) {
case 1:
aboutUsSection = (<section className="about-four pt-120 pb-120">
  <div className="about-four__shape"></div>
  <div className="container">
      <div className="row row-gutter-y-50">
          <div className="col-lg-6">
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
                          <h3 className="about-four__box__title">We’re in this business since 1987 and we provide the best
                              services.</h3>
                      </div>
                  </div>
                  <p className="about-four__text">{aboutUs}</p>
                  
                  <div className="row row-gutter-y-20">
                      <div className="col-md-6">
                          <div className="about-four__feature">
                              <div className="about-four__feature__content">
                                  <div className="about-four__feature__icon">
                                      <i className="icon-confirmation"></i>
                                  </div>
                                  <h3 className="about-four__feature__title">Direct card payment</h3>
                                  
                              </div>
                              <div className="about-four__feature__text">Lorem ipsum dolor sit ame ed consectetur nod.
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="about-four__feature">
                              <div className="about-four__feature__content">
                                  <div className="about-four__feature__icon">
                                      <i className="icon-confirmation"></i>
                                  </div>
                                  <h3 className="about-four__feature__title">Direct card payment</h3>
                                  
                              </div>
                              <div className="about-four__feature__text">Lorem ipsum dolor sit ame ed consectetur nod.
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="about-four__btns">
                      <Link to="/about-us" className="thm-btn thm-btn--dark-hover">Discover More</Link>
                  </div>
              </div>
          </div>
          <div className="col-lg-6">
              <div className="about-four__image">
                  <div className="about-four__image__bg"></div>
                  <div className="about-four__image__shape"></div>
                  <img src="assets/images/resources/about-4-1.png" alt="" />
                  <div className="about-four__image__caption">
                      <h3 className="about-four__image__caption__year">25<i>+</i></h3>
                      <p className="about-four__image__caption__text">Years
                          Experience</p>
                  </div>
                  <div className="about-four__image__floated">{siteName}</div>
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
                <div className="about-five__image wow fadeInLeft" data-wow-duration="1500ms">
                    <img src="assets/images/resources/about-5-1.png" alt=""/>
                    <div className="about-five__image__caption">
                        <div className="about-five__image__caption__shape-1"></div>
                        
                        <div className="about-five__image__caption__shape-2"></div>
                        
                        <div className="about-five__image__caption__shape-3"></div>
                        
                        <h3 className="about-five__image__title">
                            25<i>+</i>
                        </h3>
                        <p className="about-five__image__text">Years Experiecne</p>
                    </div>
                    <div className="about-five__image__floated">{siteName}</div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="about-five__content">
                    <div className="block-title text-left">
                        <p className="block-title__tagline">About Company</p>
                        <h2 className="block-title__title">Small business loans for daily expenses</h2>
                    </div>
                    <h3 className="about-five__subtitle">Duis irure dolor lipsum is simply free text available.</h3>
                    
                    <p className="about-five__text">{aboutUs  }</p>
                    <div className="team-progress__item">
                        <h4 className="team-progress__title">Investment Plan</h4>
                        <div className="team-progress__bar">
                            <div className="team-progress__bar__inner count-bar" data-percent="77%">
                                <div className="team-progress__bar__text count-text">77%</div>
                            </div>
                        </div>
                    </div>
                    <div className="team-progress__item">
                        <h4 className="team-progress__title">Consulting Experience</h4>
                        <div className="team-progress__bar">
                            <div className="team-progress__bar__inner count-bar" data-percent="68%">
                                <div className="team-progress__bar__text count-text">68%</div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-gutter-y-30">
                        <div className="col-md-6">
                            <ul className="list-unstyled ml-0 about-two__list">
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    Nsectetur cing elit.

                                </li>
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    Suspe ndisse suscipit sagittis leo.
                                </li>
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    Entum estibulum digni posuere.
                                </li>
                                <li>
                                    <i className="fa fa-arrow-circle-right"></i>
                                    Donec tristique ante dictum rhoncus.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="about-five__video">
                                <img src="assets/images/resources/about-5-v-1.png" alt=""/>
                                <a href="https://www.youtube.com/watch?v=m2b9ZTBlW2k" className="video-popup about-five__video__btn">
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
                    <img src="assets/images/resources/about-6-1.png" alt=""/>
                    <div className="about-six__image__caption wow fadeInRight" data-wow-duration="1500ms">
                        <h4 className="about-six__image__caption__year count-box">
                            <span className="count-text" data-stop="20" data-speed="1500"></span>
                        </h4>
                        <p className="about-six__image__caption__text">Years of
                            practicing</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="about-six__content">
                    <div className="block-title text-left">
                        <p className="block-title__tagline">About Company</p>
                        <h2 className="block-title__title">We repair & improve your credit scores</h2>
                    </div>
                    <ul className="list-unstyled about-six__list">
                        <li>
                            <i className="fa fa-check-circle"></i>
                            Credit repairing
                        </li>
                        <li>
                            <i className="fa fa-check-circle"></i>
                            Credit consulting
                        </li>
                    </ul>
                    <h3 className="about-six__subtitle">Duis irure dolor lipsum is simply free text available.</h3>
                    
                    <p className="about-six__text">There are many variations of passages of lorem ipsum available the
                        majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum
                        is simply free text available.</p>
                    <div className="about-six__author">
                        <div className="about-six__author__image">
                            <img src="assets/images/resources/about-6-2.png" alt=""/>
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
