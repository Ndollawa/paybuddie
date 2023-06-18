import React,{useContext} from 'react'
import {Navigate, Routes,Route,useLocation} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {ToastContainer} from 'react-toastify'
import { selectCurrentToken } from './features/auth/authSlice';
import RequireAuth from './features/dashboard/components/RequireAuth';
import PersistLogin from './features/dashboard/components/PersistLogin';
import Prefetch from './features/auth/Prefetch';
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
import Error401 from './features/errorPages/Error401';
import Error403 from './features/errorPages/Error403';
import Error404 from './features/errorPages/Error404';
import Error500 from './features/errorPages/Error500';
import Error503 from './features/errorPages/Error503';

// dashboar pages
import DashboardHomepage from './features/dashboard/pages/Home/HomePage'
import Profile from './features/dashboard/pages/Profile/Profile';
import ProfileEdit from './features/dashboard/pages/Profile/ProfileEdit';
import Market from './features/dashboard/pages/Market/Market';
import Wallet from './features/dashboard/pages/Wallet/Wallet';
import Transaction from './features/dashboard/pages/Transaction/Transaction';
import Chat from './features/dashboard/pages/Messenger/Chat';
import CoinDetail from './features/dashboard/pages/CoinDetail/CoinDetail';
import Users from './features/dashboard/pages/Users/Users';
import Contacts from './features/dashboard/pages/Contact/Contacts';
import User from './features/dashboard/pages/Users/User';
import FaqManagement from './features/dashboard/pages/Faq/Faq';
import TeamManagement from './features/dashboard/pages/Team/Team';
import PostManagement from './features/dashboard/pages/Post/Post';
import PostCategoryManagement from './features/dashboard/pages/PostCategory/PostCategory';
import Slide from './features/dashboard/pages/Slide/Slide';
import RoomsManagement from './features/dashboard/pages/Rooms/Rooms';
import ServicesManagement from './features/dashboard/pages/Service/Services';

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
import { useGetSettingsQuery } from './features/dashboard/pages/Settings/settingApiSlice';
import { setSettings,  useSettings } from './features/dashboard/pages/Settings/settingsConfigSlice';
// import SocketIO from './app/utils/context/SocketIO';



const App= ()=>{
const [pageTitle, setPageTitle] = React.useState("Home");
const location  = useLocation()
const dispatch = useDispatch()
const currentToken = useSelector(selectCurrentToken)
const {
    data: settings,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetSettingsQuery('settingList', {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  })
  //  const {_id} = useSelector(useSettings)
  const { setting } = useGetSettingsQuery("settingsList", {
    selectFromResult: ({ data }) => ({
        setting: data?.entities[data.ids[0]]
    }),
  })
  // console.log(_id)
  React.useEffect(() => {
    if(!isLoading && isSuccess) dispatch(setSettings(setting))
   
  }, [setting,isSuccess,isLoading])
  return (
      
            <>
                    
            <ToastContainer/>
          <Routes>
            {/* Public Routes */}{/* ^/$|/index(.html)? */}
             <Route path="error"  element={<Layout pageData={{pageTitle:"Dashboard"}}/> }>
                      <Route index element={<Error404/>} />
                      <Route path="400" element={<Error400 />} />
                      <Route path="401" element={<Error401 />} />
                      <Route path="403" element={<Error403 />} />
                      <Route path="404" element={<Error404 />} />
                      <Route path="500" element={<Error500 />} />
                      <Route path="503" element={<Error503/>} />
              </Route>
              <Route path="auth" element={<Layout pageData={{pageTitle:"Dashboard"}}/>}  >
                      <Route index element={currentToken?<Navigate state={{from:location}} to={'/dashboard'}/> :<Login/>} />
                      <Route path="login" element={currentToken?<Navigate state={{from:location}} to={'/dashboard'}/> :<Login />} />
                      <Route path="register" element={currentToken?<Navigate state={{from:location}} to={'/dashboard'}/> :<Register/>} />
                  
              </Route>
            <Route element={<Prefetch/>}>
            <Route path="/" element={<Home pageData={{pageTitle:pageTitle,coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} >
                <Route index element={<HomePage/>} />
                <Route path="about" element={<About pageData={{pageTitle:"About"}}/>} />
                <Route path="contact" element={<Contact pageData={{pageTitle:"Contact"}}/>} />
                <Route path="careers" element={<Career pageData={{pageTitle:"Careers"}}/>} />
                <Route path="career/apply-now" element={<Form pageData={{pageTitle:"Apply Now"}}/>} />
                <Route path="faqs" element={<Faq pageData={{pageTitle:"FAQs"}}/>} />
                <Route path="terms-and-condition" element={<TermsConditions pageData={{pageTitle:"Terms and Conditions"}}/>} />
                <Route path="our-blog/posts" element={<Blog pageData={{pageTitle:"Blog"}}/>} />
                <Route path="our-blog/posts/:id" element={<Post pageData={{pageTitle:"Post"}}/>} />
                <Route path="privacy-and-Policy" element={<PrivacyPolicy pageData={{pageTitle:"Privacy and Policy"}}/>} />
                <Route path="our-team" element={<Team pageData={{pageTitle:"Our Team"}}/>} />
                <Route path="our-team/:id" element={<Member pageData={{pageTitle:"Team Member"}}/>} />
                <Route path="services" element={<Services pageData={{pageTitle:"Services"}}/>} />
                <Route path="services/:id" element={<Service pageData={{pageTitle:"Service"}}/>} />
                <Route path="login" element={<Navigate to="/auth/login" replace/>} />
                <Route path="register" element={<Navigate to="/auth/register"/>} />
                <Route path="lockscreen" element={<Navigate to="/auth/login"/>} />
              </Route>
            

          
           
             {/* End Public Routes */}

              {/* Protected Routes */}

            <Route element={<PersistLogin />} >
            <Route element={<RequireAuth allowedRoles={[1002,1003]} />} >
            <Route path="/dashboard" element={<Layout pageData={{pageTitle:"Dashboard"}}/>} >
                  <Route index element={<DashboardHomepage/>} />
                  <Route path="profile" element={<Profile/>} />
                  <Route path="profile/edit" element={<ProfileEdit />} />
                  <Route path="wallet" element={<Wallet pageData={{pageTitle:"Wallet",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="market" element={<Market pageData={{pageTitle:"Market",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="transaction" element={<Transaction pageData={{pageTitle:"Transaction",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="contacts" element={<Contacts pageData={{pageTitle:"Contacts",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="users" element={<Users pageData={{pageTitle:"Users",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="users/user/:userId" element={<User pageData={{pageTitle:"User",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="messenger" element={<Chat pageData={{pageTitle:"Messenger",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="messenger/:id" element={<Chat pageData={{pageTitle:"Messenger",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="coin-Detail/:id" element={<CoinDetail pageData={{pageTitle:"Coin Data",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                 
            <Route element={<RequireAuth allowedRoles={[1000,1001]} />} >
                  <Route path="privacy-and-Policy" element={<PrivacyPolicy pageData={{pageTitle:"Privacy and Policy",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="faq" element={<FaqManagement pageData={{pageTitle:"Privacy and Policy",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="our-team" element={<TeamManagement pageData={{pageTitle:"Our Team",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="rooms" element={<RoomsManagement pageData={{pageTitle:"All Rooms",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="services" element={<ServicesManagement pageData={{pageTitle:"Services",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="posts" element={<PostManagement pageData={{pageTitle:"Service",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="posts/category" element={<PostCategoryManagement pageData={{pageTitle:"Service",coverImage:'assets/images/backgrounds/page-header-bg-1-1.jpg'}}/>} />
                  <Route path="slides" element={<Slide />} />
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
            </Route> 
             {/* End Protected Routes */}
            </Route>
            </Route>
           </Route>
            <Route path='*'  element={<Navigate to="error/404"/>}/>
          </Routes>
</>
  );
}

export default React.memo(App);
