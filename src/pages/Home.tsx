import React from 'react'
import Header from '../components/Header'
import Signup from './Signup'
import Login from './Login'

const Home = () => {
  return (
    <div className="bg-[#0f172a] w-screen h-screen flex items-center justify-center">
      {/* <Header /> */}
      {/* <Signup /> */}
      <Login />
    </div>
  )
}

export default Home