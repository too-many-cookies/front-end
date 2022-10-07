import Navbar from "../components/Navbar";
import React from "react";
import BarChart from "../components/BarChart";
import ClassTable from "../components/ClassTable";
import { ClassInfo } from "../interfaces";
import "../styles/recentActivity.css";

// Just some dummy data to populate the class table
const classList: Array<ClassInfo> = [
  {
    id: 1,
    name: "ISTE-120",
    days: "M | W | F",
    startTime: new Date(),
    endTime: new Date("December 17, 1995 03:24:00"),
    students: 30,
  },
  {
    id: 2,
    name: "ISTE-121",
    days: "M | W | F",
    startTime: new Date(),
    endTime: new Date("December 17, 1995 03:24:00"),
    students: 28,
  },
  {
    id: 3,
    name: "ISTE-121",
    days: "T | TH",
    startTime: new Date(),
    endTime: new Date("December 17, 1995 03:24:00"),
    students: 28,
  },
  {
    id: 4,
    name: "ISTE-120",
    days: "T | TH",
    startTime: new Date(),
    endTime: new Date("December 17, 1995 03:24:00"),
    students: 28,
  },
  {
    id: 5,
    name: "ISTE-121",
    days: "M | W | F",
    startTime: new Date(),
    endTime: new Date("December 17, 1995 03:24:00"),
    students: 28,
  },
];

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

function Classes() {
  return (
    <div className="Classes">
      <div className="main">
        <div className="charts">
          <div>
            <BarChart {...data1} />
          </div>
          <div>
            <BarChart {...data2} />
          </div>
        </div>
        <h3>Classes</h3>
        <ClassTable list={classList} />
      </div>
    </div>
  );
}

export default Classes;
