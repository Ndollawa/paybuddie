import React from 'react'
import { useGetPostCategoryQuery } from '../../../../dashboard/pages/PostCategory/postCategoryApiSlice'
import { useGetUsersQuery } from '../../../../dashboard/pages/Users/usersApiSlice'
import { useGetPostCommentQuery } from '../../../../dashboard/pages/Post/postCommentApiSlice'
import postProps from '../../../../../app/utils/props/postProps'
import postCommentProps from '../../../../../app/utils/props/postCommentProps'
import postCategoryProps from '../../../../../app/utils/props/postCategoryProps'

const PostList = ({post}:{post:postProps}) => {
    const { category } = useGetPostCategoryQuery("categoryList", {
        selectFromResult: ({ data }) => ({
          category: data?.entities[post?.category]	 
        }),
        })
   
        const { postComment } = useGetPostCommentQuery("postCommentsList", {
            selectFromResult: ({ data }) => ({
              postComment: data && data.ids.map((id:string) => data?.entities[id]).filter((comment:postCommentProps) =>comment.postId === post?._id)	 
            }),
            })
    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
          user: data?.entities[post?.author]	 
        }),
        })

  return (

    <div className="col-lg-4 col-md-12 col-sm-12" key={post?._id}>
    <div className="blog-card">
      <div className="blog-card__image">
        <div className="blog-card__date">
          <span>{new Date(user.updatedAt).toLocaleString('en-US', { day: 'numeric'})}</span>{new Date(user.createdAt).toLocaleString('en-US', {month: 'short'})}
        </div>
        <a href={`/our-blog/posts/${post?._id}`}>
        <img
          decoding="async"
            src={process.env.REACT_APP_BASE_URL+"/uploads/posts/"+post?.coverImage} alt={post?.title}
          className="img-fluid"

        /></a>
      </div>
      <div className="blog-card__content">
        <div className="blog-card__meta">
          
          <span className="meta-list byline_author">
            <i className="far fa-user-circle"></i>
            <a
              className="url fn n"
              href="#"
            >
             {user?.fullName || user?.username}
            </a>
          </span>
          <span className="meta-list blog_comment">
            
            <i className="far fa-comments"></i>
            <a href={`/our-blog/posts/${post?._id}`}>
             {postComment?.length} Comment(s)
            </a>
          </span>
        </div>
        <h3 className="blog-card__title">
          <a href={`/our-blog/posts/${post?._id}`}>
            {post?.title}
          </a>
        </h3>
        <p className="blog-card__text" dangerouslySetInnerHTML={{__html:post?.description || (post?.body.length > 100)? post?.body?.substring(0,100)+"..." : post?.body?.substring(0,100)}}>
        </p>
        <a
          href={`/our-blog/posts/${post?._id}`}
          className="blog-card__link"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
   
  )
}

export default React.memo(PostList)