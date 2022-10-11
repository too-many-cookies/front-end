import React from "react";
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* RIT Logo */}
                    <a className="navbar-brand mt-2 mt-lg-0" href="#">
                        <img
                            src="RIT_hor_w.png"
                            height="40"
                            alt="RIT Logo"
                            loading="lazy"
                        />
                    </a>

                    {/* Left Elements */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/classes">Classes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/activitylog">Activity Log</a>
                        </li>
                    </ul>

                    {/* Right Element */}
                    <div className="d-flex align-items-center">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/feedback">Feedback</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
