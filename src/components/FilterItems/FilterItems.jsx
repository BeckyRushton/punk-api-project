import React from "react";
import "./FilterItems.scss";

const FilterItems = () => {
  return (
    <div className="items">
      <input type="checkbox" name="highABV" id="highABV"></input>
      <label htmlFor="highABV"> ABV higher than 6.0% </label>

      <input type="checkbox" name="classicRange" id="classicRange"></input>
      <label htmlFor="classicRange"> Classic Punk API Range </label>

      <input type="checkbox" name="acidic" id="acidic"></input>
      <label htmlFor="acidic"> Acidic ph4 or more </label>
    </div>
  );
};

export default FilterItems;
