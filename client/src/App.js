import React from "react";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Router from "./components/Router";
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Home/>
      <NavBar />
      <Router />
      <Footer />

    </>

  );
}

export default App;
