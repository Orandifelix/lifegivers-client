import React from "react";
import "./Aboutus.css";

const Teamcard = ({ name, title, story, quote, avatar }) => {
  return (
    <div className="team-card">
        <img src={avatar} alt="avatar" className="avatar" />
        <h2>{name}</h2>
        <h3>{title}</h3>
        <p>{story}</p>
        <h4>{quote}</h4>
    </div>
  );
};

export default Teamcard;
