import React from "react";
import "./Aboutus.css";
import Teamcard from "./Teamcard";
import TeamData from "../data.json";
import Extralinks from "./Extralinks";

const Aboutus = () => {
  const teams = TeamData.teams;
  const extralinks =TeamData.extralinks

  return (
    <>
      <div className="about-us-container">
        <div className="image-container">
          <img
            src="https://plus.unsplash.com/premium_photo-1681843086055-9fe43f654696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            alt="who-are-we"
            className="about-us-image"
          />
          <h4 className="image-text">
            <span>Who Are We</span> <br />
            We are a special health authority
          </h4>
        </div>
      </div>
      <div className="about-card">
        <h3>Dedicated to saving lives.</h3>
        <blockquote>
          "We are dedicated to saving lives across Kenya by offering a
          comprehensive range of life-giving services. Our commitment extends to
          providing a vital lifeline through blood donation, organ
          transplantation, tissue preservation, cord blood banking, bone marrow
          transplants, platelet therapies, and more. At the heart of our mission
          lies the compassionate management of donation services throughout
          Kenya, ensuring a steady supply of life-saving resources. We
          meticulously oversee the collection, storage, and distribution of
          blood and its components, vital organs, precious tissues, resilient
          bone marrow, and transformative stem cells. Our work extends beyond
          immediate care – we're actively involved in groundbreaking research,
          continually advancing treatments and processes to enhance healthcare
          and offer renewed hope."
        </blockquote>
      </div>
      <div className="team">
        <h3 className="our-team">The Team</h3>
        <div className="team-cards-container">
          {teams.map((team) => (
            <Teamcard
              key={team.id}
              name={team.name}
              title={team.title}
              story={team.story}
              quote={team.quote}
              avatar={team.avatar}
            />
          ))}
        </div>
      </div>
      <div className="aboutus-links">
        {extralinks.map((extralink) => (
          <Extralinks
            key={extralink.id}
            title={extralink.title}
            shortText={extralink.shortText}
            link={extralink.link}
          />
        ))}
      </div>
      <hr className="horizontal"/>
      <h3 className="interest"> You may also be interested in:</h3>
      <div className="interest-buttons">
        <button >How We Help</button>
        <button> Partnering With Us</button>
        <button>Careers</button>
      </div>
    </>
  );
};

export default Aboutus;
