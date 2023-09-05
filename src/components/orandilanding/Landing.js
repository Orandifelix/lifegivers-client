import React from 'react'
import './Landing.css'
import Landingimg from './landitems/Landingimg'
import Landingcard from './landitems/Landingcard';
import Aboutus from './landitems/Aboutus';

const Landing = () => {
  return (
    <div className="landing">
      <Landingimg />
      <div className="card-container">
        <Landingcard />
        <Landingcard />
        <Landingcard />
        <Landingcard />
        <Landingcard />
        <Landingcard />
        <Aboutus/>
      </div>
    </div>
  );
}

export default Landing