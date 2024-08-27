import React from 'react'
import About from '../Components/About/About'
import WorkContainer from "../Components/Work/WorkContainer"

function All() {

  return (
    <div className='flex flex-col gap-8'>
        <About />
        <WorkContainer />
    </div>
  )
}

export default All