import { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
const useAxiosFunc = () =>{
    

    const [response, setResponse] = useState([]);   
    const [error, setError] = useState('');  
    const [loading, setLoading] = useState(false);
    const [controller, setContronller] = useState<any>();
    
const axiosFetch:Function | any = async (configObj:any) =>{
const {
        axiosInstance,
        method,
        url,
        requestConfig = {}
    } = configObj

    try{
        setLoading(true);
        const ctrl = new AbortController();
        setContronller(ctrl)
        const res = await axiosInstance[method.toLowerCase()](url,{...requestConfig, signal:ctrl.signal});
        setResponse(res.data);
        console.log(res)
    }catch(err:any){
        console.error(err.message);
        setError(err.message)
    }finally{
        setLoading(false);
    }
}

     useEffect(() => {
    
      return () => {
       controller && controller.abort();
      };
    }, [controller])
    return [response, error, loading, axiosFetch];
}

export default useAxiosFunc;