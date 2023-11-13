import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CV from "../src/Pages/CV/CV"
import Home from "../src/Pages/home/homePage";
import About from "../src/Pages/about/about";
import Projects from "../src/Pages/projects/projects";
import SingleProject from "../src/components/SingleProject/singleProject";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>

          <Route path="/CV" element={<CV></CV>}></Route>
          <Route
            path="/projects/:projectName"
            element={<SingleProject />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
