import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us">
      <h2 className="contact-us-title">Contact Us</h2>
      <p>
        Feel free to reach out to us for any inquiries or questions you may have!
      </p>
      <div className="contact-info">
        <p>Email: contact@petexpo.com</p>
        <p>Phone: +355 694424830</p>
        <p>Address: 123 Pet Expo Mine Peza, Tirana, Albania</p>
      </div>
      <div className="contact-form">
        <h3>Send us a message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" className="form-control" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
