import Navbar from "../components/Navbar";
import React from "react";
import BarChart from "../components/BarChart";
import { Student } from "../interfaces";
import StudentTable from "../components/StudentTable";
import { BrowserRouter as Router, useParams } from "react-router-dom";

function Class() {
  const { id } = useParams();

  // Just some dummy students to insert into the student table
  const dummyData: Array<Student> = [
    {
      id: 1,
      name: "Jordan Rabideau",
      uName: "jmr8990",
      instantiated: true,
      lastActivity: new Date(),
    },
    {
      id: 2,
      name: "Shannon Smith",
      uName: "scm6789",
      instantiated: false,
      lastActivity: new Date(),
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="main">
        {/* This is going to be replaced with the actual name of the class */}
        <h1>{id}</h1>
        <div className="charts"></div>
        <StudentTable list={dummyData} />
      </div>
    </div>
  );
}

export default Class;
