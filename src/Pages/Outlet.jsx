import React from 'react'
import NavBar from '../Components/Common/NavBar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='w-full min-h-screen px-4 md:px-10 bg-[#ded7e0] text-slate-900 dark:bg-[#0C0F13] dark:text-[#F1F1F1] pb-8'>
        <div className='container mx-auto'>
          <NavBar />
          <Outlet />
        </div>
    </div>
  )
}

export default Home