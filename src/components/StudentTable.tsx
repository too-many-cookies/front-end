import React from "react";
import "../styles/classTable.css";
import { Students, Student } from "../interfaces";
import DataTable from 'react-data-table-component';

type TableStudent = {
  name: string
  username: string
  instantiated: string
  last_sign_in: string
}

function formatDate(date: Date) {
  const datetime = new Date(date);
  const day = datetime.toLocaleDateString();
  const time = datetime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });

  return `${day} ${time}`;
}

function formatStudent(students: Array<Student>) {
  return students.map(s => {
    return {
      name: s.name,
      username: s.username,
      instantiated: s.instantiated ? "YES" : "NO",
      last_sign_in: formatDate(s.last_sign_in)
    }
  })
}

function StudentTable({ list }: Students) {
  const columns = [
    {
      name: "Student",
      selector: (row: TableStudent) => row.name,
      sortable: true
    },
    {
      name: "Username",
      selector: (row: TableStudent) => row.username,
      sortable: true
    },
    {
      name: "Instantiated",
      selector: (row: TableStudent) => row.instantiated,
      sortable: true
    },
    {
      name: "Last Activity",
      selector: (row: TableStudent) => row.last_sign_in,
      sortable: true,
      sortFunction: (a: TableStudent, b: TableStudent) => {
        const d1 = new Date(a.last_sign_in)
        const d2 = new Date(b.last_sign_in)

        if (d1 < d2) {
          return -1
        }
    
        if (d1 > d2) {
          return 1
        }
    
        return 0
      }
    }
  ]
  const data = formatStudent(list)
  return (
    <div className="classTable">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default StudentTable;
