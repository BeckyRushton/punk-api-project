import React, { useState } from "react";
import "./Card.scss";
import Button from "../Button/Button";
import blackCross from "../../assets/images/black-cross.png";

const Card = ({ name, abv, description, image, ph }) => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  const buttonJSX = (
    <div className="beer-card__content">
      <h4 className="beer-card__content--abv">{abv}%</h4>
      <div className="beer-card__content--imgContainer">
        <img src={image} className="beer-card__content--image" alt={name} />
      </div>
      <h2 className="beer-card__content--name">{name}</h2>
      <div className="beer-card__content--button" onClick={handleClick}>
        <Button buttonText={"Find out more..."} />
      </div>
    </div>
  );

  const textJSX = (
    <div className="beer-card__text ">
      <div className="beer-card__text--crossContainer">
        <img
          src={blackCross}
          className="beer-card__text--cross"
          onClick={handleClick}
          alt="Close text"
        />
      </div>
      <h2 className="beer-card__text--name"> {name}</h2>
      <h4 className="beer-card__text--abv">{abv}% abv</h4>
      <h4 className="beer-card__text--ph">pH {ph}</h4>
      <p className="beer-card__text--description">{description}</p>
    </div>
  );

  return <div className="beer-card">{showText ? textJSX : buttonJSX}</div>;
};

export default Card;
