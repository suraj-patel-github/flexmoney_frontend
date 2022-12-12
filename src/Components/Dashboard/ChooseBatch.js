import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const ChooseBatch = () => {
  let { isBatchSelected } = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <div className='gotopayment card'>
      <h2 className='card-title'>Choose Batch</h2>
      <p className='card-body'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod
        arcu id ligula sodales bibendum. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Suspendisse
        potenti. Duis mi lacus, feugiat et vehicula vel, scelerisque ac nunc.
      </p>
      <button
        onClick={isBatchSelected}
        className='card-text btn btn-lg btn-primary'
      >
        Click to choose batch
      </button>
    </div>
  )
}

export default ChooseBatch
