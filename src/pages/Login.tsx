import "../styles/login.css";

import React, {useState} from 'react';
import Navbar from "../components/Navbar";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

function Login() {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const page = localStorage.getItem("page");
    const d = new Date();
    d.setTime(d.getTime() + 3600 * 1000);
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const response = await axios.post(
            "/v1/login",
            {
                "username": username,
                "password": password
            }
        )
            .then((response) => {
                    Cookies.set('user', response.data.message.user, {expires: .5});
                    Cookies.set('authenticated', String(true), {expires: .5});
                if(response.data.message.admin === "Y") {
                    Cookies.set('admin', String(true), {expires: .5});
                }
                else {
                    Cookies.set('admin', String(false),{expires: .5});
                }
                    localStorage.setItem("user", response.data.message.user);
                    localStorage.setItem("id",   response.data.message.userId);
                    console.log(response);
                    if (page) {
                        navigate("" + page);
                    } else {
                        navigate("/home");
                    }
                }
            )
            .catch(() => {
                    // @ts-ignore
                document.getElementById("error").style.color = "red";
                    // @ts-ignore
                document.getElementById("error").style.display = "block";
                return(
                    <div>
                       <Navbar />

                        <form onSubmit={handleSubmit}>
                            <p className="header">RIT Login</p>
                            <div id="error">Login Failed <br /> Please check your credentials </div>
                            <div className="fields">
                                <label className="username">Username</label>
                                <input type="text" name="Username" value={username} onChange={(e) => setusername(e.target.value)} />

                                <br />

                                <label className="password">Password</label>
                                <input type="password" name="Password" onChange={(e) => setpassword(e.target.value)} />

                                <br />

                            </div>

                            <br />

                            <input type="submit" value="Login" />
                        </form>
                    </div>
                );
                }
            );
    };

    return (
        <div>
            <Navbar />

            <form className="loginForm" onSubmit={handleSubmit}>
                <p className="header">Log into ISTE 501 Operational Analytics</p>
                <div id="error">Login Failed <br /> Please check your credentials </div>

                <div className="fields">
                    <label className="username">Username</label>
                    <input type="text" name="Username" value={username} onChange={(e) => setusername(e.target.value)} />

                    <br />

                    <label className="password">Password</label>
                    <input type="password" name="Password" onChange={(e) => setpassword(e.target.value)} />

                    <br />

                </div>

                <br />

                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;
