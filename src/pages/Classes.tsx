import React, { useState } from "react";
import BarChart from "../components/BarChart";
import ClassTable from "../components/ClassTable";
import { ClassInfo, GraphData, DayTotal } from "../interfaces";
import axios from "axios";
import "../styles/recentActivity.css";
import { Navigate } from "react-router-dom";

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

function Classes() {
  const loggedIn = localStorage.getItem("authenticated");
  const [classes, setClasses] = useState<ClassInfo[]>([] as ClassInfo[]);
  const [graphData, setGraphData] = useState<GraphData[]>([] as GraphData[]);

  React.useEffect(() => {
    if (loggedIn) {
      axios
        .post("/v1/classes", {
          professorID: localStorage.getItem("id"),
        })
        .then((response) => {
          setClasses(response.data.message);

          axios
            .post("/v1/logins", {
              professorID: localStorage.getItem("id"),
            })
            .then((response2) => {
              const successGraph = createBarGraphData(
                response2.data.message.days,
                "success"
              );
              const failureGraph = createBarGraphData(
                response2.data.message.days,
                "failed"
              );
              setGraphData([successGraph, failureGraph]);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  if (!loggedIn) {
    localStorage.setItem("page", "/classes");
    return <Navigate to={"/login"} />;
  } else {
    let graph1, graph2;
    if (graphData.length > 0) {
      graph1 = <BarChart {...graphData[0]} />;
      graph2 = <BarChart {...graphData[1]} />;
    }

    let classTable;
    if (classes.length > 0) {
      classTable = <ClassTable list={classes} />;
    }

    return (
      <div className="Classes">
        <div className="main">
          <div className="charts">
            <div>{graph1}</div>
            <div>{graph2}</div>
          </div>
          <h3>Classes</h3>
          {classTable}
        </div>
      </div>
    );
  }
}

export default Classes;
