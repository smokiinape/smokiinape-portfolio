
import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/Aboutme";
import Portfolio from "./components/Portfolio";
import CurrentKnowledge from "./components/Currentknowledge";
import Contact from "./components/Contact";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Portfolio />
      <CurrentKnowledge />
      <Contact />
    </div>
  );
};

export default App;
