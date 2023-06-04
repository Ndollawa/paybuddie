import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../auth/authSlice';
import { useGetConversationsQuery } from '../../pages/Messenger/conversationsApiSlice';
import Conversation from './Conversation';
import { useGetUsersQuery } from '../../pages/Users/usersApiSlice';
import { useGetMessagesQuery } from '../../pages/Messenger/messagesApiSlice';
import conversationProps from '../../../../app/utils/props/conversationProps';
import messageProps from '../../../../app/utils/props/messageProps';

import useDebounce from '../../../../app/utils/hooks/useDebounce';
import userInterface from '../../../../app/utils/props/userProps';



const ChatList = ({openChat}:any) => {
const currentUser = useSelector(selectCurrentUser)
const [showSearch, setShowSearch] = useState(false)
	const [query, setQuery] = useState('')
	const debouncedQuery = useDebounce(query)
const [userConversations, setUserConversations] = useState<conversationProps[] | []>([])
  	const { conversations } = useGetConversationsQuery("conversationsList", {
	selectFromResult: ({ data }) => ({
		conversations: data && (Object.values(data?.entities)as conversationProps[])?.filter((c)=>c?.members?.includes(currentUser?._id!))
  })
})

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
	return keys?.some((key:string)=>contact[key]?.toLowerCase()?.includes(debouncedQuery)) 
	//|| (messages as messageProps[])?.filter((m:messageProps)=> m?.conversationId === item?._id && m?.message.includes(debouncedQuery)).length
		 
	}
		)

}
  // console.log(conversations)
    return(
      <>
      <div className="card-header chat-list-header text-center">
						{showSearch?	
              <div className="input-group input-group-sm message-search-area">
											<input type="text" className="form-control" onChange={(e)=>setQuery(e.target.value)} onKeyPress={()=>setUserConversations(searchData(conversations))} placeholder="Search here.."/>
											{/* <div className="input-group-append"> */}
												<button className="input-group-text" onClick={()=>setUserConversations(searchData(conversations))}><i className="flaticon-381-search-2"></i></button>
											{/* </div> */}
								</div>
                :<>
                <Link to=""><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg></Link>
								<div>
									<h6 className="mb-1">Chats</h6>
									<p className="mb-0 py-1 px-2"><Link to="/dashboard/messenger" className="" style={{width:'6rem'}}>Show All</Link></p>
								</div>
                </>
            }   
						  
	{!showSearch?<Link to="" onClick={()=>setShowSearch(prev=>!prev)}><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3"/><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero"/></g></svg></Link>
	: <span className="bg-black text-white p-2 rounded-lg" onClick={()=>setShowSearch(prev=>!prev)}><i className="la-times las"></i></span> }
    </div>
	<div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body1">
  <div className="card-body contacts_body p-0 dz-scroll  " id="DZ_W_Contacts_Body">
  <ul className="contacts">
    {
        userConversations?.map((c:conversationProps,i:number)=> <Conversation openChat={openChat} key={c?._id} conversation={c} i={i}/>)
    }     
  </ul>
</div>
</div>
</>
  )
}

export default React.memo(ChatList)