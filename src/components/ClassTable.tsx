import React from "react";
import "../styles/classTable.css";
import { ClassInfo, Classes } from "../interfaces";
import { useNavigate } from "react-router-dom";

function ClassTable({ list }: Classes) {
  const navigate = useNavigate();
  const routeChange = (id: Number) => {
    const path = `/classes/${id}`;
    navigate(path);
  };
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
            <tr
              onClick={() => routeChange(c.id)}
              className="class-row"
              key={key}
            >
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
