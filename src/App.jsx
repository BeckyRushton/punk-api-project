import "./App.scss";
import Navbar from "../src/containers/Navbar/Navbar";
import Main from "./containers/Main/Main";
import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [beersAPI, setBeersAPI] = useState([]);
  const [filteredArr, setFilteredArr] = useState(beersAPI);

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data = await res.json();
    setBeersAPI(data);
  };

  const getSearchBeers = async (searchTerm) => {
    const url = `https://api.punkapi.com/v2/beers/?beer_name=${searchTerm}`;
    const res = await fetch(url);
    const data = await res.json();
    setBeersAPI(data);
  };

  // const getCheckedBeers = async () => {
  //   const url = `https://api.punkapi.com/v2/beers/`;
  //   const res = await fetch(url + `?abv_gt=6`);
  //   const data = await res.json();
  //   setBeersAPI(data);
  // };

  useEffect(() => {
    getBeers();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm) {
      getSearchBeers(searchTerm);
    } else {
      getBeers();
    }
  };
  // const handleSelect = (event) => {
  //   if (event.target.id === "highABV") {
  //     abv = true;
  //   }
  //   const abv = event.target.id === "highABV";
  //   const ph = event.target.id === "acidic";
  //   const classic = event.target.id === "classicRange";
  //   getBeers();
  // };

  return (
    <div className="app">
      <Navbar handleSearch={handleSearch} />
      <Main beers={beersAPI} />
    </div>
  );
};

export default App;
