import React from "react";
import "./Landing.css";
import Landingimg from "./landitems/Landingimg";
import Landingcard from "./landitems/Landingcard";
import SectionData from "./data.json";
import { Link } from "react-router-dom";

const Landing = () => {
  const sections = SectionData.sections;
  return (
    <>
      <div className="landing">
        <Landingimg />
        <div class="cards-container">
          <div className="card card1">
            <h3>Join Us in Saving Lives</h3>
            <h4>Your Generosity Matters</h4>
            <p>
              Every donation counts and brings hope. Be part of our life-saving
              mission and make a difference.
            </p>
            <Link to="/login">
              <button>Sign Up</button>
            </Link>
          </div>

          <div className="card card2">
            <h3>Welcome Back</h3>
            <h4>Your Support is Valued</h4>
            <p>
              Continue your journey of saving lives with us. Sign in to make
              your next donation.
            </p>
            <Link to="/login">
              <button>Sign In</button>
            </Link>
          </div>
          <div class="card card3">
            <img
              src="https://images.unsplash.com/photo-1508204841652-6c134d77ce0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="donor-avatar"
            />
            <h4>Sarah Adams</h4>
            <p>
              "Last summer, I decided to become an organ donor after hearing
              about Emma, a young girl in desperate need of a heart transplant.
              Witnessing her struggle touched my heart, and I knew I had to
              help. Today, I carry Emma's heartbeat within me, a constant
              reminder of the incredible gift of life."
            </p>
          </div>
          <div class="card card4">
            <img
              src="https://images.unsplash.com/photo-1492462543947-040389c4a66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="give-avatar"
            />
            <h4>Don Mugendi</h4>
            <p>
              " I made a life-changing decision last year to donate my bone
              marrow when I learned about Liam, a boy battling leukemia, I got
              tested and discovered I was a match. The day of the transplant
              felt like magic. Months later, Liam thrives, and we share an
              unbreakable bond. I've learned that one act of kindness can have a
              ripple effect, touching countless lives. My journey with Liam has
              forever changed me, teaching me the true meaning of compassion."
            </p>
          </div>
        </div>
        <div className="card-container">
          {sections.map((section) => (
            <Landingcard
              key={section.id}
              title={section.title}
              description={section.description}
              image={section.image}
              link={section.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Landing;
