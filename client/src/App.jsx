import React from "react";
import HomePage from "./components/homePage/HomePage"
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
