import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CasaMatriz from "./pages/bodega/CasaMatriz";
import todasBodegas from "./pages/bodega/Todas";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={CasaMatriz} />
        <Route path="/casa-matriz" Component={CasaMatriz} />
        <Route path="/todas" Component={todasBodegas} />
      </Routes>
    </Router>
  );
}

export default App;
