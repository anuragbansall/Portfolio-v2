import React from 'react'
import TextMarquee from '../Common/TextMarquee';
import AboutMe from './AboutMe';
import MySkills from './MySkills';


function About() {

  return (
    <div>
        <div className='w-full flex flex-col gap-8'>
            <div className='flex flex-col gap-8'>
                <AboutMe />
                <MySkills />
            </div>
        </div>
    </div>
  )
}

export default About