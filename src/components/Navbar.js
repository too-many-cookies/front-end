import React from "react";
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* RIT Logo */}
                    <a class="navbar-brand mt-2 mt-lg-0" href="#">
                        <img
                            src="RIT_hor_w.png"
                            height="40"
                            alt="RIT Logo"
                            loading="lazy"
                        />
                    </a>

                    {/* Left Elements */}
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            {/* <LinkContainer to="/Home">
                                <Nav.link>Home</Nav.link>
                            </LinkContainer> */}
                            <a class="nav-link" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/classes">Classes</a>
                            {/* <LinkContainer to="/Classes">
                                <Nav.link>Classes</Nav.link>
                            </LinkContainer> */}
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/activitylog">Activity Log</a>
                            {/* <LinkContainer to="/ActivityLog">
                                <Nav.link>Activity Log</Nav.link>
                            </LinkContainer> */}
                        </li>
                    </ul>

                    {/* Right Element */}
                    <div class="d-flex align-items-center">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Feedback</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar