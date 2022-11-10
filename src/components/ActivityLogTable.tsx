import React from "react";
import "../styles/classTable.css";
import {
  ActivityLogTableProps,
} from "../interfaces";
import DataTable from 'react-data-table-component';


type TableActivity = {
  timestamp: string
  username: string
  type: string
  name: string
}

function formatActivity(logs: ActivityLogTableProps) {
  return logs.logs.map(l => {
    return {
      timestamp: formatDate(l.timestamp),
      username: l.username,
      type: l.successful === "Y" ? "Successful Login" : "Failed Login",
      name: l.name
    }
  })
}

function formatDate(timestamp: Date) {
  const date = new Date(timestamp);
  const day = date.toLocaleDateString();
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });

  return `${day} ${time}`;
}

function ActivityLogTable(logs: ActivityLogTableProps) {
  const columns = [
    {
      name: "Student",
      selector: (row: TableActivity) => row.name,
      sortable: true
    },
    {
      name: "ID",
      selector: (row: TableActivity) => row.username,
      sortable: true
    },
    {
      name: "Action",
      selector: (row: TableActivity) => row.type,
      sortable: true
    },
    {
      name: "Date & Time",
      selector: (row: TableActivity) => row.timestamp,
      sortFunction: (a: TableActivity, b: TableActivity) => {
        const d1 = new Date(a.timestamp)
        const d2 = new Date(b.timestamp)

        if (d1 < d2) {
          return -1
        }
    
        if (d1 > d2) {
          return 1
        }
    
        return 0
      },
      sortable: true,
    }
  ]
  const data = formatActivity(logs)
  return (

    <div className="classTable">
      <DataTable columns={columns} data={data} pagination />
    </div>
  );
}

export default ActivityLogTable;
