import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <section id="about">
            <Hero />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default App;