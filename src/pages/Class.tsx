import React, { useState } from "react";
import BarChart from "../components/BarChart";
import Donut from "../components/DonutChart";
import {
  Student,
  ClassInfo,
  GraphData,
  DayTotal,
  ClassPageState,
} from "../interfaces";
import axios from "axios";
import StudentTable from "../components/StudentTable";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, useParams } from "react-router-dom";

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

function Class() {
  const { id } = useParams();
  const loggedIn = localStorage.getItem("authenticated");
  const [classData, setClassData] = useState<ClassPageState>(
    {} as ClassPageState
  );

  React.useEffect(() => {
    const fetchData = async () => {
      const classInfo = await axios.post(`/v1/classes/${id}`, {
        professorID: localStorage.getItem("id"),
      });
      const classList = await axios.post(`/v1/students/${id}`);
      const logins = await axios.post(`/v1/logins/${id}`);

      setClassData({
        classInfo: classInfo.data.message,
        recentLogs: logins.data.message,
        students: classList.data.message,
      });
    };
    fetchData();
  });

  if (!loggedIn) {
    localStorage.setItem("page", "/classes");
    return <Navigate to={"/login"} />;
  } else {
    let className;
    let classList;
    if (classData.classInfo && classData.students) {
      className = (
        <h1>
          {classData.classInfo.name} - {classData.classInfo.class_code}.
          {classData.classInfo.class_section_number}
        </h1>
      );

      console.log(classData.students);
      const logsObj = {
        list: classData.students,
      };
      classList = <StudentTable {...logsObj} />;
    }
    return (
      <div>
        <div className="main">
          {className}
          <div className="charts"></div>
          {classList}
        </div>
      </div>
    );
  }
}

export default Class;
