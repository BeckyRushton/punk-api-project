import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { handleSearch } = props;
  return (
    <div className="searchbar-style">
      <label htmlFor="searchbar">Search:</label>
      <input
        onInput={handleSearch}
        type="text"
        id="searchbar"
        placeholder="Punk API Database"
      />
    </div>
  );
};

export default SearchBox;
