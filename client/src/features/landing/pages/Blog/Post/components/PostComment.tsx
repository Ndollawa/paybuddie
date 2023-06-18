import React,{useState,useEffect,useRef,FormEvent} from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../../auth/authSlice'
import { useGetUsersQuery } from '../../../../../dashboard/pages/Users/usersApiSlice'
import { useAddNewPostCommentReplyMutation } from '../../../../../dashboard/pages/Post/postCommentApiSlice'
import postCommentProps,{postCommentReplyProps} from '../../../../../../app/utils/props/postCommentProps'
import useLocalStorage from '../../../../../../app/utils/hooks/useLocalStorage'
import useUserImage from '../../../../../../app/utils/hooks/useUserImage'
import defaultUser from '../../../../../../images/user/defaultUser.jpeg'
import defaultUser2 from '../../../../../../images/user/defaultUser2.jpeg'
import showToast from '../../../../../../app/utils/hooks/showToast'
import PostCommentReply from './PostCommentReply'

const PostComment = ({pc}:{pc:postCommentProps}) => {
    const [userInfo] = useLocalStorage('commentUserInfo',{})
    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
          user: pc.author && data?.entities[pc?.author]	 
        }),
        })
        const userImage =  useUserImage(user)
        const [email, setEmail] = useState(userInfo?.email || '')
        const [fullName, setFullName] = useState(userInfo?.fullName || '')
        const [phone, setPhone] = useState(userInfo?.phone || '')
        const [comment, setComment] = useState('')
        const [subject, setSubject] = useState('')
        const [search, setSearch] = useState('')
        const [showReplyForm, setShowReplyForm] = useState(false)
      
      //    const { services } = useGetServicesQuery("servicesList", {
      //             selectFromResult: ({ data }) => ({
      //               services: data?.ids?.map((id:string)=>data?.entities[id])		 
      //             }),
      //             }) 
      const currentUser = useSelector(selectCurrentUser)
      
      const [addNewPostCommentReply, {
        isLoading,
        isSuccess,
        isError,
        error
      }] = useAddNewPostCommentReplyMutation()
      const canSave = [comment,fullName,email,subject].every(Boolean)
      const submitComment = async(e:FormEvent)=>{
       e.preventDefault() 
       await addNewPostCommentReply({
        comment,
        commentId:pc?._id,
        author:currentUser?._id,
        authorType:currentUser?._id? 'user': 'guest',
        fullName:currentUser?._id? currentUser?.fullName: fullName,
        email:currentUser?._id? currentUser?.email: email,
        phone:currentUser?._id? currentUser?.phone : phone,
        subject
      })
      if(isError) return showToast('error', 'Sorry couldn\'t submit post comment.')
      showToast('success','Comment Reply received successfully')
      setShowReplyForm(false)
      setComment('')
      setSubject('')
      }
      const replyComment = (replyTo:string) =>{
        setShowReplyForm(prev=> !prev)
        setComment(`@${replyTo} `)
      }
  return (
    <li className="comment even thread-even depth-1  " id={`comment-${pc?._id}`}>
    <div id={`div-comment-${pc?._id}`} className="blog-comment__box"><div className="post_comment">
      <div className="post_replay_inner"><div className="comment-author-img post_reply_thumb"> 
      <img alt="" src={userImage || defaultUser2} className="avatar avatar-140 photo" height="80" width="80" loading="lazy" decoding="async"/>
        </div>
        <div className="blog-comment__box-content post_reply"><div className="blog-comment__box-top">
          <h3 className="blog-details__comment__name">{user?.fullNmae || pc?.fullName}</h3>
        <div className="blog-comment-date">{new Date(pc?.createdAt!).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })}</div>
        </div> <em>{pc?.subject}</em>
        <p>{pc?.comment}</p>
        <div className="comment-reply"> 
        <button className="comment-reply-link" onClick={()=>replyComment(user?.fullNmae || pc?.fullName)} >Reply</button>
                      <p className="post-comment__title text-primary">({pc?.reply?.length}) {(pc?.reply?.length <= 1)? "Reply" : "Replies"}</p>
        </div>
        </div>
        </div>
        </div>   <div id="comments" className="comments-area">
<ul className="blog-comment" style={{marginLeft:'5rem',maxHeight:'40rem',overflowY:'scroll',overflowX:'clip',msOverflowY:'scroll',msOverflowX:'clip', scrollBehavior:'smooth'}}>
  {
    pc?.reply?.map((pcr:postCommentReplyProps)=><PostCommentReply replyComment={replyComment} pcr={pcr}/>)
  }
  
        </ul>           

        </div>
        </div>
     
      {showReplyForm && <>
        <h3 id="reply-title" className="comment-reply-title">Reply to {user?.fullNmae || pc?.fullName}<small>
        <button className='btn-link btn-sm mx-5'  onClick={()=>setShowReplyForm(false)}>Cancel reply</button>
        </small>
        </h3> 
        <form
                        onSubmit={submitComment}
                          id="commentform"
                          className="comment-form container m-5" style={{width:'80%'}}
                        >
                          { !currentUser._id &&
                           <p className="comment-notes">
                            <span id="email-notes">
                              Your email address will not be published.
                            </span>
                            <span className="required-field-message">
                              Required fields are marked
                              <span className="required">*</span>
                            </span>
                          </p>}
                          <div className="row">
                          { !currentUser._id &&  <>
                          <div className="comment-form-author col-lg-6 mb-4">
                              <input
                                id="author"
                                placeholder="Full Name *"
                                name="author"
                                type="text"
                                onChange={(e)=>setFullName(e.target.value)}
                                className="form-control"
                                value={fullName}
                                area-required="true"
                              />
                            </div>
                            <div className="comment-form-email col-lg-6 mb-4">
                              <input
                                id="email"
                                placeholder="Email Address *"
                                name="email"
                                type="email"
                                onChange={(e)=>setEmail(e.target.value)}
                                className="form-control"
                                value={email}
                                area-required="true"
                              />
                            </div>
                            <div className="comment-form-phone col-lg-6 mb-4">
                              <input
                                id="phone"
                                placeholder="Phone No"
                                name="phone"
                                type="text"
                                onChange={(e)=>setPhone(e.target.value)}
                                className="form-control"
                                value={phone}
                              />
                            </div>
                            </>}
                            <div className="comment-form-subject col-lg-6 mb-4">
                              <input
                                id="subject"
                                placeholder="Subject *"
                                name="subject"
                                type="text"
                                onChange={(e)=>setSubject(e.target.value)}
                                className="form-control"
                                area-required="true"
                                value={subject}
                              />
                            </div>
                            <div className="comment-form-comment col-lg-12 mb-3">
                              <textarea
                                id="comment"
                                placeholder="Comment *"
                                name="comment"
                                value={comment}
                                onChange={(e)=>setComment(e.target.value)}
                                rows={5}
                                area-required="true"
                              ></textarea>
                            </div>
                          
                          </div>
                          <div className="row">
                            <div className="form-submit col-lg-12">
                              <button
                                name="submit"
                                type="submit"
                                id="submit"
                                className="btn thm-btn hover-black btn-sm"
                                disabled={!canSave}
                              >Post Reply</button>
                        
                            </div>
                          </div>
                        </form>
                    </> }
        </li>
  )
}

export default React.memo(PostComment)