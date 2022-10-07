import React from 'react';
import { bookingAppInit  } from "bookingApp/booking";

const App = () => {
    const ref = React.useRef(null)
    React.useEffect(() => {
        bookingAppInit(ref.current)
    }, [])


    return (
        <div>
            <h6>Container Application</h6>
           <div style={{border:'solid 2px', margin:'5%'}} ref={ref}></div>
        </div>
    )
}

export default App;