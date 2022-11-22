import "../styles/navbar.css"
import { FaBell } from "react-icons/fa";
import axios from "axios";
import React, { useState } from "react";
import { NotificationInfo, ClassInfo } from "../interfaces";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Navbar = () => {
    const loggedIn = Cookies.get("authenticated")
    const admin = Cookies.get("admin")
    const [notifications, setNotifications] = useState<NotificationInfo[]>([] as NotificationInfo[]);
    const [classes, setClasses] = useState<ClassInfo[]>([] as ClassInfo[]);

    const navigate = useNavigate();
    const routeChange = (id: Number) => {
        const path = `/classes/${id}`;
        navigate(path);
        window.location.reload()
    };
    const loginScreen = window.location.href.includes("login")

    React.useEffect(() => {
        const classRoutes = admin === "true" ? "/v1/admin/classes" : "/v1/classes"
        if (loggedIn) {
            axios
                .post("/v1/notifications", {
                    professorID: localStorage.getItem("id"),
                })
                .then((response) => {
                    console.log(response.data.message)
                    setNotifications(response.data.message);
                })
                .catch((err) => {
                    console.log(err);
                });
            axios
                .post(classRoutes, {
                    professorID: localStorage.getItem("id"),
                })
                .then((response) => {
                    console.log(response.data.message)
                    setClasses(response.data.message);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    function formatDate(timestamp: Date) {
        const date = new Date(timestamp);
        const day = date.toLocaleDateString();
        const time = date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "UTC",
        });

        return `${day}`;
    }
    const logOut = () => {
        Cookies.remove("admin");
        Cookies.remove("authenticated");
        Cookies.remove("user");
        localStorage.removeItem('user');
        localStorage.removeItem('id');
        localStorage.removeItem('page');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* RIT Logo */}
                    <a className="navbar-brand mt-2 mt-lg-0" href="#">
                        <img
                            src="/RIT_hor_w.png"
                            height="40"
                            alt="RIT Logo"
                            loading="lazy"
                        />
                    </a>

                    {/* Left Elements */}
                    {!loginScreen && 
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/home">Home</a>
                            </li>
                            {admin === "false" &&
                                <div className="dropdown">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="/classes/">Classes</a>
                                    </li>
                                    <div className="dropdown-menu">
                                    {classes.map((thisClass, index) => (
                                        <a className = "dropdown-item" onClick={() => routeChange(thisClass.class_id)}>{thisClass.name}</a>
                                    ))}
                                    </div>
                                </div>                       
                            }

                            {admin === "true" &&
                                <div className="dropdown">
                                    <li className="nav-item dropdown">
                                        <a  href="/classes/" className="nav-link dis">Classes</a>
                                    </li>
                                    <div className="dropdown-menu">
                                    {classes.map((thisClass, index) => (
                                        <a className = "dropdown-item" onClick={() => routeChange(thisClass.class_id)}>{thisClass.name}</a>
                                    ))}
                                    </div>
                                </div>                                                         
                            }
                            <li className="nav-item">
                                <a className="nav-link" href="/activitylog">Activity Log</a>
                            </li>
                        </ul>
                    }

                    {/* Right Element */}
                    {!loginScreen &&
                        <div className="d-flex align-items-center ">
                            <div className="btn-group">
                                <a className="hidden-arrow iconClass" href="#" id="navbarDropdownMenuLink"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div>
                                        <FaBell className="notificationIcon"/>
                                    </div>
                                    <span className="position-absolute top-0 right-0 start-100 translate-middle badge rounded-pill bg-black">{notifications.length}</span>
                                </a>

                                <div className="dropdown-menu dropdown-menu-center">
                                    <h5 className="p-2">Notifications</h5>
                                    <div className="dropdown-divider"></div>
                                    {notifications.map((notification, index) => (
                                        <div className="dropdown-item overflow-scroll">
                                            <p>
                                                <b>{notification.username}</b> is having trouble signing in with {notification.failed_count} failed login attempts
                                            </p>
                                            <p className="notification_date">{formatDate(notification.date)}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="feedback">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/feedback">Feedback</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="logOut">
                                <button onClick={logOut}><a href="/login" style={{textDecoration: 'none', color: 'inherit'}}>Log Out</a></button>
                            </div>
                        </div>                    
                    }

                </div>
            </div>
        </nav>
    )
}

export default Navbar
