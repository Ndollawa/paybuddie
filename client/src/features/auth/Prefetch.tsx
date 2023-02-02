import { store } from "../../app/stores/store";
import {usersApiSlice} from "../dashboard/pages/Users/usersApiSlice";
import { faqsApiSlice } from "../dashboard/pages/Faq/faqApiSlice";
import { useEffect ,useState} from "react";
import { Outlet } from "react-router-dom";

const Prefetch =()=>{
  useEffect(() => {
    store.dispatch(faqsApiSlice.util.prefetch('getFaqs', 'faqsList', { force: true }))
    store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))
}, [])
    return <Outlet/>
}

export default Prefetch