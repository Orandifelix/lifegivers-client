import React from "react";
import "./Landing.css";
import { RiHandHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <span>
          <RiHandHeartFill size="2em" color="rgb(216,30,5)" />
        </span>
        <h3>
          Do Something Amazing.
          <br /> Donate to save life
        </h3>
        <h1>LifeGivers</h1>
      </div>
      <ul className="links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/aboutus">
          <li>Who we are</li>
        </Link>
        <Link to="/types">
          <li>What you Can Donate</li>
        </Link>
        <Link to="/donation_centers">
          <li>Where to Donate</li>
        </Link>
        <Link to="/articles">
          <li>Articles</li>
        </Link>
        <Link to="/login">
          <li>Become a Donor &#128578;</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
