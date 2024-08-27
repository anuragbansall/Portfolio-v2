import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className='w-full flex justify-center items-center py-16'>
        <div className='flex items-center gap-4 w-fit p-2 border border-[#373D43] rounded-full'>
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
                    <NavLink to={el.path} key={idx} className='  rounded-full py-1 px-8' style={(e) => (
                        e.isActive ? {
                            backgroundColor: "#2A2F35",
                            border: "2px solid #373D43",
                        } : {border: "2px solid transparent",}
                    )}>{el.label}</NavLink>
                ))
            }
        </div>
    </div>
  )
}

export default NavBar