import React from "react";
import { bookingAppInit  } from "bookingApp/booking";

const Booking = () => {
  const ref = React.useRef(null)
  React.useEffect(() => {
    bookingAppInit(ref.current)
  }, [])

  return ( <div style={{border:'solid 2px', margin:'5%'}} ref={ref}></div> )
}
export default Booking
