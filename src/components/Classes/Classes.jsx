// Classes.js

import React from "react";
import "./Classes.css";

const Classes = () => {
  const classes = [
    {
      id: 1,
      name: "Yoga",
      instructor: "John Doe",
      description: "A relaxing yoga class.",
      image: "/images/yoga.jpg",
    },
    {
      id: 2,
      name: "Pilates",
      instructor: "Jane Doe",
      description: "A challenging pilates class.",
      image: "/images/pilates.jpg",
    },
    {
      id: 3,
      name: "Zumba",
      instructor: "John Doe",
      description: "A fun zumba class.",
      image: "/images/zumba.jpg",
    },
    {
      id: 4,
      name: "Kickboxing",
      instructor: "Jane Doe",
      description: "A high-intensity kickboxing class.",
      image: "/images/kickboxing.jpg",
    },
    {
      id: 5,
      name: "Spin",
      instructor: "John Doe",
      description: "A high-intensity spin class.",
      image: "/images/spin.jpg",
    },
    {
      id: 6,
      name: "Crossfit",
      instructor: "Jane Doe",
      description: "A challenging crossfit class.",
      image: "/images/crossfit.jpg",
    },
  ];
  return (
    <div className="classes-container">
      <h1>Classes</h1>
      <div className="classes-grid">
        {classes.map((classItem) => (
          <div key={classItem.id} className="class-card">
            <img src={classItem.image} alt={classItem.name} />
            <h2>{classItem.name}</h2>
            <p>Instructor: {classItem.instructor}</p>
            <p>{classItem.description}</p>
            <button className="btn">Join</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
