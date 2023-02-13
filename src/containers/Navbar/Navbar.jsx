import "../Navbar/Navbar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../containers/FiltersList/FiltersList";

const Navbar = (props) => {
  const { handleSearch, handleSelect } = props;

  return (
    <div className="nav-section">
      <SearchBox handleSearch={handleSearch} />
      <FiltersList handleSelect={handleSelect} />
    </div>
  );
};

export default Navbar;
