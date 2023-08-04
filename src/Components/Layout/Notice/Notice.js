import React from "react";
import { Link } from "react-router-dom";


function Notice(props) {

  function handeloverout(e) {
    if (e.type === 'mouseover') {
      document.getElementsByTagName("marquee")[0].stop();
    } else {
      document.getElementsByTagName("marquee")[0].start();
    }
  }

  return (
    <React.Fragment>
      <div className="row mt-sm-3 mt-3 mt-lg-0">
        <div className="col-lg-12 col-md-12 p-lg-0">
          <div className="shadow-sm ">
            <div className="card-header border">
              <a href="#" className="text-dark">
                <div className="card-title h3">
                  <i className="fa fa-book me-2"></i>
                  <span className="font-weight-semibold">Latest Notice</span>
                </div>
              </a>
            </div>

            <div className="card-body border py-2">
              <ul className="list-unstyled widget-spec p-1">

                <marquee  height="240px" behavior="scroll" direction="up" scrollamount="4" onMouseOver={handeloverout} onMouseOut={handeloverout}>
                 
                 {
                 props.Noticedata.length > 0 ?
                    props.Noticedata.map((curElem,index) => {
                      
                      return (
                          <li className='' key={index}>
                          <Link to="/" className="text-default">
                            <i className="fa fa-info-circle text-primary"></i> {curElem.name.substring(0,30)}
                          </Link>
                        </li>
                        );
                      })
                      : <li className=''>
                      <Link to="/" className="text-default">
                        <i className="fa fa-info-circle text-primary"></i> No Notice
                      </Link>
                    </li>
                 }
                </marquee>

                <p className="mb-0 mt-1 text-end">
                  <Link to="/" className="text-primary ms-auto">
                    View more..
                  </Link>
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Notice

