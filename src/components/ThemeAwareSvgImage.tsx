import React from 'react';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

interface ThemeAwareSvgImageProps extends BoxProps {
    src: string;
    alt: string;
    height?: number | string;
    width?: number | string;
    invertInDarkMode?: boolean;
    opacity?: number;
}

const ThemeAwareSvgImage: React.FC<ThemeAwareSvgImageProps> = ({
    src,
    alt,
    height = 'auto',
    width = 'auto',
    invertInDarkMode = true,
    opacity = 0.9,
    sx,
    ...props
}) => {
    const theme = useMuiTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Box
            component="img"
            src={src}
            alt={alt}
            sx={{
                height,
                width,
                filter: invertInDarkMode && isDarkMode
                    ? `brightness(0) invert(1) opacity(${opacity})`
                    : isDarkMode
                        ? `opacity(${opacity})`
                        : `brightness(0) opacity(${opacity})`,
                transition: 'filter 0.3s ease',
                objectFit: 'contain',
                ...sx
            }}
            {...props}
        />
    );
};

export default ThemeAwareSvgImage;
