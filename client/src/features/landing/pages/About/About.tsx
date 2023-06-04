import React from 'react'
import { useSelector } from 'react-redux'
import { usePages,useSiteImages } from '../../../dashboard/pages/Settings/settingsConfigSlice'
import pageProps from '../../../../app/utils/props/pageProps'
import Breadcrum from '../../components/Breadcrum'
import CTASection from '../Home/Components/CTASection'


const About:React.FC<pageProps> = ({pageData}:pageProps) => {
    
    const {aboutUsBg, backgroundImage} = useSelector(useSiteImages)
    const {aboutUs} = useSelector(usePages)
  return (
    <>
<Breadcrum pageData={pageData}/>
<section className="about-two pt-120 pb-120">
    <div className="container">
        <div className="row row-gutter-y-50">
            <div className="col-lg-6">
                <div className="about-two__image">
                    <img src={process.env.REACT_APP_BASE_URL+"/uploads/settings/"+aboutUsBg} alt=""/>
                </div>
                {/* <!-- /.about-two__image --> */}
            </div>
            {/* <!-- /.col-lg-6 --> */}
            <div className="col-lg-6">
                <div className="about-two__content">
                    <div className="block-title text-left">
                        <p className="block-title__tagline">About Company</p>
                        {/* <!-- /.block-title__tagline --> */}
                        <h2 className="block-title__title">Get to know about our company</h2>
                        
                        {/* <!-- /.block-title__title --> */}
                    </div>
                    {/* <!-- /.block-title --> */} 
                    <p className="about-two__text" dangerouslySetInnerHTML={{__html:aboutUs}} ></p>
                    
                </div>
                {/* <!-- /.about-two__content --> */}
            </div>
            {/* <!-- /.col-lg-6 --> */}
        </div>
        {/* <!-- /.row --> */}
    </div>
    {/* <!-- /.container --> */}
</section>
{/* <!-- /.about-two --> */}
<CTASection/>
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
                            <img src="assets/images/resources/testi-1-1.png" alt="Delia Riley"/>
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
                        <p>I loved the customer service you guys provided me. That was very nice and patient
                            with questions I had. I
                            would really like definitely come back here. Thank you for yours service.</p>
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
                            <img src="assets/images/resources/testi-1-2.png" alt="Essie Perez"/>
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
                        <p>I loved the customer service you guys provided me. That was very nice and patient
                            with questions I had. I
                            would really like definitely come back here. Thank you for yours service.</p>
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
                        <p>I loved the customer service you guys provided me. That was very nice and patient
                            with questions I had. I
                            would really like definitely come back here. Thank you for yours service.</p>
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
<section className="team-about pt-120 pb-120">
    <div className="container">
        <div className="block-title text-center">
            <p className="block-title__tagline">professional team</p>
             {/* <!-- /.block-title__tagline --> */}
            <h2 className="block-title__title">Meet the highly qualified <br/> team members</h2>
            
             {/* <!-- /.block-title__title --> */}
        </div>
         {/* <!-- /.block-title --> */}
        <div className="row row-gutter-y-30">
            <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                data-wow-delay="000ms">
                <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-1.jpg" alt="Connor Estrada"/>
                        <div className="team-card__social">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-pinterest"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                         {/* <!-- /.team-card__social --> */}
                    </div>
                     {/* <!-- /.team-card__image --> */}
                    <div className="team-card__content">
                        <div className="team-card__content__inner">
                            <h3 className="team-card__title"><a href="team-details.html">Connor Estrada</a></h3>
                            <p className="team-card__designation">ADVISOR</p>
                        </div>
                         {/* <!-- /.team-card__content__inner --> */}
                    </div>
                     {/* <!-- /.team-card__content --> */}
                </div>
                 {/* <!-- /.team-card --> */}
            </div>
             {/* <!-- /.col-lg-4 col-md-6 col-sm-12 --> */}
            <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                data-wow-delay="100ms">
                <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-2.jpg" alt="Darrell Powell"/>
                        <div className="team-card__social">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-pinterest"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                         {/* <!-- /.team-card__social --> */}
                    </div>
                     {/* <!-- /.team-card__image --> */}
                    <div className="team-card__content">
                        <div className="team-card__content__inner">
                            <h3 className="team-card__title"><a href="team-details.html">Darrell Powell</a></h3>
                            <p className="team-card__designation">ADVISOR</p>
                        </div>
                         {/* <!-- /.team-card__content__inner --> */}
                    </div>
                     {/* <!-- /.team-card__content --> */}
                </div>
                 {/* <!-- /.team-card --> */}
            </div>
            {/* <!-- /.col-lg-4 col-md-6 col-sm-12 --> */}
            <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-duration="1500ms"
                data-wow-delay="200ms">
                <div className="team-card">
                    <div className="team-card__image">
                        <img src="assets/images/team/team-1-3.jpg" alt="Carolyn Love"/>
                        <div className="team-card__social">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-pinterest"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                        {/* <!-- /.team-card__social --> */}
                    </div>
                    {/* <!-- /.team-card__image --> */}
                    <div className="team-card__content">
                        <div className="team-card__content__inner">
                            <h3 className="team-card__title"><a href="team-details.html">Carolyn Love</a></h3>
                            <p className="team-card__designation">ADVISOR</p>
                        </div>
                        {/* <!-- /.team-card__content__inner --> */}
                    </div>
                    {/* <!-- /.team-card__content --> */}
                </div>
                {/* <!-- /.team-card --> */}
            </div>
            {/* <!-- /.col-lg-4 col-md-6 col-sm-12 --> */}
        </div>
        {/* <!-- /.row --> */}
    </div>
    {/* <!-- /.container --> */}
</section>
 {/* <!-- /.team-about --> */}
<div className="client-carousel @@extraClassNameName">
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
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
                </div>
                 {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                    <img src="assets/images/resources/brand-1-1.png" alt=""/>
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
    </>
  )
}

export default React.memo(About)
