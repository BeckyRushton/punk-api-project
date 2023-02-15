import "../Navbar/Navbar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../containers/FiltersList/FiltersList";

const Navbar = ({
  handleSearch,
  handleAbvFilter,
  handleAcidicFilter,
  handleClassicFilter,
}) => {
  return (
    <div className="nav-section">
      <SearchBox handleSearch={handleSearch} />
      <FiltersList
        handleAbvFilter={handleAbvFilter}
        handleAcidicFilter={handleAcidicFilter}
        handleClassicFilter={handleClassicFilter}
      />
    </div>
  );
};

export default Navbar;
