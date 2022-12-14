import axios from "../../api/axios";
import {useDispatch,useSelector} from 'react-redux';
import {setCredentials} from '../../../features/auth/authSlice';
import { selectCurrentUser} from '../../../features/auth/authSlice';

const useRefreshToken = ()=>{
   const dispatch = useDispatch()
    const user = useSelector(selectCurrentUser)
    const refresh = async ()=>{
        const response = await axios.get('/refresh',{
            withCredentials:true
        });
        dispatch(setCredentials({user,accessToken: response.data.accessToken}))
      
        return response.data.accessToken;
    }
    return refresh;
}
export default useRefreshToken;