import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { selectCurrentToken , selectCurrentUser} from './authSlice';
import useLocalStorage from "../../app/utils/hooks/useLocalStorage";


const PersistentLogin = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [ persist ]:any = useLocalStorage('persist',false);

    const token = useSelector(selectCurrentToken);
    const user = useSelector(selectCurrentUser);

    useEffect(()=>{
        let isMounted = true;
        const verifyRefreshToken = async () =>{
            try{
                // await refresh();
            }catch(error){
                console.error(error);
            }
            finally{
               isMounted && setIsLoading(false);
            }
        }
        !token ? verifyRefreshToken() : setIsLoading(false);
        return () => {
            
            isMounted = false; //cleanup function
        }
    }, []);


    return(
        <>
        {!persist
        ?<Outlet/>
        :isLoading
        ?<>
            <div id="preloader">
            <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
            </div>
            </div>
        </>
        : <Outlet/>

        }
        </>
    )
}

export default PersistentLogin;