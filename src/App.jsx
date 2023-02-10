import "./App.scss";
import Navbar from "../src/containers/Navbar/Navbar";
import Main from "./containers/Main/Main";
import React from "react";
import beers from "./data/beers";
import { useState } from "react";

const App = () => {
  const [filteredArr, setFilteredArr] = useState(beers);
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredTerm = beers.filter((beer) => {
      if (beer.name.toLowerCase().includes(searchTerm)) {
        return true;
      }
    });
    console.log(searchTerm);
    setFilteredArr(filteredTerm);
  };
  return (
    <div className="app">
      <Navbar handleSearch={handleSearch} />
      <Main beers={filteredArr} />
    </div>
  );
};

export default App;
