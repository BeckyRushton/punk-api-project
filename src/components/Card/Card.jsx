import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { name, abv, description, image } = props;
  return (
    <div className="beer-card">
      <div className="beer-card__top">
        <img className="beer-card__top--image" src={image} alt={name} />
        <p className="beer-card__top--percentage">{abv}</p>
      </div>
      <div className="beer-card__bottom">
        <h2 className="beer-card__bottom--name">{name}</h2>
        <p className="beer-card__bottom--description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
