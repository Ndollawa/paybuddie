import React from 'react'
import { FaListAlt } from 'react-icons/fa'
import { IoGridOutline } from 'react-icons/io5'
import { format } from 'timeago.js'
import useToggle from '../../../../app/utils/hooks/useToggle'
import { useGetPostsQuery } from '../../../dashboard/pages/Post/postApiSlice'
import { useGetPostCategoryQuery } from '../../../dashboard/pages/PostCategory/postCategoryApiSlice'			
import pageProps from '../../../../app/utils/props/pageProps'
import postProps from '../../../../app/utils/props/postProps'
import postCategoryProps from '../../../../app/utils/props/postCategoryProps'
import Breadcrum from '../../components/Breadcrum'
import { post } from 'jquery'
import PostList from './components/PostList'


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
              posts: data?.ids?.map((id:string)=>data?.entities[id])		 
            }),
            }) 
  const { category } = useGetPostCategoryQuery("categoryList", {
selectFromResult: ({ data }) => ({
  category: data?.ids?.map((id:string)=>data?.entities[id])		 
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
                <div
                  id="secondary"
                  className="widget-area col-lg-4 blog-sidebar"
                >
                  <div
                    id="search-2"
                    className="widget blog-sidebar__box widget_search"
                  >
                    <div className="searchbox-form">
                      <form role="search" method="get" className="search-form">
                        <span className="screen-reader-text">Search for:</span>
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search "
                          value=""
                          name="s"
                          title="Search for:"
                        />
                        <button type="submit" className="search-submit">
                          <span className="icon-magnifying-glass"></span>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div
                    id="finlon_recent_post_widget-2"
                    className="widget blog-sidebar__box blog-sidebar__item--posts"
                  >
                    <h3 className="blog-sidebar__title">Recent Posts</h3>
                    <ul className="list-unstyled blog-sidebar__post">
                      <li className="blog-sidebar__post__item">
                        <div className="blog-sidebar__post__image">
                          <img
                            src="../wp-content/uploads/2022/09/blog-1-6-150x150.jpg"
                            alt=""
                          />
                        </div>
                        <div className="blog-sidebar__post__content">
                          <span className="meta-list byline_author">
                            <i className="far fa-user-circle"></i>
                            <a
                              className="url fn n"
                              href="../author/admin/index.html"
                            >
                              admin
                            </a>
                          </span>
                          <h3 className="blog-sidebar__post__title">
                            <a href="blog-details.html">
                              Education Loan Quisque rhoncus massa et
                            </a>
                          </h3>
                        </div>
                      </li>
                      <li className="blog-sidebar__post__item">
                        <div className="blog-sidebar__post__image">
                          <img
                            src={process.env.REACT_APP_BASE_URL+"/uploads/posts/"+post?.coverImage} alt={post?.title}
                          />
                        </div>
                        <div className="blog-sidebar__post__content">
                          <span className="meta-list byline_author">
                            <i className="far fa-user-circle"></i>
                            <a
                              className="url fn n"
                              href="../author/admin/index.html"
                            >
                              admin
                            </a>
                          </span>
                          <h3 className="blog-sidebar__post__title">
                            <a href="blog-details.html">
                              Business Loan Nam diam purus sagittis
                            </a>
                          </h3>
                        </div>
                      </li>
                      <li className="blog-sidebar__post__item">
                        <div className="blog-sidebar__post__image">
                          <img
                            src="../wp-content/uploads/2022/09/blog-1-4-150x150.jpg"
                            alt=""
                          />
                        </div>
                        <div className="blog-sidebar__post__content">
                          
                          <span className="meta-list byline_author">
                            <i className="far fa-user-circle"></i>
                            <a
                              className="url fn n"
                              href="../author/admin/index.html"
                            >
                              admin
                            </a>
                          </span>
                          <h3 className="blog-sidebar__post__title">
                            <a href="blog-details.html">
                              Credit Card Ut purus eu condimentum
                            </a>
                          </h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="categories-2"
                    className="widget blog-sidebar__box widget_categories"
                  >
                    <h3 className="blog-sidebar__title">Categories</h3>
                    <ul>
                      <li className="cat-item cat-item-18">
                        <a href="../category/business-loan/index.html">
                          Business Loan
                        </a>
                      </li>
                      <li className="cat-item cat-item-21">
                        <a href="../category/finance/index.html">Finance</a>
                      </li>
                      <li className="cat-item cat-item-17">
                        <a href="../category/mortage/index.html">Mortage</a>
                      </li>
                      <li className="cat-item cat-item-20">
                        <a href="../category/personal-loans/index.html">
                          Personal Loans
                        </a>
                      </li>
                      <li className="cat-item cat-item-19">
                        <a href="../category/studies/index.html">Studies</a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="tag_cloud-2"
                    className="widget blog-sidebar__box widget_tag_cloud"
                  >
                    <h3 className="blog-sidebar__title">Tags</h3>
                    <div className="tagcloud">
                      <a
                        href="../tag/banking/index.html"
                        className="tag-cloud-link tag-link-14 tag-link-position-1"
                        style={{ fontSize: "8pt" }}
                        aria-label="Banking (1 item)"
                      >
                        Banking
                      </a>
                      <a
                        href="../tag/business-loan/index.html"
                        className="tag-cloud-link tag-link-5 tag-link-position-2"
                        style={{ fontSize: "16.4pt" }}
                        aria-label="Business Loan (2 items)"
                      >
                        Business Loan
                      </a>
                      <a
                        href="../tag/credit-card/index.html"
                        className="tag-cloud-link tag-link-16 tag-link-position-3"
                        style={{ fontSize: "8pt" }}
                        aria-label="Credit Card (1 item)"
                      >
                        Credit Card
                      </a>
                      <a
                        href="../tag/education-loan/index.html"
                        className="tag-cloud-link tag-link-15 tag-link-position-4"
                        style={{ fontSize: "8pt" }}
                        aria-label="Education Loan (1 item)"
                      >
                        Education Loan
                      </a>
                      <a
                        href="../tag/finance/index.html"
                        className="tag-cloud-link tag-link-13 tag-link-position-5"
                        style={{ fontSize: "22pt" }}
                        aria-label="Finance (3 items)"
                      >
                        Finance
                      </a>
                      <a
                        href="../tag/home-loan/index.html"
                        className="tag-cloud-link tag-link-10 tag-link-position-6"
                        style={{ fontSize: "8pt" }}
                        aria-label="Home Loan (1 item)"
                      >
                        Home Loan
                      </a>
                      <a
                        href="../tag/interest/index.html"
                        className="tag-cloud-link tag-link-11 tag-link-position-7"
                        style={{ fontSize: "8pt" }}
                        aria-label="Interest (1 item)"
                      >
                        Interest
                      </a>
                      <a
                        href="../tag/mortage/index.html"
                        className="tag-cloud-link tag-link-4 tag-link-position-8"
                        style={{ fontSize: "8pt" }}
                        aria-label="Mortage (1 item)"
                      >
                        Mortage
                      </a>
                      <a
                        href="../tag/personal-loan/index.html"
                        className="tag-cloud-link tag-link-12 tag-link-position-9"
                        style={{ fontSize: "8pt" }}
                        aria-label="Personal Loan (1 item)"
                      >
                        Personal Loan
                      </a>
                    </div>
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
                            <div className="col-lg-4 col-md-12 col-sm-12">
                              <div className="blog-card">
                                <div className="blog-card__image">
                                  <div className="blog-card__date">
                                    <span>23</span>Aug
                                  </div>
                                  <img
                                    decoding="async"
                                    src="../wp-content/uploads/2022/08/blog-1-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <a href="../which-growth-strategies-you-should-adopt/index.html"></a>
                                </div>
                                <div className="blog-card__content">
                                  <div className="blog-card__meta">
                                    
                                    <span className="meta-list byline_author">
                                      <i className="far fa-user-circle"></i>
                                      <a
                                        className="url fn n"
                                        href="../author/admin/index.html"
                                      >
                                        admin
                                      </a>
                                    </span>
                                    <span className="meta-list blog_comment">
                                      
                                      <i className="far fa-comments"></i>
                                      <a href="../which-growth-strategies-you-should-adopt/index.html#respond">
                                        0 Comments
                                      </a>
                                    </span>
                                  </div>
                                  <h3 className="blog-card__title">
                                    <a href="../which-growth-strategies-you-should-adopt/index.html">
                                      Which loan credit strategies you adopt
                                    </a>
                                  </h3>
                                  <p className="blog-card__text">
                                    Duis aute irure dolor lipsum simply free
                                    text the local markets.
                                  </p>
                                  <a
                                    href="../which-growth-strategies-you-should-adopt/index.html"
                                    className="blog-card__link"
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>
                            </div>
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
