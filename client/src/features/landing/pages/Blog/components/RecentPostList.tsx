import React from 'react'
import { useGetPostCategoryQuery } from '../../../../dashboard/pages/PostCategory/postCategoryApiSlice'
import { useGetUsersQuery } from '../../../../dashboard/pages/Users/usersApiSlice'
import postProps from '../../../../../app/utils/props/postProps'
import { format } from 'timeago.js'
import postCategoryProps from '../../../../../app/utils/props/postCategoryProps'

const RecentPostList = ({post}:{post:postProps}) => {
    const { category } = useGetPostCategoryQuery("categoryList", {
        selectFromResult: ({ data }) => ({
          category: data?.entities[post?.category]	 
        }),
        })
    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
          user: data?.entities[post?.author]	 
        }),
        })

  return (
    <li className="blog-sidebar__post__item" key={post?._id}>
    <div className="blog-sidebar__post__image">
      <img
        src={process.env.REACT_APP_BASE_URL+"/uploads/posts/"+post?.coverImage} 
        alt={post?.title}
      />
    </div>
    <div className="blog-sidebar__post__content">
      <span className="meta-list byline_author">
        <i className="far fa-user-circle"></i>
        <a
          className="url fn n"
          href="#">

                  {user?.fullName || user?.username}
        </a>
      </span>
      <h3 className="blog-sidebar__post__title">
        <a href={`/our-blog/posts/${post?._id}`}>
          {post?.title}
        </a>
      </h3>
    </div>
  </li>
   
  )
}

export default React.memo(RecentPostList)