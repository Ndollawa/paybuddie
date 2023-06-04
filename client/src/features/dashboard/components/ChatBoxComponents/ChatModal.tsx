import React,{useState,useEffect, useRef, ChangeEvent,FormEvent} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../auth/authSlice';
import { useGetMessagesQuery } from '../../pages/Messenger/messagesApiSlice'; 
import { useGetConversationsQuery } from '../../pages/Messenger/conversationsApiSlice';
import { useGetUsersQuery } from '../../pages/Users/usersApiSlice';
import useUserImage from '../../../../app/utils/hooks/useUserImage';
import messageProps from '../../../../app/utils/props/messageProps';
import useSocketIO from '../../../../app/utils/hooks/useSocketIO';
import conversationProps,{conversationIdProps} from '../../../../app/utils/props/conversationProps';
import { format } from 'timeago.js';
 
const ChatModal = ({currentChat, closeChat}:any) => {

const [chatMessage, setChatMessage] = useState('')
const [conversations, setConversations] = useState<messageProps[]  | []>([])
const [newMessage, setNewMessage] = useState<messageProps>()
const msgRef = useRef <HTMLInputElement>(null);
const currentUser = useSelector(selectCurrentUser)
const [attchment, setAttchment] = useState([])
const [imageUpload, setImageUpload] = useState([])
const [isUpload, setIsUpload] = useState(false)
const socket = useSocketIO()
	const conversationId:conversationIdProps = [currentChat as string,currentUser?._id! as string]
	const conversationId2:conversationIdProps = [currentUser?._id! as string,currentChat as string]

	  const { conversation } = useGetConversationsQuery("conversationsList", {
		selectFromResult: ({ data }) => ({
		  conversation: data && (Object.values(data?.entities)as conversationProps[])?.find(
			(c:conversationProps) => c?.members?.length === 2 && c?.members.every((m) => conversationId.includes(m) ||  conversationId2.includes(m))
		  ),
		}),
	  });
		const { messages } = useGetMessagesQuery("messagesList", {
		selectFromResult: ({ data }) => ({
			messages: data && (Object.values(data?.entities) as messageProps[])?.filter((m:messageProps)=> m?.conversationId === conversation?._id)		 
		}),
	  }) 
	const { contact } = useGetUsersQuery("usersList", {
	selectFromResult: ({ data }) => ({
		contact: data?.entities[currentChat]		 
	}),
  }) 
	const uploadAttachment = (e:ChangeEvent<HTMLInputElement>, type:string)=>{
		const file = e.target.files
		if(file && file.length > 0)
		{
			// setPostBg(file[0])
	  const fileurl = (window.URL || window.webkitURL).createObjectURL(file[0]);
	//   setPreviewImage(fileurl)
	  
	  }
  } 
   useEffect(()=>{
	setConversations(messages)
	setChatMessage('')
  },[currentChat])

  useEffect(()=>{
socket.current?.on('receivedMessage',(data:messageProps)=>{
 setNewMessage(data)
})
  },[])

  useEffect(() => {
newMessage && conversation?.members.includes(newMessage.sender) &&
 setConversations(prev=>[...prev,newMessage])
//   console.log(conversations)
  }, [newMessage])

  useEffect(() => {
msgRef.current?.scrollIntoView({behavior:'smooth'})
  }, [conversations])


  const sendChat = () =>{
		if(chatMessage !== '' || isUpload){
		const msgData = {message:chatMessage,sender:currentUser._id,receiver:contact._id}
		socket.current.emit("sendMessage",(msgData), (err:any,sentMessage:messageProps)=>{
		setConversations(prev=>[...prev,sentMessage])
		}) 
		setChatMessage('')
  }
}


  const contactImage = useUserImage(contact)
  const userImage = useUserImage(currentUser)
  return (
    <div className={`card chat dz-chat-history-box ${currentChat? null : "d-none"}`}>
							<div className="card-header chat-list-header text-center">
								<Link to="" type='button' className="dz-chat-history-back" onClick={closeChat}>
									<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><polygon points="0 0 24 0 24 24 0 24"/><rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) " x="14" y="7" width="2" height="10" rx="1"/><path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "/></g></svg>
								</Link>
								<div>
									<h6 className="mb-1">Chat with {contact?.fullName || contact?.username}</h6>
									<p className={`mb-0 ${(contact?.online?.status)? 'text-success': 'text-muted'}`}>{(contact?.online?.status)? 'Online': `Offline - Last seen ${format(contact?.online?.lastSeen)}`}</p>
								</div>							
								<div className="dropdown">
									<a href="#" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg></a>
									<ul className="dropdown-menu dropdown-menu-end">
										<li className="dropdown-item"><i className="fa fa-user-circle text-primary me-2"></i> View profile</li>
										<li className="dropdown-item"><i className="fa fa-users text-primary me-2"></i> Add to close friends</li>
										<li className="dropdown-item"><i className="fa fa-plus text-primary me-2"></i> Add to group</li>
										<li className="dropdown-item"><i className="fa fa-ban text-primary me-2"></i> Block</li>
									</ul>
								</div>
							</div>
							<div className="card-body msg_card_body dz-scroll" id="DZ_W_Contacts_Body3">
								{conversations?.map((m:messageProps,i:number)=> m &&(
									(m?.sender !== currentUser?._id)?
									<div className="d-flex justify-content-start mb-4" key={m?._id+i} ref={msgRef}>
										<div className="img_cont_msg">
											<img src={contactImage} className="rounded-circle user_img_msg" alt={contact?.username}/>
										</div>
										<div className="msg_cotainer">
											{m?.message}
											<span className="msg_time">{format(m?.createdAt!)}</span>
										</div>
									</div>
								:
								<div className="d-flex justify-content-end mb-4" key={m?._id+i} ref={msgRef}>
									<div className="msg_cotainer_send">
										{m?.message}
										<span className="msg_time_send">{format(m?.createdAt!)}</span>
									</div>
									<div className="img_cont_msg">
								<img src={userImage} className="rounded-circle user_img_msg" alt={currentUser?.username}/>
									</div>
								</div>
									
								))


								}
							</div>
							<div className="card-footer type_msg">
								<div className="input-group d-flex align-items-start">
									<span className='input-group-append'>
										<div className="msg-fab-container d-flex align-items-center justify-content-center flex-column">
											<div className="fab-btn d-flex align-items-center justify-content-center"><i className=' las la-paperclip scale5 text-secondary'></i></div>
												<ul className="fab-options">
													<li><span className="fab-label">Attachment</span><div className="fab-icon-holder" id="assign-task"><i className="fa fa-edit"></i></div></li>
													<li><span className="fab-label">Image</span><div className="fab-icon-holder" id="create-todos"><i className="las la-image scale5"></i></div></li>
													
														</ul>
												</div>
									</span>
									<textarea className="form-control pl-3" value={chatMessage} onChange={(e)=>setChatMessage(e.target.value)} onKeyPress={(e)=>{(e.key === "Enter") && sendChat()}} placeholder="Type your message..."></textarea>
									<div className="input-group-append">
										<button type="button" className="btn btn-primary btn-sm mt-0" onClick={sendChat}><i className="fa fa-location-arrow"></i></button>
									</div>
								</div>
							</div>
						</div>
  )
}

export default React.memo(ChatModal)