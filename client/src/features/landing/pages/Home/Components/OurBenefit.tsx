import React from 'react'
import { useSelector } from 'react-redux'
import { useCompanyDetails,useLandingPageConfig,useSiteImages } from '../../../../dashboard/pages/Settings/settingsConfigSlice'




const OurBenefit = () => {
const {ourBenefitStyle} = useSelector(useLandingPageConfig)
  const {siteName} = useSelector(useCompanyDetails);
  const {aboutUsBg,backgroundImage} = useSelector(useSiteImages);
let ourBenefitSection;
switch (ourBenefitStyle) {
  case 1:
    ourBenefitSection =(
      <section className="benefit-one pt-120">
        <div className="right-angle"></div>
      <div className="benefit-one__shape-1 wow fadeInLeft" data-wow-delay="000ms" data-wow-duration="1500ms" 
      style={{backgroundImage: "url('assets/images/backgrounds/benefit-bg-1-1.jpg')",backgroundColor: 'rgb(225, 123, 123)',backgroundPosition: '50% 100%',backgroundRepeat: 'no-repeat',backgroundSize: 'auto',marginLeft: '-74.5px'}}>
      </div>
      <div className="benefit-one__shape-2"></div>
      <div className="container">
          <div className="row row-gutter-y-60">
              <div className="col-lg-6">
                  <div className="benefit-one__image wow fadeInUp image-overlay" data-wow-duration="1500ms" data-wow-delay="500ms">
                      <img src={process.env.REACT_APP_BASE_URL+"/uploads/settings/"+aboutUsBg} alt={siteName}  />
                      <div className="benefit-one__image__caption image-caption catptio-left">
                          <h3 className="benefit-one__image__title">99.9%</h3>
                          <p className="benefit-one__image__text">Success Rates Guarantee</p>
                          
                      </div>
                  </div>
                  {/* <img src={process.env.REACT_APP_BASE_URL+"/uploads/settings/"+backgroundImage} alt={siteName}  /> */}
              </div>
              <div className="col-lg-6">
                  <div className="benefit-one__content">
                      <div className="block-title text-left">
                          <p className="block-title__tagline">our benefits</p>
                          <h2 className="block-title__title">Why you should choose our company</h2>
                      </div>
                      <p className="benefit-one__text">At {siteName}, we have a compelling story rooted in our commitment to building trust in online transactions. We recognized the need for a secure and reliable platform that could protect both buyers and sellers in the ever-expanding digital marketplace. With a deep understanding of the challenges and risks associated with online commerce, we set out to create a solution that would alleviate these concerns and foster confidence in every transaction.</p>
                      <div className="benefit-one__box">
                          <div className="benefit-one__box__icon">
                              <i className="icon-bank"></i>
                          </div>
                          <div className="benefit-one__box__content">
                              <h3 className="benefit-one__box__title">Our Mission: Empowering Safe and Secure Online Commerce</h3>
                              <p className="benefit-one__box__text text-justify">Our mission at {siteName} is clear: to empower safe and secure online commerce. We believe that trust is the foundation of any successful transaction, and our goal is to provide a platform that ensures the protection of both parties involved. By offering robust escrow services, we enable buyers to confidently purchase goods and services, knowing that their funds are safeguarded until their requirements are met. Likewise, sellers can be assured that they will receive timely payment once they fulfill their obligations. Our mission is to facilitate smooth, worry-free transactions that benefit everyone involved.</p>
                          </div>
                      </div>
                      <div className="benefit-one__box">
                          <div className="benefit-one__box__icon">
                              <i className="icon-payment"></i>
                          </div>
                          <div className="benefit-one__box__content">
                              <h3 className="benefit-one__box__title">Our Values: Transparency, Reliability, and Customer Satisfaction</h3>
                              
                              <p className="benefit-one__box__text text-justify">Transparency, reliability, and customer satisfaction are the core values that drive our operations at {siteName}. We believe in conducting business with the utmost transparency, ensuring that all parties involved have a clear understanding of the transaction process and terms. We are committed to reliability, delivering on our promises to buyers and sellers alike. Additionally, customer satisfaction is of paramount importance to us. We strive to exceed your expectations by providing exceptional service and support throughout your journey with {siteName}.</p>
                          </div>
                      </div>
                      <div className="benefit-one__box">
                          <div className="benefit-one__box__icon">
                              <i className="icon-smartphone-1"></i>
                          </div>
                          <div className="benefit-one__box__content">
                              <h3 className="benefit-one__box__title">Our Team: Experts Dedicated to Ensuring Smooth Transactions</h3>
                              <p className="benefit-one__box__text text-justify">Behind the scenes at {siteName}, we have a team of dedicated experts who are passionate about ensuring smooth and secure transactions for our users. From our talented developers who create and maintain our robust platform, to our knowledgeable customer support team who provide assistance and guidance, every member of our team plays a crucial role in upholding our commitment to excellence. We are driven by a shared vision of building trust in online transactions and are continuously working to enhance the {siteName} experience for our valued users.</p>
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
                        <p className="block-title__tagline">Our Benefits</p>
                        <h2 className="block-title__title">At {siteName}, we offer a range of services to facilitate secure transactions</h2>
                    </div>
                    <div className="benefit-two__tab tabs-box">
                        <ul className="list-unstyled benefit-two__tab__title tab-btns tab-buttons">
                            <li className="tab-btn  active-btn" data-tab="#escrow">
                                <span>Escrow Services</span>
                            </li>
                            <li className="tab-btn" data-tab="#dispute">
                                <span>Dispute Resolution</span>
                            </li>
                            <li className="tab-btn" data-tab="#protection">
                                <span>Buyer and Seller Protection</span>
                            </li>
                        </ul>
                        <div className="benefit-two__tab__content tabs-content">
                            <div className="benefit-two__tab__content__inner tab active-tab" id="escrow">
                                <p> Our core offering is our escrow service, where we act as a trusted third party, holding funds until both the buyer and seller fulfill their obligations. This ensures that your money is protected, and you can buy or sell with confidence.</p>
                                <div className="benefit-two__tab__content__box">
                                    <div className="benefit-two__tab__content__box__image">
                                        <img src="assets/images/resources/benefit-2-2.png" alt=""/>
                                    </div>
                                    <div className="benefit-two__tab__content__box__content">
                                        <ul className="list-unstyled ml-0 about-two__list">
                                            <li title={`As a buyer, your funds are securely held in escrow until the agreed-upon conditions are met, ensuring that you don\'t release payment until you receive the goods or services as promised. This protects you from potential fraud or non-delivery.`}>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Fund Protection
                                            </li>
                                            <li title={`Sellers can have peace of mind knowing that the buyer\'s payment is securely held in escrow. Once the buyer confirms the receipt or satisfaction of the goods or services, the funds are released to the seller. This protects sellers from non-payment or dishonest buyers`}>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Assurance of Delivery
                                            </li>
                                            <li title={` ${siteName} acts as a neutral third party, ensuring a fair transaction process for both buyers and sellers. Our goal is to create a trustworthy environment where both parties can engage in secure transactions with confidence.`}>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Impartiality and Fairness
                                            </li>
                                            <li title={` In certain cases, ${siteName} allows for the use of holdbacks to provide additional protection. Holdbacks involve withholding a portion of the payment until a specific condition or warranty period is fulfilled, giving further assurance to both buyers and sellers.`}>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Escrow Holdbacks
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="benefit-two__tab__content__inner tab" id="dispute">
                                <p> In the unlikely event of a dispute, {siteName} provides a fair and impartial resolution process. Our team of experts will carefully review the situation and work towards a satisfactory resolution for all parties involved.</p>
                                <div className="benefit-two__tab__content__box">
                                    <div className="benefit-two__tab__content__box__image">
                                        <img src="assets/images/resources/benefit-2-2.png" alt=""/>
                                    </div>
                                    <div className="benefit-two__tab__content__box__content">
                                        <ul className="list-unstyled ml-0 about-two__list">
                                            <li title={`In the event of a transaction dispute, ${siteName} offers professional mediation services to help resolve the issue. Our experienced team will carefully review the evidence and facilitate communication between the parties involved to reach a fair and satisfactory resolution.`}>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Mediation Services
                                            </li>
                                            <li title={` Our dispute resolution process is designed to be fair and impartial. We take into account all relevant information and strive to make unbiased decisions based on the evidence provided, ensuring a balanced outcome for all parties involved.`}>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Fair and Impartial Decision Making
                                            </li>
                                            <li title={` ${siteName} understands the importance of resolving disputes efficiently. We aim to facilitate a timely resolution process, minimizing any disruptions or delays in the transaction. Our goal is to provide a swift and satisfactory resolution to restore trust and enable the transaction to proceed smoothly.`}>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Timely Resolution
                                            </li>
                                            <li title={` Our dispute resolution team consists of experts in online transactions and conflict resolution. They possess the knowledge and experience necessary to navigate complex situations and guide the parties towards a mutually agreeable resolution.`}>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Expert Assistance
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="benefit-two__tab__content__inner tab" id="protection">
                                <p> We prioritize the safety and satisfaction of both buyers and sellers. By using {siteName}, buyers can be confident that their funds are protected until they receive the goods or services they paid for. Sellers, on the other hand, can rest assured that they will be paid promptly once the buyer's requirements are met.</p>
                                <div className="benefit-two__tab__content__box">
                                    <div className="benefit-two__tab__content__box__image">
                                        <img src="assets/images/resources/benefit-2-2.png" alt=""/>
                                    </div>
                                    <div className="benefit-two__tab__content__box__content">
                                        <ul className="list-unstyled ml-0 about-two__list">
                                            <li title={` ${siteName} employs industry-standard encryption protocols to safeguard your sensitive data. Your personal information and financial details are protected through advanced encryption technologies, ensuring secure transmission and storage.`}>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Robust Encryption
                                            </li>
                                            <li title={`We implement multi-factor authentication and other security measures to protect your ${siteName} account. This helps prevent unauthorized access and ensures that only you have control over your transactions.`}>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Account Security
                                            </li>
                                            <li title={` ${siteName} utilizes sophisticated fraud detection systems and algorithms to identify and prevent fraudulent activities. Our proactive approach to security helps maintain a secure environment for all users.`}>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Fraud Detection
                                            </li>
                                            <li title={`We are committed to protecting your privacy. ${siteName} adheres to strict privacy policies and practices to ensure that your personal information is handled securely and in accordance with applicable data protection regulations.`}>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Privacy Protection
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
                                <span className="odometer" data-count="0"></span>
                            </div>
                            
                            <p className="benefit-two__fact__text">Successfully Completed Transactions</p>
                            
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
        ourBenefitSection = null
    break;
}

  return (
    <>{ourBenefitSection}</>
  )
}

export default React.memo(OurBenefit)