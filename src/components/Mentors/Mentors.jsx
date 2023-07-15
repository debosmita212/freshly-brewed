import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Mentors.scss'
import Imgcard from '../Imgcard/Imgcard'
import cardData from '../Imgcard/CardMen'
import Footer from '../Footer/Footer'

const Mentors = () => {
  return (
    <>
        <Navbar/>
        <div className="heading">
            <p>Our Mentors</p>
        </div>
        <div className="card-section">
            {
              cardData.map((item,index)=>{
                return <Imgcard
                  key={index}
                  imgsrc={item.imgsrc}
                  name={item.name}
                  role={item.role}
                  fb={item.fb}
                  twitter={item.twitter}
                  linkedin={item.linkedin}
                />
              })
            }
        </div>
        <Footer/>
    </>
  )
}

export default Mentors