import React, { useEffect,ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLandingPageConfig } from '../../../../dashboard/pages/Settings/settingsConfigSlice';
import { useSelector } from 'react-redux';
import { useGetSlidesQuery } from '../../../../dashboard/pages/Slide/slidesApiSlice';
import slideProps from '../../../../../app/utils/props/slideProps';
import $ from 'jquery'
import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
import 'owl.carousel.es6'


const Slider = () => {
    useEffect(() => {
        let thmOwlCarousels = $(".thm-owl__carousel");
        if (thmOwlCarousels.length) {
          thmOwlCarousels.each(function () {
            let elm = $(this);
            let options = elm.data("owl-options");
            let thmOwlCarousel = elm.owlCarousel(
              "object" === typeof options || !options ? options: JSON.parse(options)
            );
          });
        }
      
        let thmOwlNavCarousels = $(".thm-owl__carousel--custom-nav");
        if (thmOwlNavCarousels.length) {
          thmOwlNavCarousels.each(function () {
            let elm = $(this);
            let owlNavPrev = elm.data("owl-nav-prev");
            let owlNavNext = elm.data("owl-nav-next");
            $(owlNavPrev).on("click", function (e) {
              elm.trigger("prev.owl.carousel");
              e.preventDefault();
            });
      
            $(owlNavNext).on("click", function (e) {
              elm.trigger("next.owl.carousel");
              e.preventDefault();
            });
          });
        }
      return () => {
        
      };
    }, [])
 const {sliderStyle} = useSelector(useLandingPageConfig);
    const {
        data: slides,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetSlidesQuery('slideList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })
      let slider:any; 
    if(slides){
     const {ids,entities} = slides
    //  console.log(Object.valuesentities)
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
             Object.values(entities)?.map((slide:any)=>{

             return( <div className="item" key={slide._id}>
                    <div className="slider-one__item">
                        <div className="slider-one__lines">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="slider-one__image" style={{backgroundImage: `url(${process.env.REACT_APP_BASE_URL+"uploads/slide/"+slide.image})`}}>
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <p className="slider-one__tagline">
                                        <i className="fa fa-chart-pie"></i>
                                      
                                      {slide.title}
                                    </p>
                                    <h2 className="slider-one__title">{slide.description}</h2>
                                    {slide.body}
                                    <p className="slider-one__text">{ slide?.body?.replaceAll(/<\/?[^>]+(>|$)/gi, "")}</p>
                                    <div className="slider-one__btns">
                                        <a href={slide?.cto?.link} className="thm-btn">{slide?.cto?.cot_text}</a>
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
              Object.values(entities)?.map((slide:any):JSX.Element =>{
                

             return( 
             <div className="item" key={slide._id}>
            <div className="slider-one__item">
                <div className="slider-one__image" style={{backgroundImage:`url(${process.env.REACT_APP_BASE_URL+"uploads/slide/"+slide.image})`}}>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="slider-one__tagline"> {slide.title}</p>
                            <h2 className="slider-one__title">{slide.description}</h2>
                            <p className="slider-one__text">{ slide?.body?.replaceAll(/<\/?[^>]+(>|$)/gi, "")}</p>
                            <div className="slider-one__btns">
                                <Link to={slide?.cto?.link} className="thm-btn thm-btn--dark-hover">{slide?.cto?.cto_text}</Link>
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
              Object.values(entities)?.map((slide:any):JSX.Element =>{
                
             return(                          
        <div className="item" key={slide.id}>
            <div className="slider-one__item">
                <div className="slider-one__image" style={{backgroundImage: `url(${process.env.REACT_APP_BASE_URL+"uploads/slide/"+slide.image})`}}>
                </div>
                
                {/* <!-- /.slider-one__image --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="slider-one__title">{/*{slide.title}<br/>*/}{slide.description}</h2>
                                {/* <!-- /.slider-one__title --> */}
                            <p className="slider-one__text">{ slide?.body?.replaceAll(/<\/?[^>]+(>|$)/gi, "")}</p>
                            <div className="slider-one__btns">
                                <Link to={slide?.cto?.link} className="thm-btn">{slide.cto.cto_text}</Link>
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
        slider = null
        break;
}
  }
  return (
    <>
      
        {slider}

    </>
  )
}

export default React.memo(Slider)
