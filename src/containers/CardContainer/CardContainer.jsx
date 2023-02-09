import React from "react";
import "./CardContainer.scss";
import Card from "../../components/Card/Card";

const CardContainer = (props) => {
  const { beers } = props;
  const beersJSX = beers.map((beer) => {
    return (
      <Card
        name={beer.name}
        image={beer.image_url}
        description={beer.description}
        abv={beer.abv}
        key={beer.id}
      />
    );
  });

  return <div className="card-container">{beersJSX}</div>;
};

export default CardContainer;
