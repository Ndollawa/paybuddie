import React,{useState,FormEvent} from "react";
import {useParams, useNavigate} from 'react-router-dom'
import { useGetPostsQuery } from "../../../../dashboard/pages/Post/postApiSlice";
import { useAddNewPostCommentMutation, useGetPostCommentQuery } from "../../../../dashboard/pages/Post/postCommentApiSlice";
import { useGetUsersQuery } from "../../../../dashboard/pages/Users/usersApiSlice";
import postCommentProps from "../../../../../app/utils/props/postCommentProps";
import pageProps from "../../../../../app/utils/props/pageProps";
import Breadcrum from "../../../components/Breadcrum";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../auth/authSlice";
import useLocalStorage from "../../../../../app/utils/hooks/useLocalStorage";
import showToast from "../../../../../app/utils/hooks/showToast";
import postProps from "../../../../../app/utils/props/postProps";
import PostComment from "./components/PostComment";
import PostSidebar from "./components/PostSidebar";

const Post = ({ pageData }: pageProps) => {
  const {id} = useParams()
  const [userInfo] = useLocalStorage('commentUserInfo',{})
const navigate = useNavigate()
   const { post } = useGetPostsQuery("postsList", {
            selectFromResult: ({ data }) => ({
              post: id && data?.entities[id]		 
            }),
            }) 
            const { posts } = useGetPostsQuery("postsList", {
              selectFromResult: ({ data }) => ({
                posts: (data?.ids?.map((id:string)=>data?.entities[id]))?.filter((post:postProps) => post.status === 'published')		 
              }),
              })    
   const { postIndex } = useGetPostsQuery("postsList", {
            selectFromResult: ({ data }) => ({
              postIndex: id && data?.ids.indexOf(id)
            }),
            }) 
    const { user } = useGetUsersQuery("usersList", {
      selectFromResult: ({ data }) => ({
        user: data?.entities[post?.author]	 
      }),
      })
      
      const { postComment } = useGetPostCommentQuery("postCommentsList", {
        selectFromResult: ({ data }) => ({
          postComment: data && data.ids.map((id:string) => data?.entities[id]).filter((comment:postCommentProps) =>comment.postId === post?._id) 
        }),
        })
        const { data } = useGetPostsQuery("postsList");
        const prevPost = data && postIndex > 0 ? data.entities[data.ids[postIndex - 1]] : null;
        const nextPost = data && postIndex < data.ids.length - 1 ? data.entities[data.ids[postIndex + 1]] : null;
        
if(!post) navigate('/error/404')
  const [email, setEmail] = useState(userInfo?.email || '')
  const [fullName, setFullName] = useState(userInfo?.fullName || '')
  const [phone, setPhone] = useState(userInfo?.phone || '')
  const [comment, setComment] = useState('')
  const [subject, setSubject] = useState('')
  const [search, setSearch] = useState('')
  const [saveInfo, setSaveInfo] = useState(false)
  const [showCommentForm, setShowCommentForm] = useState(false)

//    const { services } = useGetServicesQuery("servicesList", {
//             selectFromResult: ({ data }) => ({
//               services: data?.ids?.map((id:string)=>data?.entities[id])		 
//             }),
//             }) 
const currentUser = useSelector(selectCurrentUser)

const [addNewPostComment, {
  isLoading,
  isSuccess,
  isError,
  error
}] = useAddNewPostCommentMutation()
const canSave = [comment,fullName,email,subject].every(Boolean)
const submitComment = async(e:FormEvent)=>{
 e.preventDefault() 
 if(saveInfo){
  const info = {fullName,email,phone}
  localStorage.setItem('commentUserInfo',JSON.stringify(info))
 }
 await addNewPostComment({
  comment,
  postId:post?._id,
  author:currentUser?._id,
  authorType:currentUser?._id? 'user': 'guest',
  fullName:currentUser?._id? currentUser?.fullName: fullName,
  email:currentUser?._id? currentUser?.email: email,
  phone:currentUser?._id? currentUser?.phone : phone,
  subject
})
if(isError) return showToast('error', 'Sorry couldn\'t submit post comment.')
showToast('success','Comment received successfully')
setShowCommentForm(false)
      setComment('')
      setSubject('')
}
// console.log(currentUser)
  return (
    <>
      <Breadcrum pageData={pageData} />
      <section className="blog-details blog-main-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div id="primary" className="site-main layout-right-sidebar">
                <article
                  id={`post-${post?._id}`}
                  className={`post-${post?._id} post type-post status-${post?.status} format-standard has-post-thumbnail hentry category-finance category-studies tag-education-loan tag-mortage`}
                >
                  <div className="blog-card__image">
                    <div className="post-thumbnail">
                      <img
                        src={process.env.REACT_APP_BASE_URL+"/uploads/posts/"+post?.coverImage}  
                        className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                        alt={post?.title}/>
                    </div>
                  </div>
                  <div className="blog-card__meta">
                    <span className="meta-list posted-on">
                      <i className="far fa-calendar-alt"></i>
                      <a href="index.html" rel="bookmark">
                        { (new Date(post?.createdAt!).getUTCDate >=  new Date(post?.updatedAt!).getUTCDate)?
                        <time
                          className="entry-date published"
                          dateTime={post?.createdAt.toString()}
                        >
                             {new Date(post?.createdAt!).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })}   
                        </time>
                       : <time
                          className="updated"
                          dateTime={post?.updatedAt.toString()}
                        >
                              {new Date(post?.updatedAt!).toLocaleString('en-US', { day: 'numeric', month: 'long', year:'numeric' })}   
                        </time>}
                      </a>
                    </span>
                    <span className="meta-list byline_author">
                      <i className="far fa-user-circle"></i>
                      <a className="url fn n" href="#">
                       {user?.fullName || user?.username}
                      </a>
                    </span>
                    <span className="meta-list blog_comment">
                      <i className="far fa-comments"></i>
                      <a href="index.html#respond">{postComment?.length} Comment(s)</a>
                    </span>
                  </div>
                  <div className="entry-content">
                    <p dangerouslySetInnerHTML={{__html:post?.body}}></p>
                   
                    <div className="page-list-single"></div>
                  </div>
                  <div className="blog-details__meta">
                    <div className="blog-details__tags">
                      <span>Tags:</span>
                      {post?.tags.map((tag:string )=><a href={`/our-blog/posts?tag=${tag}`} key={tag}>
                        {tag}
                      </a>)}
                    </div>
                    <div className="blog-details__social team-details__social">
                      <div className="blog-details__social">
                        
                        <a href="https://twitter.com/intent/tweet?text=http://Education%20Loan%20Quisque%20rhoncus%20massa%20et&amp;url=https://thegenius.co/wp/finlon/live/education-loan-quisque-rhoncus-massa-et/&amp;via=Crunchify">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://thegenius.co/wp/finlon/live/education-loan-quisque-rhoncus-massa-et/">
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com/intent/tweet?text=http://Education%20Loan%20Quisque%20rhoncus%20massa%20et&amp;url=https://thegenius.co/wp/finlon/live/education-loan-quisque-rhoncus-massa-et/&amp;via=Crunchify">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://pinterest.com/pin/create/bookmarklet/?&amp;url=https://thegenius.co/wp/finlon/live/education-loan-quisque-rhoncus-massa-et/&amp;description=http://Education%20Loan%20Quisque%20rhoncus%20massa%20et">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-next-prev-main">
                    <div className="blog-next-prev-box">
                    <div className={`row ${!prevPost && 'justify-content-end'}`}>
                   {prevPost &&  
                   <div className="col-md-6 prev-post">
                   <div className="single-next-pre-box">
                      <div className="single-next-pre-inner">
                        <a href={`/our-blog/posts/${prevPost?._id}`} className="next-link single-post-pre-next-link">
                          <span>Previous</span></a>
                        </div>
                        <a href={`/our-blog/posts/${prevPost?._id}`} title={prevPost?.title} className="post-title">
                          <span className="single-post-link-title">{prevPost?.title}</span>
                          </a>
                     </div>
                          </div>
                          }
                        {nextPost &&  


                        <div className="col-md-6 next-post">
                            <div className="single-next-pre-box">
                              <div className="single-next-pre-inner">
                                <a href={`/our-blog/posts/${nextPost?._id}`} className="prev-link single-post-pre-next-link">
                                  <span>Next</span>
                                  </a>
                              </div>
                              <a href={`/our-blog/posts/${nextPost?._id}`} title={nextPost?.title} className="post-title">
                                <span className="single-post-link-title">{nextPost?.title}</span></a>
                                </div>
                                </div>}
                  </div>
                  </div>
                  </div>
                </article>
                
                <div className="blog-comment-form">
                  <div className="contact-one__form form-one">
                    <div id="comments" className="comments-area">
                      <h3 className="post-comment__title">{postComment?.length} Comment(s)</h3>
<ul className="blog-comment" style={{maxHeight:'50rem',overflowY:'scroll',overflowX:'clip',msOverflowY:'scroll',msOverflowX:'clip', scrollBehavior:'smooth'}}>
  {
    postComment?.map((pc:postCommentProps)=><PostComment pc={pc}/>)
  }
  
        </ul>                    
                      <div id="respond" className="comment-respond">
                        <h3 id="reply-title" className="comment-reply-title"><i className="fa fa-finger-dowm"></i>
                         <span   onClick={()=>setShowCommentForm(true)}>Leave a Comment</span> 
                          {showCommentForm && 
                            <button className="btn-link btn-sm mx-5 btn-primary rounded-pill"
                              onClick={()=>setShowCommentForm(false)}
                            >
                              Cancel reply
                            </button>}
                        </h3>
                     {showCommentForm &&  <><form
                        onSubmit={submitComment}
                          id="commentform"
                          className="comment-form"
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
                           { !currentUser._id && <p className="comment-form-cookies-consent">
                              <input
                                id="wp-comment-cookies-consent"
                                name="wp-comment-cookies-consent"
                                type="checkbox"
                                checked={saveInfo}
                                onChange={(e)=>setSaveInfo(prev => !prev)}
                              />
                              <label htmlFor="wp-comment-cookies-consent mx-3">
                                Save my name, email, and website in this browser
                                for the next time I comment.
                              </label>
                            </p>}
                          </div>
                          <div className="row">
                            <div className="form-submit col-lg-12">
                              <button
                                name="submit"
                                type="submit"
                                id="submit"
                                className="btn-sm thm-btn hover-black"
                                disabled={!canSave}
                              >Post Comment</button>
                        
                            </div>
                          </div>
                        </form>
                        </>
                        } 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           <PostSidebar posts={posts}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Post);
