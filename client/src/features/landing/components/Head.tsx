import React from 'react';
import {Helmet} from 'react-helmet-async';
import pageProps from "../../../app/utils/props/pageProps";
import { useSelector } from 'react-redux';
import {useCompanyDetails,useSiteImages} from '../../dashboard/pages/Settings/settingsConfigSlice';


const Head:React.FC<pageProps> = ({pageData}:pageProps) => {
  
const {pageTitle} = pageData!;
const {siteName,description} = useSelector(useCompanyDetails); 
const {favicon} = useSelector(useSiteImages); 
  return (
    <Helmet>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   
    <title>{pageTitle+" - "+siteName}</title>
   
    <link rel="apple-touch-icon" sizes="180x180" href={process.env.REACT_APP_BASE_URL+"/uploads/settings/"+favicon}/>
    <link rel="icon" type="image/png" sizes="32x32" href={process.env.REACT_APP_BASE_URL+"/uploads/settings/"+favicon} />
    <link rel="icon" type="image/png" sizes="16x16" href={process.env.REACT_APP_BASE_URL+"/uploads/settings/"+favicon} />
    {/* <link rel="manifest" href={process.env.REACT_APP_BASE_URL+"/uploads/settings/"+favicon} /> */}
    <meta name="description" content={description} />


    <base href="/"/>
    <link rel="stylesheet" href="assets/vendors/reey-font/stylesheet.css" type='text/css' />
     {/* <link rel="stylesheet" href="assets/vendors/bootstrap/css/bootstrap.min.css" type='text/css' /> */}
    <link rel="stylesheet" href="assets/vendors/animate/animate.min.css" type='text/css' />
    <link rel="stylesheet" href="assets/vendors/fontawesome/css/all.min.css" type='text/css' />
    <link rel="stylesheet" href="assets/vendors/finlon-icons/style.css" type='text/css' />
    <link rel="stylesheet" href="assets/vendors/jarallax/jarallax.css" type='text/css' />
    <link rel="stylesheet" href="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" type='text/css' />
    <link rel="stylesheet" href="assets/vendors/nouislider/nouislider.min.css" type='text/css' />
    <link rel="stylesheet" href="assets/vendors/nouislider/nouislider.pips.css" type='text/css' />
    <link rel="stylesheet" href="assets/vendors/odometer/odometer.min.css" type='text/css' />
    <link rel="stylesheet" href="assets/vendors/swiper/swiper.min.css" type='text/css' />
    <link rel="stylesheet" href="assets/vendors/owl-carousel/assets/owl.carousel.min.css" type='text/css' />
    <link rel="stylesheet" href="assets/vendors/owl-carousel/assets/owl.theme.default.min.css" type='text/css' />

    
</Helmet>
  )
}

export default React.memo(Head)
