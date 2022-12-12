import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './utils/PrivateRoute'

//Routes
import Landing from './routes/landing/landing'
import Register from './routes/landing/Register'
import Login from './routes/landing/Login'
import Dashboard from './routes/dashboard/Dashboard'
import Payment from './routes/dashboard/Payment'
import LiveClass from './routes/dashboard/LiveClass'
import AllBatches from './routes/dashboard/AllBatches'

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path='/' element={<Landing />}></Route>
            <Route exact path='/register' element={<Register />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route
              exact
              path='/user/dashboard'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            ></Route>
            <Route
              exact
              path='/user/dashboard/payment'
              element={<Payment />}
            ></Route>
            <Route
              exact
              path='/user/dashboard/liveclass'
              element={<LiveClass />}
            ></Route>
            <Route
              exact
              path='/user/dashboard/select_batch'
              element={<AllBatches />}
            ></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
