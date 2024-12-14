import React from "react";
import "./Card.css";

const Card = ({ name, imageUrl }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
    </div>
  );
};

export default Card;
