import React ,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import SideBarLinks from './Links'



interface sideBarLink{
    groupTitle?:string,
    icon?: string|JSX.Element,
    title?:string,
    path?:string,
    children?:{
        path:string,
        title:string,
        icon?: string|JSX.Element,
        children?:{
        path:string,
        title:string,
        icon?: string|JSX.Element,
        }[]
    }[]


 };
const SideNav = () => {
// let [Links, setLinks] = useState<ReactNode>()
// useEffect(()=>{
//     let sideNav:JSX.Element = SideBarLinks.map((link:sideBarLink,i:number)=>{
//           return(<>{link.groupTitle && <li className="nav-label">{link.groupTitle}</li>}
//                     <li key={i}><Link className={link.children?"has-arrow ai-icon":"ai-icon"} to={link.path? link.path : ""} aria-expanded="false">
//                             {link.icon}
//                          <span className="nav-text">{link.title}</span>
//                         </Link>
//                      {link.children ?  <ul aria-expanded="false">
//                         {
//                      link.children.map((sublink, j)=>{
//                         return(<li key={j}><Link to={sublink.path} >{sublink.title}<span className="badge badge-xs badge-success">New</span></Link>
//                         {sublink.children ?  <ul aria-expanded="false">
//                         {
//                      sublink.children.map((innersublink, k)=>{
//                         return(<li key={k}><Link to={innersublink.path}>{innersublink.title}</Link></li>)
    
//                      })
//                      }</ul>:null}
//                      </li>)
//                     })
//                 }</ul>:null}</li></>)}
//                 )
                
//   },[]);
  return (

    <ul className="metismenu" id="menu">
        {SideBarLinks.map((link:sideBarLink,i:number)=>{
         
      return(<>{link.groupTitle && <li key={`group-link${i}`} className="nav-label">{link.groupTitle}</li>}
                <li key={`main-menu${i}`}><Link className={link.children?"has-arrow ai-icon":"ai-icon"} to={link.path? link.path : ""} aria-expanded="false">
                        {link.icon}
                        <span className="nav-text">{link.title}</span>
                    </Link>
                 {link.children ?  <ul key={`sub-menu-container${i}`} aria-expanded="false">
                    {
                 link.children.map((sublink, j)=>{
                    return(<li key={`sub-menu${j}`}><Link to={sublink.path} >{sublink.title}<span className="badge badge-xs badge-success">New</span></Link>
                    {sublink.children ?  <ul key={`nested-sub-menu-container${j}`} aria-expanded="false">
                    {
                 sublink.children.map((innersublink, k)=>{
                    return(<li key={`nested-sub-menu${k}`}><Link to={innersublink.path}>{innersublink.title}</Link></li>)

                 })
                 }</ul>:null}
                 </li>)
                })
            }</ul>:null}</li></>)}
            )
            }
                
        
            </ul>
  )
}

export default SideNav