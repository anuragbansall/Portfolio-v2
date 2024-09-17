import React from 'react'
import { NavLink } from "react-router-dom"
import {useThemeContext} from "../../context/ThemeContext"

function NavBar() {

    const {theme} = useThemeContext()

  return (
    <div className='w-full flex justify-center items-center py-10 sm:py-16'>
        <div className='flex items-center gap-2 sm:gap-4 w-fit p-2 border dark:border-[#373D43] border-[#EEEEEE] rounded-full'>
            {
                [{
                    path: "/",
                    label: "All"
                },
                {
                    path: "/about",
                    label: "About"
                },
                {
                    path: "/work",
                    label: "Work"
                },
            ].map((el, idx) => (
                    <NavLink to={el.path} key={idx} className='rounded-full py-1 px-4 sm:px-8' style={(e) => (
                        e.isActive ? {
                            backgroundColor: `${theme === 'dark' ? "#2A2F35" : "#EAEAEC"}`,
                            border: `${theme === 'dark' ? "2px solid #373D43" : "2px solid #EEEEEE"}`,
                        } : {border: "2px solid transparent",}
                    )}>{el.label}</NavLink>
                ))
            }
        </div>
    </div>
  )
}

export default NavBar