import { ReactComponentElement, ReactElement } from 'react';
import { IoChatbubblesOutline, IoWalletOutline} from 'react-icons/io5'
import {FaOpencart, FaPeopleArrows, FaPodcast, FaRegQuestionCircle, FaServicestack, FaUserFriends} from "react-icons/fa"
import {BiTransfer} from 'react-icons/bi'
import {GiTakeMyMoney} from 'react-icons/gi'
import {RxDashboard} from 'react-icons/rx'
// import {RiCurrencyLine} from 'react-icons/ri'
import {TfiLayoutMediaCenter} from 'react-icons/tfi'
import {HiOutlineChatBubbleLeftRight , HiOutlineUsers} from 'react-icons/hi2'

export type sideBarLink ={
    id:number;
    icon?: string|JSX.Element;
    title?:string;
    path?:string;
    isActive?: undefined | boolean | null;
    isOpen?: undefined | boolean | null;
    children?:{
        id:number;
        icon?: string|JSX.Element;
        title?:string;
        path?:string;
        isActive?: undefined | boolean | null;
        isOpen?: undefined | boolean | null;
        children?:{
            id:number,
        path:string,
        title:string,
        icon?: string|JSX.Element,
        }[]
    }[]


 }[]
 export const UserLinks:sideBarLink=[
    {
        id:0,
    title:'Dashboard',
    icon:<RxDashboard fontSize={"2rem"}/>,
    path:"/dashboard"},
    {
        id:1,
        title:'Wallets',
        icon:<IoWalletOutline fontSize={"2rem"}/>,
        path:"/dashboard/wallets"
    },
    {
        id:2,
        title:'Transactions',
        icon:<GiTakeMyMoney fontSize={"2rem"}/>,
        path:"/dashboard/transactions"
    },
    {
        id:3,
        title:'Market',
        icon:<FaOpencart fontSize={"2rem"}/>,
        path:"/dashboard/market"
    },
    {
        id:4,
        title:'Messenger',
        icon:<HiOutlineChatBubbleLeftRight fontSize={"2rem"}/>,
        path:"/dashboard/messenger"
    },
    {
        id:5,
        title:'Contacts',
        icon:<FaUserFriends fontSize={"2rem"}/>,
        path:"/dashboard/contacts"
    }
    ]

    export const AdminLinks:sideBarLink =[{
        id:6,
        title:'User Management',
        icon:<HiOutlineUsers fontSize={"2rem"}/>,
        // path:
        isOpen:false,
        children:[
         { 
            id:6.0,
            title:'Users',
        // icon:
            path: '/dashboard/users'
        },
        {
            id:6.1,
            title:'Team members',
            // icon:
                path: '/dashboard/our-team'
        }],
        
    },
    {
        id:7,
        title:'Blog Post Management',
        icon:<FaPodcast fontSize={"2rem"}/>,
        path:'/dashboard/posts',
        isActive:false,
        isOpen:false
    }
    ,{
        id:8,
        title:'Rooms Management',
        icon:<IoChatbubblesOutline fontSize={"2rem"}/>,
        path:'/dashboard/rooms',
        isActive:false,
        isOpen:false
    }
    ,{
        id:9,
        title:'Slider Management',
        icon:<TfiLayoutMediaCenter fontSize={"2rem"}/>,
        path:'/dashboard/slides',
        isActive:false,
        isOpen:false
    }
    ,{
        id:10,
        title:'Team Management',
        icon:<FaPeopleArrows fontSize={"2rem"}/>,
        path:'/dashboard/our-team',
        isActive:false,
        isOpen:false
    }
    ,{
        id:11,
        title:'Services Management',
        icon:<FaServicestack fontSize={"2rem"}/>,
        path:'/dashboard/services',
        isActive:false,
        isOpen:false
    }
    ,{
        id:12,
        title:'FAQ Management',
        icon:<FaRegQuestionCircle fontSize={"2rem"}/>,
        path:'/dashboard/faq',
        isActive:false,
        isOpen:false
    }
]