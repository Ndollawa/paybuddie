import React from 'react';
import {Helmet} from 'react-helmet-async'
import pageProps from "../../../app/utils/props/pageProps";
import { useSelector } from 'react-redux';
import {useCompanyDetails} from '../../app/appConfigSlice';


const Head:React.FC<pageProps> = ({pageData}:pageProps) => {
const {siteName,favicon,description} = useSelector(useCompanyDetails); 
const {pageTitle} = pageData!;
  return (
    <Helmet>
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
    <base href='/'/>
    <title>{pageTitle}</title>
    {/* <!-- Favicon icon --> */}
    <link rel="icon" type="image/png" sizes="16x16" href={favicon} />


{/* <!-- Bottom CSS --> */}
    <link href="/dashboard-assets/css/style.css" type='text/css' rel="stylesheet"/>
{/* <!-- End Bottom CSS CSS --> */}
	
</Helmet>
  )
}

export default React.memo(Head)
