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
  console.log(list);
  return (
    <div className="classTable">
      <table className="table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Section</th>
            <th># of Students</th>
            <th>Students Instantiated</th>
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
              {/* These rows need to be calculated on the API still */}
              <td>{c.total_student_count}</td>
              <td>{c.students_instantiated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassTable;
