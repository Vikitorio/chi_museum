import { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import type { PaletteMode } from '@mui/material';
const ThemeContext = createContext<ThemeContextProps | null>(null);
interface ThemeProviderProps {
    children: React.ReactNode;
}
interface ThemeContextProps {
    theme: string;
    setTheme: (theme: PaletteMode) => void;
}
const CustomThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<PaletteMode>(localStorage.getItem("theme") as PaletteMode || "light");
    const changeTheme = (newTheme: PaletteMode) => {
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    }
    const colorPalette = useMemo(() => {
        return createTheme({
            palette: {
                mode: theme
            }
        })
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme: theme, setTheme: changeTheme }}>
            <ThemeProvider theme={colorPalette}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export { CustomThemeProvider, ThemeContext };
