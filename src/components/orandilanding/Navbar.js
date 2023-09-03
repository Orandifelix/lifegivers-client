import React from 'react'
import "./Landing.css"
import { RiHandHeartFill } from "react-icons/ri";
// import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <div></div>
        <span>
          <RiHandHeartFill size="2em" color="red" />
        </span>
        <h3>Do Something Amazing.<br/> Donate to save life</h3>
        <h1>LifeGivers</h1>
      </div>
      <ul className="links">
        <li>About Us</li>
        <li>Who Can Donate</li>
        <li>Where to Donate</li>
        <li>Articles</li>
        <li>Become a Donor</li>
      </ul>
    </nav>
  );
}

export default Navbar