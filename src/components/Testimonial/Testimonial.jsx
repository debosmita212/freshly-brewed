import React from "react";
import "./Testimonial.scss";
import TestimonialCard from "./TestimonialCard";
import data from "./data.jsx";
import Footer from "../Footer/Footer";

const Testimonial = () => {
  return (
    <>
      <div className="test-con">
        <p className="test-heading">Hear from our Mentors</p>
        <div className="test">
          {data.map((item, index) => {
            return (
              <TestimonialCard
                key={index}
                img={item.img}
                name={item.name}
                loc={item.loc}
                desc={item.desc}
              />
            );
          })}
        </div>
        <Footer className='test-footer'/>
      </div>
    </>
  );
};

export default Testimonial;
