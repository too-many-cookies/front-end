import Navbar from "../components/Navbar";
import "../styles/recentActivity.css";

import React from "react";
import BarChart from "../components/BarChart";
import {Navigate} from "react-router-dom";

// More dummy data
const data1 = {
  labels: ["9/26/22", "9/27/22", "9/28/22", "9/29/22", "9/30/22"],
  datasets: [
    {
      label: "Successful Logins",
      data: [1, 2, 3, 50, 13],
      backgroundColor: ["#84BD00"],
      borderColor: ["#84BD00"],
    },
  ],
};
const data2 = {
  labels: ["9/26/22", "9/27/22", "9/28/22", "9/29/22", "9/30/22"],
  datasets: [
    {
      label: "Failed Logins",
      data: [0, 0, 12, 3, 4],
      backgroundColor: ["#DA291C"],
      borderColor: ["#DA291C"],
    },
  ],
};

function Home() {
  const loggedIn = localStorage.getItem("authenticated");
  if (!loggedIn) {
    localStorage.setItem("page", "/home");
    return <Navigate to={"/login"}/>
  } else {
    return (
        <div className="Home">
          <div className="main">
            <div className="charts">
              <div>
                <BarChart {...data1} />
              </div>
              <div>
                <BarChart {...data2} />
              </div>
            </div>

            <div className="recentActivity">
              <h3>Recent Activity</h3>
              <table className="table">
                <thead>
                <tr>
                  <th scope="col">Date and Time</th>
                  <th scope="col">User</th>
                  <th scope="col">Type</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>3/28/2022, 04:41pm</td>
                  <td>jy8445</td>
                  <td>Login Error</td>
                </tr>
                <tr>
                  <td>3/28/2022, 03:38pm</td>
                  <td>jy8445</td>
                  <td>Login Error</td>
                </tr>
                <tr>
                  <td>3/28/2022, 03:38pm</td>
                  <td>jy8445</td>
                  <td>Login</td>
                </tr>
                <tr>
                  <td>3/28/2022, 03:30pm</td>
                  <td>jy8445</td>
                  <td>Login</td>
                </tr>
                <tr>
                  <td>3/28/2022, 02:25pm</td>
                  <td>jy8445</td>
                  <td>Login Error</td>
                </tr>
                <tr>
                  <td>3/28/2022, 02:12pm</td>
                  <td>jy8445</td>
                  <td>Login</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
  }
}

//bar

export default Home;
