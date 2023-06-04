import React from 'react'
import userInterface from '../../../../../app/utils/props/userProps'
import { useGetContactsQuery } from '../contactsApiSlice'
import { useGetUsersQuery } from '../../Users/usersApiSlice'
import getUserImage from '../../../../../app/utils/getUserImage'
import { Link } from 'react-router-dom'

// :userInterface
const ContactCard= ({contactId}:any)  => {
const { contact } = useGetContactsQuery("contactsList", {
    selectFromResult: ({ data }) => ({
        contact: data?.entities[contactId]
    }),
  })
  const { users } = useGetUsersQuery("usersList", {
	selectFromResult: ({ data }) => ({
		users: contact?.contacts?.map((c:string)=>data?.entities[c])		 
	}),
  }) 
const userCards = users.length? users?.map((user:any)=>{

const userImage = getUserImage(user)

  return (
					<>
					<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items" key={user._id}>
								<div className="card contact-bx item-content">
									<div className="card-header border-0">
										<div className="action-dropdown">
											<div className="dropdown">
												<a href="" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
														<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
														<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
													</svg>
												</a>
												<div className="dropdown-menu dropdown-menu-end">
													<a className="dropdown-item edit" href="">Edit</a>
													<a className="dropdown-item delete" href="">Delete</a>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body user-profile">
										<div className="image-bx">
											<img src={userImage}  alt="" className="rounded-circle"/>
											<span className="active"></span>
										</div>
										<div className="media-body user-meta-info">
											<h6 className="fs-20 font-w500 my-1"><a href="app-profile.html" className="text-black user-name">Alan Green</a></h6>
											<p className="fs-14 mb-3 user-work text-muted"><a href={`mailto:${user?.email}}`}>{user?.email}</a> </p>
											<ul>
												<li><a href={`tel:${user?.phone}}`}><i className="fa fa-phone" aria-hidden="true"></i></a></li>
												<li><a href="page-error-404.html"><i className="las la-sms"></i></a></li>
												<li><a href=""><i className="fas fa-video" aria-hidden="true"></i></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
				</>
					
					
  )

}) 
: (<div className="d-flex justify-contents-center align-items-center card card-body"><h3>No Contacts</h3></div>)
return userCards
}

export default React.memo(ContactCard)
