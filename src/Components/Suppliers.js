import React from "react";
import {Link} from "react-router-dom"

function Suppliers(){
    return(
        <div>
            <h1>This is Supplier Data Page</h1>
        
        <Link to="/stocktrackmain">Go back to Stock Tracking Main Page</Link>
        </div>
    )
}

export default Suppliers;