import React from 'react'
import About from '../Components/About/About'
import TextMarquee from "../Components/Common/TextMarquee"
import WorkContainer from "../Components/Work/WorkContainer"

function All() {

    let text = [
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
        <TextMarquee
            text={text}
        />
        <About />
        <WorkContainer />
    </div>
  )
}

export default All