import React from "react";
import "./Pricing.css";

const MembershipCard = (props) => (
  <div className="membership-card">
    <div className="card-image">
      <img src={props.imgUrl} alt={props.title} />
    </div>
    <h3>{props.title}</h3>
    <p className="price">{props.price}</p>
    <ul className="features">
      {props.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="card-button">Learn More</button>
  </div>
);

export default MembershipCard;
