import React, { createContext, useContext } from "react"

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
})

export const useThemeContext = () => {
    return useContext(ThemeContext)
}