import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import arrow from '../../images/arrow.svg'

const Card = (props) => {
  return (
        <div className="Card-card">
        <div className="Card-card-container">
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <h3 className='button'><Link to='/testimonials'>Read More <img src={arrow} alt="" /></Link></h3>
        </div>
        </div>
    
  )
}

export default Card