import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import "./Main.scss";
import beers from "../../data/beers";
import Title from "../../components/Title/Title";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  return (
    <div className="main-section">
      <Title />
      <CardContainer beers={beers} />
    </div>
  );
};

export default Main;
