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
            <th>Section</th>
            <th># of Students</th>
            <th>Logins</th>
          </tr>
        </thead>
        <tbody>
          {list.map((c, key) => (
            <tr
              onClick={() => routeChange(c.class_id)}
              className="class-row"
              key={key}
            >
              <td>{c.name}</td>
              <td>{`${c.class_code}.${c.class_section_number}`}</td>
              <td>{c.total_student_count}</td>
              <td>{c.student_signin_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassTable;
