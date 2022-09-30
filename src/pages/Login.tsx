
import "../styles/recentActivity.css";

import React from 'react';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login() {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const users = [{ username: "admin", password: "admin" }];
    const navigate = useNavigate();
    const page = localStorage.getItem("page");
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            localStorage.setItem("authenticated", String(true));
            navigate(""+page);
        }
    };

    return (
        <div>
            <p>Welcome Back</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                />
                <input
                    type="password"
                    name="Password"
                    onChange={(e) => setpassword(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
);
}


export default Login;
