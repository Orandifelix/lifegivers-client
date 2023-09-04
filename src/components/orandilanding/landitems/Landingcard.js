import React from "react";
import "./Landitems.css";

const Landingcard = () => {
  return (
    <div className="landing-card">
      <img
        src="https://images.unsplash.com/photo-1576671081741-c538eafccfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1432&q=80"
        alt="cardpic"
      />
      <h4>Join us today to save lives</h4>
      <p>
        By becoming a platelet donor you will join a community of active donors
        across Kenya who save lives every day.
      </p>
      <button>Who can donate</button>
    </div>
  );
};

export default Landingcard;
