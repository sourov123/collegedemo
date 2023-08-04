import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function StudentReview() {
    return (
        <React.Fragment>
            <section className="sptb position-relative cover-image bg-background" style={{ backgroundImage: "url(assets/images/banners/pattern3.png)" }} >
                <div className="container">
                    <div className="section-title">
                        <h2 className="position-relative">Student Reviews</h2>
                        <p className="fs-18 position-relative">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">

                            <OwlCarousel className='owl-carousel testimonial-owl-carousel' loop={false} autoplayHoverPause={true} nav dots={false} autoplay={true} autoplayTimeout={3000} items={2} callbacks={true} responsive={{
                                0: {
                                    items: 1
                                },
                                1000: {
                                    items: 2
                                }
                            }} responsiveClass="true" mouseDrag={true}>

                                <div className="item">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-3 col-sm-12">
                                                    <div className="testimonial-img"><img src="assets/images/users/female/4.jpg" className="br-7 w-120 h-120" alt="img" /></div>
                                                </div>
                                                <div className="col-md-9 col-sm-12 mt-2">
                                                    <div className="d-md-flex">
                                                        <div>
                                                            <h4 className="title font-weight-bold">Lilly Potter</h4>
                                                            <span className="post">Web developer student</span>
                                                        </div>
                                                        <div className="star-ratings start-ratings-main clearfix mb-3 ms-auto">
                                                            <div className="stars stars-example-fontawesome stars-example-fontawesome-sm">

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="fs-16 leading-normal mt-4 mb-0"><i className="fa fa-quote-left"></i> But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-3 col-sm-12">
                                                    <div className="testimonial-img"><img src="assets/images/users/male/33.jpg" className="br-7 w-120 h-120" alt="img" /></div>
                                                </div>
                                                <div className="col-md-9 col-sm-12 mt-2">
                                                    <div className="d-md-flex">
                                                        <div>
                                                            <h4 className="title font-weight-bold">John Joya</h4>
                                                            <span className="post">Web developer student</span>
                                                        </div>
                                                        <div className="star-ratings start-ratings-main clearfix mb-3 ms-auto">
                                                            <div className="stars stars-example-fontawesome stars-example-fontawesome-sm">

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="fs-16 leading-normal mt-4 mb-0"><i className="fa fa-quote-left"></i> But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-3 col-sm-12">
                                                    <div className="testimonial-img"><img src="assets/images/users/female/4.jpg" className="br-7 w-120 h-120" alt="img" /></div>
                                                </div>
                                                <div className="col-md-9 col-sm-12 mt-2">
                                                    <div className="d-md-flex">
                                                        <div>
                                                            <h4 className="title font-weight-bold">Lilly Potter</h4>
                                                            <span className="post">Web developer student</span>
                                                        </div>
                                                        <div className="star-ratings start-ratings-main clearfix mb-3 ms-auto">
                                                            <div className="stars stars-example-fontawesome stars-example-fontawesome-sm">

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="fs-16 leading-normal mt-4 mb-0"><i className="fa fa-quote-left"></i> But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-3 col-sm-12">
                                                    <div className="testimonial-img"><img src="assets/images/users/male/33.jpg" className="br-7 w-120 h-120" alt="img" /></div>
                                                </div>
                                                <div className="col-md-9 col-sm-12 mt-2">
                                                    <div className="d-md-flex">
                                                        <div>
                                                            <h4 className="title font-weight-bold">John Joya</h4>
                                                            <span className="post">Web developer student</span>
                                                        </div>
                                                        <div className="star-ratings start-ratings-main clearfix mb-3 ms-auto">
                                                            <div className="stars stars-example-fontawesome stars-example-fontawesome-sm">

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="fs-16 leading-normal mt-4 mb-0"><i className="fa fa-quote-left"></i> But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
}

export default StudentReview
