import React from "react";

const Footer = () => {
  return (
    <footer>
      <ul className="info">
        <li>Contact Us</li>
        <li>Accessibility</li>
        <li>Cookies</li>
        <li>Privacy</li>
        <li>Jobs</li>
        <li>Diversity and Inclusion</li>
      </ul>
      <div className="contacts">
        <div className="phone">You can call us on: 0200 123 23 23</div>
        <div className="icons">Icons</div>
      </div>
      <div className="donation-links">
        <button className="donation-button">Blood</button>
        <button className="donation-button">Organs</button>
        <button className="donation-button">Tissues</button>
        <button className="donation-button">Platelets</button>
        <button className="donation-button">Cord Blood</button>
        <button className="donation-button">Bone Marrow</button>
      </div>
      <div>Copyright</div>
    </footer>
  );
};

export default Footer;
