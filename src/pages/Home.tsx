import React from 'react'
import Header from '../components/Header'
import Signup from './Signup'

const Home = () => {
  return (
    <div className="bg-[#0f172a] w-screen h-screen flex items-center justify-center">
      {/* <Header /> */}
      <Signup />
    </div>
  )
}

export default Home