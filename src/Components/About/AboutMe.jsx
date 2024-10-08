import React from 'react'
import { TiDownload } from "react-icons/ti";
import { FaEye } from "react-icons/fa";
import face from "../../assets/Images/face.gif"
import face2 from "../../assets/Images/face2.gif"
import resume from "../../assets/Resume/resume.pdf"
import SocialIconsContainer from './SocialIconsContainer';
import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";
import { useThemeContext } from '../../context/ThemeContext';

function AboutMe() {

    const {theme, toggleTheme} = useThemeContext()

  return (
    <div className='flex flex-col md:flex-row w-full gap-8'>
                    <div className='w-full md:w-[30rem] flex flex-col gap-6 dark:bg-[#101215] bg-[#EAEAEC] border dark:border-[#373D43] border-[#EEEEEE] p-4 md:p-8 rounded-2xl'>
                        <div className='flex flex-col md:flex-row w-full items-center gap-8'>
                            <div className='p-1 w-[6rem] h-[6rem] rounded-full dark:bg-zinc-900 overflow-hidden'>
                                <img src={theme === "dark" ? face2 : face} className='h-full w-full object-cover rounded-full' />
                            </div>
                            <h2 className='font-semibold text-3xl text-center md:text-4xl overflow-hidden'>Anurag Bansal</h2>
                        </div>
                        <p className=''>
                        Hi I'm Anurag Bansal Passionate web developer and computer science student, dedicated to creating great user interface and user experience.
                        </p>
                    </div>
                    <div className='flex-grow flex flex-col gap-4 pt-4'>
                        <div className='flex gap-4 flex-col xl:flex-row'>
                            <div className='flex w-full justify-between dark:bg-[#101215] bg-[#EAEAEC] border dark:border-[#373D43] border-[#EEEEEE] p-8 rounded-2xl'>
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
                            <div className='flex w-full items-center dark:bg-[#101215] bg-[#EAEAEC] border dark:border-[#373D43] border-[#EEEEEE] p-2 rounded-2xl cursor-pointer' onClick={toggleTheme} >
                                <div className={`h-[5rem] w-full flex justify-center items-center text-4xl rounded-xl ${theme === 'light' && "dark:bg-[#17191d] bg-[#DADADA]"}`}>
                                    <FiSun />
                                </div>
                                <div className={`h-[5rem] w-full flex justify-center items-center text-4xl rounded-xl ${theme === 'dark' && "dark:bg-[#17191d] bg-[#DADADA]"}`}>
                                    <BsMoonStarsFill />
                                </div>
                            </div>
                        </div>
                        <SocialIconsContainer />
                    </div>
                </div>
  )
}

export default AboutMe