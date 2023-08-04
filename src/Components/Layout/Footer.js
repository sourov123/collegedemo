import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <section className="cover-image-footer sptb bg-background-1" >
                    <div className="content-text mb-0">
                        <div className="container">
                            <div className="text-white">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mt-0">
                                            <h1 className="mb-2 font-weight-semibold">Contact Us</h1>
                                            <p className="fs-18 mb-0">Many desktop publishing packages and web page editors.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mt-4">
                                            <div className="input-group sub-input mt-1">
                                                <input type="text" className="form-control input-lg  br-ts-7  br-bs-7" placeholder="Enter your Email" />
                                                <div className="input-group-text ">
                                                    <button type="button" className="btn btn-secondary btn-lg br-te-7  br-be-7">
                                                        Send
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="position-relative">
                    <div className="shape overflow-hidden bottom-footer-shape">
                        <svg viewBox="0 0 2880 48" fill="none" xmsns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <footer className="bg-dark">
                    <div className="footer-main footer-main1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-12">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/brand/logo.jpg`} className="w-auto border-0" alt="img" />
                                            <ul className="list-unstyled mb-0 mt-4">
                                                <li>
                                                    <a href={`${process.env.PUBLIC_URL}`}>Second stret, New York, NY 10012, US</a>
                                                </li>
                                                <li>
                                                    <a href={`${process.env.PUBLIC_URL}`}>info@example.com, info@edomi.com</a></li>
                                                <li>
                                                    <a href={`${process.env.PUBLIC_URL}`}>+ 01 234 567 88</a>
                                                </li>
                                                <li>
                                                    <a href={`${process.env.PUBLIC_URL}`}>+ 01 234 567 89</a>
                                                </li>
                                            </ul>
                                            <ul className="list-unstyled list-inline mt-5 mb-lg-0 mb-5">
                                                <li className="list-inline-item">
                                                    <a className="social-icons btn-sm rgba-white-slight waves-effect waves-light">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icons btn-sm rgba-white-slight waves-effect waves-light">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icons btn-sm rgba-white-slight waves-effect waves-light">
                                                        <i className="fa fa-google-plus"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icons btn-sm rgba-white-slight waves-effect waves-light">
                                                        <i className="fa fa-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icons btn-sm rgba-white-slight waves-effect waves-light">
                                                        <i className="fa fa-github"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-5 col-md-12">
                                            <h6 className="font-weight-normal text-white">Categories</h6>
                                            <ul className="list-unstyled mb-5 mb-lg-0">
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Software Development</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Web Development</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Web Designing</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Business Classes</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Animation Classes</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Networking Classes</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-12">
                                            <h6 className="font-weight-normal text-white">Courses</h6>
                                            <ul className="list-unstyled mb-5 mb-lg-0">
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Angular</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Java</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> HTML</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Devops</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Php Laravel</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Digital Marketing</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-12">
                                            <h6 className="font-weight-normal text-white">Our Company</h6>
                                            <ul className="list-unstyled mb-lg-0 mb-5">
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Our Team</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Contact US</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> About Us</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Services</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Blog News</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Online Classes</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-12">
                                            <h6 className="font-weight-normal text-white">Support</h6>
                                            <ul className="list-unstyled mb-5 mb-lg-0">
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Home</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Sitemap</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Privacy Policy</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Cooky Policy</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Web User Plocy</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}`}><i className="fe fe-chevron-right"></i> Terms and Services</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-4 footer-main border-bottom bg-dark p-0 border-top-0 border-white-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg">
                                    <div className="py-3 bg-dark">
                                        <div className="col-lg-12 col-sm-12  mt-2 mb-2 text-left text-white">
                                            Designed with <span className="fa fa-heart text-danger"></span> by Department of Computer Science.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg col-lg-auto">
                                    <div className="form-group d-flex mb-0">
                                        <div className="me-4 w-200">
                                            <select className="form-control select2" data-placeholder="Select Country">
                                                <option value="en">English</option>
                                                <option value="en">Arabic</option>
                                                <option value="en">German</option>
                                                <option value="en">Greek</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <a href="#top" id="back-to-top" ><i className="fa fa-long-arrow-up"></i></a>
            </>
        )
    }
}
