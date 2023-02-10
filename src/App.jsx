import "./App.scss";

import Navbar from "../src/containers/Navbar/Navbar";
import CardContainer from "../src/containers/CardContainer/CardContainer";
import Main from "./containers/Main/Main";

import React from "react";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
