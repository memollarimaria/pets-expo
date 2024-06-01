import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ setFilteredAnimals, filteredAnimals }) {
  const [searchAnimal, setSearchAnimal] = useState("");

  const handleSearchChange = (event) => {
    setSearchAnimal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const results = filteredAnimals.filter((animal) =>
      animal.name.toLowerCase().includes(searchAnimal.toLowerCase())
    );
    setFilteredAnimals(results);
    setSearchAnimal("");
  };

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            id="search"
            className="form-control"
            value={searchAnimal}
            onChange={handleSearchChange}
            placeholder="Search for animals..."
          />
          <button className="btn btn-primary" type="submit">
          <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
