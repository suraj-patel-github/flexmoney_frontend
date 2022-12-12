import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ChooseBatch from '../../Components/Dashboard/ChooseBatch'
import DashNavbar from '../../Components/Dashboard/DashNavbar'
import GoToPayment from '../../Components/Dashboard/GoToPayment'
import OnlineClass from '../../Components/Dashboard/OnlineClass'
import Footer from '../../Components/Landing/Footer'
import AuthContext from '../../context/AuthContext'

const Dashboard = () => {
  // const navigate = useNavigate()
  return (
    <div>
      <DashNavbar />
      <div className='dashboard'>
        <div className='dashboard-components'>
          <ChooseBatch />
        </div>
        <div className='dashboard-components'>
          <OnlineClass />
        </div>
        <div className='dashboard-components'>
          <GoToPayment />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
