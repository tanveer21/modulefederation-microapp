import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
import "./index.css";

const App = () => (
  <div className="container">
      <div style={{textAlign: 'center'}}>Booking React App
        {/* <p>Environment variable App name {process.env.BOOKING_APP_NAME}</p>
        <p>Api Url: {process.env.API_URL}</p> */}
      </div>
  </div>
);


//if(process.env.NODE_ENV === 'development') {
  bookingAppInit(document.getElementById('booking-app'))
//}
function bookingAppInit(ele) {
  //createRoot(ele).render(<App />);
  ReactDOM.render(<App />, ele);
}
export { bookingAppInit };





