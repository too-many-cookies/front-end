import React from "react";
import "../styles/classTable.css";
import { ClassInfo, Classes } from "../interfaces";
import { useNavigate } from "react-router-dom";
import DataTable from 'react-data-table-component';

type TableClass = {
  name: string
  class_id: number
  class_section: string
  total_student_count: number
  students_instantiated: number
}

function formatClasses(classes: Array<ClassInfo>) {
  return classes.map(c => {
    return {
      name: c.name,
      class_id: c.class_id,
      class_section: `${c.class_code}.${c.class_section_number}`,
      total_student_count: c.total_student_count,
      students_instantiated: c.students_instantiated
    }
  })
}

function ClassTable({ list }: Classes) {
  const navigate = useNavigate();
  const routeChange = (id: Number) => {
    const path = `/classes/${id}`;
    navigate(path);
  };

  const columns = [
    {
      name: "Class",
      selector: (row: TableClass) => row.name,
      sortable: true
    },
    {
      name: "Section",
      selector: (row: TableClass) => row.class_section,
      sortable: true
    },
    {
      name: "# of Students",
      selector: (row: TableClass) => row.total_student_count,
      sortable: true
    },
    {
      name: "Students Instantiated",
      selector: (row: TableClass) => row.students_instantiated,
      sortable: true
    }
  ]
  const data = formatClasses(list)
  const styles = {
    rows: {
      highlightOnHoverStyle: {
        backgroundColor: '#d0d3d4',
        cursor: 'pointer'
      }
    }
  }
  return (
    <div className="classTable">
      <DataTable columns={columns} customStyles={styles} data={data} onRowClicked={(row: TableClass, event) => routeChange(row.class_id)} />
    </div>
  );
}

export default ClassTable;
