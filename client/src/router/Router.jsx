import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "../components/signup/SignUp";
import Login from "../components/login/Login";
import HomePage from "../components/HomePage/HomePage";

const RouterComponent = () => {
  const loggedIn = false;
  return (
    <Router>
      <Routes>
        {loggedIn === false && (
          <>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;