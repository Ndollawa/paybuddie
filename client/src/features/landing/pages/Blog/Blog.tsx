import React from 'react'
import { FaListAlt } from 'react-icons/fa'
import { IoGridOutline } from 'react-icons/io5'
import { format } from 'timeago.js'
import useToggle from '../../../../app/utils/hooks/useToggle'
import { useGetPostsQuery } from '../../../dashboard/pages/Post/postApiSlice'		
import pageProps from '../../../../app/utils/props/pageProps'
import postProps from '../../../../app/utils/props/postProps'
import Breadcrum from '../../components/Breadcrum'
import PostList from './components/PostList'
import PostGrid from './components/PostGrid'
import PostSidebar from './Post/components/PostSidebar'


const Blog:React.FC<pageProps> = ({pageData}:pageProps) => {
    const [viewType,toggleViewType] = useToggle('viewType','List');
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
                      posts?.map((post:postProps)=><PostList post={post}/>)
                    }
                  </div>
                </div>
               
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
                          <div className="row row-gutter-y-30">
                         {  posts?.map((post:postProps)=><PostGrid post={post}/>)}


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              <PostSidebar posts={posts} />

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
