
import Navbar from "../components/Navbar";
import "../styles/recentActivity.css";

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [0,1,2,3,2345,4,634,56,4657,4,657,468,453,45,6,56,7],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [2356.345,6,456,75,,634,56,34,56,465,745,67,56,,545,7,7,86,7,876,8],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

function Home() {
    
    return (
        <div className="Home">
            <Navbar />
            <div className="barChart">
                <canvas id="myChart"></canvas>
            </div>
            <div className="recentActivity">
                <h3>Recent Activity</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Date and Time</th>
                            <th scope="col">User</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3/28/2022, 04:41pm</td>
                            <td>jy8445</td>
                            <td>Login Error</td>
                        </tr>
                        <tr>
                            <td>3/28/2022, 03:38pm</td>
                            <td>jy8445</td>
                            <td>Upload Error</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
    );
}

//bar


export default Home;
