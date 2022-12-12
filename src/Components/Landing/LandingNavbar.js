import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingNavbar = () => {
  const navigate = useNavigate()
  return (
    <nav className='navbar navbar-expand-lg '>
      <div className='container-fluid'>
        <a className='navbar-brand'>YOGA-APP</a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' onClick={() => navigate('register')}>
                Register
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' onClick={() => navigate('login')}>
                Signin <i class='fas fa-sign-in-alt'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default LandingNavbar
