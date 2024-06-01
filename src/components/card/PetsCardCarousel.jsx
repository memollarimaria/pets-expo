import React from 'react';
import Carousel from '../carousel/Carousel';
import './PetCardCarousel.css';
import { NavLink } from 'react-router-dom';

function Card({ title, items, carouselId, animalType }) {
  return (
    <div className="card">
      <div className="card-body">
        <NavLink to={`/petList/${animalType}`} className={"card-title"}>
        <h5 className="card-title">{title}</h5>
        </NavLink>
        <Carousel items={items} carouselId={carouselId} />
      </div>
    </div>
  );
}

export default Card;
