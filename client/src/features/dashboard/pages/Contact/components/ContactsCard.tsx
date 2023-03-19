import React from 'react'
import userInterface from '../../../../../app/utils/props/userProps'
import { useGetContactsQuery } from '../contactsApiSlice'
import useUserImage from '../../../../../app/utils/hooks/useUserImage'
import { Link } from 'react-router-dom'

// :contactInterface
const ContactsCard= ({contactId}:any)  => {
const { contact } = useGetContactsQuery("contactsList", {
    selectFromResult: ({ data }) => ({
        contact: data?.entities[contactId]
    }),
  })
const userImage = useUserImage(contact)

  return (
					<>
					<div className="col-xl-3 col-xxl-4 col-sm-6">
						<div className="card user-card">
							<div className="card-body pb-0">
								<div className="d-flex mb-3 align-items-center">
									<div className="dz-media me-3 rounded-circle">
										<img src={userImage} alt="avatar"/>
									</div>
									<div>
										<h5 className="title"><Link to={`/dashboard/users/user/${contact._id}`} >{}</Link></h5>
										<span className="text-primary">{contact?.firstName && contact?.lastName && contact?.firstName+" "+contact?.lastName}</span>
									</div>
								</div>
								<p className="fs-12">{contact?.bio}</p>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="mb-0 title">Email</span> :
										<span className="text-black ms-2"><a href={`mailto:${contact?.email}}`}>{contact?.email}</a> </span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Phone</span> :
										<span className="text-black ms-2"><a href={`tel:${contact?.phone}}`}>{contact?.phone}</a></span>
									</li>
									<li className="list-group-item">
										<span className="mb-0 title">Location</span> :
										<span className="text-black desc-text ms-2">{contact?.country}</span>
									</li>
								</ul>
							</div>
							<div className="card-footer">
								<Link to={`/dashboard/`} className="btn btn-success btn-xs">Write Message</Link>
							</div>
						</div>
					</div>
				</>
					
					
  )
}

export default React.memo(ContactsCard)
