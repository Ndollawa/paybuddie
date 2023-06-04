import React from 'react';
import pageProps from '../../../../app/utils/props/pageProps';
import { useSelector } from 'react-redux';
import {useCompanyDetails,useLandingPageConfig} from '../../../dashboard/pages/Settings/settingsConfigSlice';
import Slider from './Components/Slider';
import AboutUs from './Components/AboutUs';
import WhatWeOffer from './Components/WhatWeOffer';
import OurBenefit from './Components/OurBenefit';
import Testimonial from './Components/Testimonial';
import HowItWorks from './Components/HowItWorks';
import CTASection from './Components/CTASection';

const Home:React.FC<pageProps>=({pageData}:pageProps) => {

    const {siteName} = useSelector(useCompanyDetails); 
  return (
    <>
      <Slider/>
        <AboutUs/>
       <WhatWeOffer/>
       
       <HowItWorks/>
     
        <section className="loan-calculator loan-calculator--has-bg pt-120">
            <div className="container">
                <div className="loan-calculator__top">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="block-title text-left">
                                <p className="block-title__tagline">Some write ups</p>
                                {/* <!-- /.block-title__tagline --> */}
                                <h2 className="block-title__title">Heading... you?</h2>
                                {/* <!-- /.block-title__title --> */}
                            </div>
                            {/* <!-- /.block-title --> */}
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                        <div className="col-md-6">
                            <p className="loan-calculator__top__text">Nullam vel nibh facilisis lectus fermentum ultrices quis non
                                risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea
                                dictumst.</p>
                                {/* <!-- /.loan-calculator__top__text --> */}
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.loan-calculator__top --> */}

                <div className="loan-calculator__box">
                    <div className="row row-gutter-x-0">
                        <div className="col-lg-6">
                           and  Image goes here
                        </div>
                        {/* <!-- /.col-lg-6 --> */}
                        <div className="col-lg-6">
                            <div className="loan-calculator__image">
                                <img src="assets/images/resources/loan-calculator-1-1.png" alt="" />
                                <div className="loan-calculator__image__caption wow fadeInUp" data-wow-duration="1500ms">
                                    <div className="loan-calculator__image__caption__inner">
                                        <h3 className="loan-calculator__image__title">98<span>%</span></h3>
                                        
                                        {/* <!-- /.loan-calculator__image__title --> */}
                                        <p className="loan-calculator__image__text">Satisfied Customers</p>
                                    </div>
                                    {/* <!-- /.loan-calculator__image__caption__inner --> */}
                                </div>
                                {/* <!-- /.loan-calculator__image__caption --> */}
                            </div>
                            {/* <!-- /.loan-calculator__image --> */}
                        </div>
                        {/* <!-- /.col-lg-6 --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.loan-calculator__box --> */}
            </div>
            {/* <!-- /.container --> */}
        </section>
        {/* <!-- /.loan-calculator --> */}
       <Testimonial/>
        {/* <!-- /.testimonials-one --> */}
        <section className="fact-one pt-140 pb-100">
            <div className="container">
                <div className="row row-gutter-y-30">
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-one__item">
                            <div className="fact-one__count">
                                <span className="count-box">
                                    <span className="count-text" data-stop="90" data-speed="1500"></span>
                                </span>%
                            </div>
                            {/* <!-- /.fact-one__count --> */}
                            <h3 className="fact-one__title">Loans Approve</h3>
                            {/* <!-- /.fact-one__title --> */}
                        </div>
                        {/* <!-- /.fact-one__item --> */}
                    </div>
                    {/* <!-- /.col-lg-3 col-md-6 --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-one__item">
                            <div className="fact-one__count">$<span className="count-box">
                                    <span className="count-text" data-stop="90" data-speed="1500"></span>
                                </span>k</div>
                                {/* <!-- /.fact-one__count --> */}
                            <h3 className="fact-one__title">Daily Payments</h3>
                            {/* <!-- /.fact-one__title --> */}
                        </div>
                        {/* <!-- /.fact-one__item --> */}
                    </div>
                    {/* <!-- /.col-lg-3 col-md-6 --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-one__item">
                            <div className="fact-one__count"><span className="count-box">
                                    <span className="count-text" data-stop="90" data-speed="1500"></span>
                                </span>k</div>
                                {/* <!-- /.fact-one__count --> */}
                            <h3 className="fact-one__title">Happy Customers</h3>
                            {/* <!-- /.fact-one__title --> */}
                        </div>
                        {/* <!-- /.fact-one__item --> */}
                    </div>
                    {/* <!-- /.col-lg-3 col-md-6 --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-one__item">
                            <div className="fact-one__count"><span className="count-box">
                                    <span className="count-text" data-stop="290" data-speed="1500"></span>
                                </span>
                                {/* <!-- /.count-box --> */}
                            </div>
                            {/* <!-- /.fact-one__count --> */}
                            <h3 className="fact-one__title">Expert People</h3>
                            {/* <!-- /.fact-one__title --> */}
                        </div>
                        {/* <!-- /.fact-one__item --> */}
                    </div>
                    {/* <!-- /.col-lg-3 col-md-6 --> */}
                </div>
                {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
        </section>
        {/* <!-- /.fact-one --> */}
       <OurBenefit/>
        {/* <!-- /.benefit-one --> */}
        <section className="blog-one pt-120 pb-120">
            <div className="container">
                <div className="block-title text-center">
                    <p className="block-title__tagline">Our Blog</p>
                    {/* <!-- /.block-title__tagline --> */}
                    <h2 className="block-title__title">Our latest news updates <br/> & articles</h2>
                    {/* <!-- /.block-title__title --> */}
                </div>
                {/* <!-- /.block-title --> */}
                <div className="row row-gutter-y-30">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="blog-card">
                            <div className="blog-card__image">
                                <div className="blog-card__date"><span>05</span> Mar</div>
                                {/* <!-- /.blog-card__date --> */}
                                <img src="assets/images/blog/blog-1-1.png" alt="Which growth strategies you should adopt" />
                                <a href="blog-details.html"></a>
                            </div>
                            {/* <!-- /.blog-card__image --> */}
                            <div className="blog-card__content">
                                <div className="blog-card__meta">
                                    <a href="blog-details.html"><i className="far fa-user-circle"></i> by Admin</a>
                                    <a href="blog-details.html"><i className="far fa-comments"></i> 2 Comments</a>
                                </div>
                                {/* <!-- /.blog-card__meta --> */}
                                <h3 className="blog-card__title"><a href="blog-details.html">Which growth strategies you should adopt</a></h3>
                                <p className="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                <a href="blog-details.html" className="blog-card__link">Read More</a>
                                {/* <!-- /.blog-card__link --> */}
                            </div>
                            {/* <!-- /.blog-card__content --> */}
                        </div>
                        {/* <!-- /.blog-card --> */}
                    </div>
                    {/* <!-- /.col-lg-4 col-md-12 col-sm-12 --> */}
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="blog-card">
                            <div className="blog-card__image">
                                <div className="blog-card__date"><span>05</span> Mar</div>
                                {/* <!-- /.blog-card__date --> */}
                                <img src="assets/images/blog/blog-1-2.png" alt="Which growth strategies you should adopt" />
                                <a href="blog-details.html"></a>
                            </div>
                            {/* <!-- /.blog-card__image --> */}
                            <div className="blog-card__content">
                                <div className="blog-card__meta">
                                    <a href="blog-details.html"><i className="far fa-user-circle"></i> by Admin</a>
                                    <a href="blog-details.html"><i className="far fa-comments"></i> 2 Comments</a>
                                </div>
                                {/* <!-- /.blog-card__meta --> */}
                                <h3 className="blog-card__title"><a href="blog-details.html">Which growth strategies you should adopt</a></h3>
                                <p className="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                <a href="blog-details.html" className="blog-card__link">Read More</a>
                                {/* <!-- /.blog-card__link --> */}
                            </div>
                            {/* <!-- /.blog-card__content --> */}
                        </div>
                        {/* <!-- /.blog-card --> */}
                    </div>
                    {/* <!-- /.col-lg-4 col-md-12 col-sm-12 --> */}
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="blog-card">
                            <div className="blog-card__image">
                                <div className="blog-card__date"><span>05</span> Mar</div>
                                {/* <!-- /.blog-card__date --> */}
                                <img src="assets/images/blog/blog-1-3.png" alt="Which growth strategies you should adopt" />
                                <a href="blog-details.html"></a>
                            </div>
                            {/* <!-- /.blog-card__image --> */}
                            <div className="blog-card__content">
                                <div className="blog-card__meta">
                                    <a href="blog-details.html"><i className="far fa-user-circle"></i> by Admin</a>
                                    <a href="blog-details.html"><i className="far fa-comments"></i> 2 Comments</a>
                                </div>
                                {/* <!-- /.blog-card__meta --> */}
                                <h3 className="blog-card__title"><a href="blog-details.html">Which growth strategies you should adopt</a></h3>
                                <p className="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                <a href="blog-details.html" className="blog-card__link">Read More</a>
                                {/* <!-- /.blog-card__link --> */}
                            </div>
                            {/* <!-- /.blog-card__content --> */}
                        </div>
                        {/* <!-- /.blog-card --> */}
                    </div>
                    {/* <!-- /.col-lg-4 col-md-12 col-sm-12 --> */}
                </div>
                {/* <!-- /.row --> */}

            </div>
            {/* <!-- /.container --> */}
        </section>
        <div className="client-carousel @@extraClassName">
            <div className="container">
                <div className="thm-swiper__slider swiper-container" data-swiper-options='{"spaceBetween": 30, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                "0": {
                    "spaceBetween": 30,
                    "slidesPerView": 2
                },
                "375": {
                    "spaceBetween": 30,
                    "slidesPerView": 2
                },
                "575": {
                    "spaceBetween": 30,
                    "slidesPerView": 3
                },
                "767": {
                    "spaceBetween": 50,
                    "slidesPerView": 4
                },
                "991": {
                    "spaceBetween": 30,
                    "slidesPerView": 5
                },
                "1199": {
                    "spaceBetween": 30,
                    "slidesPerView": 5
                }
            }}'>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- /.blog-one --> */}
<CTASection/>
    </>
  )
}

export default React.memo(Home)
