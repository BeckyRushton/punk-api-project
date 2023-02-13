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

  const handleSelect = (event) => {
    console.log(event.target.id);
    if (event.target.id === "highABV" && event.target.checked) {
      const filteredBeers = beers.filter((beer) => {
        return beer.abv > 6.0;
      });
      setFilteredArr(filteredBeers);
    } else if (event.target.id === "acidic" && event.target.checked) {
      const filteredBeers = beers.filter((beer) => {
        return beer.ph > 4.0;
      });
      setFilteredArr(filteredBeers);
    } else if (event.target.id === "classicRange" && event.target.checked) {
      const filteredBeers = beers.filter((beer) => {
        const beerArr = parseInt(beer.first_brewed.split("/")[1]);
        return beerArr < 2010;
      });
      setFilteredArr(filteredBeers);
    } else {
      setFilteredArr(beers);
    }
  };

  return (
    <div className="app">
      <Navbar handleSearch={handleSearch} handleSelect={handleSelect} />
      <Main beers={filteredArr} />
    </div>
  );
};

export default App;
