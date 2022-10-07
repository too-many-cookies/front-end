import Navbar from "../components/Navbar";
import React from "react";
import BarChart from "../components/BarChart";
import Donut from "../components/DonutChart";
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

  const data3 = {
    labels: ["Successful Logins", "Falied Logins"],
    datasets: [
      {
        label: "Total login activity",
        data: [69, 19],
        backgroundColor: ["#84BD00", "#DA291C"],
      },
    ],
  };

  return (
    <div>
      <div className="main">
        {/* This is going to be replaced with the actual name of the class */}
        <h1>ISTE {id}</h1>
        <div className="charts">
          <div>
            <BarChart {...data1} />
          </div>
          <div>
            <BarChart {...data2} />
          </div>
          <div>
            <Donut {...data3} />
          </div>
        </div>
        <StudentTable list={dummyData} />
      </div>
    </div>
  );
}

export default Class;
