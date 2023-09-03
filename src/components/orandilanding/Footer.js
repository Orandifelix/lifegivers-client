import React from "react";
import { PiFacebookLogoBold } from "react-icons/pi";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { BiLogoInstagram } from "react-icons/bi";
import { RiYoutubeLine } from "react-icons/ri";

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
        <div className="icons">
          <a href="your-facebook-url" className="icon-link facebook">
            <PiFacebookLogoBold size="2rem" />
          </a>
          <a href="your-twitter-url" className="icon-link">
            <TiSocialTwitterCircular size="2rem" />
          </a>
          <a href="your-instagram-url" className="icon-link">
            <BiLogoInstagram size="2rem" />
          </a>
          <a href="your-youtube-url" className="icon-link">
            <RiYoutubeLine size="2rem" />
          </a>
        </div>
      </div>
      <div className="donation-links">
        <button className="donation-button blood">Blood</button>
        <button className="donation-button organs">Organs</button>
        <button className="donation-button tissues">Tissues</button>
        <button className="donation-button platelets">Platelets</button>
        <button className="donation-button cord-blood">Cord Blood</button>
        <button className="donation-button bone-marrow">Bone Marrow</button>
      </div>
      <div className="copyright">
        &copy; LifeGivers {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
