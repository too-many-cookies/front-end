import React from "react";
import "../styles/classTable.css";
import { Students } from "../interfaces";

function StudentTable({ list }: Students) {
  return (
    <div className="classTable">
      <table className="table">
        <thead>
          {/* Create a heading column for every key in the prop obj */}
          <tr>
            <th>Student</th>
            <th>Username</th>
            <th>Instantiated</th>
            <th>Last Activity</th>
          </tr>
        </thead>
        <tbody>
          {list.map((c) => (
            <tr>
              <td>{c.name}</td>
              <td>{c.uName}</td>
              <td>{c.instantiated ? "YES" : "NO"}</td>
              <td>{c.lastActivity.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
