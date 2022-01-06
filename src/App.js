import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import Domain from "./Domain";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />

      <Domain />
    </div>
  );
}

export default App;
