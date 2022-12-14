import React,{useContext} from 'react'
import { Outlet } from 'react-router-dom';
import useImportScript from '../../app/utils/hooks/importScript';
import pageProps from '../../app/utils/props/pageProps';
const Layout:React.FC<pageProps> = ({pageData}:pageProps) => {
    const {pageTitle} = pageData!;
    
    const javascript = [
    "dashboard-assets/vendor/global/global.min.js",
    "dashboard-assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js",
    "dashboard-assetsvendor/peity/jquery.peity.min.js",
    "dashboard-assets/js/custom.js",
    "dashboard-assets/js/deznav-init.js"
   
  ]	
  return (
    <>
            <head>
            <meta charSet="utf-8"/>
            <meta name="keywords" content="" />
            <meta name="author" content="" />
            <meta name="robots" content="" />
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <meta name="description" content="Zenix - Crypto Admin Dashboard" />
            <meta property="og:title" content="Zenix - Crypto Admin Dashboard" />
            <meta property="og:description" content="Zenix - Crypto Admin Dashboard" />
            <meta property="og:image" content="page-error-404.html" />
            <meta name="format-detection" content="telephone=no"/>
             {/* <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    --> */}
    <base href='/'/>
    <link rel="manifest" href="/manifest.json" />
            <title>{pageTitle}</title>

            <link rel="icon" type="mage/png" sizes="16x16" href="/dashboard-assets/iimages/favicon.png"/>
            <link href="/dashboard-assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet" type='text/css'/>
            <link href="/dashboard-assets/css/style.css" type='text/css' rel="stylesheet"/>
            
            </head>
          <body className="vh-100">
              <div className="authincation h-100">
                  <Outlet/>

              </div>

          </body>
          {useImportScript(javascript)}
    </>
  )
}

export default Layout
