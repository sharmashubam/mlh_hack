import axios from "axios";
import React from "react";
import HomePage from "./components/homePage/HomePage";
import { MyContextProvider } from "./contexts/MyContextProvider";
import Router from "./router/Router";


axios.defaults.withCredentials = true;


function App() {
  
  return (
    <div>
      <MyContextProvider>
        <Router>
          <HomePage />
        </Router>
      </MyContextProvider>
    </div>
  );
}

export default App;
