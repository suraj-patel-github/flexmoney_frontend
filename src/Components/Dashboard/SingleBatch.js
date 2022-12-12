import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const SingleBatch = ({ id, batch_name, description, time }) => {
  const navigate = useNavigate()
  let { authTokens } = useContext(AuthContext)
  let selectBatch = async () => {
    console.log('Hello ', id)
    let response = await fetch(`https://flexmoney-backend-1kyg.onrender.com/renewal/selectBatch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authTokens,
      },
      body: JSON.stringify({
        batchNumber: id,
      }),
    })
    let data = await response.json()
    try {
      if (response.status === 200) {
        navigate('/user/dashboard')
        // navigate('/user/dashboard/liveclass', {
        //   state: {
        //     name: data.batch.batch_name,
        //   },
        // })
      } else {
        console.log(data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='allBatches-components card'>
      <h2 className='card-title'>{batch_name}</h2>
      <p className='card-body'>{description}</p>
      <p className='card-text'>{time}</p>
      <button
        onClick={selectBatch}
        className='card-text btn btn-sm btn-primary'
      >
        select this batch
      </button>
    </div>
  )
}

export default SingleBatch
