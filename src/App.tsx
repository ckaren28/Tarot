import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import AllCards from './components/AllCards'
import "./App.css";
import { MantineProvider, Text } from "@mantine/core";

function App() {
  return (
    <div>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Text>Welcome to Mantine!</Text>
      </MantineProvider>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Home
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/all-cards"} className="nav-link">
              All Cards
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/draw"} className="nav-link">
              Draw One
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>{/* <Route path="/" element={<AllCards/>} /> */}</Routes>
      </div>
    </div>
  );
}

export default App;
