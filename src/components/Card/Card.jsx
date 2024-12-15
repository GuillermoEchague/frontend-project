import React from "react";
import "./Card.css";

const Card = ({ name, imageUrl }) => {
  return (
    <div className="card">
      <img className="card__image" src={imageUrl} alt={name} />
      <h3 className="card__title">{name}</h3>
    </div>
  );
};

export default Card;
