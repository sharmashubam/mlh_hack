import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "../components/signup/SignUp";
import Login from "../components/login/Login";
import HomePage from "../components/homePage/HomePage";
import { MyContext } from "../contexts/MyContextProvider";
import SellForm from "../components/form/SellForm";
const RouterComponent = () => {
  const { loggedIn } = useContext(MyContext);
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
        <Route path="/sell-item" element={<SellForm />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
