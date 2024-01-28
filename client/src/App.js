import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Create from "./components/create";
import Display from "./components/display";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;