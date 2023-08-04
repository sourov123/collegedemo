import React, { Component } from 'react'

export default class Topbar extends Component {
    render() {
        return (
            <>
            <div className="top-bar top-bar-light ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-sm-4 col-12">
                            <div className="top-bar-start d-flex">
                                <div className="clearfix">
                                    <ul className="socials">
                                        <li>
                                            <a className="social-icon text-dark" href="#"><i className="fe fe-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a className="social-icon text-dark" href="#"><i className="fe fe-video"></i></a>
                                        </li>
                                        <li>
                                            <a className="social-icon text-dark" href="#"><i className="fe fe-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a className="social-icon text-dark" href="#"><i className="fe fe-map"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-8 col-12">
                            <div className="top-bar-end">
                                <ul className="custom">
                                    <li>
                                        <a href="register.html" className="text-dark"><i className="fe fe-user me-1"></i> <span>Admin Login</span></a>
                                    </li>
                                    <li>
                                        <a href="login.html" className="text-dark"><i className="fe fe-log-in me-1"></i> <span>Alumini Login</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
