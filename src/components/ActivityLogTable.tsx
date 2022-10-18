import React from "react";
import "../styles/classTable.css";
import { LogTableProps, RecentLog, Activity, ActivityLogTableProps } from "../interfaces";

function formatDate(timestamp: Date) {
    const date = new Date(timestamp);
    const day = date.toLocaleDateString();
    const time = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    return `${day} ${time}`;
}

function ActivityLogTable(logs: ActivityLogTableProps) {
    return (
        <div className="classTable">
            <table className="table">
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>ID</th>
                        <th>Action</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.logs.map((log: Activity) => (
                        <tr>
                            <td></td>
                            <td>{log.username}</td>
                            <td>
                                {log.successful === "Y" ? "Successful Login" : "Failed Login"}
                            </td>
                            <td>{formatDate(log.timestamp)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ActivityLogTable;
