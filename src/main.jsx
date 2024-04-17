import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Map from "./Map.jsx";
import Header from "./Header.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
