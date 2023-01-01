import React from 'react';
import { useSelector } from 'react-redux';
import { useLandingPageConfig } from '../../../../app/appConfigSlice';

const WhatWeOffer = () => {
const {serviceStyle} = useSelector(useLandingPageConfig)
let WhatWeOfferSection;

switch (serviceStyle) {
  case 1:
    WhatWeOfferSection =(
      <> <section className="service-two mb--120">
    <div className="service-two__shape"></div>
    <div className="container">
        <div className="row row-gutter-y-30">
            <div className="col-lg-4 col-md-12">
                <div className="service-card-two">
                    <div className="service-card-two__shape"></div>
                    <div className="service-card-two__icon">
                        <i className="icon-smartphone"></i>
                    </div>
                    <div className="service-card-two__content">
                        <h3 className="service-card-two__title">
                            <a href="services-details.html">Safe and Secure
                                Payments</a>
                        </h3>
                        <p className="service-card-two__text">Duis aute irure dolor lipsum free is simply free text the
                            local markets in reprehenderit.</p>
                        <a href="services-details.html" className="service-card-two__link">More Detail</a>
                        
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="service-card-two">
                    <div className="service-card-two__shape"></div>
                    <div className="service-card-two__icon">
                        <i className="icon-operation"></i>
                    </div>
                    <div className="service-card-two__content">
                        <h3 className="service-card-two__title">
                            <a href="services-details.html">Quick Payment
                                Process</a>
                        </h3>
                        <p className="service-card-two__text">Duis aute irure dolor lipsum free is simply free text the
                            local markets in reprehenderit.</p>
                        <a href="services-details.html" className="service-card-two__link">More Detail</a>
                        
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="service-card-two">
                    <div className="service-card-two__shape"></div>
                    <div className="service-card-two__icon">
                        <i className="icon-payment-gateway"></i>
                    </div>
                    <div className="service-card-two__content">
                        <h3 className="service-card-two__title">
                            <a href="services-details.html">No Prepayment
                                Charges</a>
                        </h3>
                        <p className="service-card-two__text">Duis aute irure dolor lipsum free is simply free text the
                            local markets in reprehenderit.</p>
                        <a href="services-details.html" className="service-card-two__link">More Detail</a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="video-one video-one--home pt-240 pb-120" style={{backgroundImage: "url('assets/images/backgrounds/video-bg-1-1.jpg')"}}>
    <div className="video-one__shape-edge"></div>
    <div className="rhombus"></div>
    <div className="container">
        <div className="row row-gutter-y-50">
            <div className="col-lg-6">
                <div className="video-one__content">
                    <a href="https://www.youtube.com/watch?v=m2b9ZTBlW2k" className="video-popup video-one__btn">
                        <i className="fa fa-play"></i>
                        <span className="ripple"></span>
                    </a>
                    <h3 className="video-one__title">Hundreds of customers <br/> trust our company</h3>
                </div>
            </div>
            <div className="col-lg-6">
                <ul className="list-unstyled video-one__list">
                    <li>
                        <i className="icon-tick"></i>
                        Expert & Certified
                    </li>
                    <li>
                        <i className="icon-tick"></i>
                        Quality Services
                    </li>
                    <li>
                        <i className="icon-tick"></i>
                        Quick Loan Order
                    </li>
                    <li>
                        <i className="icon-tick"></i>
                        Status Monitor
                    </li>
                    <li>
                        <i className="icon-tick"></i>
                        Status Monitor
                    </li>
                    <li>
                        <i className="icon-tick"></i>
                        Easy to Use
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
</>)
    break;
  case 2:
    WhatWeOfferSection =(
      <section className="service-five pt-120 pb-120">
    <div className="container">
        <div className="service-five__top">
            <div className="row">
                <div className="col-lg-6">
                    <div className="block-title text-left">
                        <p className="block-title__tagline">What We’re Offering</p>
                        <h2 className="block-title__title">We provide best services for your credit</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <p className="service-five__text">Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit
                        sagitis leo sit.</p>
                </div>
            </div>
        </div>
        <div className="row row-gutter-y-30">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                <div className="service-card-five">
                    <div className="service-card-five__icon">
                        <i className="icon-credit-cards"></i>
                    </div>
                    <h3 className="service-card-five__title">
                        <a href="credit-repair.html">Credit Repair</a>
                    </h3>
                    
                    <p className="service-card-five__text">Lorem ipsum is free text used by neque est qui lorem.</p>
                    
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                <div className="service-card-five">
                    <div className="service-card-five__icon">
                        <i className="icon-audit"></i>
                    </div>
                    <h3 className="service-card-five__title">
                        <a href="credit-repair.html">Credit Audit</a>
                    </h3>
                    <p className="service-card-five__text">Lorem ipsum is free text used by neque est qui lorem.</p>
                    
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                <div className="service-card-five">
                    <div className="service-card-five__icon">
                        <i className="icon-portfolio"></i>
                    </div>
                    <h3 className="service-card-five__title">
                        <a href="credit-repair.html">Business</a>
                    </h3>
                    <p className="service-card-five__text">Lorem ipsum is free text used by neque est qui lorem.</p>
                    
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                <div className="service-card-five">
                    <div className="service-card-five__icon">
                        <i className="icon-education"></i>
                    </div>
                    <h3 className="service-card-five__title">
                        <a href="credit-repair.html">Education</a>
                    </h3>
                    <p className="service-card-five__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam tempore veniam dolorum, soluta repellendus officiis numquam, labore assumenda praesentium natus autem iusto quasi harum. Architecto fuga dignissimos quam a.</p>
                </div>
            </div>
        </div>
    </div>
</section>
    )
    break;
  case 3:
    WhatWeOfferSection =(
      <section className="service-one pt-120 pb-140">
      <img src="assets/images/shapes/service-h-1.png" className="service-one__icon-1" alt="" />
      <img src="assets/images/shapes/service-h-2.png" className="service-one__icon-2" alt="" />
      <img src="assets/images/shapes/service-h-3.png" className="service-one__icon-3" alt="" />
      <div className="container">
          <div className="block-title text-center">
              <p className="block-title__tagline">What We’re Offering</p>
              <h2 className="block-title__title">We provide best services <br/> For your Payments </h2>
          </div>
          <div className="row row-gutter-y-50">
              <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="service-card">
                      <div className="service-card__image">
                          <img src="assets/images/services/services-1-1.png" alt="Auto Car Loan" />
                          <a href="services-details.html"></a>
                      </div>
                      <div className="service-card__content">
                          <div className="service-card__content__inner">
                              <div className="service-card__icon">
                                  <i className="icon-car"></i>
                              </div>
                              <h3 className="service-card__title">
                                  <a href="services-details.html">Crypto Purchase</a>
                              </h3>
                              <p className="service-card__text">We provide low interest many variations of passages of lorem ipsum have
                                  some.</p>
                              <a href="services-details.html" className="service-card__link">
                                  <i className="fa fa-angle-right"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="service-card">
                      <div className="service-card__image">
                          <img src="assets/images/services/services-1-2.png" alt="Wedding Loan" />
                          <a href="services-details.html"></a>
                      </div>
                      <div className="service-card__content">
                          <div className="service-card__content__inner">
                              <div className="service-card__icon">
                                  <i className="icon-diamond"></i>
                              </div>
                              <h3 className="service-card__title">
                                  <a href="services-details.html">Cash Transfer</a>
                              </h3>
                              <p className="service-card__text">We provide low interest many variations of passages of lorem ipsum have
                                  some.</p>
                              <a href="services-details.html" className="service-card__link">
                                  <i className="fa fa-angle-right"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="service-card">
                      <div className="service-card__image">
                          <img src="assets/images/services/services-1-3.png" alt="Property Loan" />
                          <a href="services-details.html"></a>
                      </div>
                      <div className="service-card__content">
                          <div className="service-card__content__inner">
                              <div className="service-card__icon">
                                  <i className="icon-house"></i>
                              </div>
                              <h3 className="service-card__title">
                                  <a href="services-details.html">Bil Payments</a>
                              </h3>
                              <p className="service-card__text">we provide low interest many variations of passages of lorem ipsum have
                                  some.</p>
                              <a href="services-details.html" className="service-card__link">
                                  <i className="fa fa-angle-right"></i>
                              </a>
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
    WhatWeOfferSection =(
      <> <section className="service-two mb--120">
    <div className="service-two__shape"></div>
    <div className="container">
        <div className="row row-gutter-y-30">
            <div className="col-lg-4 col-md-12">
                <div className="service-card-two">
                    <div className="service-card-two__shape"></div>
                    <div className="service-card-two__icon">
                        <i className="icon-smartphone"></i>
                    </div>
                    <div className="service-card-two__content">
                        <h3 className="service-card-two__title">
                            <a href="services-details.html">Safe and Secure
                                Payments</a>
                        </h3>
                        <p className="service-card-two__text">Duis aute irure dolor lipsum free is simply free text the
                            local markets in reprehenderit.</p>
                        <a href="services-details.html" className="service-card-two__link">More Detail</a>
                        
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="service-card-two">
                    <div className="service-card-two__shape"></div>
                    <div className="service-card-two__icon">
                        <i className="icon-operation"></i>
                    </div>
                    <div className="service-card-two__content">
                        <h3 className="service-card-two__title">
                            <a href="services-details.html">Quick Payment
                                Process</a>
                        </h3>
                        <p className="service-card-two__text">Duis aute irure dolor lipsum free is simply free text the
                            local markets in reprehenderit.</p>
                        <a href="services-details.html" className="service-card-two__link">More Detail</a>
                        
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="service-card-two">
                    <div className="service-card-two__shape"></div>
                    <div className="service-card-two__icon">
                        <i className="icon-payment-gateway"></i>
                    </div>
                    <div className="service-card-two__content">
                        <h3 className="service-card-two__title">
                            <a href="services-details.html">No Prepayment
                                Charges</a>
                        </h3>
                        <p className="service-card-two__text">Duis aute irure dolor lipsum free is simply free text the
                            local markets in reprehenderit.</p>
                        <a href="services-details.html" className="service-card-two__link">More Detail</a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="video-one video-one--home pt-240 pb-120" style={{backgroundImage: "url('assets/images/backgrounds/video-bg-1-1.jpg')"}}>
    <div className="video-one__shape-edge"></div>
    <div className="rhombus"></div>
    <div className="container">
        <div className="row row-gutter-y-50">
            <div className="col-lg-6">
                <div className="video-one__content">
                    <a href="https://www.youtube.com/watch?v=m2b9ZTBlW2k" className="video-popup video-one__btn">
                        <i className="fa fa-play"></i>
                        <span className="ripple"></span>
                    </a>
                    <h3 className="video-one__title">Hundreds of customers <br/> trust our company</h3>
                </div>
            </div>
            <div className="col-lg-6">
                <ul className="list-unstyled video-one__list">
                    <li>
                        <i className="icon-tick"></i>
                        Expert & Certified
                    </li>
                    <li>
                        <i className="icon-tick"></i>
                        Quality Services
                    </li>
                    <li>
                        <i className="icon-tick"></i>
                        Quick Loan Order
                    </li>
                    <li>
                        <i className="icon-tick"></i>
                        Status Monitor
                    </li>
                    <li>
                        <i className="icon-tick"></i>
                        Status Monitor
                    </li>
                    <li>
                        <i className="icon-tick"></i>
                        Easy to Use
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
</>)
    break;
}

  return (
  <>{WhatWeOfferSection}</>  
  )
}

export default WhatWeOffer