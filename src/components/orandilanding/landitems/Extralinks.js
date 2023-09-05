import React from "react";

const Extralinks = ({ title, shortText, link }) => {
  return (
    <a
      href={link}
      className="extralinks"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <h3>{title}</h3>
        <p>{shortText}</p>
      </div>
    </a>
  );
};

export default Extralinks;
