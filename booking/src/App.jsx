import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
import "./index.css";

const App = () => (
  <div className="container">
    <div style={{textAlign: 'center'}}>Booking React App</div>
    {/* <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>  */}
  </div>
);


// if(process.env.NODE_ENV === 'development') {
//   bookingAppInit(document.getElementById('booking-app'))
// }
function bookingAppInit(ele) {
  //createRoot(ele).render(<App />);
  ReactDOM.render(<App />, ele);
}
export { bookingAppInit };





