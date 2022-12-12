import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoToPayment = () => {
  const navigate = useNavigate()
  return (
    <div className='gotopayment card'>
      <h2 className='card-title'>Pay Here !!</h2>
      <p className='card-body'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod
        arcu id ligula sodales bibendum. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Suspendisse
        potenti. Duis mi lacus, feugiat et vehicula vel, scelerisque ac nunc.
      </p>
      <button
        onClick={() => navigate('/user/dashboard/payment')}
        className='card-text btn btn-lg btn-primary'
      >
        Go To Payment
      </button>
    </div>
  )
}

export default GoToPayment
