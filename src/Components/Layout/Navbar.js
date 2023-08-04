import React from "react";
import { NavLink } from "react-router-dom";
import { EncryptId } from "../common/Utill";

function Navbar() {
  return (
    <>
      <div className="header-main fixed bg-white">
        <div className="sticky">
          <div className="horizontal-header clearfix ">
            <div className="container">
              <a id="horizontal-navtoggle" className="animated-arrow">
                <span></span>
              </a>
              <span className="smllogo">
                <img src={`${process.env.PUBLIC_URL}/assets/images/brand/logo.jpg`} width="180" alt="img" />
              </span>
              <span className="smllogo-white">
                <img src={`${process.env.PUBLIC_URL}/assets/images/brand/logo.jpg`} width="180" alt="img" />
              </span>
              <a href="tel:8250372547" className="callusbtn">
                <i className="icon icon-phone" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="horizontal-main header-style1  bg-dark-transparent clearfix">
          <div className="horizontal-mainwrapper container clearfix">
            <div className="desktoplogo">
              <NavLink to={`/`}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/brand/logo.jpg`} alt="img" />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/brand/logo.jpg`}
                  className="header-brand-img header-white"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="desktoplogo-1">
              <NavLink to={`/`}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/brand/logo.jpg`} alt="img" />
              </NavLink>
            </div>
            <nav className="horizontalMenu clearfix d-md-flex">
              <ul className="horizontalMenu-list">
                <li>
                  <NavLink to={`/`} className={({isActive})=> isActive ? "active" :""}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/Alumini`} className={({isActive})=> isActive ? "active" :""}>
                   
                    Alumini
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/Faculty`} className={({isActive})=> isActive ? "active" :""}>

                    Faculty
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/Studyroom`} className={({isActive})=> isActive ? "active" :""}>
                    Study Room <span className="fe fe-chevron-down m-0"></span>
                  </NavLink>
                  <ul className="sub-menu">
                    <li>
                      <NavLink
                        to={`/Studyroom/${EncryptId("Study-Material")}`} className={({isActive})=> isActive ? "active" :""} >
                        Study Material
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/Studyroom/${EncryptId("Question-Bank")}`} className={({isActive})=> isActive ? "active" :""}>
                        Question Bank
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to={`/Gallery`} className={({isActive})=> isActive ? "active" :""}>
                    Our Memories
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/Contact`} className={({isActive})=> isActive ? "active" :""}>
                    Contact Us
                  </NavLink>
                </li>
                <li className="p-0 mt-1">
                  <span>
                    <NavLink
                      to={`/Feedback/StudentFeedBack`} className="btn btn-primary">
                      Student Feedback
                    </NavLink>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
