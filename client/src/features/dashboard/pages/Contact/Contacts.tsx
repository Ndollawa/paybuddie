import React,{useState,useEffect} from 'react'
import MainBody from '../../components/MainBody'
import { useDispatch } from 'react-redux'
import { useGetContactsQuery } from './contactsApiSlice'
import { setPreloader } from '../../components/PreloaderSlice'
import pageProps from '../../../../app/utils/props/pageProps'
import useToggle from '../../../../app/utils/hooks/useToggle'
import ContactsTable from './components/ContactsTable'
import ContactsCard from './components/ContactsCard'
import { FaListAlt } from 'react-icons/fa'
import { IoGridOutline } from 'react-icons/io5'
    

    


    const Contacts = ({pageData}:pageProps)  => {

// const [contacts, setcontacts] = useState<any>([])
    const [viewType,toggleViewType] = useToggle('viewType','List');
    const dispatch =useDispatch()
  
    const {
        data:contacts,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetContactsQuery('contactList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })
   
        useEffect(() => {
            dispatch(setPreloader(isLoading?true:false)) 
             
            }, [isLoading])
let contactsCard
   if(isSuccess){
  contactsCard = contacts.ids? contacts?.ids.map((contactId:any)=> <ContactsCard key={contactId}  contactId={contactId} />): null
   }
    const setView = ()=>{
        if(viewType){
        toggleViewType(false)
        }else{
        toggleViewType(true)
        }
    }
     return (
        <>
        <MainBody>
        <div className="container-fluid">
            <div className="row">
            <div className="col-12">
            <div className="card-body d-flex justify-content-between align-items-center">
								<div>
									<h4>Contact {viewType? "List": "Card"}  View</h4>
									<span>Lorem ipsum sit amet</span>
								</div>
								<button className="btn btn-info light" onClick={setView}>{viewType? <FaListAlt fontSize={'1.2rem'}/> : <IoGridOutline fontSize={'1.2rem'} />}</button>
							</div>
                            </div>
                       {viewType? 
                        isSuccess &&< ContactsTable contacts={contacts} />
                        :
                          <><div className="project-nav">
                          <div className="card-action card-tabs  me-auto mb-md-0 mb-3">
                              <ul className="nav nav-tabs style-2">
                                  <li className="nav-item">
                                      <a href="#navpills-1" className="nav-link active" data-bs-toggle="tab" aria-expanded="false">All Contacs <span className="badge badge-primary shadow-primary">154</span></a>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#navpills-2" className="nav-link" data-bs-toggle="tab" aria-expanded="false">Pending Invitation <span className="badge shadow-warning  badge-warning">6</span></a>
                                  </li>	
                              </ul>
                          </div>
                          
                          
                          <div className="d-flex align-items-center">
                              <a href="#" id="btn-add-contact" className="btn btn-primary text-white">+ New Contacts</a>
                          </div>
                      </div>
                  
                      <div className="tab-content">
                          <div className="tab-pane fade show active" id="navpills-1">
                              <div className="row dz-scroll loadmore-content searchable-items list ps" id="allContactListContent">
                                  <div className="items items-header-section">
                                  </div>
                                  
                                  <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                                      <div className="card contact-bx item-content">
                                          <div className="card-header border-0">
                                              <div className="action-dropdown">
                                                  <div className="dropdown">
                                                      <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                              <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                              <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                          </svg>
                                                      </a>
                                                      <div className="dropdown-menu dropdown-menu-end">
                                                          <a className="dropdown-item edit" href="#">Edit</a>
                                                          <a className="dropdown-item delete" href="#">Delete</a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="card-body user-profile">
                                              <div className="image-bx">
                                                  <img src="images/users/pic1.jpg" data-src="images/users/pic1.jpg" alt="" className="rounded-circle"/>
                                                  <span className="active"></span>
                                              </div>
                                              <div className="media-body user-meta-info">
                                                  <h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Alan Green">Alan Green</a></h6>
                                                  <p className="fs-14 mb-3 user-work" data-occupation="UI Designer">UI Designer</p>
                                                  <ul>
                                                      <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
                                                      <li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
                                                      <li><a href="#"><i className="fas fa-video" aria-hidden="true"></i></a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                      
                                      
                                  <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                                      <div className="card contact-bx item-content">
                                          <div className="card-header border-0">
                                              <div className="action-dropdown">
                                                  <div className="dropdown">
                                                      <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                              <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                              <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                          </svg>
                                                      </a>
                                                      <div className="dropdown-menu dropdown-menu-end">
                                                          <a className="dropdown-item edit" href="#">Edit</a>
                                                          <a className="dropdown-item delete" href="#">Delete</a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="card-body user-profile">
                                              <div className="image-bx">
                                                  <span className="icon-placeholder bgl-success rounded-circle text-success">am</span>
                                                  <span className="active"></span>
                                              </div>
                                              <div className="media-body user-meta-info">
                                                  <h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Angela Moss">Angela Moss</a></h6>
                                                  <p className="fs-14 mb-3 user-work" data-occupation="Redblue Studios">Redblue Studios</p>
                                                  <ul>
                                                      <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
                                                      <li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
                                                      <li><a href="#"><i className="fas fa-video" aria-hidden="true"></i></a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                      
                                  
                              <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}><div className="ps__thumb-x" tabIndex={0} style={{left: "0px", width: "0px"}}></div></div><div className="ps__rail-y" style={{top: "0px", right: "0px"}}><div className="ps__thumb-y" tabIndex={0} style={{top: "0px", height: "0px"}}></div></div></div>
                              <div className="row mb-5">
                                  <div className="col-xl-12 d-flex justify-content-center">
                                      <a href="#" className="btn btn-outline-primary dz-load-more" id="allContactList" rel="ajax/contact-list.html">Load More</a>
                                  </div>
                              </div>
                          </div>
                          <div className="tab-pane fade" id="navpills-2">
                              <div className="row dz-scroll loadmore-content ps" id="pendingListContent">
                                  <div className="items items-header-section">
                                  </div>
                                  <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
                                      <div className="card contact-bx item-content">
                                          <div className="card-header border-0">
                                              <div className="action-dropdown">
                                                  <div className="dropdown">
                                                      <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                              <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                              <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                          </svg>
                                                      </a>
                                                      <div className="dropdown-menu dropdown-menu-end">
                                                          <a className="dropdown-item edit" href="#">Edit</a>
                                                          <a className="dropdown-item delete" href="#">Delete</a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="card-body user-profile">
                                              <div className="image-bx">
                                                  <img src="images/users/pic2.jpg" data-src="images/users/pic2.jpg" alt="" className="rounded-circle"/>
                                                  <span className="active"></span>
                                              </div>
                                              <div className="media-body user-meta-info">
                                                  <h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name" data-name="Brian Samuel">Brian Samuel</a></h6>
                                                  <p className="fs-14 mb-3 user-work" data-occupation="Team Management">Team Management</p>
                                                  <ul>
                                                      <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
                                                      <li><a href="page-chat.html"><i className="las la-sms"></i></a></li>
                                                      <li><a href="#"><i className="fas fa-video" aria-hidden="true"></i></a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              
                              <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}><div className="ps__thumb-x" tabIndex={0} style={{left: "0px", width: "0px"}}></div></div><div className="ps__rail-y" style={{top: "0px", right: "0px"}}><div className="ps__thumb-y" tabIndex={0} style={{top: "0px", height: "0px"}}></div></div></div>
                              <div className="row mb-5">
                                  <div className="col-xl-12 d-flex justify-content-center">
                                      <a href="#" className="btn btn-outline-primary dz-load-more" id="pendingList" rel="ajax/contact-list.html">Load More</a>
                                  </div>
                              </div>
                          </div>
                      </div></>
                          } 
                        </div>
                    </div>
        </MainBody>
        </>
      )
    }
    

export default React.memo(Contacts)