import {useLocation,Navigate,Outlet} from 'react-router-dom';
import {authProps, allowedRolesProps} from '../../../app/utils/props/authProps';
import jwt_decode from 'jwt-decode';
import { useSelector } from 'react-redux';
import { selectCurrentToken , selectCurrentUser} from '../../auth/authSlice';

const RequireAuth = ({allowedRoles}:allowedRolesProps) =>{
    const location = useLocation();
    const token = useSelector(selectCurrentToken);
    const user = useSelector(selectCurrentUser);

    const decodedToken:authProps['auth'] | undefined = token
             ? jwt_decode(token)
                : undefined;
    const  roles = decodedToken?.userInfo?.roles || []
    return(
        roles.find((role:number) => allowedRoles?.includes(role))
        ? <Outlet/>
        : user 
        ?<Navigate to="/error/403" state={{from:location}} replace />
        :<Navigate to="/login" state={{from:location}} replace />
        
    );
}

export default RequireAuth;