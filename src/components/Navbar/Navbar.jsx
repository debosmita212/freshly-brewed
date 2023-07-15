import React from 'react'
import './Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import iconamoon_profile from '../../images/iconamoon_profile.svg'

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/mentors'>Mentors</Link></li>
                <li><Link to='/testimonials'>Sessions</Link></li>
            </ul>
      <button><img src={iconamoon_profile} alt="" /><Link to='/register'>Sign Up</Link></button>

        </nav>
    </>
  )
}

export default Navbar