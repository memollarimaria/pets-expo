import React from "react";
import "./CarouselItem.css"; 

function CarouselItem({ item }) {
  return (
    <div className="carousel-item-container">
      <img src={item.image} alt={item.species} className="d-block w-100" />
      <div className="carousel-caption">
        <p className="name">{item.name}</p>
      </div>
    </div>
  );
}

export default CarouselItem;
