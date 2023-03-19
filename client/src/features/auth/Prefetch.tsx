import { store } from "../../app/stores/store";
import {usersApiSlice} from "../dashboard/pages/Users/usersApiSlice";
import {contactsApiSlice} from "../dashboard/pages/Contact/contactsApiSlice";
import { faqsApiSlice } from "../dashboard/pages/Faq/faqApiSlice";
import { slidesApiSlice } from "../dashboard/pages/Slide/slideApiSlice";
import { roomsApiSlice } from "../dashboard/pages/Rooms/roomApiSlice";
import { teamsApiSlice } from "../dashboard/pages/Team/teamApiSlice";
// import { slidesApiSlice } from "../dashboard/pages/Slide/slideApiSlice";
import { postsApiSlice } from "../dashboard/pages/Post/postApiSlice";
import { settingsApiSlice } from "../dashboard/pages/Settings/settingApiSlice";
import {useSelector} from 'react-redux';
import { selectCurrentUser } from "./authSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Prefetch =()=>{
  const user = useSelector(selectCurrentUser)
  useEffect(() => {
    store.dispatch(faqsApiSlice.util.prefetch('getFaqs', 'faqsList', { force: true }))
   if(user._id){
    store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))
    store.dispatch(contactsApiSlice.util.prefetch('getContacts', 'contactsList', { force: true }))
    store.dispatch(roomsApiSlice.util.prefetch('getRooms', 'roomsList', { force: true }))
   } 
    store.dispatch(slidesApiSlice.util.prefetch('getSlides', 'slidesList', { force: true }))
    store.dispatch(teamsApiSlice.util.prefetch('getTeams', 'teamsList', { force: true }))
    store.dispatch(slidesApiSlice.util.prefetch('getSlides', 'slidesList', { force: true }))
    store.dispatch(settingsApiSlice.util.prefetch('getSettings', 'settingsList', { force: true }))
    store.dispatch(postsApiSlice.util.prefetch('getPosts', 'postsList', { force: true }))
}, [])
    return <Outlet/>
}

export default Prefetch