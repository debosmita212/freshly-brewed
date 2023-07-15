import React from "react";
import "./Home.scss";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Areas from "../Areas/Areas";
import Community from "../Community/Community";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import arrow from '../../images/arrow.svg'
import home from '../../images/home.png'


const Home = () => {
  return (
    <>
      <Navbar className="navbar" />
      <div className="container"></div>
      <div className="contents">
        <div className="text-stuff">
          <div className="heading">
            <p>"Unlock your potential as a <span>Mentor</span> and empower
 others to thrive."</p>
          </div>
          <div className="buttons">
            <button><Link to='/about'>Get Started as a Mentor <img src={arrow} alt="" /></Link></button>
            <button><Link to='/about'>Learn More<img src={arrow} alt="" /></Link></button>
          </div>
        </div>
        <div className="image-stuff">
          <img src={home} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
