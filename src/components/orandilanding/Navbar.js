import React from 'react'
import "./Landing.css";
import { RiHandHeartFill } from "react-icons/ri";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './Landing';
import SignUpLoginComponent from '../kevinauth/SignUpLogin';


const Navbar = () => {
  return (
    <>
    <Router>
    <nav>
      <div className="logo">
        <div></div>
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
        <Link to="/"><li>Home</li></Link>
        <Link to="/"><li>About Us</li></Link>
        <Link to="/"><li>Who Can Donate</li></Link>
        <Link to="/"><li>Where to Donate</li></Link>
        <Link to="/"><li>Articles</li></Link>
        <Link to="/"><li>Become a Donor</li></Link>
        <Link to="/login">&#128578;</Link>
      </ul>
    </nav>
      <Routes>
        <Route path="/login" element={<SignUpLoginComponent />} />
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </Router>
    </>
  );
}

export default Navbar