import React,{useEffect,useState} from 'react'
import { useDeleteContactMutation } from '../contactsApiSlice'
import { useGetUsersQuery } from '../../Users/usersApiSlice'
import showToast from '../../../../../app/utils/hooks/showToast'
import useUserImage from '../../../../../app/utils/hooks/useUserImage'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import Swal from 'sweetalert2'
import $ from 'jquery'
import initDataTables,{destroyDataTables} from '../../../../../app/utils/initDataTables'  
import { HiChatBubbleLeftRight } from 'react-icons/hi2'

import { useSelector } from 'react-redux'
import useUserContacts from '../../../../../app/utils/hooks/useUserContacts'
import { useAddNewContactMutation, useUpdateContactMutation } from '../contactsApiSlice'
import { selectCurrentUser } from '../../../../auth/authSlice'
import contactProps from '../../../../../app/utils/props/contactProps'

interface modalDataProps {
    modalData:{
       data:contactProps | null,
      showModal:boolean,
    } 
    }
const ContactsTableData = ({contactId,index,showEditForm}:any) => {
    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[contactId]
        }),
      }) 
    //   const [userContacts, setUserContacts] = useState([])  

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
    
   
    const userImage = useUserImage(user)

    const [deletecontact, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }]:any = useDeleteContactMutation()
    const onDeleteContact = async (id:string) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-sm m-2 btn-success',
              cancelButton: 'btn btn-sm m-2 btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then(async(result) => {
            if (result.isConfirmed) {  
        await deletecontact({ _id: id })
        if(isDelError) return showToast('error',JSON.stringify(delerror?.data))
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'contact has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Operation aborted, entry is safe  :)',
                'error'
              )
            }
          })
      
    }
    useEffect(() => {

            destroyDataTables($('#dataTable'))
              initDataTables($('#dataTable'),"Contacts")
            return () => {
             destroyDataTables($('#dataTable'))
            }
          }, [user])
    if (user) {
        const userData = {
        data:{
       user
        },
        showModal:true
    }
        const created = new Date(user.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })
        let acctStatus;
        switch (user.accountStatus) {
        case 'pending':
            acctStatus =<span className="badge light rounded-pill fs-14 badge-primary">{user.accountStatus}</span>
            break;
        case 'active':
            acctStatus =<span className="badge light rounded-pill fs-14 badge-success">{user.accountStatus}</span>
            break;
        case 'banned':
            acctStatus =<span className="badge light rounded-pill fs-14 badge-danger">{user.accountStatus}</span>
            break;
        case 'blocked':
            acctStatus =<span className="badge light rounded-pill fs-14 badge-danger">{user.accountStatus}</span>
            break;
        case 'disabled':
            acctStatus =<span className="badge light rounded-pill fs-14 badge-info">{user.accountStatus}</span>
            break;
        case 'deactivated':
            acctStatus =<span className="badge light rounded-pill fs-14 badge-danger">{user.accountStatus}</span>
            break;
        case 'deleted':
            acctStatus =<span className="badge light rounded-pill fs-14 badge-danger">{user.accountStatus}</span>
            break;
    
        default:
            acctStatus = ""
            break;
    }
    let verificationStatus
        switch (user.verificationStatus) {
        case 'verified':
            verificationStatus =<span className="badge light rounded-pill fs-14 badge-primary"></span>
            break;
        case 'unverified':
            verificationStatus =<span className="badge light rounded-pill fs-14 badge-success"></span>
            break;
       
        default:
            verificationStatus = ""
            break;
    }
    
        return (
            <tr role="row" className="odd" key={user._id}>
										<td className="sorting_1">
											<h6>{++index}.</h6>
										</td>
										<td>
											<div className="media style-1">
												<img src={userImage} className="img-fluid me-2" alt={user.username}/>
												<div className="media-body">
													<h6>{user?.firstName && user?.lastName && user?.firstName+" "+user?.lastName}</h6>
													<span><a href={`mailto:${user.email}}`}>{user.email}</a></span>
													<span><a href={`tel:${user.phone}}`}>{user.phone}</a></span>
												</div>
											</div>
										</td>
										<td>
											{user.username}
										</td>
										<td align="center">
											{verificationStatus}
										</td>
										<td>
											<div>
												<h6>{user.country}</h6>
												{/* <span>COde:En</span> */}
											</div>
										</td>
										<td align="center">{acctStatus}</td>
										<td>
											<div>
												<h6 className="text-primary">{created}</h6>
												{/* <span>Paid</span> */}
											</div>
										</td>
										<td>
											<div className="d-flex action-button">
												
                                                <Link to={`/dashboard/messenger/${user._id}`} className='btn btn-info btn-xs light px-2 ms-2'>
                                                    <HiChatBubbleLeftRight fontSize={'1.2rem'}/>
                                                </Link>
                                                <Link to={`/dashboard/users/user/${user._id}`} className='btn btn-dark btn-xs light px-2 ms-2'>
                                                    <FaEye fontSize={'1.2rem'}/>
                                                </Link>
												{!isContact(user.id)
                                                ? 
                                                <button type='button' onClick={()=>addContact(user.id)} className="btn btn-info btn-xs light px-2 ms-2" title='Add Contact'><i className="fas fa-user-plus"></i></button>
												:<button type='button' onClick={()=>removeContact(user.id)} className="btn btn-success btn-xs light px-2 ms-2" title='Remove Contact'><i className="fa fa-users"></i></button>
                                                    } 
											</div>
										</td>
									</tr>
        )
    
    } else return null
  
}

export default React.memo(ContactsTableData)
