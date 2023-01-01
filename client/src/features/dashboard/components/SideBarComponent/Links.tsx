import { ReactComponentElement, ReactElement } from 'react';
import {IoIosPaper,IoMdPeople,IoMdPricetags,IoMdPersonAdd,IoMdTrash,IoMdPaper,IoIosCreate,IoIosBrowsers, IoIosWallet, IoIosAnalytics, IoIosFiling, IoIosPeople} from 'react-icons/io'
import {FaRegQuestionCircle} from "react-icons/fa"

export type sideBarLink ={
    groupTitle?:string,
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
 const SideBarLinks:sideBarLink=[
    {
        id:0,
    title:'Dashboard',
    icon:<IoIosAnalytics fontSize={"2rem"}/>,
    path:"/dshboard"},
    {
        id:1,
        title:'Wallets',
        icon:<IoIosWallet fontSize={"2rem"}/>,
        path:"/wallets"
    },
    {
        id:2,
        title:'Transactions',
        icon:<IoIosFiling fontSize={"2rem"}/>,
        path:"/transactions"
    },
    {
        id:3,
        title:'Market',
        icon:<IoIosBrowsers fontSize={"2rem"}/>,
        path:"/market"
    },
    {
        id:4,
        title:'Messenger',
        icon:<IoIosBrowsers fontSize={"2rem"}/>,
        path:"/messenger"
    },
    {
        id:5,
        title:'Wallet',
        icon:<IoIosBrowsers fontSize={"2rem"}/>,
        path:"/wallet"
    },
    {
        id:6,
        groupTitle:'Admin Section',
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
        
    }]
    
    export default SideBarLinks;