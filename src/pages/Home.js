
import Navbar from "../components/Navbar";
import React from "react";
import "../styles/recentActivity.css";

function Home() {
    // var ctx = document.getElementById("myChart").getContext('2d');
    // var myChart = new myChart(ctx, {
    //     type: 'bar',
    //     data: {
    //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //         datasets: [{
    //             label: '# of Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255,99,132,1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero: true
    //                 }
    //             }]
    //         }
    //     }
    // });
    return (
        <div className="Home">
            <Navbar />
            {/* <div class="barChart">
                <canvas id="myChart"></canvas>
            </div> */}
            <div class="recentActivity">
                <h3>Recent Activity</h3>
                <table class="table">
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
