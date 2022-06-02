import React from "react";
import {Link} from "react-router-dom";
import Shipmentstable from "./Shipmentstable";


function Shipments(){

    return(
        <div style={{backgroundImage: `url("https://st.depositphotos.com/1000423/1637/i/450/depositphotos_16371183-stock-photo-global-business-network.jpg")`,
        backgroundRepeat:"no-repeat",
        backgroundAttachment:"fixed",
        backgroundSize:"100% 100%",
        height:"1000px",
     
        
         }}>

            <Shipmentstable/>

        {/* <h1>This is Shipment Data Page</h1> */}
        <Link to="/">Go back to Stock Tracking Main Page</Link>
        </div>
    )
}

export default Shipments;