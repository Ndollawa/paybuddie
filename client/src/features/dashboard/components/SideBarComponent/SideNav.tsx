import React ,{ReactNode, useEffect} from 'react';
import {Link} from 'react-router-dom';
import SideBarLinks from './Links';
import $ from 'jquery';


interface sideBarLink{
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


 };
const SideNav = () => {
let [links, setLinks] = React.useState(SideBarLinks)

useEffect(()=>{
   const handleMetisMenu = () =>{
      $('.metismenu > .mm-active ').each(function(){
         if($(this).children('ul').length > 0)
         {
            $(this).addClass('active-no-child');
         }
      });
   }
handleMetisMenu();

},[])
const toggleMenu = (id:number,type:string)=>{
   if(type === "main-menu"){
      setLinks((prevValue)=>{
       return prevValue.map((menu)=>{ return menu.id === id ? {...menu, isOpen:!menu.isOpen } : menu})
       } );
    }else if(type === "sub-menu"){
      setLinks((prevValue)=>{
         return prevValue.map((menu)=>{
            return menu.id === Math.ceil(id) ?
            { ...menu,children:menu.children!.map((smenu)=>{
               return  smenu.id === id ?
                {...smenu, isOpen:!menu.isOpen } : smenu
            })} : menu
         } )
         } )
   }
    
}
   const sideNav:ReactNode = links.map((link:sideBarLink)=>{
         
      return(<li key={link.id}>{link.groupTitle && <li key={`group-link${link.id}`} className="nav-label">{link.groupTitle}</li>}
                <li key={link.id} onClick={link.children?()=>toggleMenu(link.id,"main-menu"): undefined} className={link.isOpen? "mm-active":undefined}><Link className={link.children?"has-arrow ai-icon":"ai-icon"} to={link.path? link.path : ""} aria-expanded={link.isOpen?"true" : "false"}>
                        {link.icon}
                        <span className="nav-text">{link.title}</span>
                    </Link>
                 {link.children ?  <ul className={link.isOpen? "left mm-show mm-collapse":"mm-collapse"} aria-expanded={link.isOpen?"true" : "false"}>
                    {
                 link.children.map((sublink)=>{
                    return(<li key={`sub-menu${sublink.id}`}  onClick={sublink.children?()=>toggleMenu(sublink.id,"sub-menu"): undefined}><Link to={sublink.path!} >{sublink.title}<span className="badge badge-xs badge-success">New</span></Link>
                    {sublink.children ?  <ul className="mm-collapse" aria-expanded={sublink.isOpen?"true" : "false"}>
                    {
                 sublink.children.map((innersublink)=>{
                    return(<li key={`inner-menu${innersublink.id}`}><Link to={innersublink.path}>{innersublink.title}</Link></li>)

                 })
                 }</ul>:null}
                 </li>)
                })
            }</ul>:null}</li></li>)}
            )
          
       

  return (

       
             <ul className="metismenu" id="menu">
            
                   {sideNav}     
        
            </ul> 
  )
}

export default SideNav