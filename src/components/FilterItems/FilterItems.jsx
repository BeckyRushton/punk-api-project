import React from "react";
import "./FilterItems.scss";

const FilterItems = ({
  handleAbvFilter,
  handleAcidicFilter,
  handleClassicFilter,
}) => {
  return (
    <div className="items">
      <input
        onChange={handleAbvFilter}
        type="checkbox"
        name="highABV"
        id="highABV"
      ></input>
      <label htmlFor="highABV"> ABV higher than 6.0% </label>

      <input
        onChange={handleAcidicFilter}
        type="checkbox"
        name="acidic"
        id="acidic"
      ></input>
      <label htmlFor="acidic"> Acidic more than ph4 </label>

      <input
        onChange={handleClassicFilter}
        type="checkbox"
        name="classicRange"
        id="classic-range"
      ></input>
      <label htmlFor="classic-range"> Classic Punk API Range </label>
    </div>
  );
};

export default FilterItems;
