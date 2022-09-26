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
    days: "MWF",
    startTime: new Date(),
    endTime: new Date("December 17, 1995 03:24:00"),
    students: 30,
  },
  {
    id: 2,
    name: "ISTE-121",
    days: "MWF",
    startTime: new Date(),
    endTime: new Date("December 17, 1995 03:24:00"),
    students: 28,
  },
];

function Classes() {
  return (
    <div className="Classes">
      <Navbar />
      <div className="main">
        <div className="charts">
          <div>
            <BarChart />
          </div>
          <div>
            <BarChart />
          </div>
          <div>
            <BarChart />
          </div>
        </div>
        <ClassTable list={classList} />
      </div>
    </div>
  );
}

export default Classes;
