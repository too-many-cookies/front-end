import React from "react";
import "../styles/classTable.css";
import { LogTableProps, RecentLog } from "../interfaces";

function formatDate(timestamp: Date) {
  const date = new Date(timestamp);
  const day = date.toLocaleDateString();
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${day} ${time}`;
}

function RecentLogTable(logs: LogTableProps) {
  return (
    <div className="classTable">
      <table className="table">
        <thead>
          <tr>
            <th>Date and Time</th>
            <th>User</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {logs.logs.map((log: RecentLog) => (
            <tr>
              <td>{formatDate(log.timestamp)}</td>
              <td>{log.username}</td>
              <td>
                {log.successful === "Y" ? "Successful Login" : "Failed Login"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentLogTable;
