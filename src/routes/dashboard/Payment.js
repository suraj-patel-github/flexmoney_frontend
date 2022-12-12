import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const Payment = () => {
  let { takeSubscription } = useContext(AuthContext)
  return (
    <div>
      <div className='payment card'>
        <h2 className='payhere card-title'>Pay Here</h2>
        <label htmlFor='cardHolderName'>Card Holder Name</label>
        <input
          type='text'
          name='cardHolderName'
          className='paymentCard card-body'
          placeholder='Mike Hussey'
        />
        <label htmlFor='cardHolderName'>Card Number</label>
        <input
          type='number'
          name='cardNumber'
          className='paymentCard card-body'
          placeholder='XXXX-XXXX-XXXX-XXXX'
          maxLength={16}
        />
        <div className='cardFlex1'>
          <div className='cardFlex2'>
            <label htmlFor='cardHolderName'>Expiry Date</label>
            <input
              type='date'
              name='expiryDate'
              className='paymentCard card-body'
              placeholder=''
            />
          </div>

          <div className='cardFlex2'>
            <label htmlFor='cardHolderName'>CVV</label>
            <input
              type='number'
              name='cvv'
              className='paymentCard card-body'
              placeholder='***'
            />
          </div>
        </div>
        <button
          onClick={takeSubscription}
          className='payment-button btn btn-lg btn-primary'
        >
          Pay !!
        </button>
      </div>
    </div>
  )
}

export default Payment
