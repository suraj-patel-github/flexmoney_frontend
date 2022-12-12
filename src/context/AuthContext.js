import React, { createContext, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
  )
  let [user, setUser] = useState(() =>
    localStorage.getItem('authTokens')
      ? localStorage.getItem('authTokens')
      : null
  )
  let [userDetail, setUserDetail] = useState(null)
  let [batchDetail, setBatchDetail] = useState(null)
  let [currentBatch, setCurrentBatch] = useState(null)
  const navigate = useNavigate()

  //Register User

  let registerUser = async (e) => {
    e.preventDefault()
    let response = await fetch('https://flexmoney-backend-1kyg.onrender.com/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.name.value,
        age: e.target.age.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    })
    let data = await response.json()
    if (response.status === 200) {
      navigate('/login')
      alert('Successfully Registered')
    } else {
      alert(data.message)
    }
  }

  //Login User

  let loginUser = async (e) => {
    e.preventDefault()
    let response = await fetch('https://flexmoney-backend-1kyg.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    })
    let data = await response.json()

    if (response.status === 200) {
      setAuthTokens(data.token)
      setUser(data.token)
      localStorage.setItem('authTokens', data.token)
      navigate('/user/dashboard')
      console.log(data)
    } else {
      alert('something went wrong')
    }
  }

  //check Subscription

  let checkSubscription = async (e) => {
    e.preventDefault()
    if (user) {
      let response = await fetch(
        'https://flexmoney-backend-1kyg.onrender.com/renewal/checkSubscription',
        {
          method: 'GET',
          headers: {
            Authorization: authTokens,
          },
        }
      )
      try {
        let data = await response.json()
        if (response.status === 200) {
          console.log(data)
          navigate('/user/dashboard/liveclass')
        } else {
          alert(data.message + '\nPay first to avail subscription !!')
          navigate('/user/dashboard/payment')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  // // Take Subscription

  let takeSubscription = async (e) => {
    e.preventDefault()
    if (user) {
      let response = await fetch('https://flexmoney-backend-1kyg.onrender.com/renewal', {
        method: 'POST',
        headers: {
          Authorization: authTokens,
        },
      })
      try {
        let data = await response.json()
        if (response.status === 200) {
          alert('Payment Successful')
          navigate('/user/dashboard')
        } else if (response.status === 401) {
          alert(data.message)
          navigate('/user/dashboard')
        } else {
          alert(data.message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  // //Get User Details
  let getUserDetails = async (e) => {
    // e.preventDefault()
    if (user) {
      let response = await fetch('https://flexmoney-backend-1kyg.onrender.com/user', {
        method: 'GET',
        headers: {
          Authorization: authTokens,
        },
      })
      try {
        let data = await response.json()
        if (response.status === 200) {
          setUserDetail(data.user.rows)
          // setCurrentBatch(data.user.rows[0].batch)
          // console.log(data.user.rows[0].batch)
        } else {
          console.log(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  // //Is batch Selected

  let isBatchSelected = async (e) => {
    e.preventDefault()
    if (user) {
      let response = await fetch(
        'https://flexmoney-backend-1kyg.onrender.com/renewal/isBatchSelected',
        {
          method: 'GET',
          headers: {
            Authorization: authTokens,
          },
        }
      )
      try {
        let data = await response.json()
        if (response.status === 200) {
          navigate('/user/dashboard/select_batch')
        } else {
          alert('You are already enrolled in a batch')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  // All Batches

  let allBatch = async (e) => {
    // e.preventDefault()
    let response = await fetch('https://flexmoney-backend-1kyg.onrender.com/batch', {
      method: 'GET',
      headers: {
        Authorization: authTokens,
      },
    })
    let data = await response.json()
    // console.log(response)
    try {
      // console.log('hello')
      if (response.status === 200) {
        // console.log(data.batches)
        setBatchDetail(data.batches)
      } else {
        console.log(data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // select a batch

  // let selectBatch = async () => {
  //   if (userDetail.batch) {
  //     let response = await fetch(
  //       `https://flexmoney-backend-1kyg.onrender.com/batch/single/${userDetail.batch}`,
  //       {
  //         method: 'GET',
  //         headers: {
  //           Authorization: authTokens,
  //         },
  //       }
  //     )
  //     let data = await response.json()
  //     try {
  //       if (response.status === 200) {
  //         console.log(data)
  //       } else {
  //         console.log(data.message)
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // }
  //Current Batch

  //Logout User

  let logoutUser = async (e) => {
    if (user) {
      localStorage.clear()
      window.location.reload(true)
    }
  }

  useEffect(
    () => {
      getUserDetails()
    },
    user ? [userDetail] : [-1]
  )

  let contextData = {
    user: user,
    registerUser: registerUser,
    loginUser: loginUser,
    checkSubscription: checkSubscription,
    takeSubscription: takeSubscription,
    userDetail: userDetail,
    logoutUser: logoutUser,
    isBatchSelected: isBatchSelected,
    allBatch: allBatch,
    getUserDetails: getUserDetails,
    allBatch: allBatch,
    batchDetail: batchDetail,
    authTokens: authTokens,
    currentBatch: currentBatch,
    // selectBatch: selectBatch,
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}
