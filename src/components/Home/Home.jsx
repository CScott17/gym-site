// Home.js

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Our Gym!</h1>
        <p>Get fit, stay healthy.</p>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>
          We are a modern gym offering a variety of classes and personal
          training options.
        </p>
      </section>

      <section className="equipment">
        <h2>Our Equipment</h2>
        <p>We have state-of-the-art equipment for all your workout needs.</p>
      </section>

      <section className="classes">
        <h2>Our Classes</h2>
        <p>We offer a variety of classes to suit all fitness levels.</p>
      </section>

      <section className="trainers">
        <h2>Our Trainers</h2>
        <p>
          Our personal trainers are certified professionals who will educate,
          motivate and keep you accountable.
        </p>
      </section>
    </div>
  );
};

export default Home;
