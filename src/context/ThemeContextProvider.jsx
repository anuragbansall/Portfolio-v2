import React, { useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeContextProvider({children}){

    const [theme, setTheme] = useState('dark');

    const toggleTheme = ()  => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    }

    const value = useMemo(() => (
        {
            theme,
            toggleTheme,
        }
    ), [theme])

    return(
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider