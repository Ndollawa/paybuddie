import React from 'react'
import {useGetContactsQuery, useDeleteContactMutation } from '../contactsApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast'
import useUserImage from '../../../../../app/utils/hooks/useUserImage'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'

interface modalDataProps {
    modalData:{
       data:{
          user:any;
      } | null,
      showModal:boolean,
    } 
    }
const UserTableData = ({contact,index,showEditForm}:any) => {
   

    const userImage = useUserImage(contact)

    const [deleteContact, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }]:any = useDeleteContactMutation()
    const onDeleteContact = async () => {
        await deleteContact({ _id: contact._id })
        if(isDelSuccess)showToast('success', 'CONTACT deleted successfully')
        if(isDelError) showToast('error',JSON.stringify(delerror?.data))
    }
// 
    const contactData = {
        data:{
       contact
        },
        showModal:true
    }
    if (contact) {
        const created = new Date(contact.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })
        let acctStatus;
        switch (contact.accountStatus) {
        case 'pending':
            acctStatus =<span className="badge badge-primary">{contact.accountStatus}</span>
            break;
        case 'active':
            acctStatus =<span className="badge badge-success">{contact.accountStatus}</span>
            break;
        case 'banned':
            acctStatus =<span className="badge badge-danger">{contact.accountStatus}</span>
            break;
        case 'blocked':
            acctStatus =<span className="badge badge-danger">{contact.accountStatus}</span>
            break;
        case 'disabled':
            acctStatus =<span className="badge badge-info">{contact.accountStatus}</span>
            break;
        case 'deactivated':
            acctStatus =<span className="badge badge-danger">{contact.accountStatus}</span>
            break;
        case 'deleted':
            acctStatus =<span className="badge badge-danger">{contact.accountStatus}</span>
            break;
    
        default:
            acctStatus = ""
            break;
    }
    let verificationStatus
        switch (contact.verificationStatus) {
        case 'verified':
            verificationStatus =<span className="badge badge-primary"></span>
            break;
        case 'unverified':
            verificationStatus =<span className="badge badge-success"></span>
            break;
       
        default:
            verificationStatus = ""
            break;
    }
    
        return (
            <tr role="row" className="odd" key={contact._id}>
										<td className="sorting_1">
											<h6>{++index}.</h6>
										</td>
										<td>
											<div className="media style-1">
												<img src={userImage} className="img-fluid me-2" alt=""/>
												<div className="media-body">
													<h6>{contact?.firstName && contact?.lastName && contact?.firstName+" "+contact?.lastName}</h6>
													<span><a href={`mailto:${contact.email}}`}>{contact.email}</a></span>
													<span><a href={`tel:${contact.phone}}`}>{contact.phone}</a></span>
												</div>
											</div>
										</td>
										<td>
											{contact.contactname}
										</td>
										<td>
											{verificationStatus}
										</td>
										<td>
											<div>
												<h6>{contact.country}</h6>
												{/* <span>COde:En</span> */}
											</div>
										</td>
										<td>{acctStatus}</td>
										<td>
											<div>
												<h6 className="text-primary">{created}</h6>
												{/* <span>Paid</span> */}
											</div>
										</td>
										<td>
											<div className="d-flex action-button">
												<button className="btn btn-info btn-xs light px-2"   onClick={()=>showEditForm(contactData)}>
													<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
													</svg>
												</button>
                                                <Link to={`/dashboard/users/user/${contact._id}`} className='btn btn-primary btn-xs light px-2 ms-2'>
                                                    <FaEye fontSize={'1.2rem'}/>
                                                </Link>
												<button className="ms-2 btn btn-xs px-2 light btn-danger" onClick={onDeleteContact}>
													<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M3 6H5H21" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
														<path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
													</svg>

												</button>
											</div>
										</td>
									</tr>
        
        )
    
    } else return null
  
}

export default React.memo(UserTableData)
