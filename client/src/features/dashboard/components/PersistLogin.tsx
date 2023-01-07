import { Outlet ,Link, useLocation, Navigate} from "react-router-dom";
import { useState, useEffect,useRef } from "react";
import { useSelector } from 'react-redux';
import { useRefreshMutation } from "../../auth/authApiSlice";
import { selectCurrentToken } from '../../auth/authSlice';
import useLocalStorage from "../../../app/utils/hooks/useLocalStorage";
import {useCompanyDetails, useDashboardConfig} from '../pages/Settings/settingsConfigSlice';

const PersistLogin = () =>{
    const [trueSuccess, setTrueSuccess] = useState(false);
    const [ persist ]:any = useLocalStorage('persist',false);
    const token = useSelector(selectCurrentToken);
    const effectRan = useRef(false);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard';
const [refresh,{
    isUninitialized,
    isLoading,
    isSuccess,
    isError,
    error
}] = useRefreshMutation();

const {layoutOptions} = useSelector(useDashboardConfig);
const {
    typography,
    version,
    layout,
    headerBg,
    primary,
    navheaderBg,
    sidebarBg,
    sidebarStyle,
    sidebarPosition,
    headerPosition,
    containerLayout,
    direction
} = layoutOptions;
const {favicon} = useSelector(useCompanyDetails)

useEffect(() =>{

    if(effectRan.current === true || process.env.NODE_ENV !== 'development'){
        // react 18 strict mode
        const verifyRefreshToken = async () =>{
            try{
                await refresh();
                setTrueSuccess(true)
            }catch(error){
                console.error(error);
            }
           
        }
        if(!token && persist) verifyRefreshToken()
       
    }
  return () =>{
     effectRan.current = true;
    }
  //eslint-disable-next-line
}, [])
 

    return(
        <>
        {!persist
        ?<Outlet/>
            :isLoading
            ?   <>
            <div className="body vh-100" data-typography={typography} data-theme-version={version} data-layout={layout} data-nav-headerbg={headerBg} data-headerbg={navheaderBg} data-sidebar-style={sidebarStyle} data-sidebarbg={sidebarBg} data-sidebar-position={sidebarPosition} data-header-position={headerPosition} data-container={containerLayout} data-direction={direction} data-primary={primary}>
                    <div className="authincation h-100">
                    <div className="preloader">
                              <div className="preloader__image"  style={{backgroundImage:favicon}}></div>
                                </div>
                    </div>
      
                </div></>
                 :isError
                    ? <Navigate to={`/error/401`} state={{from:from}} replace/>
                        :(isSuccess && trueSuccess)
                             ? <Outlet/>
                                 :<Outlet/>
        }
        </>
    )
}

export default PersistLogin;