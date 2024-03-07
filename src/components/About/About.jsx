// About.js

import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="mission">
        <h1>Our Mission</h1>
        <p>
          We aim to promote health and fitness in our community through our
          diverse range of classes and top-quality equipment.
        </p>
      </section>

      <section className="history">
        <h2>Our History</h2>
        <p>
          We have been serving our community since 2000, constantly improving
          our facilities and services to provide the best fitness experience.
        </p>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <p>
          Our team of certified trainers and fitness professionals is dedicated
          to helping you achieve your fitness goals.
        </p>
      </section>
    </div>
  );
};

export default About;
