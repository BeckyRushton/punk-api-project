import React from "react";
import "../Navbar/Navbar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../containers/FiltersList/FiltersList";

const Navbar = () => {
  return (
    <div>
      Navbar
      <SearchBox />
      <FiltersList />
    </div>
  );
};

export default Navbar;
