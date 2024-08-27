import React from 'react'
import TextMarquee from '../Common/TextMarquee';
import AboutMe from './AboutMe';
import MySkills from './MySkills';

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


function About() {

  return (
    <div>
        <div className='w-full flex flex-col gap-8'>
            <div className='flex flex-col gap-8'>
                <div className='w-[40rem] max-w-full mx-auto'>
                  <TextMarquee
                    text={MarqueeText}
                  />
                </div>
                <AboutMe />
                <MySkills />
            </div>
        </div>
    </div>
  )
}

export default About