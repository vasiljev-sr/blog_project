import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from 'shared/config/theme';
import { ReactNode, useMemo, useState } from 'react';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light';
export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  document.body.setAttribute('data-theme', initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
