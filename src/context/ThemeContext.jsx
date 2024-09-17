import React, { createContext, useContext } from "react"

export const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => {}
})

export const useThemeContext = () => {
    return useContext(ThemeContext)
}