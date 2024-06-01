import React from "react";
import "./PetCard.css";

function PetCard({ animalType, onClick, ...animal }) {
  return (
    <div onClick={onClick} className="pet-card">
      <article className="animal-item">
        <img src={animal.image} alt={animal.name} />
        <div className="animal-info">
          <h2>{animal.name}</h2>
          <p>
            {animalType === "birds" ? animal.place_of_found : animal.origin}
          </p>
        </div>
      </article>
    </div>
  );
}

export default PetCard;
