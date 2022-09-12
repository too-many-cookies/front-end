import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <div className="App">
       {/* <header className="App-header"> */}
         {/* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <h1>Hey</h1>
    //     <Button variant="orange">Test</Button> */}
        
       {/* </header> */}
       <Navbar />
     </div>
   );
}

export default App;
