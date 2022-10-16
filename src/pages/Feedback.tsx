import Navbar from "../components/Navbar";
import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import "../styles/feedback.css";

function Feedback() {
    const loggedIn = localStorage.getItem("authenticated");
    const [subject, setsubject] = useState("");
    const [feedback, setfeedback] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

    };

    if (!loggedIn) {
        localStorage.setItem("page", "/feedback");
        return <Navigate to={"/login"}/>
    }
    else {
        return (
            <div>
                <form className="feedbackForm" onSubmit={handleSubmit}>
                    <p className="header">Feedback</p>
                    <div className="fields">
                        <label className="subject">Subject</label>
                        <input type="text" name="Subject" value={subject} onChange={(e) => setsubject(e.target.value)} />

                        <br />

                        <label className="feedback">Feedback
                            <textarea name="Feedback" value={feedback} onChange={(e) => setfeedback(e.target.value)} />
                        </label>
                        <br />

                    </div>

                    <br />

                    <input type="submit" value="Send Feedback" />
                </form>
            </div>
        );
    }
}

export default Feedback;
