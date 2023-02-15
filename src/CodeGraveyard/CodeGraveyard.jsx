const BeerInfo = (props) => {
  const { beerId } = useParams();
  const { beers } = props;
  return;
  <div className="beer-card__${}">
    <div className="beer-card__top">
      <p className="beer-card__top--percentage">{abv}% abv</p>
    </div>
    <div className="beer-card__middle">
      <img className="beer-card__top--image" src={image} alt={name} />
    </div>

    <div className="beer-card__bottom">
      <h2 className="beer-card__bottom--name">{name}</h2>
      <p className="beer-card__bottom--description">
        {description.substring(0, previewDescription + 1)}
      </p>
      <Button buttonText={"Find out more..."} />
    </div>
  </div>;
};

// const getCheckedBeers = async () => {
//   const url = `https://api.punkapi.com/v2/beers/`;
//   const res = await fetch(url + `?abv_gt=6`);
//   const data = await res.json();
//   setBeersAPI(data);
// };

// const handleSelect = (event) => {
//   if (event.target.id === "highABV") {
//     abv = true;
//   }
//   const abv = event.target.id === "highABV";
//   const ph = event.target.id === "acidic";
//   const classic = event.target.id === "classicRange";
//   getBeers();
// };

// const filteredTerm = beersAPI.filter((beer) => {
//   if (beer.name.toLowerCase().includes(searchTerm)) {
//   return true;
//   }
//   });
//   console.log(searchTerm);
//   setFilteredArr(filteredTerm);

//   const filteredBeers = beersAPI.filter((beer) => {
//   return beer.abv > 6.0;
//   });
//   setFilteredArr(filteredBeers);
//   } else if (event.target.id === "acidic" && event.target.checked) {
//   const filteredBeers = beersAPI.filter((beer) => {
//   return beer.ph > 4.0;
//   });
//   setFilteredArr(filteredBeers);
//   } else if (event.target.id === "classicRange" && event.target.checked) {
//   const filteredBeers = beersAPI.filter((beer) => {
//   const beerArr = parseInt(beer.first_brewed.split("/")[1]);
//   return beerArr < 2010;
//   });
//   setFilteredArr(filteredBeers);
//   } else {
//   setFilteredArr(beersAPI);
//   }
