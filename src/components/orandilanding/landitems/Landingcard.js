import React from "react";
import "./Landitems.css";

const Landingcard = ({ title, description, image, link }) => {
  return (
    <a href={link} className="landing-card-link">
      <div className="landing-card">
        <img src={image} alt="cardpic" />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Landingcard;
