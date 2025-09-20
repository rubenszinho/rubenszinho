import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTheme as useMuiTheme } from '@mui/material/styles';

const ThemeToggle: React.FC = () => {
    const { themeMode, toggleTheme } = useTheme();
    const muiTheme = useMuiTheme();

    return (
        <Tooltip title={`Switch to ${themeMode === 'dark' ? 'light' : 'dark'} mode`}>
            <IconButton
                onClick={toggleTheme}
                color="inherit"
                aria-label="toggle theme"
                sx={{
                    p: 1,
                    borderRadius: 1,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        backgroundColor: muiTheme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                    },
                }}
            >
                {themeMode === 'dark' ? (
                    <Sun size={22} />
                ) : (
                    <Moon size={22} />
                )}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeToggle;
