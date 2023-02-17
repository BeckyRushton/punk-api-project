import "./App.scss";
import Navbar from "../src/containers/Navbar/Navbar";
import Main from "./containers/Main/Main";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BeerInfo from "./containers/BeerInfo/BeerInfo";

const App = () => {
  const [beersAPI, setBeersAPI] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [abvFilter, setAbvFilter] = useState(false);
  const [acidicFilter, setAcidicFilter] = useState(false);
  const [classicFilter, setClassicFilter] = useState(false);

  useEffect(() => {
    getBeers();
  }, [searchTerm, abvFilter, acidicFilter, classicFilter]);

  const getBeers = async () => {
    let url = "https://api.punkapi.com/v2/beers";

    if (searchTerm || abvFilter || acidicFilter || classicFilter) {
      url += "?";
    }

    if (searchTerm) {
      url += `beer_name=${searchTerm}&`;
    }

    if (abvFilter) {
      url += "abv_gt=6.0&";
    }

    if (classicFilter) {
      url += "brewed_before=01-2010&";
    }

    const res = await fetch(url);
    let data = await res.json();
    if (acidicFilter) {
      data = data.filter((beer) => beer.ph > 4.0);
    }

    setBeersAPI(data);
  };

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
    <Router>
      <div className="app">
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <Navbar
                  handleSearch={handleSearch}
                  handleAbvFilter={handleAbvFilter}
                  handleAcidicFilter={handleAcidicFilter}
                  handleClassicFilter={handleClassicFilter}
                />
                <Main beers={beersAPI} />
              </>
            }
          ></Route>
          <Route
            path={"/beer/:name"}
            element={<BeerInfo beers={beersAPI} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
