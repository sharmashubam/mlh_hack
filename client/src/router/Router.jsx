import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "../components/signup/SignUp";
import Login from "../components/login/Login";
import HomePage from "../components/homePage/HomePage";
import Up_loadingform from "../components/form/UP_loadingform";

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
        <Route path="/sell-item" element={<Up_loadingform />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
