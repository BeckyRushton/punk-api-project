import React from "react";
import "./CardContainer.scss";
import Card from "../../components/Card/Card";

const CardContainer = ({ beers }) => {
  const beersJSX = beers.map((beer) => {
    return (
      <Card
        name={beer.name}
        image={beer.image_url}
        description={beer.description}
        abv={beer.abv}
        ph={beer.ph}
        key={beer.id}
      />
    );
  });

  return <div className="card-container">{beersJSX}</div>;
};

export default CardContainer;
