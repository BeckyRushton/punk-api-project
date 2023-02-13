import React from "react";
import "./FiltersList.scss";
import FilterItems from "../../components/FilterItems/FilterItems";

const FiltersList = (props) => {
  const { handleSelect } = props;
  return (
    <div className="filterBy">
      Filter by:
      <FilterItems handleSelect={handleSelect}/>
    </div>
  );
};

export default FiltersList;
