import React from "react";
import Navbar from "./components/Navbar/Navbar";
import VideoBackground from "./components/VideoBackground/VideoBackground.jsx";
import Hero from "./components/Hero/Hero.jsx";
import AboutMe from "./components/AboutMe/AboutMe";


function App() {
  return (
    <div>
      <Navbar />
      <VideoBackground />
      <Hero /> 
      <AboutMe />
    </div>
  );
}

export default App;
