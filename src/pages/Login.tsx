import "../styles/login.css";

import React, {useState} from 'react';
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
            <form className="loginForm" onSubmit={handleSubmit}>
                <p className="header">Log into ISTE 501 Operational Analytics</p>
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
