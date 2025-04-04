import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    themeMode: ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // Get initial theme from localStorage or use system preference or default to dark
    const getInitialTheme = (): ThemeMode => {
        const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            return savedTheme;
        }

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }

        return 'dark'; // Default to dark
    };

    const [themeMode, setThemeMode] = useState<ThemeMode>('dark'); // Default value before useEffect runs

    // Set the initial theme after mount
    useEffect(() => {
        setThemeMode(getInitialTheme());
    }, []);

    // Update localStorage when theme changes
    useEffect(() => {
        localStorage.setItem('theme', themeMode);
        // Add or remove a CSS class on the html element for global styles
        document.documentElement.setAttribute('data-theme', themeMode);
    }, [themeMode]);

    const toggleTheme = () => {
        setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            <MUIThemeProvider theme={currentTheme}>{children}</MUIThemeProvider>
        </ThemeContext.Provider>
    );
};
