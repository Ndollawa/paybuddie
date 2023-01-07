import React,{FormEvent,FormEventHandler}  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useLandingPageConfig } from '../settingsConfigSlice';
import { useHomepageSettingsMutation } from '../settingApiSlice';
import { setAppHomepageSetting } from '../settingsConfigSlice';
import useInput from '../../../../../app/utils/hooks/useInput'

const HomePageSettings = () => {

enum Styles{STYLE_1=1,STYLE_2, STYLE_3};

const dispatch= useDispatch();
const [homepageSettings,isLoading]=useHomepageSettingsMutation();

const {navStyle,sliderStyle,aboutStyle,testimonialStyle,ourBenefitStyle,whatWeOfferStyle} = useSelector(useLandingPageConfig);


const [aboutUsStyle, setAboutUsStyle, AboutUsStyleAttr] = useInput(aboutStyle)
const [whatweOfferStyle, setWhatWeOfferStyle, WhatWeOfferStyleAttr] = useInput(whatWeOfferStyle)
const [navstyle, setNavStyle, NavStyleAttr] = useInput(navStyle)
const [testimonialstyle, setTestimonialStyle, TestimonialStyleAttr] = useInput(testimonialStyle)
const [sliderstyle, setSliderStyle, SliderStyleAttr] = useInput(sliderStyle)
const [ourBenefitstyle, setOurBenefitStyle, OurBenefitStyleAttr] = useInput(ourBenefitStyle)

const styleOptions = [1,2,3].map(option=><option value={option}>Style {option}</option>)

const updateSetting:FormEventHandler = async(e:FormEvent)=>{
e.preventDefault()
try {
  await homepageSettings({}).unwrap()
   dispatch(setAppHomepageSetting({}))
} catch (error) {
  
}

}
  return (
    <>
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Home Page</h4>
      </div>
      <div className="card-body">
        <div className="basic-form">
          <form onSubmit={updateSetting}> 
            <div className="row">
            <div className="mb-12 col-md-12">
                <label className="form-label"><strong>Show Affiliate Section</strong></label>
                <input
                type="checkbox"
                  className="setting-checkbox"
                  value={navStyle}
                  onChange={setNavStyle}
                  {...NavStyleAttr}
                />
                 
              </div>
            <div className="mb-12 col-md-12">
                <label className="form-label"><strong>Show Blog Section</strong></label>
                <input
                type="checkbox"
                  className="setting-checkbox"
                  value={navstyle}
                  onChange={setNavStyle}
                  {...NavStyleAttr}
                />
                 
              </div>
            <div className="mb-12 col-md-12">
                <label className="form-label"><strong>Show Testimonial Section</strong></label>
                <input
                type="checkbox"
                  className="setting-checkbox "
                  value={navStyle}
                  onChange={setNavStyle}
                  {...NavStyleAttr}
                />
                 
              </div>
             <br/>
             <br/>
             <br/>
              <div className="mb-3 col-md-4">
                <label className="form-label"><strong>Slider Style</strong></label>
                <select
                  className="default-select form-control wide"
                  value={sliderstyle}
                  onChange={setSliderStyle}
                  {...SliderStyleAttr}
                >
                  <option value="">Choose...</option>
                 {styleOptions}
                </select>
              </div>
              <div className="mb-3 col-md-4">
                <label className="form-label"><strong>About Us Style</strong></label>
                <select
                  className="default-select form-control wide"
                  value={aboutUsStyle}
                  onChange={setAboutUsStyle}
                  {...AboutUsStyleAttr}
                >
                  <option value="">Choose...</option>
                  {styleOptions}
                </select>

            </div>
              
            <div className="mb-3 col-md-4">
                <label className="form-label"><strong>Navbar Style</strong></label>
                <select
                  className="default-select form-control wide"
                  value={navstyle}
                  onChange={setNavStyle}
                  {...NavStyleAttr}
                >
                  <option value="">Choose...</option>
                 {styleOptions}
                </select>
              </div>
              
            <div className="mb-3 col-md-4">
                <label className="form-label"><strong>What We Offer  Style</strong></label>
                <select
                  className="default-select form-control wide"
                  value={whatweOfferStyle}
                  onChange={setWhatWeOfferStyle}
                  {...WhatWeOfferStyleAttr}
                >
                  <option value="">Choose...</option>
                  {styleOptions}
                </select>
              </div>

              <div className="mb-3 col-md-4">
                <label className="form-label"><strong>Testimonial Style</strong></label>
                <select
                  className="default-select form-control wide"
                  value={testimonialstyle}
                  onChange={setTestimonialStyle}
                  {...TestimonialStyleAttr}
                >
                  <option value="">Choose...</option>
                  {styleOptions}
                </select>
              </div>
              <div className="mb-3 col-md-4">
                <label className="form-label"><strong>Our Benefit Style</strong></label>
                <select
                  className="default-select form-control wide"
                  value={ourBenefitstyle}
                  onChange={setOurBenefitStyle}
                  {...OurBenefitStyleAttr}
                >
                  <option value="">Choose...</option>
                  {styleOptions}
                </select>

            </div>
                {/*  <div className="mb-3 col-md-4">
                <label className="form-label"><strong>Primary Colour</strong></label>
                <input
                  type="color"
                  className="form-control"
                  placeholder=""
                  value={primaryColour}
                  onChange={setPrimaryColour}
                  {...PrimaryColourAttr}
                />
              </div>
           
           <div className="mb-3 col-md-4">
                <label className="form-label"><strong>Secondary Colour </strong></label>
                <input
                  type="color"
                  className="form-control"
                  placeholder=""
                  value={WhatWeOfferStyle}
                  onChange={setSecondaryColour}
                  {...SecondaryColourAttr}
                />
              </div> */}
               
            </div>
            <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Update Site Info
            </button></div>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default HomePageSettings