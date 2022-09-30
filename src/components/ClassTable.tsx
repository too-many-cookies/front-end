import React from "react";
import "../styles/classTable.css";
import { ClassInfo, Classes } from "../interfaces";

function ClassTable({ list }: Classes) {
  return (
    <div className="classTable">
      <table className="table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Days</th>
            <th>Time</th>
            <th># of Students</th>
          </tr>
        </thead>
        <tbody>
          {list.map((c, key) => (
            <tr key={key}>
              <td>{c.name}</td>
              <td>{c.days}</td>
              <td>
                {c.startTime.toLocaleTimeString()} -{" "}
                {c.endTime.toLocaleTimeString()}
              </td>
              <td>{c.students}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassTable;
