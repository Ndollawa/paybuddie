import { store } from "../../app/stores/store";
import {usersApiSlice} from "../dashboard/pages/Users/usersApiSlice";
import { faqsApiSlice } from "../dashboard/pages/Faq/faqApiSlice";
import { slidersApiSlice } from "../dashboard/pages/Slider/sliderApiSlice";
import { settingsApiSlice } from "../dashboard/pages/Settings/settingApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Prefetch =()=>{
  useEffect(() => {
    store.dispatch(faqsApiSlice.util.prefetch('getFaqs', 'faqsList', { force: true }))
    store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))
    store.dispatch(slidersApiSlice.util.prefetch('getSliders', 'slidersList', { force: true }))
    store.dispatch(settingsApiSlice.util.prefetch('getSettings', 'settingsList', { force: true }))
}, [])
    return <Outlet/>
}

export default Prefetch