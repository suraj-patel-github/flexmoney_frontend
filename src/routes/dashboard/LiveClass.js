import React, { useContext, useEffect } from 'react'
import DashNavbar from '../../Components/Dashboard/DashNavbar'
import Footer from '../../Components/Landing/Footer'
import AuthContext from '../../context/AuthContext'

const LiveClass = () => {
  let { userDetail } = useContext(AuthContext)
  // console.log(userDetail)
  return (
    <>
      <DashNavbar />
      <div className='liveclass'>
        {userDetail && userDetail[0].batch ? (
          <div className='liveclass-components card'>
            <h1 className='card-title'>{userDetail[0].batch_name}</h1>
            <h3 className='card-body'>{userDetail[0].description}</h3>
            <h2 className='card-body'>{userDetail[0].time}</h2>
          </div>
        ) : (
          <h1>Nothing</h1>
        )}
      </div>
      <Footer />
    </>
  )
}

export default LiveClass
