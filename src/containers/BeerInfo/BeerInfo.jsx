import React from "react";
import "./BeerInfo.scss";
import { useParams } from "react-router-dom";
import blackCross from "../../assets/images/black-cross.png";
import { Link } from "react-router-dom";

const BeerInfo = ({ beers, handleClick }) => {
  const { name } = useParams();
  const targetArr = beers.filter((beer) => {
    if (beer.name === name) {
      return true;
    }
  });

  const targetObj = targetArr[0];
  console.log(targetObj);

  return (
    <div className="beer-info-container">
      <div className="beer-info-container__top">
        <div className="beer-info__title">{targetObj.name}</div>
        <Link style={{ textDecoration: "none" }} to={"/"} key={name}>
          <img
            src={blackCross}
            className="beer-info__cross"
            onClick={handleClick}
            alt="Close text"
          />
        </Link>
      </div>
      <div className="beer-info-container__bottom">
        <img src={targetObj.image_url} className="beer-info__image" />
        <div className="beer-info-container__bottom--about">
          <div className="beer-info__abv">{targetObj.abv} abv</div>
          <div className="beer-info__ph">pH {targetObj.ph}</div>
          <div className="beer-info__description">{targetObj.description}</div>
        </div>
      </div>
    </div>
  );
};

export default BeerInfo;
