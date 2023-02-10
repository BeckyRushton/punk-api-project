import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { name, abv, description, image } = props;
  return (
    <div className="beer-card">
      <div className="beer-card__top">
        <p className="beer-card__top--percentage">{abv}% abv</p>
      </div>
      <div className="beer-card__middle">
        <img className="beer-card__top--image" src={image} alt={name} />
      </div>

      <div className="beer-card__bottom">
        <h2 className="beer-card__bottom--name">{name}</h2>
        <p className="beer-card__bottom--description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
