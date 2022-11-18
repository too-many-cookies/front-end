import React, { useState } from "react";
import ClassBarChart from "../components/ClassBarChart";
import ClassTable from "../components/ClassTable";
import { ClassInfo, GraphData, ClassLogins, Dataset } from "../interfaces";
import axios from "axios";
import "../styles/recentActivity.css";
import { Navigate } from "react-router-dom";
import { title } from "process";
import Cookies from 'js-cookie';

function createBarGraphData(logins: ClassLogins[]) {
  const colors = [
    '#84BD00',
    '#009CBD',
    '#DA291C',
    '#7D55C7',
    '#F6BE00'
  ]

  const graph: GraphData = {
    labels: logins[0].days.map((day) => day.day),
    datasets: logins.map((loginDay, index) => {
      const complexDataset: Dataset = {
        label: loginDay.classSection,
        data: loginDay.days.map((day) => day.failed),
        backgroundColor: [colors[index]]
      }
      return complexDataset
    })
  }

  return [graph];
}

function Classes() {
  const loggedIn = Cookies.get("authenticated");
  const [classes, setClasses] = useState<ClassInfo[]>([] as ClassInfo[]);
  const [graphData, setGraphData] = useState<GraphData[]>([] as GraphData[]);

  React.useEffect(() => {
    if (loggedIn) {
      axios
        .post("/v1/classes", {
          professorID: localStorage.getItem("id"),
        })
        .then((response) => {
          console.log(response.data.message)
          setClasses(response.data.message);

          axios
            .post("/v1/classes/logins", {
              professorID: localStorage.getItem("id"),
            })
            .then((response2) => {
              const failureGraph = createBarGraphData(response2.data.message)
              setGraphData(failureGraph)
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
    let graph;
    if (graphData.length > 0) {
      graph = <ClassBarChart {...graphData[0]} />;
    }

    let classTable;
    if (classes.length > 0) {
      classTable = <ClassTable list={classes} />;
    }

    return (
      <div className="Classes">
        <div className="main">
          <div className="charts">
            <div>{graph}</div>
          </div>
          <h3>Classes</h3>
          {classTable}
        </div>
      </div>
    );
  }
}

export default Classes;
