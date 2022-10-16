import React from "react";
import "../styles/classTable.css";
import { LogTableProps, RecentLog } from "../interfaces";

function formatDate(timestamp: Date) {
  const date = new Date(timestamp);
  const day = date.toLocaleDateString();
  const time = date.toLocaleTimeString();

  return `${day}, ${time}`;
}

function RecentLogTable(logs: LogTableProps) {
  console.log(logs);
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
              <td>{log.successful ? "Successful Login" : "Failed Login"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentLogTable;
