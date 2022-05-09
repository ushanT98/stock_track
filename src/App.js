import React from "react";
import { Routes, Route } from "react-router-dom"
import Stocktrackmain from "./Components/Stocktrackmain";
import Shipments from "./Components/Shipments";
import Suppliers from "./Components/Suppliers";
import Stocks from "./Components/Stocks";


function App() {
  return (
   <div>
     <Routes>
       <Route path="stocktrackmain" element={<Stocktrackmain/>}/>
       <Route path="stocks" element={<Stocks/>}/>
       <Route path="shipments" element={<Shipments/>}/>
       <Route path="suppliers" element={<Suppliers/>}/>
     </Routes>
   </div>
  );
}

export default App;
