import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const DashNavbar = () => {
  let { userDetail, logoutUser } = useContext(AuthContext)
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
            <li className='nav-item dropdown'>
              {userDetail ? (
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  {userDetail[0].name}
                </a>
              ) : (
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Nothing
                </a>
              )}
              <ul class='dropdown-menu'>
                <li>
                  <a onClick={logoutUser} className='dropdown-item'>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DashNavbar
