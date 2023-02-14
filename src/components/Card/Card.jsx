import React from "react";
import "./Card.scss";
import Button from "../Button/Button";
import whiteCross from "../../assets/images/white-cross.png";
import { useState } from "react";

const Card = (props) => {
  const { name, abv, description, image } = props;
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  const buttonJSX = (
    <div className="beer-card beer-card__button">
      <h3 className="beer-card__heading">{name}</h3>
      <div onClick={handleClick}>
        <Button buttonText={"Find out more"} />
      </div>
    </div>
  );
  const textJSX = (
    <div className="beer-card beer-card__description">
      <img
        src={whiteCross}
        className="beer-card__cross"
        onClick={handleClick}
        alt="Close text"
      />
      <h3 className="beer-card__heading">{name}</h3>
      {description.split(".").map((description, index) => (
        <p key={name + index}>{description + "."}</p>
      ))}
      <h4 className="beer-card__abv">{abv}% abv</h4>
    </div>
  );

  return (
    <div className="beer-card">
      <img src={image} className="beer-card__img" alt={props.name} />
      {showText ? textJSX : buttonJSX}
    </div>
  );

  // return (
  //   <div className="beer-card">
  //     <div className="beer-card__top">
  //       <p className="beer-card__top--percentage">{abv}% abv</p>
  //     </div>
  //     <div className="beer-card__middle">
  //       <img className="beer-card__top--image" src={image} alt={name} />
  //     </div>

  //     <div className="beer-card__bottom">
  //       <h2 className="beer-card__bottom--name">{name}</h2>
  //       <p className="beer-card__bottom--description">{description}</p>
  //     </div>
  //   </div>
  // );
};

export default Card;
