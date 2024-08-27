import React from 'react'
import { TiDownload } from "react-icons/ti";
import { FaEye } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { IoMdMailUnread } from "react-icons/io";
import face from "../../assets/Images/face.gif"
import resume from "../../assets/Resume/resume.pdf"

function AboutMe() {
    
    const socialIconsPngs = [
        {
        label: <FaLinkedin />,
        link: 'https://www.linkedin.com/in/anuragbansall',
        color: "#0077B5"
        },
        {
        label: <IoMdMailUnread />        ,
        link: 'mailto:anuragbansalwork@gmail.com',
        color: "#0077B5"
        },
        {
        label: <FaGithub />,
        link: 'https://github.com/anuragbansall',
        color: "#DADADA"
        },
        {
        label: <SiHackerrank />,
        link: 'https://www.hackerrank.com/devanuragbansal',
        color: "#2EC866"
        },
        {
        label: <SiLeetcode />,
        link: 'https://leetcode.com/anuragbansall',
        color: "#F8C300"
        },
    ]

  return (
    <div className='flex flex-col md:flex-row w-full gap-8'>
                    <div className='w-full md:w-[30rem] flex flex-col gap-6 bg-[#101215] border border-[#373D43] p-4 md:p-8 rounded-2xl'>
                        <div className='flex flex-col md:flex-row w-full items-center gap-8'>
                            <div className='h-[6rem] w-[6rem] rounded-full bg-zinc-900'>
                                <img src={face} alt="" className='h-full w-full object-cover' />
                            </div>
                            <h2 className='font-semibold text-3xl text-center md:text-4xl overflow-hidden'>Anurag Bansal</h2>
                        </div>
                        <p className=''>
                        Hi I'm Anurag Bansal Passionate web developer and computer science student, dedicated to creating great user interface and user experience.
                        </p>
                    </div>
                    <div className='flex-grow flex flex-col gap-4 pt-4'>
                        <div className='flex justify-between bg-[#101215] border border-[#373D43] p-8 rounded-2xl'>
                            <h2 className='font-semibold text-2xl md:text-3xl'>RESUME</h2>
                            <div className='flex items-center gap-4  text-[2rem]'>
                                <span onClick={ () =>  window.open(resume, '_blank')} className="cursor-pointer" >
                                    <TiDownload />
                                </span>
                                <span onClick={ () =>  window.location.href = 'https://drive.google.com/file/d/1y9hkEwEzqWTTLnWYSsLNThauusk-Sl7o/view?usp=sharing' } className="cursor-pointer" >
                                    <FaEye />
                                </span>
                            </div>
                        </div>
                        <div className='flex justify-center md:justify-start flex-wrap gap-4'>
                            {
                                socialIconsPngs.map((item, idx) => (
                                    <div key={idx} className={`bg-[#101215] hover:bg-[#191b1e] border border-[#373D43] p-8 text-[2rem] md:text-[3rem] rounded-2xl cursor-pointer`} onClick={() => {window.location.href = item.link}}>
                                        {
                                            <span className=''>
                                                {item.label}
                                            </span>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
  )
}

export default AboutMe