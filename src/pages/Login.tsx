
import "../styles/login.css";

import React from 'react';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const users = [{ username: "admin", password: "admin" }];
    const navigate = useNavigate();
    const page = localStorage.getItem("page");
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
                    localStorage.setItem("user", response.data.message.user);
                    localStorage.setItem("id", response.data.message.data.userId);
                    localStorage.setItem("authenticated", String(true));
                    if (page) {
                        navigate("" + page);
                    } else {
                        navigate("/home");
                    }
                }
            )
            .catch((err) => {
                    console.log(err);
                }
            );
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p className="header">RIT Login</p>
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
