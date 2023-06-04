import React,{useState,useEffect,FormEvent,ChangeEvent,useRef} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import { useGetUsersQuery } from '../../Users/usersApiSlice'
import { useGetConversationsQuery } from '../conversationsApiSlice'
import { useGetMessagesQuery } from '../messagesApiSlice'
import useUserImage from '../../../../../app/utils/hooks/useUserImage'
import useSocketIO from '../../../../../app/utils/hooks/useSocketIO';
import conversationProps,{conversationIdProps} from '../../../../../app/utils/props/conversationProps'
import messageProps from '../../../../../app/utils/props/messageProps'


const ChatBox = ({receiver, sender}:{receiver:string; sender:string}) => {
const [receiverId, setReceiverId] = useState<string | undefined>(undefined)

const [chatMessage, setChatMessage] = useState('')
const [conversations, setConversations] = useState<messageProps[]  | []>([])
const [newMessage, setNewMessage] = useState<messageProps>()
const msgRef = useRef <HTMLInputElement>(null);
const [attchment, setAttchment] = useState([])
const [imageUpload, setImageUpload] = useState([])
const [isUpload, setIsUpload] = useState(false)
const socket = useSocketIO()

useEffect(() => {
  setReceiverId(receiver)

  return () => {
  setReceiverId(undefined) 
  }
}, [receiver])

const { user } = useGetUsersQuery("usersList", {
	selectFromResult: ({ data }) => ({
		user: data?.entities[receiverId as string]
  })
})
const conversationId:conversationIdProps = [receiverId as string,sender as string]
	const conversationId2:conversationIdProps = [sender as string,receiverId as string]

	  const { conversation } = useGetConversationsQuery("conversationsList", {
		selectFromResult: ({ data }) => ({
		  conversation: data && (Object.values(data?.entities)as conversationProps[])?.find(
			(c:conversationProps) => c?.members?.length === 2 && c?.members.every((m) => conversationId.includes(m) ||  conversationId2.includes(m))
		  )
		})
	  })
		const { messages } = useGetMessagesQuery("messagesList", {
		selectFromResult: ({ data }) => ({
			messages: data && (Object.values(data?.entities) as messageProps[])?.filter((m:messageProps)=> m?.conversationId === conversation?._id)		 
		})
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
  },[receiverId])

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
		const msgData = {message:chatMessage,sender,receiver:receiverId}
		socket.current.emit("sendMessage",(msgData), (err:any,sentMessage:messageProps)=>{
		setConversations(prev=>[...prev,sentMessage])
		}) 
		setChatMessage('')
  }
}


  const contactImage = useUserImage(user)
  const userImage = useUserImage(sender)
// console.log(user)
const handleAttachmentUpload = ()=>{
    
}
const handleImageUpload = ()=>{
    
}
  return (
    <div className="message-bx chat-box">
										<div className="d-flex justify-content-between chat-box-header">
											<div className="d-flex align-items-center">
												<img src={contactImage} alt="" className="rounded-circle main-img me-3"/>
												<h5 className="text-black font-w500 mb-sm-1 mb-0 title-nm"></h5>
											</div>
											<div className="d-flex align-items-center">	
												<span className="d-sm-inline-block d-none">{user?.online?.status? "Online" : `Last seen ${format(user?.online?.lastSeen)}`}</span>
												<div className="dropdown ms-2">
													<Link to='#' data-bs-toggle="dropdown" aria-expanded="false">
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="../../www.w3.org/2000/svg.html">
															<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
															<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
															<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
														</svg>
													</Link>
													<div className="dropdown-menu dropdown-menu-end">
														<Link className="dropdown-item" to="">Edit</Link>
														<Link className="dropdown-item" to="">Delete</Link>
													</div>
												</div>
											</div>	
										</div>
										<PerfectScrollbar className="chat-box-area dz-scroll" id="chartBox" style={{backgroundImage:`url('dashboard-assets/images/chat-bg.png')`}}>
											<div  className="chat active-chat">
                                                {conversations?.map((m:messageProps,i:number)=> m &&(
									(m?.sender !== sender)?
                                    <div className="media mb-4 justify-content-end align-items-end" ref={msgRef}>
                                    <div className="message-sent">
                                        <p className="mb-1">
                                           {m.message}
                                        </p>
                                        <span className="fs-12 text-black">{format(m?.createdAt as Date)}</span>
                                    </div>
                                    <div className="image-bx ms-sm-3 ms-2 mb-4">
                                        <img src={userImage} alt="" className="rounded-circle img-1"/>
                                    </div>
                                </div>
                                    :
                                    <div className="media mb-4 received-msg  justify-content-start align-items-start" ref={msgRef}>
                                    <div className="image-bx me-sm-3 me-2">
                                        <img src={contactImage} alt="" className="rounded-circle img-1"/>
                                    </div>
                                    <div className="message-received">
                                        <p className="mb-1">
                                            {m.message}
                                        </p>
                                        <span className="fs-12 text-black">{format(m?.createdAt as Date)}</span>
                                    </div>
                                </div>
                                
                                
                                ))
                            }
											</div>
											
										</PerfectScrollbar>
										<div className="card-footer border-0 type-massage">
											<form>
											<div className="input-group">
												<input 
												className="form-control" 
												placeholder="Type message..."
												onChange={(e)=>setChatMessage(e.target.value)}
                                                onKeyPress={(e)=>{(e.key === "Enter") && sendChat()}}
												value={chatMessage} />
												<div className="input-group-append"> 
													<span>
														<label htmlFor='attachmentUpload' className="btn p-0 me-3">
															<i className="las la-paperclip scale5 text-secondary"></i>
														</label>
														<input type="file" name=""onChange={handleAttachmentUpload} id="attachmentUpload" className="d-none" multiple />
													</span>
													<span>
															<label htmlFor='imageUpload' className="btn p-0 me-3">
																<i className="las la-image scale5 text-secondary"></i>
															</label>
															<input type="file" name=""onChange={handleImageUpload} id="imageUpload" className="d-none" accept='image/*' multiple />
													</span><button type="submit" className="send-btn btn-primary btn" onClick={sendChat} >SEND</button>
												</div>
											</div>
											</form>
										</div>
									</div>
  )
}

export default React.memo(ChatBox)