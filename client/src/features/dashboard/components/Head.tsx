import React from 'react';
import pageProps from "../../../app/utils/props/pageProps";
import { useSelector } from 'react-redux';
import {useCompanyDetails} from '../../app/appConfigSlice';


const Head:React.FC<pageProps> = ({pageData}:pageProps) => {
const {siteName,favicon,description} = useSelector(useCompanyDetails); 
const {pageTitle} = pageData!;
  return (
    <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
	<meta charSet="utf-8"/>
  <meta name="keywords" content="" />
	<meta name="author" content="" />
	<meta name="robots" content="" />
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
	<meta name="description" content={description} />
	<meta property="og:title" content={siteName} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="page-error-404.html" />
	<meta name="format-detection" content="telephone=no"/>
  {/* <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    --> */}
    <base href='/'/>
    <link rel="manifest" href="/manifest.json" />
    <title>{pageTitle}</title>
    {/* <!-- Favicon icon --> */}
    <link rel="icon" type="image/png" sizes="16x16" href={favicon} />

{/* <!-- Global CSS --> */}
    <link href="/dashboard-assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" type='text/css' rel="stylesheet"/>
{/* <!-- End Global CSS --> */}

{/* <!-- Page Level CSS --> */}
	<link rel="stylesheet" type='text/css' href="/dashboard-assets/vendor/chartist/css/chartist.min.css"/>
	<link href="/dashboard-assets/vendor/owl-carousel/owl.carousel.css" type='text/css' rel="stylesheet"/>
{/* <!-- End Page Level CSS --> */}

{/* <!-- Bottom CSS --> */}
    <link href="/dashboard-assets/css/style.css" type='text/css' rel="stylesheet"/>
{/* <!-- End Bottom CSS CSS --> */}
	
</head>
  )
}

export default React.memo(Head)
