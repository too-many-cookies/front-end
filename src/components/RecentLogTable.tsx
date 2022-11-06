import React from "react";
import "../styles/classTable.css";
import { LogTableProps, RecentLog } from "../interfaces";
import DataTable from 'react-data-table-component';

type TableLog = {
  timestamp: string
  username: string
  type: string
}

function formatLogs(logs: LogTableProps) {
  return logs.logs.map(l => {
    return {
      timestamp: formatDate(l.timestamp),
      username: l.username,
      type: l.successful === "Y" ? "Successful Login" : "Failed Login"
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

function RecentLogTable(logs: LogTableProps) {
  const columns = [
    {
      name: "Date & Time",
      selector: (row: TableLog) => row.timestamp,
      sortFunction: (a: TableLog, b: TableLog) => {
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
    },
    {
      name: "User",
      selector: (row: TableLog) => row.username,
      sortable: true
    },
    {
      name: "Type",
      selector: (row: TableLog) => row.type,
      sortable: true
    }
  ]

  const data = formatLogs(logs)
  return (
    <div className="classTable">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default RecentLogTable;
