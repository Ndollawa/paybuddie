import React from 'react'
import { Outlet } from 'react-router-dom';
import Head from '../dashboard/components/Head';
import Js from '../dashboard/components/Js';
import pageProps from '../../app/utils/props/pageProps';
// import './styles.css'

const Layout:React.FC<pageProps> = ({pageData}:pageProps) => {  
  return (
    <>
        <Head pageData={pageData}/>
          <Outlet/>
         <Js/>
    </>
  )
}

export default Layout
