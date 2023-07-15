import React from "react";
import "./Footer.scss";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="main-footer">
            <div className="logo-stuff">
              <img src={logo} alt="Logo" />
              <div className="socials">
                <Link to="https://www.facebook.com/">
                  <BiLogoFacebook />
                </Link>
                <Link to="https://twitter.com/">
                  <BiLogoTwitter />
                </Link>
                <Link to="https://www.linkedin.com/">
                  <BiLogoLinkedin />
                </Link>
                <Link to="https://www.instagram.com/">
                  <BiLogoInstagram />
                </Link>
              </div>
            </div>

            <div className="pages">
              <h3>Pages</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/mentors">Mentors</Link>
                </li>
                <li>
                  <Link to="/testimonials">Sessions</Link>
                </li>
              </ul>
            </div>
            <div className="contact">
              <h3>Contact</h3>
              <ul>
                <li>123 Main StreetCity, State 12345</li>
                <li>contact@mentorhub.com</li>
                <li>(123) 456 - 7890</li>
              </ul>
            </div>
          </div>

          <p>© 2023 Mentor Hub. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
