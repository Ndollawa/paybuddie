import React,{useEffect, useState} from 'react'
import useUserImage from '../../../../app/utils/hooks/useUserImage'
import { selectCurrentUser } from '../../../auth/authSlice'
import { useSelector } from 'react-redux'
import useUserContacts from '../../../../app/utils/hooks/useUserContacts'
import Swal from 'sweetalert2'
import { useAddNewContactMutation, useUpdateContactMutation } from '../../pages/Contact/contactsApiSlice'
import { Link } from 'react-router-dom'
import { HiChatBubbleLeftRight } from 'react-icons/hi2'

const User = ({user, openChat}:any) => {
	const [allUsers, setAllUsers] = useState([])
	const userImage = useUserImage(user)
    const currentUser = useSelector(selectCurrentUser)
    const [isContact] = useUserContacts()
    const[addNewContact,{
        isLoading:addContactIsSuccess,
        isLoading:addContactIsLoading,
        isError:addContactIsError,
        error:addContactError,
    }] = useAddNewContactMutation()
    const[updateContact,{
        isLoading:updateContactIsSuccess,
        isLoading:updateContactIsLoading,
        isError:updateContactIsError,
        error:updateContactError,
    }] = useUpdateContactMutation()
const addContact = async(contactId:string)=>{
 await addNewContact({userId:currentUser._id,contactId})
//  if(addContactIsError) return Swal.fire()
}
    const removeContact = async(contactId:string)=>{
        await updateContact({userId:currentUser._id,contactId})
        // if(updateContactIsError) return Swal.fire()
    }

    
  return (
    				<li key={user._id}>
									<div className="d-flex bd-highlight">
										{/* <div className="img_cont primary">AU<i className="icon fa fa-user-plus"></i></div> */}
										<div className="img_cont">
											<img src={userImage} className="rounded-circle user_img" alt={user.fullName}/>
											<span className={`${(user?.online?.status)? 'online_icon online': 'online_icon offline'}`}></span>
										</div>
										<div className="user_info">
											<span>{user.fullName}</span>
											<p>{`${user.username} is ${(user?.online?.status)? 'Online': 'Offline'}`}</p>
										</div>
                                        <div className="ms-auto">
												<button type="button" className="btn btn-info btn-xs sharp me-1" onClick={()=>openChat(user._id)} title='Message User'><HiChatBubbleLeftRight fontSize={'1.2rem'}/></button>
                                                {!isContact(user._id)
                                                ? 
                                                <button type='button' onClick={()=>addContact(user._id)} className="btn btn-info btn-xs sharp me-1" title='Add Contact'><i className="fas fa-user-plus"></i></button>
												:<>
                                                {user.phone && <a href={`tel:${user?.phone}`} className="btn btn-info btn-xs sharp" title='Remove Contact'><i className="fa fa-phone"></i></a>}
                                                <button type='button' onClick={()=>removeContact(user._id)} className="btn btn-success btn-xs sharp" title='Remove Contact'><i className="fa fa-users"></i></button>
                                                </> } 
                                                </div>
									</div>
								</li>
  )			
}

export default React.memo(User)