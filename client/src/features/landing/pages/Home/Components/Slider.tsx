import React, { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLandingPageConfig } from '../../../../dashboard/pages/Settings/settingsConfigSlice';
import { useSelector } from 'react-redux';
import { JsxEmit } from 'typescript';


const Slider = () => {
 const {sliderStyle} = useSelector(useLandingPageConfig);
const slides:{
    id:number;
    heading:string|ReactElement;
    subHeading:string | ReactElement;
    image:string;
    body:string;
    link:string;
    cotBtnText:string;
}[] =[
    {
        id:1,
       heading:"Simple & Secure Payment",
       subHeading:<>We provide you
       a financial <span>power</span></>,
       image:"assets/images/backgrounds/slider-1-1.png",
       body:"Nulla ac nunc eget ante consectetur lobortis a vel orci. Vivamus nibh est condimentum ac metus nec, gravida varius diam.",
       link:"/register",
       cotBtnText:"Sign Up"

    },
    {
        id:2,
       heading:<>Quick Payment Transaction
       <span>Everyone</span></>,
       subHeading:"All sub headings goes here! testing..",
       image:"assets/images/backgrounds/slider-2-2.png",
       body:"Nulla ac nunc eget ante consectetur lobortis a vel orci. Vivamus nibh est condimentum ac metus nec, gravida varius diam.",
       link:"/login",
       cotBtnText:"Login"

    },
    {
        id:3,
       heading:"Welcome to Our company",
       subHeading:"All sub headings goes here! testing..",
       image:"assets/images/backgrounds/slider-3-1.png",
       body:"Nulla ac nunc eget ante consectetur lobortis a vel orci. Vivamus nibh est condimentum ac metus nec, gravida varius diam.",
       link:"/register",
       cotBtnText:"Join Now"

    },
   
]
      let slider:ReactElement<ReactNode>; 
switch (sliderStyle) {
    case 1: 
    slider =(
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
                {
              slides.map((slide):JSX.Element =>{
             return( <div className="item" key={slide.id}>
                    <div className="slider-one__item">
                        <div className="slider-one__lines">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="slider-one__image" style={{backgroundImage: `url(${slide.image})`}}>
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <p className="slider-one__tagline">
                                        <i className="fa fa-chart-pie"></i>
                                      
                                      {slide.heading}
                                    </p>
                                    <h2>{slide.subHeading}</h2>
                                    <p className="slider-one__text">{slide.body}</p>
                                    <div className="slider-one__btns">
                                        <a href={slide.link} className="thm-btn">{slide.cotBtnText}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             )}
                )
                }
              
            
            </div>
            <div className="slider-one__carousel__btn">
                <button className="slider-one__carousel__btn__left">
                    <i className="fa fa-angle-left"></i>
                </button>
                <button className="slider-one__carousel__btn__right">
                    <i className="fa fa-angle-right"></i>
                </button>
            </div>
            <div className="slider-one__box wow fadeInRight" data-wow-duration="1500ms">
                <div className="slider-one__box__icon">
                    <i className="icon-successful"></i>
                </div>
                <div className="slider-one__box__content">
                    <p className="slider-one__box__tagline">Checkout our</p>
                    <h3 className="slider-one__box__title">88% Success Rates</h3>
                </div>
            </div>
        
        </section>
    )
        break;
    case 2:
        slider =(
            <section className="slider-one slider-one--two">
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
            {
              slides.map((slide):JSX.Element =>{
             return( 
             <div className="item" key={slide.id}>
            <div className="slider-one__item">
                <div className="slider-one__image" style={{backgroundImage:`url(${slide.image})`}}>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="slider-one__tagline"> {slide.heading}</p>
                            <h2 className="slider-one__title">{slide.subHeading}</h2>
                            <p className="slider-one__text">{slide.body}</p>
                            <div className="slider-one__btns">
                                <Link to={slide.link} className="thm-btn thm-btn--dark-hover">{slide.cotBtnText}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
              )}
            )}
    </div>
    <div className="slider-one__carousel__btn">
        <button className="slider-one__carousel__btn__left">
            <i className="fa fa-angle-left"></i>
        </button>
        <button className="slider-one__carousel__btn__right">
            <i className="fa fa-angle-right"></i>
        </button>
    </div>
</section>
        )
        break;
    case 3:
        slider = (
            <section className="slider-one slider-one--three">
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
        {
              slides.map((slide):JSX.Element =>{
             return(                          
        <div className="item" key={slide.id}>
            <div className="slider-one__item">
                <div className="slider-one__image" style={{backgroundImage: `url(${slide.image})`}}>
                </div>
                
                {/* <!-- /.slider-one__image --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="slider-one__title">{/*{slide.heading}<br/>*/}{slide.subHeading}</h2>
                                {/* <!-- /.slider-one__title --> */}
                            <p className="slider-one__text">{slide.body}</p>
                            <div className="slider-one__btns">
                                <Link to={slide.link} className="thm-btn">{slide.cotBtnText}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
             )}
        )}
    </div>
    <div className="slider-one__carousel__btn">
        <button className="slider-one__carousel__btn__left">
            <i className="fa fa-angle-left"></i>
        </button>
        <button className="slider-one__carousel__btn__right">
            <i className="fa fa-angle-right"></i>
        </button>
    </div>
    {/* <!-- /.slider-one__carousel__btns --> */}
</section>
        )
        break;
  

    default:
        slider =(
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
  
  {
              slides.map((slide):JSX.Element =>{
             return( <div className="item" key={slide.id}>
                    <div className="slider-one__item">
                        <div className="slider-one__lines">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="slider-one__image" style={{backgroundImage: `url(${slide.image})`}}>
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <p className="slider-one__tagline">
                                        <i className="fa fa-chart-pie"></i>
                                      
                                      {slide.heading}
                                    </p>
                                    <h2>{slide.subHeading}</h2>
                                    <p className="slider-one__text">{slide.body}</p>
                                    <div className="slider-one__btns">
                                        <a href={slide.link} className="thm-btn">{slide.cotBtnText}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             )}
              )}
              
              </div>
              <div className="slider-one__carousel__btn">
                  <button className="slider-one__carousel__btn__left">
                      <i className="fa fa-angle-left"></i>
                  </button>
                  <button className="slider-one__carousel__btn__right">
                      <i className="fa fa-angle-right"></i>
                  </button>
              </div>
              <div className="slider-one__box wow fadeInRight" data-wow-duration="1500ms">
                  <div className="slider-one__box__icon">
                      <i className="icon-successful"></i>
                  </div>
                  <div className="slider-one__box__content">
                      <p className="slider-one__box__tagline">Checkout our</p>
                      <h3 className="slider-one__box__title">88% Success Rates</h3>
                  </div>
              </div>
          
          </section>
      )
        break;
}
  
  return (
    <>
      
        {slider}

    </>
  )
}

export default Slider
