import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const Login = () => {
  let { loginUser } = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <div>
      <form onSubmit={loginUser} className='register card'>
        <h2 className='cardTitle card-title'>Login</h2>
        <input
          className='regLogin card-body'
          type='email'
          name='email'
          placeholder='Enter your email'
          autoComplete='off'
        />
        <input
          className='regLogin card-body'
          type='password'
          name='password'
          placeholder='Enter password'
        />

        <button
          className='btn btn-lg btn-primary register-button'
          type='submit'
        >
          Sign me in !!
        </button>
        <p className='card-text'>
          Don't have account?{' '}
          <a className='anchortag' onClick={() => navigate('/register')}>
            Register Here
          </a>
        </p>
      </form>
    </div>
  )
}

export default Login
