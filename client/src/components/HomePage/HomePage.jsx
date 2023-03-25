import React from 'react'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Profile from '../Profile/Profile'
import Footer from '../Footer/Footer'
function HomePage() {
  return (
    <div className='h-full'>
      <Navbar />
      <div className="flex px-10">
        <Main />
        <Profile />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
