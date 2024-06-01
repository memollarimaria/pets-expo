import React from "react";
import "./PetModal.css";

function PetModal({ selectedAnimal, closeModal, animalType }) {
  return (
    <div
      className="modal fade show custom-modal"
      tabIndex="-1"
      role="dialog"
      style={{ display: "block" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{selectedAnimal.name}</h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={closeModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img
              src={selectedAnimal.image}
              alt={selectedAnimal.name}
              width="200"
            />
            <div>
              <h2>{selectedAnimal.name}</h2>
              <p>
                {animalType === "birds"
                  ? selectedAnimal.species
                  : selectedAnimal.origin}
              </p>
              <p>
                {animalType === "birds"
                  ? selectedAnimal.place_of_found
                  : selectedAnimal.temperament}
              </p>
              <p>
                {animalType === "birds"
                  ? selectedAnimal.habitat
                  : selectedAnimal.lifespan}
              </p>
              <p>{selectedAnimal.diet}</p>
            </div>
            <p>{selectedAnimal.description}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetModal;
