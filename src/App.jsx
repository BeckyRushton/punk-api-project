import "./App.scss";
import Navbar from "../src/containers/Navbar/Navbar";
import Main from "./containers/Main/Main";
import React from "react";
import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BeerInfo from "./containers/BeerInfo/BeerInfo";

const App = () => {
  const [beersAPI, setBeersAPI] = useState([]);
  const [filteredArr, setFilteredArr] = useState(beersAPI);

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data = await res.json();
    setBeersAPI(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredTerm = beersAPI.filter((beer) => {
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
      const filteredBeers = beersAPI.filter((beer) => {
        return beer.abv > 6.0;
      });
      setFilteredArr(filteredBeers);
    } else if (event.target.id === "acidic" && event.target.checked) {
      const filteredBeers = beersAPI.filter((beer) => {
        return beer.ph > 4.0;
      });
      setFilteredArr(filteredBeers);
    } else if (event.target.id === "classicRange" && event.target.checked) {
      const filteredBeers = beersAPI.filter((beer) => {
        const beerArr = parseInt(beer.first_brewed.split("/")[1]);
        return beerArr < 2010;
      });
      setFilteredArr(filteredBeers);
    } else {
      setFilteredArr(beersAPI);
    }
  };

  return (
    <div className="app">
      <Navbar handleSearch={handleSearch} handleSelect={handleSelect} />
      <Main beers={beersAPI} />
    </div>
  );
};

export default App;
