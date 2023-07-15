import React from 'react'
import './TestimonialCard.scss'

const TestimonialCard = (props) => {
  return (
    <>
        <div className="test-card">
            <div className="first">
                <img src={props.img} alt="" />
                <div className="about">
                    <p>{props.name}</p>
                    <p>{props.loc}</p>
                </div>
            </div>
            <div className="second">
                <p>{props.desc}</p>
            </div>
        </div>
        
    </>
  )
}

export default TestimonialCard