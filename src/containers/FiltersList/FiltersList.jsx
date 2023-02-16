import React from "react";
import "./FiltersList.scss";
import FilterItems from "../../components/FilterItems/FilterItems";

const FiltersList = (props) => {
  const { handleAbvFilter, handleAcidicFilter, handleClassicFilter } = props;
  return (
    <div className="filter-by">
      Filter by:
      <FilterItems
        handleAbvFilter={handleAbvFilter}
        handleAcidicFilter={handleAcidicFilter}
        handleClassicFilter={handleClassicFilter}
      />
    </div>
  );
};

export default FiltersList;
