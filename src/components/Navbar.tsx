import React from "react";
import "../styles/navbar.css"
// import BellIcon from 'react-bell-icon';
import { FaBell } from "react-icons/fa";

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

                    <div className="dropdown">
                        <a className="hidden-arrow iconClass" href="#" id="navbarDropdownMenuLink"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="notifcationIcon">
                                <FaBell/>
                            </div>
                            
                            <span className="position-absolute top-0 right-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a className="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </div>
                    

                    {/* Right Element */}
                    <div className="d-flex align-items-center feedback">
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
