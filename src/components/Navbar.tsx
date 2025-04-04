import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide
} from '@mui/material';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme as useMuiTheme } from '@mui/material/styles';

interface NavItem {
  label: string;
  href: string;
}

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const muiTheme = useMuiTheme();

  const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Close mobile menu if open
      if (mobileOpen) {
        handleDrawerToggle();
      }
    }
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          py: 1.5,
          borderBottom: `1px solid ${muiTheme.palette.divider}`
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
          Samuel Rubens
        </Typography>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <X />
        </IconButton>
      </Box>
      <List sx={{ pt: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(item.href)}
              sx={{
                textAlign: 'center',
                py: 1.5,
                '&:hover': {
                  backgroundColor: muiTheme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'rgba(0, 0, 0, 0.04)',
                }
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{
            backgroundColor: scrolled
              ? muiTheme.palette.mode === 'dark'
                ? 'rgba(30, 41, 59, 0.8)'
                : 'rgba(255, 255, 255, 0.8)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(8px)' : 'none',
            transition: 'all 0.3s ease',
            boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
          }}
        >
          <Container>
            <Toolbar
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: 700,
                  background: scrolled
                    ? 'none'
                    : muiTheme.palette.mode === 'dark'
                      ? 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)'
                      : 'linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)',
                  WebkitBackgroundClip: scrolled ? 'none' : 'text',
                  WebkitTextFillColor: scrolled ? 'inherit' : 'transparent',
                  transition: 'all 0.3s ease'
                }}
              >
                Samuel Rubens
              </Typography>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    sx={{
                      color: 'text.primary',
                      mx: 1,
                      fontWeight: 500,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: 0,
                        height: '2px',
                        bottom: '-2px',
                        left: 0,
                        backgroundColor: 'primary.main',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover:after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <ThemeToggle />
              </Box>

              {/* Mobile Navigation */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                <ThemeToggle />
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ ml: 1 }}
                >
                  <Menu />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '75%',
            maxWidth: '300px'
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Toolbar placeholder to prevent content from being hidden under the AppBar */}
      <Toolbar />
    </React.Fragment>
  );
};