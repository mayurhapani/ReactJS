import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header.jsx";
import Add from "./pages/Add.jsx";
import Home from "./pages/Home.jsx";
import Edit from "./pages/Edit.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:index" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
