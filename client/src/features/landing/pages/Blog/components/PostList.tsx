import React from 'react'
import { useGetPostCategoryQuery } from '../../../../dashboard/pages/PostCategory/postCategoryApiSlice'
import { useGetUsersQuery } from '../../../../dashboard/pages/Users/usersApiSlice'
import postProps from '../../../../../app/utils/props/postProps'
import { format } from 'timeago.js'
import postCategoryProps from '../../../../../app/utils/props/postCategoryProps'

const PostList = ({post}:{post:postProps}) => {
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
    <div className="col-lg-12 single-post-item" key={post?._id}>
    <article
      id={`post-${post?._id}`}
      className="post type-post status-publish format-standard has-post-thumbnail hentry category-finance category-studies tag-education-loan tag-mortage"
    >
      <div className="blog-card">
        <div className="blog-card__image">
          <a
            href={`/our-blog/${post?._id}`}
            rel="bookmark"
          > <img src={process.env.REACT_APP_BASE_URL+"/uploads/posts/"+post?.coverImage} alt={post?.title} />
         </a>
        </div>
        <div className="blog-card__content">
          <div className="blog-top">
            <div className="blog-card__meta">
              
              <span className="meta-list posted-on">
                <i className="far fa-calendar-alt"></i>
                <a
                  href={`/our-blog/${post?._id}`}
                  rel="bookmark"
                >
                  <time
                    className="entry-date published"
                    dateTime={post?.createdAt?.toString()}
                  >
                  {format(post?.createdAt as Date)}                                   
                   </time>
                 </a>
              </span>
              <span className="meta-list byline_author">
                <i className="far fa-user-circle"></i>
                <a
                  className="url fn n"
                  href="../author/admin/index.html"
                >
                  {user?.fullName || user?.username}
                </a>
              </span>
              <span className="meta-list blog_comment">
                
                <i className="far fa-comments"></i>
                <a href="../education-loan-quisque-rhoncus-massa-et/index.html#respond">
                  0 Comments
                </a>
              </span>
            </div>
            <h3 className="blog-card__title">
              <a
                href={`our-blog/${post?._id}`}
                rel="bookmark"
              >
                {post?.title}
              </a>
            </h3>
          </div>
          <div className="blog-dec">
            <p dangerouslySetInnerHTML={{__html:post?.description || (post?.body.length > 100)? post?.body?.substring(0,100)+"..." : post?.body?.substring(0,100)}}></p>
          </div>
          <div className="blog-card-bottom">
            <div className="blog-card-bottom-btn">
              
              <a
                href={`our-blog/${post?._id}`}
                className="blog-card-btn-link"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
  )
}

export default React.memo(PostList)