
import Navbar from "../components/Navbar";
import "../styles/recentActivity.css";

import React from 'react';

function Home() {
    
    return (
        <div className="Home">
            <Navbar />
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
