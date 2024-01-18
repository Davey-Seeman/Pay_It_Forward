import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Create from "./components/create";
import Display from "./components/display";
//import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;