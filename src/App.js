import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
          Download Source Code from my 
          <a href ="https://github.com/bsharanya-25"> GitHub </a>
        | Developed by Sharanya
      </div>
    </React.Fragment>
  );
}

export default App;
