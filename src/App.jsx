import "./App.scss";
import Navbar from "../src/containers/Navbar/Navbar";
import Main from "./containers/Main/Main";
import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  // Setting the states of all the following to false/empty so that
  // there are no filters on the beer API
  const [beersAPI, setBeersAPI] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [abvFilter, setAbvFilter] = useState(false);
  const [acidicFilter, setAcidicFilter] = useState(false);
  const [classicFilter, setClassicFilter] = useState(false);

  // This waits for the following to trigger a re-render of the beers API
  // with relevant filter (stops infinite re-rendering)
  useEffect(() => {
    getBeers();
  }, [searchTerm, abvFilter, acidicFilter, classicFilter]);

  // This gets an unfiltered aray of beers from the API as default
  const getBeers = async () => {
    let url = "https://api.punkapi.com/v2/beers";

    // If one of these filters is used, the url has the question mark
    // added onto it
    if (searchTerm || abvFilter || acidicFilter || classicFilter) {
      url += "?";
    }
    // If its one of the following filters, then the relevant section of url
    // code is added
    if (searchTerm) {
      url += `beer_name=${searchTerm}&`;
    }

    if (abvFilter) {
      url += "abv_gt=6.0&";
    }

    if (classicFilter) {
      url += "brewed_before=01-2010";
    }
    // ph needed to be filtered manually as there is no exact term for ph in the
    // documentation
    const res = await fetch(url);
    let data = await res.json();
    if (acidicFilter) {
      data = data.filter((beer) => beer.ph > 4.0);
    }
    // Returns relevant beers from the API to whichever filter/or no filter has
    // been triggered
    setBeersAPI(data);
  };

  // These target the event of typing in the search bar and checking the checkbox
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleAbvFilter = (event) => {
    setAbvFilter(event.target.checked);
  };

  const handleAcidicFilter = (event) => {
    setAcidicFilter(event.target.checked);
  };

  const handleClassicFilter = (event) => {
    setClassicFilter(event.target.checked);
  };

  return (
    <div className="app">
      <Navbar
        handleSearch={handleSearch}
        handleAbvFilter={handleAbvFilter}
        handleAcidicFilter={handleAcidicFilter}
        handleClassicFilter={handleClassicFilter}
      />
      <Main beers={beersAPI} />
    </div>
  );
};

export default App;
