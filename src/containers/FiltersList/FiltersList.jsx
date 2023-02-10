import React from "react";
import "./FiltersList.scss";
import FilterItems from "../../components/FilterItems/FilterItems";

const FiltersList = () => {
  return (
    <div className="filterBy">
      Filter by:
      <FilterItems />
    </div>
  );
};

export default FiltersList;
