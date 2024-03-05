import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";
import MembershipCard from "./MembershipCard";

const Pricing = () => {
  const memberships = [
    {
      title: "Basic",
      price: "$19.99/month",
      features: ["Access to gym equipment", "1 fitness class per week"],
      imgUrl: process.env.PUBLIC_URL + "/images/basic.jpg",
    },
    {
      title: "Standard",
      price: "$29.99/month",
      features: [
        "Access to gym equipment",
        "5 fitness classes per week",
        "1 personal training session per month",
      ],
      imgUrl: process.env.PUBLIC_URL + "/images/standard.jpg",
    },
    {
      title: "Premium",
      price: "$49.99/month",
      features: [
        "All-inclusive access",
        "Unlimited fitness classes",
        "2 personal training sessions per month",
        "Access to VIP lounge",
      ],
      imgUrl: process.env.PUBLIC_URL + "/images/premium.jpg",
    },
  ];

  return (
    <>
      <h1 className="pricing-title">Pricing</h1>
      <p className="pricing-description">
        Choose the membership plan that works for you. All plans include a
        30-day money-back guarantee.
      </p>
      <div className="pricing-container">
        {memberships.map((membership, index) => (
          <MembershipCard key={index} {...membership} />
        ))}
      </div>
    </>
  );
};

export default Pricing;
