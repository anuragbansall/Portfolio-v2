import React, { useEffect } from 'react'
import Routing from "./utils/Routing"
import { useThemeContext } from './context/ThemeContext'
import { Analytics } from '@vercel/analytics';

function App() {

  Analytics();

  const {theme} = useThemeContext()
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(theme)
  })

  return (
    <>
      <Routing />
    </>
  )
}

export default App