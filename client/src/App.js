import React from "react";

 import NavBar from "./components/navbar/NavBar";
 import Footer from "./components/footer/Footer";
import Router from "./components/Router";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";


function App() {
  return (
    <>

      <Home/>
      <NavBar />
      <Router />
      <Footer />
      <SignUp/>

    </>

  );
}

export default App;
