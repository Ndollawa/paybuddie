import React, { useEffect, useState } from 'react'
import { FaListAlt } from 'react-icons/fa'
import { IoGridOutline } from 'react-icons/io5'
import { useSearchParams } from 'react-router-dom'
import useToggle from '../../../../app/utils/hooks/useToggle'
import { useGetPostCategoryQuery } from '../../../dashboard/pages/PostCategory/postCategoryApiSlice'
import { useGetPostsQuery } from '../../../dashboard/pages/Post/postApiSlice'		
import pageProps from '../../../../app/utils/props/pageProps'
import postProps from '../../../../app/utils/props/postProps'
import Breadcrum from '../../components/Breadcrum'
import PostList from './components/PostList'
import PostGrid from './components/PostGrid'
import PostSidebar from './Post/components/PostSidebar'
import postCategoryProps from '../../../../app/utils/props/postCategoryProps'

 export function filterPosts(posts: any, search?:string | null, category?: string, tag?: string | null): postProps[] {
              return posts.filter((post:any) => {
                if (category && tag) {
                  return post.category === category && post.tags.includes(tag);
                }
                if (category) {
                  return post.category === category;
                }
                if (tag) {
                  return post.tags.includes(tag);
                }
                if(search){
                  const keys = ['title','body']
                  return keys?.some((key:string)=>post[key]?.toLowerCase()?.includes(search)) 
                }
                return true;
              });
            }
            
const Blog:React.FC<pageProps> = ({pageData}:pageProps) => {
    const [viewType,toggleViewType] = useToggle('viewType','List');
    const [postList, setPostList] = useState<postProps[] | []>([])
    const [searchParams, setSearchParams] = useSearchParams()
    const tag = searchParams.get('tag')
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const setView = ()=>{
      if(viewType){
      toggleViewType(false)
      }else{
      toggleViewType(true)
      }
  }		
  const { posts } = useGetPostsQuery("postsList", {
            selectFromResult: ({ data }) => ({
              posts: (data?.ids?.map((id:string)=>data?.entities[id]))?.filter((post:postProps) => post.status === 'published')		 
            }),
            }) 
  const { cat } = useGetPostCategoryQuery("categoriesList", {
            selectFromResult: ({ data }) => ({
              cat: (data?.ids?.map((id:string)=>data?.entities[id]))?.find((c:postCategoryProps) => c.title === category && c?.status === 'active')		 
            }),
            }) 
            useEffect(() => {
         setPostList(filterPosts(posts,search,cat?._id,tag)) 
              
            }, [])
  return (
    <>
      <Breadcrum pageData={pageData} />
      <button
        className="btn btn-primary light m-5 pull-right"
        onClick={setView}
      >
        {viewType ? (
          <FaListAlt fontSize={"1.2rem"} />
        ) : (
          <IoGridOutline fontSize={"1.2rem"} />
        )}
      </button>
      {viewType ? (
        <main id="primary" className="site-main">
          <section className="blog-page pt-100 pb-100">
            <div className="container">
              <div className="row blog-page-with-sidebar">
                <div className="col-lg-8">
                  <div className="row row-gutter-y-30 all-posts-wrapper">
                    {
                    postList.length?  postList?.map((post:postProps)=><PostList post={post}/>)
                    : <h3>No post yet.</h3>
                    }
                  </div>
                </div>
              <PostSidebar posts={posts} filterPosts={filterPosts} setPostList={setPostList} />
               
              </div>
            </div>
          </section>
        </main>
      ) : (
        <>
          <div className="full-width-page">
            <div
              data-elementor-type="wp-page"
              className="elementor elementor-2778"
            >
              <section
                className="pt-100 pb-100 elementor-section elementor-top-section elementor-element elementor-element-0336fc0 finlon-column-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default finlon-column-stretched-no finlon-background-img-no finlon-background-color-yes"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1909886 finlon-background-img-no finlon-background-color-yes"
                    data-id="1909886"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-ab71120 elementor-widget elementor-widget-finlon_blog"
                        data-id="ab71120"
                        data-element_type="widget"
                        data-widget_type="finlon_blog.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="row row-gutter-y-30 m-auto">
                         { postList.length?
                          postList?.map((post:postProps)=><PostGrid post={post}/>)
                        :<h3>No Post yet.</h3>
                        }


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default React.memo(Blog)
