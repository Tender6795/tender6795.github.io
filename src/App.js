import React from "react";
import "./App.css";

import { Header } from "./components/Header/Header";

import { AboutPage } from "./pages/AboutPage/AboutPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { SkillsPage } from "./pages/SkillsPage/SkillsPage";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";

function App() {

  return (
    <div className="App">
      {/* <Header /> */}
      <div id="section1">
          <HomePage />
      </div>
      <div id="section2">
          <AboutPage />
      </div>
      <div id="section3">
          <SkillsPage />
      </div>
      <div id="section4">
          <ProjectsPage />
      </div>
    </div>
  );
}

export default App;
