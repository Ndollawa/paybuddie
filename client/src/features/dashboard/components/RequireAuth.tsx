import {useLocation,Navigate,Outlet} from 'react-router-dom';
import {authProps, allowedRolesProps} from '../../../app/utils/props/authProps';
import jwt_decode from 'jwt-decode';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../auth/authSlice';

const RequireAuth = ({allowedRoles}:allowedRolesProps) =>{
    const location = useLocation();
    const token = useSelector(selectCurrentToken);
    const from = location.state?.from?.pathname || '/dashboard';

    const decodedToken:authProps['auth'] | undefined = token
             ? jwt_decode(token)
                : undefined;
    const  roles = decodedToken?.userInfo?.roles || []
    // console.log(token)
    return(
       
        roles?.find((role:number) => allowedRoles?.includes(role))
        ? <Outlet/>
        : token
        ?<Navigate to="/error/403" state={{from:from}} replace />
        : <Outlet/>
       
    );
}

export default RequireAuth;