import React from 'react'
import About from '../Components/About/About'
import WorkContainer from "../Components/Work/WorkContainer"
import TextMarquee from "../Components/Common/TextMarquee"

function All() {

  let MarqueeText = [
    <h2>Anurag's Personal Portfolio</h2>,
    <span>🌑</span>,
    <h2>Anurag's Personal Portfolio</h2>,
    <span>🌑</span>,
    <h2>Anurag's Personal Portfolio</h2>,
    <span>🌑</span>,
    <h2>Anurag's Personal Portfolio</h2>,
    <span>🌑</span>,
    <h2>Anurag's Personal Portfolio</h2>,
    <span>🌑</span>
  ]

  return (
    <div className='flex flex-col gap-8'>
      <div className='w-[40rem] max-w-full mx-auto'>
                  <TextMarquee
                    text={MarqueeText}
                  />
                </div>
        <About />
        <WorkContainer />
    </div>
  )
}

export default All