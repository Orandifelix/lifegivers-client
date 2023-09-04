import React from "react";
import "./Landitems.css";

const Landingimg = () => {
  return (
    <div className="landing-container">
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1547082688-9077fe60b8f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
          alt="landing-pic"
        />
      </div>
      <div className="caption">
        <h1>
          Be the Lifeline: Donate to Give Hope, Save Lives, and Make a Lasting
          Impact
        </h1>
      </div>
    </div>
  );
};

export default Landingimg;
