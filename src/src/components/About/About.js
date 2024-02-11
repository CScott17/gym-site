// About.js

import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <section className="goals-section">
        <div className="text-content">
          <h1>Our Goals</h1>
          <p>
            Our gym is dedicated to helping everyone achieve their fitness
            goals. We believe in creating a healthy and positive environment
            where our members can grow physically and mentally. Our goal is to
            inspire and motivate everyone to improve their fitness level and
            achieve their health goals.
          </p>
        </div>
        <div className="image-content">
          <img src="/images/trainer.jpg" alt="About us" />
        </div>
      </section>
    </div>
  );
};

export default About;
