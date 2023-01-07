import { ReactComponentElement, ReactElement } from 'react';
import {IoIosPaper,IoMdPeople,IoMdPricetags,IoMdPersonAdd,IoMdTrash,IoMdPaper,IoIosCreate,IoIosBrowsers, IoIosWallet, IoIosAnalytics, IoIosFiling, IoIosPeople, IoIosHelp} from 'react-icons/io'
import {FaRegQuestionCircle} from "react-icons/fa"

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
    icon:<IoIosAnalytics fontSize={"2rem"}/>,
    path:"/dshboard"},
    {
        id:1,
        title:'Wallets',
        icon:<IoIosWallet fontSize={"2rem"}/>,
        path:"wallets"
    },
    {
        id:2,
        title:'Transactions',
        icon:<IoIosFiling fontSize={"2rem"}/>,
        path:"transactions"
    },
    {
        id:3,
        title:'Market',
        icon:<IoIosBrowsers fontSize={"2rem"}/>,
        path:"market"
    },
    {
        id:4,
        title:'Messenger',
        icon:<IoIosBrowsers fontSize={"2rem"}/>,
        path:"messenger"
    },
    {
        id:5,
        title:'Wallet',
        icon:<IoIosBrowsers fontSize={"2rem"}/>,
        path:"wallet"
    }]

    export const AdminLinks:sideBarLink =[{
        id:6,
        title:'User Management',
        icon:<IoIosPeople fontSize={"2rem"}/>,
        // path:
        isOpen:false,
        children:[
         { 
            id:6.0,
            title:'Users',
        // icon:
            path: ''
        },
        {
            id:6.1,
            title:'Team members',
            // icon:
                path: ''
        }],
        
    },{
        id:7,
        title:'FAQ Management',
        icon:<IoIosHelp fontSize={"2rem"}/>,
        path:'faq',
        isActive:false,
        isOpen:false
    }]