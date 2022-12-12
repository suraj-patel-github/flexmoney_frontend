import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const Register = () => {
  let {registerUser} = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <div>
      <form onSubmit={registerUser} className='register card'>
        <h2 className='cardTitle card-title'>Register Here</h2>
        <input
          className='regLogin card-body'
          type='text'
          name='name'
          placeholder='Mike Hussey'
          autoComplete='off'
          required
        />
        <input
          className='regLogin card-body'
          type='email'
          name='email'
          placeholder='mikehussey@gmail.com'
          autoComplete='off'
          required
        />
        <input
          className='regLogin card-body'
          type='number'
          name='age'
          placeholder='Enter your age'
          autoComplete='off'
          max={65}
          min={18}
          required
        />
        <input
          className='regLogin card-body'
          type='password'
          name='password'
          placeholder='Enter password'
          required
        />

        <button
          className='btn btn-lg btn-primary register-button'
          type='submit'
        >
          Register me !!
        </button>
        <p className='card-text'>
          Already Registered?
          <a className='anchortag' onClick={() => navigate('/login')}>
            Login
          </a>
        </p>
      </form>
    </div>
  )
}

export default Register

{
  /* <div className='form-outline'>
          
        </div>
        <div>
          <input type='number' name='age' placeholder='Enter your age' />
        </div>
        <div>
          <input type='email' name='email' placeholder='Enter your email' />
        </div>
        <div>
          <input type='password' name='password' placeholder='Enter Password' />
        </div>
        <div>
          <button type='submit'>Register Me</button>
        </div> */
}
