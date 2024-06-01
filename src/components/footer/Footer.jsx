import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>
              Pet Expo is your go-to platform for everything related to pets. 
              We provide valuable information, resources, and services for pet owners.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>Email: contact@petexpo.com</p>
            <p>Phone: +355 69442830 </p>
            <p>Address: 123 Pet Expo Mine Peza, Tirana, Albania</p>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <p>Stay connected with us on social media:</p>
            <ul className="social-links">
              <li><a href="https://www.facebook.com/">Facebook</a></li>
              <li><a href="https://x.com/X">Twitter</a></li>
              <li><a href="https://www.instagram.com/">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <p>&copy; 2024 Pet Expo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
