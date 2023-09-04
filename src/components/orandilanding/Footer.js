import React from "react";
import { PiFacebookLogoBold } from "react-icons/pi";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { BiLogoInstagram } from "react-icons/bi";
import { RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <ul className="info">
        <li>
          <a href="/contact-us">Contact Us</a>
        </li>
        <li>
          <a href="/accessibility">Accessibility</a>
        </li>
        <li>
          <a href="/cookies">Cookies</a>
        </li>
        <li>
          <a href="/privacy">Privacy</a>
        </li>
        <li>
          <a href="/jobs">Jobs</a>
        </li>
        <li>
          <a href="/diversity-and-inclusion">Diversity and Inclusion</a>
        </li>
      </ul>
      <div className="contacts">
        <div className="phone">
          You can call us on:
          <br /> <span>0200 123 23 23</span>
        </div>
        <div className="icons">
          <a href="your-facebook-url" className="icon-link facebook">
            <PiFacebookLogoBold size="2.5rem" color="rgb(58,90,153)" />
          </a>
          <a href="your-twitter-url" className="icon-link">
            <TiSocialTwitterCircular size="2.5rem" color="rgb(37,169,224)" />
          </a>
          <a href="your-instagram-url" className="icon-link">
            <BiLogoInstagram size="2.5rem" color="rgb( 131, 58, 180)" />
          </a>
          <a href="your-youtube-url" className="icon-link">
            <RiYoutubeLine size="2.5rem" color="red" />
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
