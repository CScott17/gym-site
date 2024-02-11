// Footer.js

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a
          href="your-social-media-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="your-social-media-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="your-social-media-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
      <div className="hours">
        <p>Hours:</p>
        <p>Monday - Friday: 8am - 9pm</p>
        <p>Saturday - Sunday: 10am - 6pm</p>
      </div>
      <div className="gym-name">
        <p>&copy; 2024 Your Gym Name</p>
      </div>
    </footer>
  );
};

export default Footer;
