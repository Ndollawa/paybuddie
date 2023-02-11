import React from 'react'
import { useSelector } from 'react-redux'
import { useLandingPageConfig } from '../../../../dashboard/pages/Settings/settingsConfigSlice';


const Testionial = ()  => {
const {testimonialStyle} = useSelector(useLandingPageConfig)
let testimonialSection;
switch (testimonialStyle) {
  case 1:
    testimonialSection =(
      <section className="testimonials-one pt-120 mb-40">
      <div className="container">
          <div className="block-title text-center">
              <p className="block-title__tagline">our testimonials</p>
              <h2 className="block-title__title">What they’re talking about <br/> our company</h2>
          </div>
          {/* <!-- /.block-title --> */}
          <div className="row row-gutter-y-30">
              <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                  <div className="testimonial-card">
                      <div className="testimonial-card__info">
                          <div className="testimonial-card__image">
                              <img src="assets/images/resources/testi-1-3.png" alt="Dustin Dunn" />
                          </div>
                          <div className="testimonial-card__meta">
                              <div className="testimonial-card__stars">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                              </div>
                              <h3 className="testimonial-card__name">Dustin Dunn</h3>
                              <p className="testimonial-card__designation">Finance Manager</p>
                          </div>
                      </div>
                      <span className="testimonial-card__line"></span>
                      <div className="testimonial-card__text">
                          <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                              would really like definitely come back here. Thank you htmlFor yours service.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
    )
    break;
  case 2:
    testimonialSection = (
      <section className="testimonials-three pt-120 mb-40">
    <div className="testimonials-three__shape"></div>
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="testimonials-three__content">
                    <div className="block-title text-left">
                        <p className="block-title__tagline">our testimonials</p>
                        <h2 className="block-title__title">What they are talking about our company</h2>
                    </div>
                    <div className="testimonials-three__carousel">
                        <div className="testimonials-three__carousel__line"></div>
                        
                        <div className="thm-owl__carousel owl-carousel owl-theme owl-dot-style-one" data-owl-options='{
                "loop": true,
                "items": 1,
                "autoplay": true,
                "autoplayHoverPause": true,
                "autoplayTimeout": 5000,
                "smartSpeed": 500,
                "nav": false,
                "dots": true,
                "margin": 30,
                "responsive": {
                    "0": {
                        "items": 1
                    },
                    "768": {
                        "items": 1
                    },
                    "992": {
                        "items": 1
                    }
                }
            }'>
                      
                          
                            <div className="item">
                                <div className="testimonial-card-two">
                                    <div className="testimonial-card-two__content">
                                        <div className="testimonial-card-two__icon">
                                            <i className="icon-quotes"></i>
                                        </div>
                                        <div className="testimonial-card-two__text">I loved the customer service you guys
                                            provided me. That was very nice and patient with questions I had. I would
                                            really like definitely come back here. Thank you for yours service.</div>
                                        
                                    </div>
                                    <div className="testimonial-card__info">
                                        <div className="testimonial-card__image">
                                            <img src="assets/images/resources/testi-1-1.png" alt="@@title"/>
                                        </div>
                                        <div className="testimonial-card__meta">
                                            <div className="testimonial-card__stars">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <h3 className="testimonial-card__name">Kevin martin</h3>
                                            <p className="testimonial-card__designation">Finance Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeInRight">
                <div className="testimonials-three__image">
                    <img src="assets/images/resources/testi-3-b-1.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
</section>
    )
    break;


  default:
    break;
}

  return (
    <>{testimonialSection}</>
  )
}


export default Testionial