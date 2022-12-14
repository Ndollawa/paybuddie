import React from 'react'
import pageProps from '../../../../../app/utils/props/pageProps'
import Breadcrum from '../../../components/Breadcrum'


const Service:React.FC<pageProps> = ({pageData}:pageProps) => {


    return (
      <>
  <Breadcrum pageData={pageData}/>

{/* <!-- /.page-header --> */}
<section className="service-details pt-120 pb-120">
    <div className="container">
        <div className="row row-gutter-y-30">
            <div className="col-lg-4">
                <div className="service-sidebar">
                    <div className="service-sidebar__item service-sidebar__item--menu">
                        <ul className="service-sidebar__menu">
                            <li className="active"><a href="#">Wedding Loan</a></li>
                            <li><a href="#">Property Loan</a></li>
                            <li><a href="#">Business Loan</a></li>
                            <li><a href="#">Education Loan</a></li>
                            <li><a href="#">Personal Loan</a></li>
                        </ul>
                    </div>
                    {/* <!-- /.service-sidebar__item --> */}
                    <div className="service-sidebar__item service-sidebar__item--contact">
                        <div className="service-sidebar__bg" style={{backgroundImage: "url('assets/images/services/service-s-1-1.png')"}}>
                        </div>
                        {/* <!-- /.service-sidebar__bg --> */}
                        <div className="service-sidebar__contact">
                            <div className="service-sidebar__icon">
                                <i className="icon-phone-ringing"></i>
                            </div>
                            {/* <!-- /.service-sidebar__icon --> */}
                            <h3 className="service-sidebar__title">Quick loan
                                proccess</h3>
                                {/* <!-- /.service-sidebar__title --> */}
                            <hr className="service-sidebar__separator"/>
                            <p className="service-sidebar__tagline">Talk to an expert</p>
                            {/* <!-- /.service-sidebar__tagline --> */}
                            <a className="service-sidebar__phone" href="tel:+1-(246)333-0089">+ 1- (246) 333-0089</a>
                        </div>
                        {/* <!-- /.service-sidebar__contact --> */}
                    </div>
                    {/* <!-- /.service-sidebar__item --> */}
                </div>
                {/* <!-- /.service-sidebar --> */}
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-8">
                <div className="service-details__image">
                    <img src="assets/images/services/service-d-1-1.png" alt=""/>
                    <div className="service-details__icon">
                        <i className="icon-diamond"></i>
                    </div>
                    {/* <!-- /.service-details__icon --> */}
                </div>
                {/* <!-- /.service-details__image --> */}
                <div className="service-details__content">
                    <h3 className="service-details__title">Wedding Loan</h3>
                    {/* <!-- /.service-details__title --> */}
                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum
                        quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
                        port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry
                        standard dummy text ever since the 1500s.</p>
                    <p>It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design
                        printng and type setting Ipsum take a look at our round. When an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting.</p>
                    <div className="row row-gutter-y-30">
                        <div className="col-md-6">
                            <img src="assets/images/services/service-d-1-2.png" alt=""/>
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                        <div className="col-md-6">
                            <h3 className="service-details__subtitle">Service benefits</h3>
                            <p className="service-details__text">Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum.</p>
                            <ul className="list-unstyled ml-0 service-details__list">
                                <li>
                                    <i className="fa fa-check-circle"></i>
                                    Refresing to get such a personal touch.
                                </li>
                                <li>
                                    <i className="fa fa-check-circle"></i>
                                    Duis aute irure dolor in in voluptate.
                                </li>
                                <li>
                                    <i className="fa fa-check-circle"></i>
                                    Velit esse cillum eu fugiat pariatur.
                                </li>
                                <li>
                                    <i className="fa fa-check-circle"></i>
                                    Duis aute irure dolor in in voluptate.
                                </li>
                            </ul>
                            {/* <!-- /.list-unstyled --> */}
                        </div>
                        {/* <!-- /.col-md-6 --> */}
                    </div>
                    {/* <!-- /.row --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="accrodion-grp service-details__accrodion" data-grp-name="service-details__accrodion-1">
                                
                                {/* <!--Start Faq One Single--> */}
                                <div className="accrodion  wow fadeInUp" data-wow-delay="0ms">
                                    <div className="accrodion-title">
                                        <h4>Nunc dui massa, porttitor id erat et <span className="accrodion-icon"></span>
                                        </h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>There are many variations of passages the majority have suffered
                                                alteration in some fo injected humour, or randomised words believable.
                                                Phasellus a rhoncus erat.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- End Faq One Single--> */}
                                
                                {/* <!--Start Faq One Single--> */}
                                <div className="accrodion active wow fadeInUp" data-wow-delay="0ms">
                                    <div className="accrodion-title">
                                        <h4>Quisque quis urna consequat, scelerisque <span className="accrodion-icon"></span></h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>There are many variations of passages the majority have suffered
                                                alteration in some fo injected humour, or randomised words believable.
                                                Phasellus a rhoncus erat.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- End Faq One Single--> */}
                                
                                {/* <!--Start Faq One Single--> */}
                                <div className="accrodion  wow fadeInUp" data-wow-delay="0ms">
                                    <div className="accrodion-title">
                                        <h4>Mauris a ipsum id libero sodales dapibus <span className="accrodion-icon"></span></h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>There are many variations of passages the majority have suffered
                                                alteration in some fo injected humour, or randomised words believable.
                                                Phasellus a rhoncus erat.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- End Faq One Single--> */}
                                
                                {/* <!--Start Faq One Single--> */}
                                <div className="accrodion  wow fadeInUp" data-wow-delay="0ms">
                                    <div className="accrodion-title">
                                        <h4>Nunc dui massa, porttitor id erat et <span className="accrodion-icon"></span>
                                        </h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>There are many variations of passages the majority have suffered
                                                alteration in some fo injected humour, or randomised words believable.
                                                Phasellus a rhoncus erat.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- End Faq One Single--> */}
                            </div>
                        </div>
                        {/* <!-- /.col-md-12 --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.service-details__content --> */}
            </div>
            {/* <!-- /.col-lg-8 --> */}
        </div>
        {/* <!-- /.row --> */}
    </div>
    {/* <!-- /.container --> */}
</section>
{/* <!-- /.service-details --> */}
    </>
  )
}

export default Service
