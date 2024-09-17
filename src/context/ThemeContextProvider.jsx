import React, { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeContextProvider({children}){

    const [theme, setTheme] = useState('light');

    const toggleTheme = ()  => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    }

    const value = useMemo(() => (
        {
            theme,
            toggleTheme,
        }
    ), [theme])

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if(theme){
            setTheme(theme)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return(
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider