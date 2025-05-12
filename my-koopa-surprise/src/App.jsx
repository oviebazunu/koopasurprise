import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import Firstdate from "./assets/data/firstdate";
import OutLeicester1 from "./assets/data/OutLeicester1";

function App() {
  return (
    <div>
      <Sidebar />
      <Homepage />
      <Firstdate />
      <OutLeicester1 />
    </div>
  );
}

export default App;
