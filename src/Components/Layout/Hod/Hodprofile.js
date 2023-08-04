import React from 'react'

function Hodprofile() {
    return (
        <React.Fragment>
            <div className="col-lg-12 col-md-12 h-100 mb-3 mb-lg-0">
            <div className="row shadow-sm h-100">
                <div className="col-md-5">
                    <div className="video-img">
                        <img src={`assets/images/media/video.jpg`} alt="img" className="cover-image br-7" />
                        <a className="mt-6 d-block video-btn mx-auto" href="#" data-bs-toggle="modal" data-bs-target="#homeVideo"><i className="fa fa-play text-white"></i></a>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="video-section mt-5  ms-lg-5 pt-5">
                        <div className="">
                            <h6 className="text-uppercase mb-2 text-primary"><i className="fa fa-info-circle"></i> Our Story</h6>
                            <h2 className="mt-0 font-weight-bold">Department of Computer Science </h2>
                        </div>
                        <p className="lead leading-normal mt-4">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model</p>
                        <a className="btn btn-primary text-white mt-3" href="#"> <i className="fe fe-chevron-right"></i> View More</a>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Hodprofile