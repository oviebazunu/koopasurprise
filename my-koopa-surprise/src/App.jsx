import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import Firstdate from "./assets/data/Firstdate";
import OutLeicester1 from "./assets/data/OutLeicester1";
import OutManchester1 from "./assets/data/OutManchester1";
import Halloween from "./assets/data/Halloween";
import Netherlands from "./assets/data/Netherlands";
import Morocco from "./assets/data/Morocco";
import Bradgate from "./assets/data/Bradgate";

function App() {
  return (
    <div>
      <Sidebar />
      <Homepage />
      <Firstdate />
      <OutLeicester1 />
      <OutManchester1 />
      <Halloween />
      <Netherlands />
      <Morocco />
      <Bradgate />
    </div>
  );
}

export default App;
