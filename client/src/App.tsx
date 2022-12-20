import React from 'react'
import {Navigate, Routes,Route} from 'react-router-dom';
import RequireAuth from './features/dashboard/components/RequireAuth';
import PersistentLogin from './features/auth/PersistentLogin';
import Home from './features/landing/Index'
import HomePage from './features/landing/pages/Home/Home';


// landing/pages
import About from './features/landing/pages/About/About';
import Blog from './features/landing/pages/Blog/Blog';
import Post from './features/landing/pages/Blog/Post/Post';
import Career from './features/landing/pages/Careers/Career';
import Form from './features/landing/pages/Careers/Form';
import Contact from './features/landing/pages/Contact/Contact';
import Faq from './features/landing/pages/FAQ/Faq';
import Services from './features/landing/pages/Services/Services';
import Service from './features/landing/pages/Services/Detail/Service';
import Team from './features/landing/pages/Team/Team';
import TermsConditions from './features/landing/pages/Terms-Conditions/TermsConditions';
import Member from './features/landing/pages/Team/Detail/Member';
import PrivacyPolicy from './features/landing/pages/Privacy-Policy/PrivacyPolicy';


// Error pages
import Error400 from './features/errorPages/Error400';
import Error403 from './features/errorPages/Error403';
import Error404 from './features/errorPages/Error404';
import Error500 from './features/errorPages/Error500';
import Error503 from './features/errorPages/Error503';

// dashboar pages
import DashboardHomepage from './features/dashboard/pages/Home/HomePage'
import Profile from './features/dashboard/pages/Profile/Profile';
import Market from './features/dashboard/pages/Market/Market';
import Wallet from './features/dashboard/pages/Wallet/Wallet';
import Transaction from './features/dashboard/pages/Transaction/Transaction';
import Chat from './features/dashboard/pages/Messenger/Chat';
import CoinDetail from './features/dashboard/pages/CoinDetail/CoinDetail';
import User from './features/dashboard/pages/User/User';
import Users from './features/dashboard/pages/User/Users';

// auth routes
import Login from './features/auth/Login';
import LockScreen from './features/auth/LockScreen';
import Register from './features/auth/Register';

// settings
import SiteSettings from './features/dashboard/pages/Settings/SiteSettings';
import GeneralSettings from './features/dashboard/pages/Settings/components/GeneralSettings';
import HomePageSettings from './features/dashboard/pages/Settings/components/HomePageSettings';
import AboutUs from './features/dashboard/pages/Settings/components/AboutUs';
import TermsConditionsSetting from './features/dashboard/pages/Settings/components/TermsConditions';
import PrivacyPolicySetting from './features/dashboard/pages/Settings/components/PrivacyPolicy';
import SiteImage from './features/dashboard/pages/Settings/components/SiteImage';
import Layout from './features/Layout/Layout';

const App= ()=>{
const [pageTitle, setPageTitle] = React.useState("Home");
  return (
      
            
                    
          <Routes>
            {/* Public Routes */}{/* ^/$|/index(.html)? */}
             <Route path="error"  element={<Layout pageData={{pageTitle:"Dashboard"}}/> }>
                      <Route index element={<Error404/>} />
                      <Route path="400" element={<Error400 />} />
                      <Route path="403" element={<Error403 />} />
                      <Route path="404" element={<Error404 />} />
                      <Route path="500" element={<Error500 />} />
                      <Route path="503" element={<Error503/>} />
              </Route>
                  <Route path="auth" element={<Layout pageData={{pageTitle:"Dashboard"}}/>}  >
                      <Route index element={<Login/>} />
                      <Route path="login" element={<Login />} />
                      <Route path="register" element={<Register/>} />
                  
              </Route>
            <Route path="/" element={<Home pageData={{pageTitle:pageTitle,coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} >
                <Route index element={<HomePage/>} />
                <Route path="about" element={<About pageData={{pageTitle:"About",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                <Route path="contact" element={<Contact pageData={{pageTitle:"Contact",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                <Route path="careers" element={<Career pageData={{pageTitle:"Careers",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                <Route path="career/apply-now" element={<Form pageData={{pageTitle:"Apply Now",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                <Route path="faq" element={<Faq pageData={{pageTitle:"FAQ",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                <Route path="terms-and-condition" element={<TermsConditions pageData={{pageTitle:"Terms and Conditions",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                <Route path="our-blog" element={<Blog pageData={{pageTitle:"Blog",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                <Route path="our-blog/:id" element={<Post pageData={{pageTitle:"Post",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                <Route path="privacy-and-Policy" element={<PrivacyPolicy pageData={{pageTitle:"Privacy and Policy",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                <Route path="our-team" element={<Team pageData={{pageTitle:"Our Team",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                <Route path="our-team/:id/member" element={<Member pageData={{pageTitle:"Team Member",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                <Route path="services" element={<Services pageData={{pageTitle:"Services",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                <Route path="services/:id/service" element={<Service pageData={{pageTitle:"Service",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                <Route path="login" element={<Navigate to="/auth/login" replace/>} />
                <Route path="register" element={<Navigate to="/auth/register"/>} />
                <Route path="lockscreen" element={<Navigate to="/auth/login"/>} />
              </Route>
            

          
           
             {/* End Public Routes */}

              {/* Protected Routes */}
            {/* <Route element={<PersistLogin/>} > */}
            {/* <Route element={<RequireAuth allowedRoles={[1000,10001,1002,10003]} />} > */}
            <Route path="/dashboard" element={<Layout pageData={{pageTitle:"Dashboard"}}/>} >
                  <Route index element={<DashboardHomepage/>} />
                  <Route path="profile" element={<Profile pageData={{pageTitle:"Profile"}}/>} />
                  <Route path="wallet" element={<Wallet pageData={{pageTitle:"Wallet",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="market" element={<Market pageData={{pageTitle:"Market",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="transaction" element={<Transaction pageData={{pageTitle:"Transaction",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="user" element={<Users pageData={{pageTitle:"Users",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="user/:userId" element={<User pageData={{pageTitle:"User",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="messenger" element={<Chat pageData={{pageTitle:"Messenger",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="coin-Detail/:id" element={<CoinDetail pageData={{pageTitle:"Coin Data",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="privacy-and-Policy" element={<PrivacyPolicy pageData={{pageTitle:"Privacy and Policy",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="our-team" element={<Team pageData={{pageTitle:"Our Team",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="our-team/:id/member/" element={<Member pageData={{pageTitle:"Team Member",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="services" element={<Services pageData={{pageTitle:"Services",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="services/:id/service/" element={<Service pageData={{pageTitle:"Service",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="settings/" element={<SiteSettings/>} >
                      <Route index element={<GeneralSettings/>} />
                      <Route path="general" element={<GeneralSettings/>} />
                      <Route path="home-page" element={<HomePageSettings/>} />
                      <Route path="about-us" element={<AboutUs/>} />
                      <Route path="privacy-and-policy" element={<PrivacyPolicySetting/>} />
                      <Route path="contact-us" element={<SiteSettings/>} />
                      <Route path="site-images" element={<SiteImage/>} />
                      <Route path="terms-and-conditions" element={<TermsConditionsSetting/>} />
                  </Route> 
                 
            </Route> 
             {/* End Protected Routes */}


            {/* </Route> */}
            {/* </Route> */}
           
            <Route path='*'  element={<Navigate to="error/404"/>}/>
          </Routes>

  );
}

export default App;
