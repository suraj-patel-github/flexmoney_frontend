import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const OnlineClass = () => {
  let { checkSubscription } = useContext(AuthContext)
  return (
    <div className='gotopayment card'>
      <h2 className='card-title'>Live Yoga Classes</h2>
      <p className='card-body'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod
        arcu id ligula sodales bibendum. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Suspendisse
        potenti. Duis mi lacus, feugiat et vehicula vel, scelerisque ac nunc.
      </p>
      <button
        onClick={checkSubscription}
        className='card-text btn btn-lg btn-primary'
      >
        Go to Live Classes
      </button>
    </div>
  )
}

export default OnlineClass
