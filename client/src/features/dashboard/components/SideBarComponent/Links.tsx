import { ReactComponentElement, ReactElement } from 'react';
import {IoIosPaper,IoMdPeople,IoMdPricetags,IoMdPersonAdd,IoMdTrash,IoMdPaper,IoIosCreate,IoIosBrowsers, IoIosWallet, IoIosAnalytics, IoIosFiling, IoIosPeople} from 'react-icons/io'
import {FaRegQuestionCircle} from "react-icons/fa"

export type sideBarLink ={
    groupTitle?:string,
    icon?: string|JSX.Element,
    title?:string,
    path?:string,
    children?:{
        path:string,
        title:string,
        icon?: string|JSX.Element
        children?:{
        path:string,
        title:string,
        icon?: string|JSX.Element,
        }[]
    }[]


 }[]
 const SideBarLinks:sideBarLink=[
    {
    title:'Dashboard',
    icon:<IoIosAnalytics fontSize={"2rem"}/>,
    path:"/dshboard"},
    {
        title:'Wallets',
        icon:<IoIosWallet fontSize={"2rem"}/>,
        path:"/wallets"
    },
    {
        title:'Transactions',
        icon:<IoIosFiling fontSize={"2rem"}/>,
        path:"/transactions"
    },
    {
        title:'Market',
        icon:<IoIosBrowsers fontSize={"2rem"}/>,
        path:"/market"
    },
    {
        title:'Messenger',
        icon:<IoIosBrowsers fontSize={"2rem"}/>,
        path:"/messenger"
    },
    {
        title:'Wallet',
        icon:<IoIosBrowsers fontSize={"2rem"}/>,
        path:"/wallet"
    },
    {
        groupTitle:'Admin Section',
        title:'User Management',
        icon:<IoIosPeople fontSize={"2rem"}/>,
        // path:
        children:[
         { 
            title:'Users',
        // icon:
            path: ''
        },
        {
            title:'Team members',
            // icon:
                path: ''
        }],
        
    }]
    
    export default SideBarLinks;