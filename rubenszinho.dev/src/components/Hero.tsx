import React from 'react';
import { Box, Container, Typography, Button, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import TypedText from './TypedText';
import { useTheme } from '@mui/material/styles';

export const Hero: React.FC = () => {
  const theme = useTheme();

  const socialLinks = [
    { icon: <Github size={24} />, label: 'GitHub', url: 'https://github.com/rubenszinho' },
    { icon: <Linkedin size={24} />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/samuelrubens/' },
    { icon: <Mail size={24} />, label: 'Email', url: 'mailto:samuelrubenscontato@gmail.com' },
  ];

  const typedTexts = [
    "Platform Engineer",
    "Full-Stack Developer",
    "Founder @ Rubrion & MonDesa",
    "Open-Source Contributor"
  ];

  // Updated animation variant for pure vertical movement with larger amplitude
  const floatingAnimation = {
    animate: {
      y: [0, -15, 0], // Increased amplitude from -10 to -15
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const,
      }
    }
  };

  return (
    <Box
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 12, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: theme.palette.mode === 'dark'
          ? 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)'
          : 'radial-gradient(circle at 25% 25%, rgba(37, 99, 235, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(79, 70, 229, 0.05) 0%, transparent 50%)'
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          top: '-250px',
          right: '-250px',
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Hero Content */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h6"
                component="p"
                color="primary"
                gutterBottom
                sx={{ fontWeight: 600, mb: 1 }}
              >
                Hello, I'm
              </Typography>

              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1,
                }}
              >
                Samuel Rubens
              </Typography>

              <Box sx={{ mb: 3 }}>
                <TypedText texts={typedTexts} typingSpeed={80} deletingSpeed={40} variant="h3" />
              </Box>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: '1.125rem',
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                Platform Engineer & Full-Stack Developer specializing in microservices with accessible serverless deployment.
                Founder @ Rubrion & MonDesa, developing platform engineering cooperative solutions with focus on 
                "Vite + React Router {">"} NextJS monopoly" and "Railway + NeonDB = MVP paradise" philosophy.
              </Typography>

              {/* CTA Buttons */}
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  href="#contact"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    transition: 'all 0.2s',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  Get in Touch
                </Button>
              </Box>

              {/* Social Links */}
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                }}
              >
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <Button
                      variant="text"
                      color="primary"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      sx={{
                        minWidth: 'auto',
                        p: 1,
                        color: 'text.primary',
                        borderRadius: '50%',
                        '&:hover': {
                          backgroundColor:
                            theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.08)'
                              : 'rgba(0, 0, 0, 0.04)',
                        },
                      }}
                    >
                      {link.icon}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Profile Image */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: '8%',
                    left: '8%',
                    backgroundColor: 'primary.main',
                    opacity: 0.1,
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    zIndex: 0,
                    transition: 'all 0.5s ease-in-out',
                  },
                }}
              >
                {/* Updated avatar with vertical-only floating animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.div
                    variants={floatingAnimation}
                    animate="animate"
                  >
                    <Avatar
                      src="/me.png"
                      alt="Samuel Rubens"
                      sx={{
                        width: { xs: 260, sm: 320, md: 360 },
                        height: { xs: 260, sm: 320, md: 360 },
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        border: `4px solid ${theme.palette.background.paper}`,
                        zIndex: 1,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};