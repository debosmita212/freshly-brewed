import React from 'react'
import './Community.scss'
import { Link } from 'react-router-dom'
import arrow from '../../images/arrow.svg'
import community from '../../images/community.jpg'


const Community = () => {
  return (
    <>
        <div className="community-container">
            <div className="community-container-left">
                <img src={community} alt="" />
            </div>
            <div className="community-container-right">
                <p>Join Our Community 
of Mentors</p>
                <p>Becoming a mentor on Mentor Hub is quick and easy. Follow these simple steps to get started.</p>
                <button><Link to='/testimonials'>Learn More <img src={arrow} alt="" /></Link></button>
            </div>
        </div>
    </>
  )
}

export default Community