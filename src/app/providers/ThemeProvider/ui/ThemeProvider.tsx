import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "shared/config/theme";
import {FC, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || 'light'
export const ThemeProvider: FC = ({children}) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({theme: theme, setTheme: setTheme }), [theme])

    return(
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>)
}