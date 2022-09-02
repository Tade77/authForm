import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CustomerPage from "./CustomerPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="CustomerPage" element={<CustomerPage />} />
    </Routes>
  );
};

export default AppRoutes;
