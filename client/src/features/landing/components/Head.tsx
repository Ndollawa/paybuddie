import React from 'react';
import pageProps from "../../../app/utils/props/pageProps";
import { useSelector } from 'react-redux';
import {useCompanyDetails} from '../../app/appConfigSlice';


const Head:React.FC<pageProps> = ({pageData}:pageProps) => {
  
const {pageTitle} = pageData!;
const {siteName,description} = useSelector(useCompanyDetails); 
  return (
    <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     {/* <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    --> */}
    <link rel="manifest" href="/manifest.json" />
    <title>{pageTitle+" - "+siteName}</title>
   
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
    <link rel="manifest" href="%PUBLIC_URL%/assets/images/favicons/site.webmanifest" />
    <meta name="description" content={description} />


    <base href="/"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/vendors/reey-font/stylesheet.css" type='text/css' />
    <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" type='text/css' />
    <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" type='text/css' />
    <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" type='text/css' />
    <link rel="stylesheet" href="/assets/vendors/finlon-icons/style.css" type='text/css' />
    <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" type='text/css' />
    <link rel="stylesheet" href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" type='text/css' />
    <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.min.css" type='text/css' />
    <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.pips.css" type='text/css' />
    <link rel="stylesheet" href="/assets/vendors/odometer/odometer.min.css" type='text/css' />
    <link rel="stylesheet" href="/assets/vendors/swiper/swiper.min.css" type='text/css' />
    <link rel="stylesheet" href="/assets/vendors/owl-carousel/assets/owl.carousel.min.css" type='text/css' />
    <link rel="stylesheet" href="/assets/vendors/owl-carousel/assets/owl.theme.default.min.css" type='text/css' />

    <link rel="stylesheet" href="/assets/css/finlon.css" type='text/css' />
</head>
  )
}

export default React.memo(Head)
