import "./App.scss";
import beers from "./data/beers";
import Navbar from "../src/containers/Navbar/Navbar";
import CardContainer from "../src/containers/CardContainer";

import React from "react";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <CardContainer />
    </div>
  );
};

export default App;
