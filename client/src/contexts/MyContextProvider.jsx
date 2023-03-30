import axios, { all } from "axios";
import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

// Step 2: Create a new component that will serve as the context provider
export const MyContextProvider = ({ children }) => {
  const [clickonprofile, setClickonprofile] = useState(false);
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [allData, setAllData] = useState([]);
  const [sellData, setSellData] = useState({
    seller: "",
    title: "",
    message: "",
    selectedFile: "",
    price: "",
    user: "",
  });

  const getData = async () => {
    const postResult = await axios.get("http://localhost:5000/posts");
    setAllData(postResult.data);
  };

  const clickprofile = (e) => {
    if (clickonprofile == true) {
      setClickonprofile(false);
    } else {
      setClickonprofile(true);
    }
  };

  const getLoggeIn = async () => {
    await axios
      .get("http://localhost:5000/auth/loggedIn")
      .then((response) => {
        const data = response.data;
        setLoggedIn(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getLoggeIn();
    getData();
  }, []);

  // Step 4: Pass the state and methods that you want to share through the context to the value prop of the <Context.Provider> component.
  const value = {
    clickonprofile,
    loggedIn,
    sellData,
    allData,
    clickprofile,
    setLoggedIn,
    getLoggeIn,
    getData,
    setAllData,
    setSellData,
  };

  return (
    // Step 3: Wrap the child components that will consume the context with the <Context.Provider> component.
    <MyContext.Provider value={value}>{children}</MyContext.Provider>
  );
};
