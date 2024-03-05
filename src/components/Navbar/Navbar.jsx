// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const logo = process.env.PUBLIC_URL + "./images/logo.png";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-center">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button>Join Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
