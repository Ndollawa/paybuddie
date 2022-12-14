import React from 'react';
import pageProps from '../../../../app/utils/props/pageProps';
import { useSelector } from 'react-redux';
import {useCompanyDetails,useLandingPageConfig} from '../../../app/appConfigSlice';


const Home:React.FC<pageProps>=({pageData}:pageProps) => {

    const {siteName} = useSelector(useCompanyDetails); 
  return (
    <>
        <section className="slider-one">
        <div className="thm-owl__carousel thm-owl__carousel--custom-nav owl-carousel owl-theme owl-dot-style-one" data-owl-nav-prev=".slider-one__carousel__btn__left" data-owl-nav-next=".slider-one__carousel__btn__right" data-owl-options='{
		"loop": true,
		"animateOut": "fadeOut",
		"animateIn": "fadeIn",
		"items": 1,
		"autoplay": 6000,
		"autoplayTimeout": 7000,
		"smartSpeed": 500,
		"nav": false,
		"dots": false,
		"margin": 0
	}'>

                <div className="item">
                    <div className="slider-one__item">
                        <div className="slider-one__lines">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {/* <!-- /.slider-one__lines --> */}
                        <div className="slider-one__image" style={{backgroundImage: "url('assets/images/backgrounds/slider-1-1.png')"}}>
                        </div>
                        
                        {/* <!-- /.slider-one__image --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <p className="slider-one__tagline">
                                        <i className="fa fa-chart-pie"></i>
                                        Simple & Secure Payment
                                    </p>
                                    {/* <!-- /.slider-one__tagline --> */}
                                    <h2 className="slider-one__title">We provide you
                                        a financial <span>power</span></h2>
                                        {/* <!-- /.slider-one__title --> */}
                                    <p className="slider-one__text">Nullam vel nibh facilisis lectus fermentum ultrices quis
                                        non risus.</p>
                                        {/* <!-- /.slider-one__text --> */}
                                    <div className="slider-one__btns">
                                        <a href="/register" className="thm-btn">Sign Up</a>
                                    </div>
                                    {/* <!-- /.slider-one__btns --> */}
                                </div>
                                {/* <!-- /.col-lg-7 --> */}
                            </div>
                            {/* <!-- /.row --> */}
                        </div>
                        {/* <!-- /.container --> */}
                    </div>
                    {/* <!-- /.slider-one__item --> */}
                </div>
                {/* <!-- /.item --> */}
                <div className="item">
                    <div className="slider-one__item">
                        <div className="slider-one__lines">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {/* <!-- /.slider-one__lines --> */}
                        <div className="slider-one__image" style={{backgroundImage: 'url("assets/images/backgrounds/slider-1-2.png")'}}>
                        </div>
                        {/* <!-- /.slider-one__image --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <p className="slider-one__tagline">
                                        <i className="fa fa-chart-pie"></i>
                                        Simple & Secure Payment
                                    </p>
                                    {/* <!-- /.slider-one__tagline --> */}
                                    <h2 className="slider-one__title">We provide you
                                        a financial <span>power</span></h2>
                                        {/* <!-- /.slider-one__title --> */}
                                    <p className="slider-one__text">Nullam vel nibh facilisis lectus fermentum ultrices quis
                                        non risus.</p>
                                        {/* <!-- /.slider-one__text --> */}
                                    <div className="slider-one__btns">
                                        <a href="/register" className="thm-btn">Sign Up</a>
                                    </div>
                                    {/* <!-- /.slider-one__btns --> */}
                                </div>
                                {/* <!-- /.col-lg-7 --> */}
                            </div>
                            {/* <!-- /.row --> */}
                        </div>
                        {/* <!-- /.container --> */}
                    </div>
                    {/* <!-- /.slider-one__item --> */}
                </div>
                {/* <!-- /.item --> */}
            </div>
            {/* <!-- /.owl-carousel --> */}
            <div className="slider-one__carousel__btn">
                <button className="slider-one__carousel__btn__left">
                    <i className="fa fa-angle-left"></i>
                </button>
                <button className="slider-one__carousel__btn__right">
                    <i className="fa fa-angle-right"></i>
                </button>
            </div>
            {/* <!-- /.slider-one__carousel__btns --> */}
            <div className="slider-one__box wow fadeInRight" data-wow-duration="1500ms">
                <div className="slider-one__box__icon">
                    <i className="icon-successful"></i>
                </div>
                {/* <!-- /.slider-one__box__icon --> */}
                <div className="slider-one__box__content">
                    <p className="slider-one__box__tagline">Checkout our</p>
                    {/* <!-- /.slider-one__box__tagline --> */}
                    <h3 className="slider-one__box__title">88% Success Rates</h3>
                    {/* <!-- /.slider-one__box__title --> */}
                </div>
                {/* <!-- /.slider-one__box__content --> */}
            </div>
            {/* <!-- /.slider-one__box --> */}
        
        </section>
        {/* <!-- /.slider-one --> */}
        <section className="about-four pt-120 pb-120">
            <div className="about-four__shape"></div>
            {/* <!-- /.about-four__shape --> */}
            <div className="container">
                <div className="row row-gutter-y-50">
                    <div className="col-lg-6">
                        <div className="about-four__content">
                            <div className="block-title text-left">
                                <p className="block-title__tagline">About Company</p>
                                {/* <!-- /.block-title__tagline --> */}
                                <h2 className="block-title__title">Make Payments and Transactions with ease </h2>
                                {/* <!-- /.block-title__title --> */}
                            </div>
                            {/* <!-- /.block-title --> */}
                            <div className="about-four__box">
                                <div className="about-four__box__icon">
                                    <i className="icon-loan"></i>
                                </div>
                                {/* <!-- /.about-four__box__icon --> */}
                                <div className="about-four__box__content">
                                    <h3 className="about-four__box__title">We’re in this business since 1987 and we provide the best
                                        services.</h3>
                                        {/* <!-- /.about-four__box__title --> */}
                                </div>
                                {/* <!-- /.about-four__box__content --> */}
                            </div>
                            {/* <!-- /.about-four__box --> */}
                            <p className="about-four__text">Alteration in some form by injected humour. Duis aute irure dolor lipsum
                                is simply free text available in the local markets in reprehenderit.</p>
                            
                            {/* <!-- /.about-four__text --> */}
                            <div className="row row-gutter-y-20">
                                <div className="col-md-6">
                                    <div className="about-four__feature">
                                        <div className="about-four__feature__content">
                                            <div className="about-four__feature__icon">
                                                <i className="icon-confirmation"></i>
                                            </div>
                                            {/* <!-- /.about-four__feature__icon --> */}
                                            <h3 className="about-four__feature__title">Direct card payment</h3>
                                            
                                             {/* <!-- /.about-four__feature__title --> */}
                                        </div>
                                         {/* <!-- /.about-four__feature__content --> */}
                                        <div className="about-four__feature__text">Lorem ipsum dolor sit ame ed consectetur nod.
                                        </div>
                                         {/* <!-- /.about-four__feature__text --> */}
                                    </div>
                                     {/* <!-- /.about-four__feature --> */}
                                </div>
                                 {/* <!-- /.col-md-6 --> */}
                                <div className="col-md-6">
                                    <div className="about-four__feature">
                                        <div className="about-four__feature__content">
                                            <div className="about-four__feature__icon">
                                                <i className="icon-confirmation"></i>
                                            </div>
                                             {/* <!-- /.about-four__feature__icon --> */}
                                            <h3 className="about-four__feature__title">Direct card payment</h3>
                                            
                                             {/* <!-- /.about-four__feature__title --> */}
                                        </div>
                                         {/* <!-- /.about-four__feature__content --> */}
                                        <div className="about-four__feature__text">Lorem ipsum dolor sit ame ed consectetur nod.
                                        </div>
                                         {/* <!-- /.about-four__feature__text --> */}
                                    </div>
                                     {/* <!-- /.about-four__feature --> */}
                                </div>
                                 {/* <!-- /.col-md-6 --> */}
                            </div>
                             {/* <!-- /.row --> */}
                            <div className="about-four__btns">
                                <a href="about.html" className="thm-btn thm-btn--dark-hover">Discover More</a>
                                 {/* <!-- /.thm-btn --> */}
                            </div>
                             {/* <!-- /.about-four__btns --> */}
                        </div>
                         {/* <!-- /.about-four__content --> */}
                    </div>
                     {/* <!-- /.col-lg-6 --> */}
                    <div className="col-lg-6">
                        <div className="about-four__image">
                            <div className="about-four__image__bg"></div>
                             {/* <!-- /.about-four__image__bg --> */}
                            <div className="about-four__image__shape"></div>
                             {/* <!-- /.about-four__image__shape --> */}
                            <img src="assets/images/resources/about-4-1.png" alt="" />
                            <div className="about-four__image__caption">
                                <h3 className="about-four__image__caption__year">25<i>+</i></h3>
                                <p className="about-four__image__caption__text">Years
                                    Experience</p>
                                     {/* <!-- /.about-four__image__caption__text --> */}
                            </div>
                             {/* <!-- /.about-four__image__caption --> */}
                            <div className="about-four__image__floated">{siteName}</div>
                             {/* <!-- /.team-details__floated --> */}
                        </div>
                         {/* <!-- /.about-four__image --> */}
                    </div>
                     {/* <!-- /.col-lg-6 --> */}
                </div>
                 {/* <!-- /.row --> */}
            </div>
             {/* <!-- /.container --> */}
        </section>
         {/* <!-- /.about-four --> */}
        <section className="service-two mb--120">
            <div className="service-two__shape"></div>
             {/* <!-- /.service-two__shape --> */}
            <div className="container">
                <div className="row row-gutter-y-30">
                    <div className="col-lg-4 col-md-12">
                        <div className="service-card-two">
                            <div className="service-card-two__shape"></div>
                             {/* <!-- /.service-card-two__shape --> */}
                            <div className="service-card-two__icon">
                                <i className="icon-smartphone"></i>
                            </div>
                             {/* <!-- /.service-card-two__icon --> */}
                            <div className="service-card-two__content">
                                <h3 className="service-card-two__title">
                                    <a href="services-details.html">Safe and Secure
                                        Payments</a>
                                </h3>
                                 {/* <!-- /.service-card-two__title --> */}
                                <p className="service-card-two__text">Duis aute irure dolor lipsum free is simply free text the
                                    local markets in reprehenderit.</p>
                                     {/* <!-- /.service-card-two__text --> */}
                                <a href="services-details.html" className="service-card-two__link">More Detail</a>
                                
                                 {/* <!-- /.service-card-two__link --> */}
                            </div>
                             {/* <!-- /.service-card-two__content --> */}
                        </div>
                         {/* <!-- /.service-card-two --> */}
                    </div>
                     {/* <!-- /.col-lg-4 col-md-12 --> */}
                    <div className="col-lg-4 col-md-12">
                        <div className="service-card-two">
                            <div className="service-card-two__shape"></div>
                             {/* <!-- /.service-card-two__shape --> */}
                            <div className="service-card-two__icon">
                                <i className="icon-operation"></i>
                            </div>
                             {/* <!-- /.service-card-two__icon --> */}
                            <div className="service-card-two__content">
                                <h3 className="service-card-two__title">
                                    <a href="services-details.html">Quick Payment
                                        Process</a>
                                </h3>
                                {/* <!-- /.service-card-two__title --> */}
                                <p className="service-card-two__text">Duis aute irure dolor lipsum free is simply free text the
                                    local markets in reprehenderit.</p>
                                    {/* <!-- /.service-card-two__text --> */}
                                <a href="services-details.html" className="service-card-two__link">More Detail</a>
                                
                                {/* <!-- /.service-card-two__link --> */}
                            </div>
                            {/* <!-- /.service-card-two__content --> */}
                        </div>
                        {/* <!-- /.service-card-two --> */}
                    </div>
                    {/* <!-- /.col-lg-4 col-md-12 --> */}
                    <div className="col-lg-4 col-md-12">
                        <div className="service-card-two">
                            <div className="service-card-two__shape"></div>
                            {/* <!-- /.service-card-two__shape --> */}
                            <div className="service-card-two__icon">
                                <i className="icon-payment-gateway"></i>
                            </div>
                            {/* <!-- /.service-card-two__icon --> */}
                            <div className="service-card-two__content">
                                <h3 className="service-card-two__title">
                                    <a href="services-details.html">No Prepayment
                                        Charges</a>
                                </h3>
                                {/* <!-- /.service-card-two__title --> */}
                                <p className="service-card-two__text">Duis aute irure dolor lipsum free is simply free text the
                                    local markets in reprehenderit.</p>
                                     {/* <!-- /.service-card-two__text --> */}
                                <a href="services-details.html" className="service-card-two__link">More Detail</a>
                                
                                 {/* <!-- /.service-card-two__link --> */}
                            </div>
                             {/* <!-- /.service-card-two__content --> */}
                        </div>
                         {/* <!-- /.service-card-two --> */}
                    </div>
                     {/* <!-- /.col-lg-4 col-md-12 --> */}
                </div>
                 {/* <!-- /.row --> */}
            </div>
             {/* <!-- /.container --> */}
        </section>
         {/* <!-- /.service-two --> */}
        <section className="video-one video-one--home pt-240 pb-120" style={{backgroundImage: "url('assets/images/backgrounds/video-bg-1-1.jpg')"}}>
            <div className="video-one__shape-edge"></div>
            <div className="rhombus"></div>
             {/* <!-- /.video-one__shape --> */}
            <div className="container">
                <div className="row row-gutter-y-50">
                    <div className="col-lg-6">
                        <div className="video-one__content">
                            <a href="https://www.youtube.com/watch?v=m2b9ZTBlW2k" className="video-popup video-one__btn">
                                <i className="fa fa-play"></i>
                                <span className="ripple"></span>
                            </a>
                             {/* <!-- /.video-popup --> */}
                            <h3 className="video-one__title">Hundreds of customers <br/> trust our company</h3>
                        </div>
                         {/* <!-- /.video-one__content --> */}
                    </div>
                     {/* <!-- /.col-lg-6 --> */}
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
                         {/* <!-- /.list-unstyled video-one__list --> */}
                    </div>
                     {/* <!-- /.col-lg-6 --> */}
                </div>
                 {/* <!-- /.row --> */}
            </div>
             {/* <!-- /.container --> */}
        </section>
         {/* <!-- /.video-one --> */}
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
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-1-1.png" alt="" />
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                    </div>
                    {/* <!-- /.swiper-wrapper --> */}
                </div>
                {/* <!-- /.thm-swiper__slider --> */}
            </div>
            {/* <!-- /.container --> */}
        </div>
        {/* <!-- /.client-carousel --> */}

        <section className="service-one pt-120 pb-140">
            <img src="assets/images/shapes/service-h-1.png" className="service-one__icon-1" alt="" />
            <img src="assets/images/shapes/service-h-2.png" className="service-one__icon-2" alt="" />
            <img src="assets/images/shapes/service-h-3.png" className="service-one__icon-3" alt="" />
            <div className="container">
                <div className="block-title text-center">
                    <p className="block-title__tagline">What We’re Offering</p>
                    {/* <!-- /.block-title__tagline --> */}
                    <h2 className="block-title__title">We provide best services <br/> htmlFor your loans </h2>
                    {/* <!-- /.block-title__title --> */}
                </div>
                {/* <!-- /.block-title --> */}
                <div className="row row-gutter-y-50">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="service-card">
                            <div className="service-card__image">
                                <img src="assets/images/services/services-1-1.png" alt="Auto Car Loan" />
                                <a href="services-details.html"></a>
                            </div>
                            {/* <!-- /.service-card__image --> */}
                            <div className="service-card__content">
                                <div className="service-card__content__inner">
                                    <div className="service-card__icon">
                                        <i className="icon-car"></i>
                                    </div>
                                    {/* <!-- /.service-card__icon --> */}
                                    <h3 className="service-card__title">
                                        <a href="services-details.html">Auto Car Loan</a>
                                    </h3>
                                    {/* <!-- /.service-card__title --> */}
                                    <p className="service-card__text">Car Loan provide low interest many variations of passages of lorem ipsum have
                                        some.</p>
                                        {/* <!-- /.service-card__text --> */}
                                    <a href="services-details.html" className="service-card__link">
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                    {/* <!-- /.service-card__link --> */}
                                </div>
                                {/* <!-- /.service-card__content__inner --> */}
                            </div>
                            {/* <!-- /.service-card__content --> */}
                        </div>
                        {/* <!-- /.service-card --> */}
                    </div>
                    {/* <!-- /.col-lg-4 col-md-12 col-sm-12 --> */}
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="service-card">
                            <div className="service-card__image">
                                <img src="assets/images/services/services-1-2.png" alt="Wedding Loan" />
                                <a href="services-details.html"></a>
                            </div>
                            {/* <!-- /.service-card__image --> */}
                            <div className="service-card__content">
                                <div className="service-card__content__inner">
                                    <div className="service-card__icon">
                                        <i className="icon-diamond"></i>
                                    </div>
                                    {/* <!-- /.service-card__icon --> */}
                                    <h3 className="service-card__title">
                                        <a href="services-details.html">Wedding Loan</a>
                                    </h3>
                                    {/* <!-- /.service-card__title --> */}
                                    <p className="service-card__text">Car Loan provide low interest many variations of passages of lorem ipsum have
                                        some.</p>
                                        {/* <!-- /.service-card__text --> */}
                                    <a href="services-details.html" className="service-card__link">
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                    {/* <!-- /.service-card__link --> */}
                                </div>
                                {/* <!-- /.service-card__content__inner --> */}
                            </div>
                            {/* <!-- /.service-card__content --> */}
                        </div>
                        {/* <!-- /.service-card --> */}
                    </div>
                    {/* <!-- /.col-lg-4 col-md-12 col-sm-12 --> */}
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="service-card">
                            <div className="service-card__image">
                                <img src="assets/images/services/services-1-3.png" alt="Property Loan" />
                                <a href="services-details.html"></a>
                            </div>
                            {/* <!-- /.service-card__image --> */}
                            <div className="service-card__content">
                                <div className="service-card__content__inner">
                                    <div className="service-card__icon">
                                        <i className="icon-house"></i>
                                    </div>
                                    {/* <!-- /.service-card__icon --> */}
                                    <h3 className="service-card__title">
                                        <a href="services-details.html">Property Loan</a>
                                    </h3>
                                    {/* <!-- /.service-card__title --> */}
                                    <p className="service-card__text">Car Loan provide low interest many variations of passages of lorem ipsum have
                                        some.</p>
                                        {/* <!-- /.service-card__text --> */}
                                    <a href="services-details.html" className="service-card__link">
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                    {/* <!-- /.service-card__link --> */}
                                </div>
                                {/* <!-- /.service-card__content__inner --> */}
                            </div>
                            {/* <!-- /.service-card__content --> */}
                        </div>
                        {/* <!-- /.service-card --> */}
                    </div>
                    {/* <!-- /.col-lg-4 col-md-12 col-sm-12 --> */}
                </div>
                {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
        </section>
        {/* <!-- /.service-grid pt-120 pb-120 --> */}
        <section className="loan-calculator loan-calculator--has-bg pt-120">
            <div className="container">
                <div className="loan-calculator__top">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="block-title text-left">
                                <p className="block-title__tagline">calculate your rate</p>
                                {/* <!-- /.block-title__tagline --> */}
                                <h2 className="block-title__title">How much do you need loan htmlFor you?</h2>
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
                            <form className="loan-calculator__form" action="https://thegenius.co/html/finlon_new1/contact.html" id="loan-calculator" data-interest-rate="15">
                                <div className="input-box__top">
                                    <span>$1000</span>
                                    <span>$40000</span>
                                </div>
                                {/* <!-- /.input-box__top --> */}
                                <div className="input-box">
                                    <div className="range-slider-count" id="range-slider-count"></div>
                                    <input type="hidden" value="" id="min-value-rangeslider-count" />
                                    <input type="hidden" value="" id="max-value-rangeslider-count"/>
                                </div>
                                {/* <!-- /.input-box --> */}
                                <div className="input-box__top">
                                    <span>1 Month</span>
                                    <span>12 Months</span>
                                </div>
                                {/* <!-- /.input-box__top --> */}
                                <div className="input-box">
                                    <div className="range-slider-month" id="range-slider-month"></div>
                                    <input type="hidden" value="" id="min-value-rangeslider-month"/>
                                    <input type="hidden" value="" id="max-value-rangeslider-month"/>
                                </div>
                                {/* <!-- /.input-box --> */}
                                <p>
                                    <span>Pay Monthly</span>
                                    <b>$<i id="loan-monthly-pay"></i></b>
                                </p>
                                <p>
                                    <span>Term of Use</span>
                                    <b><i id="loan-month"></i> Months</b>
                                </p>
                                <p>
                                    <span>Total Pay Back</span>
                                    <b>$<i id="loan-total"></i></b>
                                </p>
                                <a href="apply-now.html" className="thm-btn thm-btn--dark-hover">Apply For Loan</a>

                                <div className="loan-calculator__form__terms">*These calculators are provided only as general
                                    self-help
                                    Planning
                                    Tools. Results depend on other factors.</div>
                                    {/* <!-- /.loan-calculator__terms --> */}
                            </form>
                            {/* <!-- /.about-one__from --> */}
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
        <section className="testimonials-one pt-120 mb--40">
            <div className="container">
                <div className="block-title text-center">
                    <p className="block-title__tagline">our testimonials</p>
                    {/* <!-- /.block-title__tagline --> */}
                    <h2 className="block-title__title">What they’re talking about <br/> our company</h2>
                    {/* <!-- /.block-title__title --> */}
                </div>
                {/* <!-- /.block-title --> */}
                <div className="row row-gutter-y-30">
                    <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                        <div className="testimonial-card">
                            <div className="testimonial-card__info">
                                <div className="testimonial-card__image">
                                    <img src="assets/images/resources/testi-1-1.png" alt="Delia Riley" />
                                </div>
                                {/* <!-- /.testimonial-card__image --> */}
                                <div className="testimonial-card__meta">
                                    <div className="testimonial-card__stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    {/* <!-- /.testimonial-card__stars --> */}
                                    <h3 className="testimonial-card__name">Delia Riley</h3>
                                    {/* <!-- /.testimonial-card__name --> */}
                                    <p className="testimonial-card__designation">Finance Manager</p>
                                    {/* <!-- /.testimonial-card__designation --> */}
                                </div>
                                {/* <!-- /.testimonial-card__meta --> */}
                            </div>
                            {/* <!-- /.testimonial-card__info --> */}
                            <span className="testimonial-card__line"></span>
                            {/* <!-- /.testimonial-card__line --> */}
                            <div className="testimonial-card__text">
                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                    would really like definitely come back here. Thank you htmlFor yours service.</p>
                            </div>
                            {/* <!-- /.testimonial-card__text --> */}
                        </div>
                        {/* <!-- /.testimonial-card --> */}
                    </div>
                    {/* <!-- /.col-lg-4 --> */}
                    <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                        <div className="testimonial-card">
                            <div className="testimonial-card__info">
                                <div className="testimonial-card__image">
                                    <img src="assets/images/resources/testi-1-2.png" alt="Essie Perez" />
                                </div>
                                {/* <!-- /.testimonial-card__image --> */}
                                <div className="testimonial-card__meta">
                                    <div className="testimonial-card__stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    {/* <!-- /.testimonial-card__stars --> */}
                                    <h3 className="testimonial-card__name">Essie Perez</h3>
                                    {/* <!-- /.testimonial-card__name --> */}
                                    <p className="testimonial-card__designation">Finance Manager</p>
                                    {/* <!-- /.testimonial-card__designation --> */}
                                </div>
                                {/* <!-- /.testimonial-card__meta --> */}
                            </div>
                            {/* <!-- /.testimonial-card__info --> */}
                            <span className="testimonial-card__line"></span>
                            {/* <!-- /.testimonial-card__line --> */}
                            <div className="testimonial-card__text">
                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                    would really like definitely come back here. Thank you htmlFor yours service.</p>
                            </div>
                            {/* <!-- /.testimonial-card__text --> */}
                        </div>
                        {/* <!-- /.testimonial-card --> */}
                    </div>
                    {/* <!-- /.col-lg-4 --> */}
                    <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div className="testimonial-card">
                            <div className="testimonial-card__info">
                                <div className="testimonial-card__image">
                                    <img src="assets/images/resources/testi-1-3.png" alt="Dustin Dunn" />
                                </div>
                                {/* <!-- /.testimonial-card__image --> */}
                                <div className="testimonial-card__meta">
                                    <div className="testimonial-card__stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    {/* <!-- /.testimonial-card__stars --> */}
                                    <h3 className="testimonial-card__name">Dustin Dunn</h3>
                                    {/* <!-- /.testimonial-card__name --> */}
                                    <p className="testimonial-card__designation">Finance Manager</p>
                                    {/* <!-- /.testimonial-card__designation --> */}
                                </div>
                                {/* <!-- /.testimonial-card__meta --> */}
                            </div>
                            {/* <!-- /.testimonial-card__info --> */}
                            <span className="testimonial-card__line"></span>
                            {/* <!-- /.testimonial-card__line --> */}
                            <div className="testimonial-card__text">
                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                    would really like definitely come back here. Thank you htmlFor yours service.</p>
                            </div>
                            {/* <!-- /.testimonial-card__text --> */}
                        </div>
                        {/* <!-- /.testimonial-card --> */}
                    </div>
                    {/* <!-- /.col-lg-4 --> */}
                </div>
                {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
        </section>
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
        <section className="benefit-one pt-120">
            <div className="benefit-one__shape-1 wow fadeInLeft" data-wow-delay="000ms" data-wow-duration="1500ms" style={{backgroundImage: "url('assets/images/backgrounds/benefit-bg-1-1.jpg')"}}>
            </div>
            {/* <!-- /.benefit-one__shape-1 --> */}
            <div className="benefit-one__shape-2"></div>
            {/* <!-- /.benefit-one__shape-2 --> */}
            <div className="container">
                <div className="row row-gutter-y-60">
                    <div className="col-lg-6">
                        <div className="benefit-one__image wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="500ms">
                            <img src="assets/images/resources/benefit-1-1.png" alt="" />
                            <div className="benefit-one__image__caption">
                                <h3 className="benefit-one__image__title">99.9%</h3>
                                {/* <!-- /.benefit-one__image__title --> */}
                                <p className="benefit-one__image__text">Success Rates Guarantee</p>
                                
                                {/* <!-- /.benefit-one__image__text --> */}
                            </div>
                            {/* <!-- /.benefit-one__image__caption --> */}
                        </div>
                        {/* <!-- /.benefit-one__image --> */}
                    </div>
                    {/* <!-- /.col-lg-6 --> */}
                    <div className="col-lg-6">
                        <div className="benefit-one__content">
                            <div className="block-title text-left">
                                <p className="block-title__tagline">our benefits</p>
                                {/* <!-- /.block-title__tagline --> */}
                                <h2 className="block-title__title">Why you should choose our company</h2>
                                {/* <!-- /.block-title__title --> */}
                            </div>
                            {/* <!-- /.block-title --> */}
                            <p className="benefit-one__text">Nullam vel nibh facilisis lectus fermentum ultrices quis non risus.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Duis
                                porta, quam ut finibus ultrices, lorem lacus congue lorem et rutrum sapien magna tincidunt
                                magna.</p>
                                {/* <!-- /.benefit-one__text --> */}
                            <div className="benefit-one__box">
                                <div className="benefit-one__box__icon">
                                    <i className="icon-bank"></i>
                                </div>
                                {/* <!-- /.benefit-one__box__icon --> */}
                                <div className="benefit-one__box__content">
                                    <h3 className="benefit-one__box__title">Lowest bank fees</h3>
                                    {/* <!-- /.benefit-one__box__title --> */}
                                    <p className="benefit-one__box__text">Lorem ipsum dolor consectetur notte massa sapien samet.
                                        Aucibus sed sem non, mattis commodo nisi.</p>
                                        {/* <!-- /.benefit-one__box__text --> */}
                                </div>
                                {/* <!-- /.benefit-one__box__content --> */}
                            </div>
                            {/* <!-- /.benefit-one__box --> */}
                            <div className="benefit-one__box">
                                <div className="benefit-one__box__icon">
                                    <i className="icon-payment"></i>
                                </div>
                                {/* <!-- /.benefit-one__box__icon --> */}
                                <div className="benefit-one__box__content">
                                    <h3 className="benefit-one__box__title">Up to 20.000$ limit</h3>
                                    
                                    {/* <!-- /.benefit-one__box__title --> */}
                                    <p className="benefit-one__box__text">Lorem ipsum dolor consectetur notte massa sapien samet.
                                        Aucibus sed sem non, mattis commodo nisi.</p>
                                        {/* <!-- /.benefit-one__box__text --> */}
                                </div>
                                {/* <!-- /.benefit-one__box__content --> */}
                            </div>
                            {/* <!-- /.benefit-one__box --> */}
                            <div className="benefit-one__box">
                                <div className="benefit-one__box__icon">
                                    <i className="icon-smartphone-1"></i>
                                </div>
                                {/* <!-- /.benefit-one__box__icon --> */}
                                <div className="benefit-one__box__content">
                                    <h3 className="benefit-one__box__title">Easy in 3 steps</h3>
                                    {/* <!-- /.benefit-one__box__title --> */}
                                    <p className="benefit-one__box__text">Lorem ipsum dolor consectetur notte massa sapien samet.
                                        Aucibus sed sem non, mattis commodo nisi.</p>
                                        {/* <!-- /.benefit-one__box__text --> */}
                                </div>
                                {/* <!-- /.benefit-one__box__content --> */}
                            </div>
                            {/* <!-- /.benefit-one__box --> */}
                        </div>
                        {/* <!-- /.benefit-one__content --> */}
                    </div>
                    {/* <!-- /.col-lg-6 --> */}
                </div>
                {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
        </section>
        {/* <!-- /.benefit-one --> */}
        <section className="blog-one pt-120 pb-120">
            <div className="container">
                <div className="block-title text-center">
                    <p className="block-title__tagline">What We’re Offering</p>
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
        {/* <!-- /.blog-one --> */}
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
                            <h3 className="call-to-action-two__title">Get quick business loans</h3>
                            
                            {/* <!-- /.call-to-action-two__title --> */}
                            <a href="apply-now.html" className="thm-btn">Apply For Loan</a>
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

export default Home
