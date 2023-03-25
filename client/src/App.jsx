import React from "react";
import HomePage from "./components/homePage/HomePage";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Router from "./router/Router";
function App() {
  return (
    <div>
      <Router>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
