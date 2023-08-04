import React from 'react'
import { NavLink } from "react-router-dom";

function Notfound() {

return (
    <>
        <div className="page page-h error-page ">
            <div className="page-content z-index-10">
                <div className="container text-center">
                    <div className="display-1 mb-5">404</div>
                    <h1 className="h2 text-white  mb-3">Page Not Found</h1>
                    <p className="h4 font-weight-normal mb-7 leading-normal text-white">Oops!!!! you tried to access a page which is not available. go back to Home</p>
                    <NavLink to={`/`} className="btn btn-secondary"> 
                        Back To Home
                    </NavLink>
                </div>
            </div>
        </div>

    </>
)
}

export default Notfound;