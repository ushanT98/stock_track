import React from "react";
import { Routes, Route } from "react-router-dom"
import Stocktrackmain from "./Components/Stocktrackmain";
import Stocks from "./Components/Stocks";
import Shipments from "./Components/Shipments";
import Suppliers from "./Components/Suppliers";



function App() {
  return (
   <div>
     <Routes>
       <Route path="/" element={<Stocktrackmain/>}/>
       <Route path="/stocks" element={<Stocks/>}/>
       <Route path="/shipments" element={<Shipments/>}/>
       <Route path="/suppliers" element={<Suppliers/>}/>
     </Routes>
   </div>
  );
}

export default App;
