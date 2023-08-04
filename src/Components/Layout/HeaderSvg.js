import React from "react";
import { NavLink } from "react-router-dom";
import Svgdesign from "./Svgdesign";

export default function HeaderSvg(props) {
  return (
    <>
      <div
        className="cover-image bg-background-1"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${props.heading.coverimg})` }}>
        <section>
          <div className="sptb-2 bannerimg">
            <div className="header-text mb-0">
              <div className="container">
                <div className="text-center text-white py-7">
                  <h1 className="">{props.heading.title}</h1>
                  <ol className="breadcrumb text-center">
                    <li className="breadcrumb-item">
                      <NavLink to="/">Home </NavLink>
                    </li>
                    {props.heading.sublocation !== "" ? (
                      <li
                        className="breadcrumb-item active text-white"
                        aria-current="page"
                      >
                        {props.heading.sublocation}
                      </li>
                    ) : null}
                    <li
                      className="breadcrumb-item active text-white"
                      aria-current="page"
                    >
                      {props.heading.location}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Svgdesign />
    </>
  );
}
