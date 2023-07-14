import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Card } from "../components/Card";

export const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<Card />} />
    </Routes>
  );
};
