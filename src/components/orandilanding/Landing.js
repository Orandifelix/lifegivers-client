import React from 'react'
import './Landing.css'
import Landingimg from './landitems/Landingimg';
import Landingcard from './landitems/Landingcard';
import Footer from "./Footer"


const Landing = () => {
  return (
    <>
    <div className="landing">
      <Landingimg />
      <div className="card-container">
        <Landingcard />
        <Landingcard />
        <Landingcard />
        <Landingcard />
        <Landingcard />
        <Landingcard />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Landing