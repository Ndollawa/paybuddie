import { store } from "../../app/stores/store";
import {usersApiSlice} from "../dashboard/pages/Users/usersApiSlice";
import { useEffect ,useState} from "react";
import { Outlet } from "react-router-dom";

const Prefetch =()=>{
  const [user, setUser] = useState({})
useEffect(() => {
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate(user))

  return () => {
    users.unsubscribe()
  };
}, [user])

    return <Outlet/>
}

export default Prefetch