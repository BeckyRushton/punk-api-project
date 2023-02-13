import React from "react";
import "./FilterItems.scss";

const FilterItems = (props) => {
  const { handleSelect } = props;
  return (
    <div className="items">
      <input
        onChange={handleSelect}
        type="checkbox"
        name="highABV"
        id="highABV"
      ></input>
      <label htmlFor="highABV"> ABV higher than 6.0% </label>

      <input
        onChange={handleSelect}
        type="checkbox"
        name="acidic"
        id="acidic"
      ></input>
      <label htmlFor="acidic"> Acidic more than ph4 </label>

      <input
        onChange={handleSelect}
        type="checkbox"
        name="classicRange"
        id="classicRange"
      ></input>
      <label htmlFor="classicRange"> Classic Punk API Range </label>
    </div>
  );
};

export default FilterItems;
