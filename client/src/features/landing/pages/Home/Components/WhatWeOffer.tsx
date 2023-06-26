import React from 'react';
import { useSelector } from 'react-redux';
import {  useCompanyDetails,useLandingPageConfig } from '../../../../dashboard/pages/Settings/settingsConfigSlice';

import { useGetServicesQuery } from '../../../../dashboard/pages/Service/servicesApiSlice'
import serviceProps from '../../../../../app/utils/props/serviceProps'


const WhatWeOffer = () => {
const {
    whatWeOfferStyle} = useSelector(useLandingPageConfig)
const {siteName} = useSelector(useCompanyDetails);
let WhatWeOfferSection,sec1;
const { services } = useGetServicesQuery("servicesList", {
            selectFromResult: ({ data }) => ({
              services: data?.ids?.map((id:string)=>data?.entities[id])		 
            }),
            }) 
switch (whatWeOfferStyle) {
  case 1:
    WhatWeOfferSection = sec1 =(
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
                          <h3 className="service-card-two__title fs-18">
                              <a href="/services">Safe and Secure
                                  Payments</a>
                          </h3>
                          <p className="service-card-two__text text-justify">By offering robust escrow services, we enable buyers to confidently purchase goods and services, knowing that their funds are safeguarded until their requirements are met. Likewise, sellers can be assured that they will receive timely payment once they fulfill their obligations. </p>
                          {/* <a href="" className="service-card-two__link">More Detail</a> */}
                          
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
                          <h3 className="service-card-two__title fs-18">
                              <a href="/services">Customer Support</a>
                          </h3>
                          <p className="service-card-two__text text-justify">Our dedicated customer support team is available to assist you throughout your journey with {siteName}. Whether you have questions, need guidance, or encounter any issues, we're here to help
                          We prioritize transparency, reliability, and customer satisfaction to deliver an exceptional experience to our users. .</p>
                          {/* <a href="/services" className="service-card-two__link">More Detail</a> */}
                          
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
                          <h3 className="service-card-two__title fs-18">
                              <a href="/services">User-Friendly Interface</a>
                          </h3>
                          <p className="service-card-two__text text-justify">Our platform is designed to be intuitive and user-friendly, making it easy for both experienced and first-time users to navigate and understand the process.
                          Our mission is to facilitate smooth, worry-free transactions that benefit everyone involved.</p>
                          {/* <a href="/services" className="service-card-two__link">More Detail</a> */}
                          
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
                          Quality Services
                      </li>
                      <li>
                          <i className="icon-tick"></i>
                          Dispute Resolution
                      </li>
                      <li>
                          <i className="icon-tick"></i>
                          Dedicated Support
                      </li>
                      <li>
                          <i className="icon-tick"></i>
                          Easy to Use
                      </li>
                      <li>
                          <i className="icon-tick"></i>
                          Expert & Certified : Dedicated to Ensuring Smooth Transactions
                      </li>
                      <li>
                          <i className="icon-tick"></i>
                          Transparency, Reliability, and Customer Satisfaction
                      </li>
                      <li>
                          <i className="icon-tick"></i>
                          Empowering Safe and Secure Online Commerce
                      </li>
                      <li>
                          <i className="icon-tick"></i>
                          Building Trust in Online Transactions
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
                        <h2 className="block-title__title">We provide best services for your Escrow needs</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <p className="service-five__text">Whether you're buying or selling, {siteName} is here to make your transactions smooth, convenient, and worry-free.</p>
                </div>
            </div>
        </div>
        <div className="row row-gutter-y-30  gap-3">
            {
                services?.map((service:serviceProps)=>(
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                <div className="service-card-five">
                    <div className="service-card-five__icon">
                        <i className={service?.icon}></i>
                    </div>
                    <h3 className="service-card-five__title">
                        <a href={`/services/${service._id}`}>{service?.title}</a>
                    </h3>
                    <p className="service-card-five__text s-card" >{service?.description}</p>
                    <a className="readmore-link" href={`/services/${service._id}`}>Read More</a>
                    
                </div>
            </div>
           ))
            }
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
              <h2 className="block-title__title">We provide best services <br/> For your Escrow Payments </h2>
          </div>
          <div className="row row-gutter-y-50 mt-3">
          {
                services?.map((service:serviceProps)=>(
              <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="service-card">
                      <div className="service-card__image">
                      <a href={`/services/${service._id}`}>
                      <img src={process.env.REACT_APP_BASE_URL+"/uploads/service/"+service?.image} alt={service?.title}/>
                          </a>
                      </div>
                      <div className="service-card__content">
                          <div className="service-card__content__inner">
                              <div className="service-card__icon">
                                  <i className={service?.icon}></i>
                              </div>
                              <h3 className="service-card__title">
                              <a href={`/services/${service._id}`}>{service?.title}</a>
                              </h3>
                              <p className="service-card__text s-card">{service?.description}</p>
                              <a href={`/services/${service._id}`} className="service-card__link"><i className="fa fa-angle-right"></i></a>
                           
                          </div>
                      </div>
                  </div>
              </div>
                ))
                }
          </div>
      </div>
  </section>
    )
    break;

  default:
    WhatWeOfferSection = sec1
    break;
}

  return (
  <>{WhatWeOfferSection}</>  
  )
}

export default React.memo(WhatWeOffer)