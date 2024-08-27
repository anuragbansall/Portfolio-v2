import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import About from '../Components/About/About'
import All from '../Pages/All'
import WorkContainer from '../Components/Work/WorkContainer'

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/" element={<All />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<WorkContainer />} />
        </Route>
    </Routes>
  )
}

export default Routing