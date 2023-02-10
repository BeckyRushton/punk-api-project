import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import "./Main.scss";
import Title from "../../components/Title/Title";

const Main = (props) => {
  const { beers } = props;
  return (
    <div className="main-section">
      <Title />
      <CardContainer beers={beers} />
    </div>
  );
};

export default Main;
