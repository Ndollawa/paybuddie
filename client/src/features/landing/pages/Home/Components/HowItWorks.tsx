import React from 'react'

const HowItWorks = () => {
  return (
    <section className="work-process pt-50 pb-120">
    <div className="work-process__shape-1"></div>
    <div className="work-process__shape-2"></div>
    <div className="work-process__shape-3"></div>

    <div className="container">
        <div className="block-title text-center">
            <p className="block-title__tagline">How it works</p>
            <h2 className="block-title__title">Credit repair works in 4 eas <br/> simple steps</h2>
        </div>
        <div className="row row-gutter-y-30">
            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                <div className="work-process__item">
                    <div className="work-process__icon">
                        <i className="icon-select"></i>
                    </div>
                    <h3 className="work-process__title"><a href="#">Review reports</a></h3>
                    <p className="work-process__text">Lorem Ipsum is simply free dumy text of the printing and amet piscing
                    </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                <div className="work-process__item">
                    <div className="work-process__icon">
                        <i className="icon-settings"></i>
                    </div>
                    <h3 className="work-process__title"><a href="#">Fix errors</a></h3>
                    <p className="work-process__text">Lorem Ipsum is simply free dumy text of the printing and amet piscing
                    </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                <div className="work-process__item">
                    <div className="work-process__icon">
                        <i className="icon-bill"></i>
                    </div>
                    <h3 className="work-process__title"><a href="#">Pay your bills</a></h3>
                    <p className="work-process__text">Lorem Ipsum is simply free dumy text of the printing and amet piscing
                    </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                <div className="work-process__item">
                    <div className="work-process__icon">
                        <i className="icon-growth"></i>
                    </div>
                    <h3 className="work-process__title"><a href="#">Watch progress</a></h3>
                    <p className="work-process__text">Lorem Ipsum is simply free dumy text of the printing and amet piscing
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default React.memo(HowItWorks)