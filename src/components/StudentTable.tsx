import React from "react";
import "../styles/classTable.css";
import { Students } from "../interfaces";

function formatDate(date: Date) {
  const datetime = new Date(date);
  const day = datetime.toLocaleDateString();
  const time = datetime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${day} ${time}`;
}

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
              <td>{c.username}</td>
              <td>{c.instantiated ? "YES" : "NO"}</td>
              <td>{c.last_sign_in ? formatDate(c.last_sign_in) : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
