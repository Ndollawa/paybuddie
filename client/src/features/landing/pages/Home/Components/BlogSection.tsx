import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCompanyDetails, useLandingPageConfig, usePages, useSiteImages } from '../../../../dashboard/pages/Settings/settingsConfigSlice';

const AboutUs = () => {
  const {siteName} = useSelector(useCompanyDetails);
  const {aboutStyle}= useSelector(useLandingPageConfig)
  const {aboutUs} = useSelector(usePages);
  const {aboutUsBg} = useSelector(useSiteImages);
  const startDate = new Date('2022-01-01').getFullYear()
  const endDate =   new Date(Date.now()).getFullYear()
  const yearsExp = endDate- startDate
let aboutUsSection;
switch (aboutStyle) {
case 1:
aboutUsSection = (      <section className="blog-one pt-120 pb-120">
<div className="container">
    <div className="block-title text-center">
        <p className="block-title__tagline">Our Blog</p>
        {/* <!-- /.block-title__tagline --> */}
        <h2 className="block-title__title">Our latest news updates <br/> & articles</h2>
        {/* <!-- /.block-title__title --> */}
    </div>
    {/* <!-- /.block-title --> */}
    <div className="row row-gutter-y-30">
        <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="blog-card">
                <div className="blog-card__image">
                    <div className="blog-card__date"><span>05</span> Mar</div>
                    {/* <!-- /.blog-card__date --> */}
                    <img src="assets/images/blog/blog-1-1.png" alt="Which growth strategies you should adopt" />
                    <a href="blog-details.html"></a>
                </div>
                {/* <!-- /.blog-card__image --> */}
                <div className="blog-card__content">
                    <div className="blog-card__meta">
                        <a href="blog-details.html"><i className="far fa-user-circle"></i> by Admin</a>
                        <a href="blog-details.html"><i className="far fa-comments"></i> 2 Comments</a>
                    </div>
                    {/* <!-- /.blog-card__meta --> */}
                    <h3 className="blog-card__title"><a href="blog-details.html">Which growth strategies you should adopt</a></h3>
                    <p className="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                    <a href="blog-details.html" className="blog-card__link">Read More</a>
                    {/* <!-- /.blog-card__link --> */}
                </div>
                {/* <!-- /.blog-card__content --> */}
            </div>
            {/* <!-- /.blog-card --> */}
        </div>
    </div>
    {/* <!-- /.row --> */}

</div>
{/* <!-- /.container --> */}
</section>
)
    break;
  case 2:
    aboutUsSection = (
      <>
     <section className="elementor-section elementor-top-section elementor-element elementor-element-4d803ab finlon-column-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default finlon-column-stretched-no finlon-background-img-no finlon-background-color-yes"><div className="elementor-container elementor-column-gap-default"><div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-12bb8af finlon-background-img-no finlon-background-color-yes" ><div className="elementor-widget-wrap elementor-element-populated"><section className="elementor-section elementor-inner-section elementor-element elementor-element-19850ba finlon-column-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default finlon-background-img-no finlon-background-color-yes"><div className="elementor-container elementor-column-gap-default"><div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-31ea17e finlon-background-img-no finlon-background-color-yes"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-element elementor-element-5f19662 elementor-widget elementor-widget-finlon_title"><div className="elementor-widget-container"><div className="block-title-wrapper"><div className="block-title"><p className="block-title__tagline">Professional Team</p><h2 className="block-title__title">Meet the highly qualified team members</h2></div></div></div></div></div></div><div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9bdb4d6 finlon-background-img-no finlon-background-color-yes" data-id="9bdb4d6" data-element_type="column"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-element elementor-element-de38d92 elementor-widget elementor-widget-finlon_button"><div className="elementor-widget-container"><div className="thm-btn-contianer"> <a href="../news-grid/index.html" className="thm-btn thm-btn--dark-hover">View All News</a></div></div></div></div></div></div></section><div className="elementor-element elementor-element-8028cb8 elementor-widget elementor-widget-finlon_blog"><div className="elementor-widget-container"><div className="row row-gutter-y-30"><div className="col-lg-4 col-md-12 col-sm-12"><div className="blog-card-two overlay-yes"><div className="blog-card-two__image" style={{backgroundImage: "url('../wp-content/uploads/2022/08/blog-1-1.jpg')"}}></div><div className="blog-card-two__content"><div className="blog-card__meta"> <span className="meta-list byline_author"><i className="far fa-user-circle"></i><a className="url fn n" href="../author/admin/index.html">admin</a></span> <span className="meta-list blog_comment"> <i className="far fa-comments"></i><a href="../which-growth-strategies-you-should-adopt/index.html#respond">0 Comments</a></span></div><h3 className="blog-card-two__title"><a href="../which-growth-strategies-you-should-adopt/index.html">Which loan credit strategies you adopt</a></h3></div></div></div><div className="col-lg-4 col-md-12 col-sm-12"><div className="blog-card-two overlay-yes"><div className="blog-card-two__image" style={{backgroundImage: "url('../wp-content/uploads/2022/08/blog-1-2.jpg')"}}></div><div className="blog-card-two__content"><div className="blog-card__meta"> <span className="meta-list byline_author"><i className="far fa-user-circle"></i><a className="url fn n" href="../author/admin/index.html">admin</a></span> <span className="meta-list blog_comment"> <i className="far fa-comments"></i><a href="../better-changing-to-grow-business-faster/index.html#respond">0 Comments</a></span></div><h3 className="blog-card-two__title"><a href="../better-changing-to-grow-business-faster/index.html">Better changing to grow business faster</a></h3></div></div></div><div className="col-lg-4 col-md-12 col-sm-12"><div className="blog-card-two overlay-yes"><div className="blog-card-two__image" style={{backgroundImage: "url('../wp-content/uploads/2022/08/blog-1-3.jpg')"}}></div><div className="blog-card-two__content"><div className="blog-card__meta"> <span className="meta-list byline_author"><i className="far fa-user-circle"></i><a className="url fn n" href="../author/admin/index.html">admin</a></span> <span className="meta-list blog_comment"> <i className="far fa-comments"></i><a href="../personal-loan-odio-vitae-lorem-gra/index.html#respond">0 Comments</a></span></div><h3 className="blog-card-two__title"><a href="../personal-loan-odio-vitae-lorem-gra/index.html">Personal Loan Integer tristique odio</a></h3></div></div></div></div></div></div></div></div></div></section>

</>
    )
    break;
  case 3:
    aboutUsSection = (
      <section className="about-six pt-120 pb-120">
    <div className="container">
        <div className="row row-gutter-y-60">
            <div className="col-lg-6">
                <div className="about-six__image">
                    <img src={process.env.REACT_APP_BASE_URL+"uploads/settings/"+aboutUsBg} alt={siteName}/>
                    <div className="about-six__image__caption wow fadeInRight" data-wow-duration="1500ms">
                        <h4 className="about-six__image__caption__year count-box">
                            <span className="count-text" data-stop="20" data-speed="1500"></span>
                        </h4>
                        <p className="about-six__image__caption__text">Seamlessly Transition to Trustworthy Transactions</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="about-six__content">
                    <div className="block-title text-left">
                        <p className="block-title__tagline">About Company</p>
                        <h2 className="block-title__title">We offer a range of services to facilitate secure transactions</h2>
                    </div>
                    <ul className="list-unstyled about-six__list">
                        <li>
                            <i className="fa fa-check-circle"></i>
                            Escrow Services
                        </li>
                        <li>
                            <i className="fa fa-check-circle"></i>
                            Buyer and Seller Protection
                        </li>
                        <li>
                            <i className="fa fa-check-circle"></i>
                            Dispute Resolution
                        </li>
                    </ul>
                    <h3 className="about-six__subtitle">Our Mission: Empowering Safe and Secure Online Commerce</h3>
                    
                    <p className="about-six__text" dangerouslySetInnerHTML={{__html:aboutUs}}></p>
                    <div className="about-six__author">
                        <div className="about-six__author__image">
                            <img src={process.env.REACT_APP_BASE_URL+"uploads/settings/"+aboutUsBg} alt={siteName}/>
                        </div>
                        <div className="about-six__author__name">
                            Kevin Martin
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    )
    break;

  default:
    aboutUsSection = null
    break;
}

  return (
    <>
      {aboutUsSection}
    </>
  )
}

export default React.memo(AboutUs)
