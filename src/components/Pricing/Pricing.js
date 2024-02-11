// Pricing.js

import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1>Membership Pricing</h1>
      <div className="pricing-cards">
        <div className="pricing-card">
          <img src="/images/basic.jpg" alt="Basic" />
          <h2>Basic</h2>
          <p>$20/month</p>
          <p>Access to gym facilities during opening hours.</p>
          <button>Choose Plan</button>
        </div>
        <div className="pricing-card">
          <img src="/images/pro.jpg" alt="Pro" />
          <h2>Pro</h2>
          <p>$30/month</p>
          <p>Access to gym facilities 24/7 and free group classes.</p>
          <button>Choose Plan</button>
        </div>
        <div className="pricing-card">
          <img src="/images/premium.jpg" alt="Premium" />
          <h2>Premium</h2>
          <p>$40/month</p>
          <p>
            Access to gym facilities 24/7, free group classes, and personal
            training sessions.
          </p>
          <button>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
