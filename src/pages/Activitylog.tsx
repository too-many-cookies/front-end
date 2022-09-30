import Navbar from "../components/Navbar";
import React from "react";
import {Navigate} from "react-router-dom";

function ActivityLog() {
    const loggedIn = localStorage.getItem("authenticated");
    if(!loggedIn){
        localStorage.setItem("page", "/activitylog");
        return <Navigate to={"/login"}/>
    }
    else {
        return (
            <div className="ActivityLog">
                <Navbar/>
                <h1>ActivityLog</h1>
            </div>
        );
    }
}

export default ActivityLog;
