import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useTheme as useMuiTheme } from '@mui/material/styles';

interface TypedTextProps {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delayAfterType?: number;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
}

const TypedText: React.FC<TypedTextProps> = ({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    delayAfterType = 1500,
    variant = 'h2',
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const muiTheme = useMuiTheme();

    // Find the longest text to determine minimum container height
    const longestText = texts.reduce((longest, text) =>
        text.length > longest.length ? text : longest, '');

    useEffect(() => {
        if (texts.length === 0) return;

        // Typing forward
        if (isTyping && charIndex < texts[textIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + texts[textIndex][charIndex]);
                setCharIndex(prev => prev + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        }

        // Completed typing current text
        else if (isTyping && charIndex === texts[textIndex].length) {
            const timeout = setTimeout(() => {
                setIsTyping(false);
            }, delayAfterType);
            return () => clearTimeout(timeout);
        }

        // Deleting text
        else if (!isTyping && charIndex > 0) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev.slice(0, -1));
                setCharIndex(prev => prev - 1);
            }, deletingSpeed);
            return () => clearTimeout(timeout);
        }

        // Move to next text
        else if (!isTyping && charIndex === 0) {
            setIsTyping(true);
            setTextIndex((prev) => (prev + 1) % texts.length);
        }
    }, [charIndex, isTyping, textIndex, texts, typingSpeed, deletingSpeed, delayAfterType]);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                minHeight: variant === 'h3' ? '3.75rem' : 'auto', // Adjust based on your typography size
                // This ensures consistent height
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    display: 'inline-block',
                    visibility: 'hidden',
                    whiteSpace: 'pre',
                }}
            >
                <Typography variant={variant} component="span">
                    {longestText}
                </Typography>
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Typography variant={variant} component="span">
                    {displayedText}
                </Typography>
                <Box
                    component="span"
                    sx={{
                        borderRight: `2px solid ${muiTheme.palette.primary.main}`,
                        height: '1em',
                        animation: 'blink-caret 0.75s step-end infinite',
                        ml: 0.5,
                        '@keyframes blink-caret': {
                            'from, to': { borderColor: 'transparent' },
                            '50%': { borderColor: muiTheme.palette.primary.main },
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default TypedText;
