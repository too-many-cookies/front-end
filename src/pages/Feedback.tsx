import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import "../styles/feedback.css";
import Cookies from 'js-cookie';
import Navbar from "../components/Navbar";
import axios from "axios";
import {FeedbackInfo} from "../interfaces";

function Feedback() {
    const loggedIn = Cookies.get("authenticated");
    const [feedback, setfeedback] = useState("");
    const [feedbackData, setFeedbackData] = useState<FeedbackInfo[]>([] as FeedbackInfo[]);
    const isAdmin = Cookies.get("admin");
    if (!loggedIn) {
        localStorage.setItem("page", "/feedback");
        return <Navigate to={"/login"}/>
    }
    else {
        if(isAdmin === 'false') {
            const handleSubmit = (e: { preventDefault: () => void; }) => {
                e.preventDefault();
                const response = axios.post(
                    "/v1/feedback",
                    {
                        "professorID" : localStorage.getItem("id"),
                        "feedback" : feedback
                    }
                ).then(() => {
                    alert("Thank you for your feedback!");
                    // @ts-ignore
                    window.location = "/home";
                });
            };
            return (
                <div>
                    <Navbar />
                    <form className="feedbackForm" onSubmit={handleSubmit}>
                            <label className="header">Feedback</label>
                        <br/>
                        <textarea name="Feedback" value={feedback}
                                  onChange={(e) => setfeedback(e.target.value)}
                                  placeholder="Leave your feedback for the site here..."
                        />
                            <br/>

                        <input type="submit" value="Send Feedback"/>
                    </form>
                </div>
            );
        }
        else{
            const feedback = axios.get(
                    "/v1/feedback"
                ).then((response) => {
                    const info = response.data.message;
                    setFeedbackData(info);
                }).catch((err) => console.log(err));
            return(
              <div id={"feedbackValues"}>
                <Navbar />
                  <h1>Feedback Received</h1>
                  {feedbackData.map((info) => (
                          <div>{info.name} : {info.feedback}</div>
                      )
                  )}
              </div>
            );
        }
    }
}

export default Feedback;
