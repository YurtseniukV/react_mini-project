import React, {createContext, useState, ReactNode} from 'react';
import "../../assets/css/theme.css"

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className={`App ${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};