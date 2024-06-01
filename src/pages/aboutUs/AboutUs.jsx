import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        Pet Expo is a platform dedicated to pet lovers, providing information
        and resources for all types of pets.
      </p>
      <p>
        Our mission is to promote responsible pet ownership and foster a
        community where pets and their owners thrive together.
      </p>
      <h3>Our Team</h3>
      <div className="team-members">
        <div className="team-member">
          <img src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png" alt="Team member" />
          <h4>John Doe</h4>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src="https://www.shareicon.net/data/512x512/2016/05/24/770142_people_512x512.png" alt="Team member" />
          <h4>Jane Smith</h4>
          <p>Marketing Director</p>
        </div>
        <div className="team-member">
          <img src="https://cdn-icons-png.freepik.com/512/146/146029.png" alt="Team member" />
          <h4>Michael Johnson</h4>
          <p>Head of Operations</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
