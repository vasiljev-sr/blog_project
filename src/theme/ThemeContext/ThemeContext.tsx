import {createContext} from "react";
export type Theme = 'light' | 'dark'

export interface ThemeContextProps {
    theme?: Theme,
    setTheme?: (theme : Theme) => void,
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'
export const ThemeContext =  createContext<ThemeContextProps>({})