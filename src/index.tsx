import React from "react";
// Bootstrap CSS
import "./custom.scss";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createRoot } from "react-dom/client";

import Classes from "./pages/Classes";
import Class from "./pages/Class";
import ActivityLog from "./pages/Activitylog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Feedback from "./pages/Feedback";

const rootElement = document.getElementById("root") as HTMLBodyElement;
createRoot(rootElement).render(
  <React.StrictMode>
    
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:id" element={<Class />} />
        <Route path="/activitylog" element={<ActivityLog />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
