import React, { useEffect, useState } from "react";
import { getAnimalsApi, getAnimalApi } from "../../apis/PetsApi";
import PetCard from "../card/PetCard";
import { useParams } from "react-router-dom";
import "./PetList.css";
import SearchBar from "../searchBar/SearchBar";
import PetModal from "../modal/PetModal";
import Pagination from "../pagination/Pagination";

function PetList() {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const { animalType } = useParams();

  useEffect(() => {
    getAnimals(animalType);
  }, [animalType]);

  useEffect(() => {
    paginate(1); 
  }, [filteredAnimals]);

  const getAnimals = async (type) => {
    try {
      const animals = await getAnimalsApi(type);
      setAnimals(animals);
      setFilteredAnimals(animals); 
    } catch (error) {
      console.error("Error fetching animals:", error);
      throw error;
    }
  };

  const openModal = async (id) => {
    try {
      const animal = await getAnimalApi(animalType, id);
      setSelectedAnimal(animal);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching animal details:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAnimal(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAnimals.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <SearchBar
        filteredAnimals={animals}
        setFilteredAnimals={setFilteredAnimals}
      />
      <ul id="animals-list">
        {currentItems.map((animal) => (
          <PetCard
            {...animal}
            key={animal.id}
            onClick={() => openModal(animal.id)}
          />
        ))}
      </ul>

      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredAnimals.length}
          paginate={paginate}
        />
      </div>

      {isModalOpen && selectedAnimal && (
        <PetModal
          closeModal={closeModal}
          selectedAnimal={selectedAnimal}
          animalType={animalType}
        />
      )}
      {!filteredAnimals.length && (
        <div className="no-results">
          <span className="icon mr-2 display-4">
            <i className="bi bi-emoji-frown"></i>
          </span>
          <span className="display-4">No results found</span>
        </div>
      )}
    </div>
  );
}

export default PetList;
