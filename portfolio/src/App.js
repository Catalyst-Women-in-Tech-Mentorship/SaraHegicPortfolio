import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CV from "./Pages/CV";
import Home from "./Pages/homePage";
import About from "./Pages/about";
import Projects from "./Pages/projects";
import SingleProject from "./components/singleProject";
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
