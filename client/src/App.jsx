import React,{useState} from "react";
import HomePage from "./components/homePage/HomePage";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Router from "./router/Router";
import { MyContext } from "./contexts/MyContextProvider";
function App() {
  const [clickonprofile, setClickonprofile] = useState(false);

  const clickprofile = (e) => {
    if (clickonprofile == true) {
      setClickonprofile(false);
    } else {
      setClickonprofile(true);
    }
  };
  return (
    <div>
      <MyContext.Provider value={{clickonprofile, clickprofile}}>
        <Router>
          <HomePage />
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
