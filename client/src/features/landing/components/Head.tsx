import React from 'react';
import {Helmet} from 'react-helmet-async';
import pageProps from "../../../app/utils/props/pageProps";
import { useSelector } from 'react-redux';
import {useCompanyDetails} from '../../dashboard/pages/Settings/settingsConfigSlice';


const Head:React.FC<pageProps> = ({pageData}:pageProps) => {
  
const {pageTitle} = pageData!;
const {siteName,favicon,description} = useSelector(useCompanyDetails); 
  return (
    <Helmet>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   
    <title>{pageTitle+" - "+siteName}</title>
   
    <link rel="apple-touch-icon" sizes="180x180" href={favicon}/>
    <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
    {/* <link rel="manifest" href={favicon} /> */}
    <meta name="description" content={description} />


    <base href="/"/>
  
</Helmet>
  )
}

export default React.memo(Head)
