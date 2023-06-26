import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../../auth/authSlice'
import { useGetUsersQuery } from '../../../../../dashboard/pages/Users/usersApiSlice'
import {postCommentReplyProps} from '../../../../../../app/utils/props/postCommentProps'
import useUserImage from '../../../../../../app/utils/hooks/useUserImage'
import defaultUser from '../../../../../../images/user/defaultUser.jpeg'
import defaultUser2 from '../../../../../../images/user/defaultUser2.jpeg'

const PostComment = ({pcr, replyComment}:{pcr:postCommentReplyProps; replyComment:any}) => {
  
      const currentUser = useSelector(selectCurrentUser)
      const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
          user: pcr.author && data?.entities[pcr?.author]	 
        }),
        })
      const userImage = useUserImage(user)

  return (
    <li className="comment even thread-even depth-1  " id={`comment-${pcr?._id}`} style={{height:'5rem'}}  key={pcr?._id}>
    <div id={`div-comment-${pcr?._id}`} className="blog-comment__box"><div className="post_comment">
      <div className="post_replay_inner"><div className="comment-author-img post_reply_thumb"> 
      <img alt="" src={userImage || defaultUser2} className="avatar avatar-140 photo" height="80" width="80" loading="lazy" decoding="async"/>
        </div>
        <div className="blog-comment__box-content post_reply"><div className="blog-comment__box-top">
          <h3 className="blog-details__comment__name">{user?.fullNmae || pcr?.fullName}</h3>
        <div className="blog-comment-date">{new Date(pcr?.createdAt!).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })}</div>
        </div> <em>{pcr?.subject}</em>
        <p>{pcr?.comment}</p>
        <div className="comment-reply"> 
        <p className="comment-reply-link" onClick={()=>replyComment(`@${user?.fullNmae || pcr?.fullName}`)} >Reply</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </li>
  )
}

export default React.memo(PostComment)