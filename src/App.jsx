import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import HotelDetailsPage from "./pages/HotelDetailsPage/HotelDetailsPage";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />}/>
            <Route path="/hotel/:hotelId" element={<HotelDetailsPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
