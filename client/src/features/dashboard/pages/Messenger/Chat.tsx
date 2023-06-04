import React,{useEffect,useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MainBody from '../../components/MainBody';
import pageProps from '../../../../app/utils/props/pageProps';
import useWindowSize from '../../../../app/utils/hooks/useWindowSize';
import { selectCurrentUser } from '../../../auth/authSlice';
import useUserImage from '../../../../app/utils/hooks/useUserImage';
import { useSelector } from 'react-redux';
import $ from 'jquery'
import { Link, useParams } from 'react-router-dom';
import Conversation from './components/Conversation';
import { useGetConversationsQuery } from '../../pages/Messenger/conversationsApiSlice';
import { useGetUsersQuery } from '../Users/usersApiSlice';
import { useGetMessagesQuery } from './messagesApiSlice';
import conversationProps from '../../../../app/utils/props/conversationProps';
import messageProps from '../../../../app/utils/props/messageProps';
import ChatBox from './components/ChatBox';
import useDebounce from '../../../../app/utils/hooks/useDebounce';
import userInterface from '../../../../app/utils/props/userProps';


const Chat:React.FC<pageProps> = ({pageData}:pageProps) => {
	const [query, setQuery] = useState('')
	const [userConversations, setUserConversations] = useState<conversationProps[] | []>([])
	const { height } = useWindowSize()
	const currentUser = useSelector(selectCurrentUser)
	const userImage = useUserImage(currentUser)
	const debouncedQuery = useDebounce(query)
  const {id} = useParams()
  // console.log(chatUserId)
  	const { conversations } = useGetConversationsQuery("conversationsList", {
	selectFromResult: ({ data }) => ({
		conversations: data && (Object.values(data?.entities)as conversationProps[])?.filter((c)=>c?.members?.includes(currentUser?._id!))
  })
})
	const [room, setRoom] = useState('')
	const [toUser, setToUser] = useState<string | undefined>(undefined)
	useEffect(() => {
		setToUser(id)
	  return () => {
		
	  }
	}, [id])
	
	useEffect(() => {
		const handleChatSidebar = function(){
			$('.chat-hamburger').on('click',function(){
				$('.chat-left-sidebar').toggleClass('show');
			})
		}
		handleChatSidebar()
		const vHeight = function(){
			const ch = height! - 206;
			$(".chatbox .msg_card_body").css('height',ch);
		}
		vHeight()
		const handleDzChatUser = function() {
			$('.dz-chat-user-box .dz-chat-user').on('click',function(){
				$('.dz-chat-user-box').addClass('d-none');
				$('.dz-chat-history-box').removeClass('d-none');
			}); 
			
			$('.dz-chat-history-back').on('click',function(){
				$('.dz-chat-user-box').removeClass('d-none');
				$('.dz-chat-history-box').addClass('d-none');
			}); 
			
			$('.dz-fullscreen').on('click',function(){
				$('.dz-fullscreen').toggleClass('active');
			});
		}
		handleDzChatUser()
	  return () => {
		setToUser(undefined)
	  };
	}, [])
	  const { users } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      users: data?.ids?.map((id:string)=>data?.entities[id])		 
    }),
    }) 
  
      const { messages } = useGetMessagesQuery("messagesList", {
      selectFromResult: ({ data }) => ({
        messages:  data?.ids?.map((id:string)=>data?.entities[id])
      }) 	 })
	useEffect(() => {
		setUserConversations(searchData(conversations))
	}, [debouncedQuery])
	const keys = ['firstName','lastName','username']
const searchData = (data:any)=>{
	return data?.filter((item:any)=>{
	const contactId = item?.members.find((m:string) => m !== currentUser?._id )
	const contact = users.find((user:userInterface['user']) =>user._id === contactId)
	return keys?.some((key:string)=>contact[key]?.toLowerCase()?.includes(debouncedQuery)) ||
	(messages as messageProps[])?.filter((m:messageProps)=> m?.conversationId === item?._id && m?.message.includes(debouncedQuery)).length
		 
	}
		)

}
  return (
    <MainBody>
		<div className='container-fuid' style={{position:'relative'}}>
		     <div className="row">
					<div className="col-xl-12">
						<div className="card">
							<div className="card-body chat-wrapper p-0">
								<div className="chat-hamburger">
									<span></span>
									<span></span>
									<span></span>
								</div>
								<div className="chat-left-sidebar">
									<div className="d-flex chat-fix-search align-items-center">
										<img src={userImage} alt="" className="rounded-circle me-3"/>
										<div className="input-group message-search-area">
											<input type="text" className="form-control" onChange={(e)=>setQuery(e.target.value)} onKeyPress={()=>setUserConversations(searchData(conversations))} placeholder="Search here.."/>
											<div className="input-group-append">
												<button className="input-group-text" onClick={()=>setUserConversations(searchData(conversations))}><i className="flaticon-381-search-2"></i></button>
											</div>
										</div>
									</div>
									<div className="card-action card-tabs ">
										<Tabs
							defaultActiveKey="allMessages"
							id="messenger-tab"
							className="style-3"
							>
											
											<Tab eventKey="allMessages" title="All Messages">
									<div className="card-body message-bx px-0 pt-3" >
										<PerfectScrollbar className="tab-content dz-scroll" id="message-bx">
												
												{userConversations && userConversations.map((c:conversationProps,i:number)=> <Conversation key={c?._id} conversation={c} i={i}/>)}
											</PerfectScrollbar>
									</div></Tab>
											<Tab eventKey="unread" title="Unread">
									<div className="card-body message-bx px-0 pt-3" >
										<PerfectScrollbar className="tab-content dz-scroll" id="message-bx">
										
										
										</PerfectScrollbar>
										</div>
												</Tab>
											<Tab eventKey="archived" title="Archived">
												
									<div className="card-body message-bx px-0 pt-3" >
										<PerfectScrollbar className="tab-content dz-scroll" id="message-bx">

										</PerfectScrollbar>
										</div>
												</Tab>
											
						</Tabs>
						</div>
								</div>
								<div className="chart-right-sidebar">
									{toUser?
									<ChatBox receiver={toUser}  sender={currentUser._id as string}/>
									: <div className='d-flex align-items-center justify-content-center flex-column h-100 w-100'  style={{backgroundImage:`url('dashboard-assets/images/chat-bg.png')`}}>
										<h3 className='text-muted'>No chat selected</h3>
										<p className='text-muted'>Please select a user to start a conversation.</p>
									</div>
								
								}
									
								</div>
							</div>
		{/* <div className="fab-container">
		<div className=" fab-btn fab-icon-holder"><i className="fa fa-question"></i></div>
			<ul className="fab-options">
				<li><span className="fab-label">Assign Task</span><div className="fab-icon-holder" id="assign-task"><i className="fa fa-edit"></i></div></li>
				<li><span className="fab-label">Create Todo</span><div className="fab-icon-holder" id="create-todos"><i className="fa fa-calendar"></i></div></li>
				<li><span className="fab-label">Send Memo</span><div className="fab-icon-holder rate" id="send-memo"><i className="icon icon-note "></i></div></li>
				<li><span className="fab-label">Assign Roles</span><div className="fab-icon-holder" id="assign-roles"><i className="icon icon-badge"></i></div></li>
				<li><span className="fab-label">Assign Courses</span><div className="fab-icon-holder" id="assign-courses"><i className="fa fa-graduation-cap"></i></div></li>

					</ul>
			</div> */}
						</div>
					</div>
			</div> 
		</div>
    </MainBody>
  )
}

export default Chat
