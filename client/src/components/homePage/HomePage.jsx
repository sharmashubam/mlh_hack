import React from 'react'
import Navbar from '../navbar/Navbar'
import Main from '../main/Main'
import Profile from '../profile/Profile'
import Footer from '../footer/Footer'
import Up_loadingform from '../form/UP_loadingform'
function HomePage() {
  return (
    <div className='h-full '>
      <Navbar />
      <div className="grid grid-cols-2 gap-5">
       <Main />
        <Profile />
      </div>
    <Footer />
    </div>
  )
}

export default HomePage
