import React from "react";
import {Link} from "react-router-dom";
import Supplierstable from "./Supplierstable";

function Suppliers(){
    return(
        <div style={{backgroundImage: `url("https://media.istockphoto.com/photos/businessmen-point-to-arrows-and-business-growth-graphs-on-a-modern-picture-id1250152599?k=20&m=1250152599&s=170667a&w=0&h=hIGk6QO116m26D3WxKACizDwD-LT9HespJNm38y2shM=")`,
        backgroundRepeat:"no-repeat",
        backgroundAttachment:"fixed",
        backgroundSize:"100% 100%",
        height:"1000px",
     
        
         }}>
            {/* <h1>This is Supplier Data Page</h1> */}
            <br/>

            <Supplierstable/>
        
        <Link to="/"><button style={{
            padding: "1px 10px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "rgb(5, 39, 18)",
            color: "white",
            height: "70px",
            width: "400px",
        }}>Go back to Stock Tracking Main Page </button></Link>
        </div>
    )
}

export default Suppliers;