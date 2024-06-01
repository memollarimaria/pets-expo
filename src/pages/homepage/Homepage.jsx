import React, { useEffect, useState } from "react";
import { getAnimalsApi } from "../../apis/PetsApi";
import "./Homepage.css";
import Card from "../../components/card/PetsCardCarousel";
import ContactUs from "../contactUs/ContactUs";
import AboutUs from "../aboutUs/AboutUs";

function Homepage() {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dogsData = await getAnimalsApi("dogs");
        setDogs(Object.values(dogsData));

        const catsData = await getAnimalsApi("cats");
        setCats(Object.values(catsData));

        const birdsData = await getAnimalsApi("birds");
        setBirds(Object.values(birdsData));
      } catch (error) {
        console.error("Error fetching animal data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container homepage-container">
      <h1 className="homepage-title">Welcome to Pets Expo</h1>
      <div className="row">
        {dogs.length > 0 && (
          <div className="col-md-4">
            <Card title="Dogs" animalType="dogs" items={dogs} carouselId="dogsCarousel" />
          </div>
        )}
        {cats.length > 0 && (
          <div className="col-md-4">
            <Card title="Cats" animalType="cats" items={cats} carouselId="catsCarousel" />
          </div>
        )}
        {birds.length > 0 && (
          <div className="col-md-4">
            <Card title="Birds" animalType="birds" items={birds} carouselId="birdsCarousel" />
          </div>
        )}
      </div>

      <div id="about" className="about-section">
        <AboutUs />
      </div>
      <div id="contact" className="contact-section">
        <ContactUs />
      </div>
    </div>
  );
}

export default Homepage;
