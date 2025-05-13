import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import Firstdate from "./assets/data/firstdate";
import OutLeicester1 from "./assets/data/OutLeicester1";
import OutManchester1 from "./assets/data/OutManchester1";
import Halloween from "./assets/data/Halloween";
import OutManchester2 from "./assets/data/OutManchester2";

function App() {
  return (
    <div>
      <Sidebar />
      <Homepage />
      <Firstdate />
      <OutLeicester1 />
      <OutManchester2 />
      <OutManchester1 />
      <Halloween />
    </div>
  );
}

export default App;
