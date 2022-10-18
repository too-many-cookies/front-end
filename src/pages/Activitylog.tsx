import Navbar from "../components/Navbar";
import React from "react";
import {Navigate} from "react-router-dom";
import { useState } from "react";
import BarChart from "../components/BarChart";
import axios from "axios";
import Donut from "../components/DonutChart";
import {
    Student,
    ClassInfo,
    GraphData,
    DayTotal,
    RecentLog,
    ClassPageState,
    LoginTotals,
    Activity,
    ActivityPageState,
} from "../interfaces";
import RecentLogTable from "../components/RecentLogTable";
import ActivityLogTable from "../components/ActivityLogTable";
import { BrowserRouter as Router, useParams } from "react-router-dom";


axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

function createDonutGraphData(totals: LoginTotals) {
    const graph = {
        labels: Object.keys(totals),
        datasets: [
            {
                label: "Total Logins",
                data: [totals.successful, totals.failed],
                backgroundColor: ["#84BD00", "#DA291C"],
            },
        ],
    };
    return graph;
}

function ActivityLog() {
    // const { id } = localStorage.getItem('id');
    const loggedIn = localStorage.getItem("authenticated");
    const [recentActivity, setRecentActivity] = useState<Activity[]>(
        [] as Activity[]
    );
    const [classes, setClasses] = useState<ClassInfo[]>([] as ClassInfo[]);

    const [graphData, setGraphData] = useState<ActivityPageState>( {} as ActivityPageState);


    React.useEffect(() => {
        if(loggedIn) {
            axios
                .post("/v1/logins", {
                    professorID: localStorage.getItem("id"),
                })
                .then((response) => {
                if (response.data.message) {
                    setRecentActivity(response.data.message.recent);
                }
        })
        .catch((err) => {
            console.log(err)
        });
    }
        
        const fetchData = async () => {
            const logins = await axios.post(`/v1/logins/`, {
                professorID: localStorage.getItem("id")
            });

            

            // console.log(classList);
            setGraphData({
                // classInfo: classInfo.data.message,
                graphData: {
                    total: createDonutGraphData(logins.data.message.totals),
                }
                // students: classList.data.message,
            });
        };
        fetchData();
    }, []);

    
    if (!loggedIn) {
        localStorage.setItem("page", "/activitylog");
        return <Navigate to={"/login"}/>
    } else {
        let donutGraph1;
        if (graphData.graphData) {
            donutGraph1 = <Donut {...graphData.graphData.total} />;
        }

        let recentTable;
        if (recentActivity.length > 0) {
            const logsObj = {
                logs: recentActivity,
            };
            recentTable = <ActivityLogTable {...logsObj} />;
        }
        return (
            <div className="ActivityLog">
                <div className="main">
                    <h3>Activity Log</h3>
                    <div className="charts">
                        <div>{donutGraph1}</div>
                
                    </div>
                    <div className="activityLogTable">
                        <div>{recentTable}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivityLog;
