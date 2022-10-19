import React from "react";
import { Route, Routes } from "react-router-dom";
import OrderingApp from "./OrderingUI/OrderingApp";
import LogIn from "./LogIn-components/LogIn";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/OrderingApp" element={<OrderingApp />} />
    </Routes>
  );
}
