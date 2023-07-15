import React from 'react'
import './Areas.scss'
import Card from './Card'
import data from './Data'
import { Link } from 'react-router-dom'
import arrow from '../../images/arrow.svg'

const Areas = () => {
  return (
    <>
        <div className="areas-container">
            <div className="areas-container-heading">
                <p><span>Explore Diverse Mentorship Areas</span></p>
            </div>
            <div className="areas-container-cards">
                {data.map((item,index)=>{
                    return <Card
                        key={index}
                        name={item.name}
                        desc={item.desc}
                    />
                })}
            </div>
            <div className="areas-container-button">
                <button><Link to='/community'>Find your mentor <img src={arrow} alt="" /></Link></button>
            </div>
        </div>
    </>
  )
}

export default Areas