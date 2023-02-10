import React from "react";
import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <div className="searchbarStyle">
      <label htmlFor="searchbar">Search:</label>
      <input type="text" id="searchbar" />
    </div>
  );
};

export default SearchBox;
