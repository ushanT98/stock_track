import React from "react";
import { Link } from "react-router-dom";
import Stocktable from "./Stocktable";

function Stocks(){

    return(
        <div style={{backgroundImage: `url("https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
         backgroundRepeat:"no-repeat",
         backgroundAttachment:"fixed",
         backgroundSize:"100% 100%",
         height:"10000px",
      
         
          }}>
            
            <h2> Stock Data Page </h2>
            

            <Stocktable />

            <Link to="/stocktrackmain">Go back to Stock Tracking Main Page</Link>
        </div>
    )
}

export default Stocks;