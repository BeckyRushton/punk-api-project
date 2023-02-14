import "./Button.scss";
import React from "react";

const Button = (props) => {
  const { buttonText } = props;

  return <div className="buttonStyle">{buttonText}</div>;
};

export default Button;
