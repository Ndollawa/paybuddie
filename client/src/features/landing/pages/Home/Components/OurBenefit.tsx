import React from 'react'
import { useSelector } from 'react-redux'
import { useLandingPageConfig } from '../../../../dashboard/pages/Settings/settingsConfigSlice'

const OurBenefit = () => {
const {ourBenefitStyle} = useSelector(useLandingPageConfig)
let ourBenefitSection;
switch (ourBenefitStyle) {
  case 1:
    ourBenefitSection =(
      <section className="benefit-one pt-120">
      <div className="benefit-one__shape-1 wow fadeInLeft" data-wow-delay="000ms" data-wow-duration="1500ms" style={{backgroundImage: "url('assets/images/backgrounds/benefit-bg-1-1.jpg')"}}>
      </div>
      <div className="benefit-one__shape-2"></div>
      <div className="container">
          <div className="row row-gutter-y-60">
              <div className="col-lg-6">
                  <div className="benefit-one__image wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="500ms">
                      <img src="assets/images/resources/benefit-1-1.png" alt="" />
                      <div className="benefit-one__image__caption">
                          <h3 className="benefit-one__image__title">99.9%</h3>
                          <p className="benefit-one__image__text">Success Rates Guarantee</p>
                          
                      </div>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="benefit-one__content">
                      <div className="block-title text-left">
                          <p className="block-title__tagline">our benefits</p>
                          <h2 className="block-title__title">Why you should choose our company</h2>
                      </div>
                      <p className="benefit-one__text">Nullam vel nibh facilisis lectus fermentum ultrices quis non risus.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Duis
                          porta, quam ut finibus ultrices, lorem lacus congue lorem et rutrum sapien magna tincidunt
                          magna.</p>
                      <div className="benefit-one__box">
                          <div className="benefit-one__box__icon">
                              <i className="icon-bank"></i>
                          </div>
                          <div className="benefit-one__box__content">
                              <h3 className="benefit-one__box__title">Lowest bank fees</h3>
                              <p className="benefit-one__box__text">Lorem ipsum dolor consectetur notte massa sapien samet.
                                  Aucibus sed sem non, mattis commodo nisi.</p>
                          </div>
                      </div>
                      <div className="benefit-one__box">
                          <div className="benefit-one__box__icon">
                              <i className="icon-payment"></i>
                          </div>
                          <div className="benefit-one__box__content">
                              <h3 className="benefit-one__box__title">Up to 20.000$ limit</h3>
                              
                              <p className="benefit-one__box__text">Lorem ipsum dolor consectetur notte massa sapien samet.
                                  Aucibus sed sem non, mattis commodo nisi.</p>
                          </div>
                      </div>
                      <div className="benefit-one__box">
                          <div className="benefit-one__box__icon">
                              <i className="icon-smartphone-1"></i>
                          </div>
                          <div className="benefit-one__box__content">
                              <h3 className="benefit-one__box__title">Easy in 3 steps</h3>
                              <p className="benefit-one__box__text">Lorem ipsum dolor consectetur notte massa sapien samet.
                                  Aucibus sed sem non, mattis commodo nisi.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
    )
    break;
  case 2:
    ourBenefitSection = (
      <section className="benefit-two mb-120">
        <div className="container">
           <div className="row">
            <div className="col-lg-5">
                <div className="benefit-two__image">
                    <img src="assets/images/resources/benefit-2-1.png" alt=""/>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="benefit-two__content">
                    <div className="block-title text-left">
                        <p className="block-title__tagline">our benefits</p>
                        <h2 className="block-title__title">Benefits of better credit score and restoration</h2>
                    </div>
                    <div className="benefit-two__tab tabs-box">
                        <ul className="list-unstyled benefit-two__tab__title tab-btns tab-buttons">
                            <li className="tab-btn  active-btn" data-tab="#repair">
                                <span>Credit repairs</span>
                            </li>
                            <li className="tab-btn" data-tab="#audit">
                                <span>Credit audit</span>
                            </li>
                            <li className="tab-btn" data-tab="#credit">
                                <span>New credit</span>
                            </li>
                        </ul>
                        <div className="benefit-two__tab__content tabs-content">
                            <div className="benefit-two__tab__content__inner tab active-tab" id="repair">
                                <p>There are many variations of passages of but the majority have in some form, by
                                    injected humou or words which don't look even slightly believable of but the
                                    majority have suffered.</p>
                                <div className="benefit-two__tab__content__box">
                                    <div className="benefit-two__tab__content__box__image">
                                        <img src="assets/images/resources/benefit-2-2.png" alt=""/>
                                    </div>
                                    <div className="benefit-two__tab__content__box__content">
                                        <ul className="list-unstyled ml-0 about-two__list">
                                            <li>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Nsectetur cing elit
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
                                                Lorem Ipsum on the tend to repeat
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-two__tab__content__inner tab" id="audit">
                                <p>There are many variations of passages of but the majority have in some form, by
                                    injected humou or words which don't look even slightly believable of but the
                                    majority have suffered.</p>
                                <div className="benefit-two__tab__content__box">
                                    <div className="benefit-two__tab__content__box__image">
                                        <img src="assets/images/resources/benefit-2-2.png" alt=""/>
                                    </div>
                                    <div className="benefit-two__tab__content__box__content">
                                        <ul className="list-unstyled ml-0 about-two__list">
                                            <li>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Nsectetur cing elit
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
                                                Lorem Ipsum on the tend to repeat
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="benefit-two__tab__content__inner tab" id="credit">
                                <p>There are many variations of passages of but the majority have in some form, by
                                    injected humou or words which don't look even slightly believable of but the
                                    majority have suffered.</p>
                                <div className="benefit-two__tab__content__box">
                                    <div className="benefit-two__tab__content__box__image">
                                        <img src="assets/images/resources/benefit-2-2.png" alt=""/>
                                    </div>
                                    <div className="benefit-two__tab__content__box__content">
                                        <ul className="list-unstyled ml-0 about-two__list">
                                            <li>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Nsectetur cing elit
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
                                                Lorem Ipsum on the tend to repeat
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="benefit-two__fact">
                        <div className="benefit-two__fact__icon">
                            <i className="icon-credibility"></i>
                        </div>
                        <div className="benefit-two__fact__content">
                            <div className="benefit-two__fact__title">
                                <span className="odometer" data-count="6800"></span>
                            </div>
                            
                            <p className="benefit-two__fact__text">Successfully credit repaired</p>
                            
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

    break;
}

  return (
    <>{ourBenefitSection}</>
  )
}

export default OurBenefit