import React from "react";
import {Link} from "react-router-dom"

function Shipments(){

    return(
        <div>
        <h1>This is Shipment Data Page</h1>
        <Link to="/stocktrackmain">Go back to Stock Tracking Main Page</Link>
        </div>
    )
}

export default Shipments;