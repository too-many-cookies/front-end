import Navbar from "../components/Navbar";
import React from "react";
import {Navigate} from "react-router-dom";

function Classes() {
    const loggedIn = localStorage.getItem("authenticated");
    if(!loggedIn){
        localStorage.setItem("page", "/classes");
        return <Navigate to={"/login"}/>
    }
    else {
        return (
            <div className="Classes">
                <Navbar/>
                <h1>Classes</h1>
            </div>
        );
    }
}

export default Classes;
