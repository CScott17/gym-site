// Footer.js

import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const logo = process.env.PUBLIC_URL + "./images/logo.png";

  return (
    <footer className="footer-container">
      <div className="footer-left">
        <p>Follow us on social media!</p>
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="footer-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-right">
        <h3>Gym Hours</h3>
        <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
        <p>Saturday - Sunday: 6:00 AM - 9:00 PM</p>
      </div>
    </footer>
  );
};

export default Footer;
