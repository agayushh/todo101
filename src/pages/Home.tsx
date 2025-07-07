import React from "react";
import Header from "../components/Header";
import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#0f172a] w-screen h-screen flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
