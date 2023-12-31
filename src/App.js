import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
