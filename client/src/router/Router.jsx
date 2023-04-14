import React, { useContext,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "../components/signup/SignUp";
import Login from "../components/login/Login";
import HomePage from "../components/homePage/HomePage";
import { MyContext } from "../contexts/MyContextProvider";
import SellForm from "../components/form/SellForm";
import Productpage from "../components/products/Productpage";
const RouterComponent = () => {
  const { loggedIn } = useContext(MyContext);
console.log(loggedIn)
  return (
    <Router>
      <Routes>
        {(
          <>
        
         
            <Route path={`${'/login'}`} element={<Login />} />
          </>
        )}
           <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sell-item" element={<SellForm />} />
        <Route path="/product/:type" element={<Productpage />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
