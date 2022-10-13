import Navbar from "../components/Navbar";
import "../styles/recentActivity.css";

import React from "react";
import { useState } from "react";
import BarChart from "../components/BarChart";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { DayTotal, GraphData, RecentLog } from "../interfaces";
import RecentLogTable from "../components/RecentLogTable";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

function createBarGraphData(days: DayTotal[], type: string) {
  const graph = {
    labels: days.map((day: DayTotal) => day.day),
    datasets: [
      {
        label: type === "success" ? "Succesful Logins" : "Failed Logins",
        data: days.map((day: DayTotal) =>
          type === "success" ? day.succesful : day.failed
        ),
        backgroundColor: type === "success" ? ["#84BD00"] : ["#DA291C"],
        borderColor: type === "success" ? ["#84BD00"] : ["#DA291C"],
      },
    ],
  };

  return graph;
}

function Home() {
  const [recentActivity, setRecentActivity] = useState<RecentLog[]>(
    [] as RecentLog[]
  );

  const [graphData, setGraphData] = useState<GraphData[]>([] as GraphData[]);

  // When the page renders, hit the API
  React.useEffect(() => {
    axios
      .post("/v1/logins", {
        professorID: 3,
      })
      .then((response) => {
        setRecentActivity(response.data.message.recent);
        const successGraph = createBarGraphData(
          response.data.message.days,
          "success"
        );
        const failureGraph = createBarGraphData(
          response.data.message.days,
          "failed"
        );
        setGraphData([successGraph, failureGraph]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let graph1, graph2;
  if (graphData.length > 0) {
    graph1 = <BarChart {...graphData[0]} />;
    graph2 = <BarChart {...graphData[1]} />;
  }

  let recentTable;
  if (recentActivity.length > 0) {
    const logsObj = {
      logs: recentActivity,
    };
    recentTable = <RecentLogTable {...logsObj} />;
  }

  const loggedIn = localStorage.getItem("authenticated");
  if (!loggedIn) {
    localStorage.setItem("page", "/home");
    return <Navigate to={"/login"} />;
  } else {
    return (
      <div className="Home">
        <div className="main">
          <div className="charts">
            <div>{graph1}</div>
            <div>{graph2}</div>
          </div>
          <div className="recentActivity">
            <h3>Recent Activity</h3>
            {recentTable}
            {/* <table className="table">
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
            </table> */}
          </div>
        </div>
      </div>
    );
  }
}

//bar

export default Home;
