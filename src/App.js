import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About.jsx";
 
function App() {
  return(
  <>
  <Navbar/>
  <main>
    <Home/>;
    <About/>
  </main>
  </>
  );
};

export default App;
