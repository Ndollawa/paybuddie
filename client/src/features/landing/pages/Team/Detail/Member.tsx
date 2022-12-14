import React from 'react'
import pageProps from '../../../../../app/utils/props/pageProps'
import Breadcrum from '../../../components/Breadcrum'


const Member:React.FC<pageProps> = ({pageData}:pageProps) => {


    return (
      <>
  <Breadcrum pageData={pageData}/>


        <section className="team-details pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="team-details__image wow fadeInUp" data-wow-duration="1500ms">
                            <img src="assets/images/team/team-d-1-1.jpg" alt=""/>
                        </div>
                        {/* <!-- /.team-details__image --> */}
                    </div>
                    {/* <!-- /.col-lg-6 --> */}
                    <div className="col-lg-6">
                        <div className="team-details__content">
                            <div className="team-details__floated">jessica</div>
                            {/* <!-- /.team-details__floated --> */}
                            <div className="block-title text-left">
                                <p className="block-title__tagline">CEO & Co Founder</p>
                                {/* <!-- /.block-title__tagline --> */}
                                <h2 className="block-title__title">Jessica Brown</h2>
                                {/* <!-- /.block-title__title --> */}
                            </div>
                            {/* <!-- /.block-title --> */}
                            <div className="team-details__social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-pinterest"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                            {/* <!-- /.team-details__social --> */}
                            <p className="team-details__highlight">Duis irure dolor lipsum is simply free text available.</p>
                            
                            {/* <!-- /.team-details__highlight --> */}
                            <p className="team-details__text">Lorem ipsum dolor sit amet, con adipiscing elit tiam convallis elit id
                                impedie. Quisq commodo simply free ornare tortor. </p>
                                {/* <!-- /.team-details__text --> */}
                            <p className="team-details__text">If you are going to use a passage of Lorem Ipsum, you need to be sure
                                there isn't anything embarrassing hidden in the middle of text.</p>
                                {/* <!-- /.team-details__text --> */}
                        </div>
                        {/* <!-- /.team-details__content --> */}
                    </div>
                    {/* <!-- /.col-lg-6 --> */}
                </div>
                {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
        </section>
        {/* <!-- /.team-details --> */}

        <div className="container">
            <hr className="block-separator"/>
        </div>
        {/* <!-- /.container --> */}

        <section className="team-progress pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="block-title text-left">
                            <p className="block-title__tagline">About Company</p>
                            {/* <!-- /.block-title__tagline --> */}
                            <h2 className="block-title__title">I serves with a focus on <br/> maximizing resource</h2>
                            {/* <!-- /.block-title__title --> */}
                        </div>
                        {/* <!-- /.block-title --> */}
                    </div>
                    {/* <!-- /.col-lg-6 --> */}
                    <div className="col-lg-6">
                        <div className="team-progress__content">
                            <div className="team-progress__item">
                                <h4 className="team-progress__title">Consulting</h4>
                                <div className="team-progress__bar">
                                    <div className="team-progress__bar__inner count-bar" data-percent="67%">
                                        <div className="team-progress__bar__text count-text">67%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-progress__item">
                                <h4 className="team-progress__title">Credit Card</h4>
                                <div className="team-progress__bar">
                                    <div className="team-progress__bar__inner count-bar" data-percent="46%">
                                        <div className="team-progress__bar__text count-text">46%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-progress__item">
                                <h4 className="team-progress__title">Personal Loan</h4>
                                <div className="team-progress__bar">
                                    <div className="team-progress__bar__inner count-bar" data-percent="28%">
                                        <div className="team-progress__bar__text count-text">28%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /.team-progress__content --> */}
                    </div>
                    {/* <!-- /.col-lg-6 --> */}
                </div>
                {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
        </section>
        {/* <!-- /.team-progress --> */}

        <div className="client-carousel client-carousel--team-details">
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
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
                        </div>
                        {/* <!-- /.swiper-slide --> */}
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt=""/>
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

export default Member
