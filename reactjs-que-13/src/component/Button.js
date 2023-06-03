import React from "react";
import "./button.css";

const Button = ({ symbol, color, handleClick }) => {
  return (
    <div className="calc-wrapper">
      
      <button onClick= {() => handleClick(symbol)} className="calc-btn" style={{ backgroundColor: color }}>
        {symbol}
      </button>
    </div>
  );
};

export default Button;
