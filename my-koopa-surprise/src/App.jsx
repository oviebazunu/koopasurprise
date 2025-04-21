import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import Firstdate from "./assets/data/firstdate";

function App() {
  return (
    <div>
      <Sidebar />
      <Homepage />
      <Firstdate />
    </div>
  );
}

export default App;
