import React from 'react';
import useImportScript from '../../../app/utils/hooks/importScript';
// import ScriptTag from 'react-script-tag';

const Js:React.FC = () => {
  const javascript = [
    "assets/vendors/jquery/jquery-3.6.0.min.js",
    "assets/vendors/bootstrap/js/bootstrap.bundle.min.js",
    "assets/vendors/jarallax/jarallax.min.js",
    "assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js",
    "assets/vendors/jquery-appear/jquery.appear.min.js",
    "assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js",
    "assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js",
    "assets/vendors/jquery-validate/jquery.validate.min.js",
    "assets/vendors/nouislider/nouislider.min.js",
    "assets/vendors/odometer/odometer.min.js",
    "assets/vendors/swiper/swiper.min.js",
    "assets/vendors/owl-carousel/owl.carousel.min.js",
    "assets/vendors/wnumb/wNumb.min.js",
    "assets/vendors/wow/wow.js",
    "assets/vendors/isotope/isotope.js",
    "assets/vendors/countdown/countdown.min.js",
    "assets/js/finlon.js"
  ]
  return (
    <>
      {
    useImportScript(javascript)
   
    }
    </>
  )
}

export default React.memo(Js)
