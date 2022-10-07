import React from "react";
import ReactDOM from "react-dom";
import Booking from "./component/Booking"
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <div>Name: Container React Application</div>
       <Booking />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("container-app"));
