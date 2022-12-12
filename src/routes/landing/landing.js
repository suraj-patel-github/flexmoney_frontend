import React from 'react'
import Footer from '../../Components/Landing/Footer'
import image from '../../image/yoga.png'

import LandingNavbar from '../../Components/Landing/LandingNavbar'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()
  return (
    <div>
      <LandingNavbar />
      <div className='landing'>
        <div className='landing-text'>
          <h1>
            <b>Self-care starts at home.</b>
          </h1>
          <h3>Take your yoga practice deeper with our Yoga-app Membership.</h3>
          <h4>At just ₹500 / month</h4>
          <button
            onClick={() => navigate('register')}
            className='landing-button'
          >
            Get Started Today
          </button>
        </div>
        <div className='landing-image'>
          <img src={image} alt='' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Landing
