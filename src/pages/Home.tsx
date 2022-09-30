import Navbar from "../components/Navbar";
import "../styles/recentActivity.css";

import React from "react";
import BarChart from "../components/BarChart";

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
  return (
    <div className="Home">
      <Navbar />
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
                <td>Upload Error</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

//bar

export default Home;
