import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  logoSrc?: string;
  period: string;
  description: string;
}

export const Education: React.FC = () => {
  const theme = useTheme();
  const MEDIA_BASE = 'https://media.rubenszinho.dev';

  const education: EducationItem[] = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "University of São Paulo - USP",
      logoSrc: `${MEDIA_BASE}/misc/usp.png`,
      period: "Mar 2023 - Present",
      description: "Currently pursuing a Computer Science degree at one of Latin America's most prestigious universities, focusing on distributed systems, algorithms and data structures."
    },
    {
      id: 2,
      degree: "Bachelor of Computer Engineering",
      institution: "University of São Paulo - USP",
      logoSrc: `${MEDIA_BASE}/misc/usp.png`,
      period: "Mar 2020 - 2023",
      description: "Started in Computer Engineering before transferring to Computer Science. Completed foundational courses in electrical circuits, computer architecture, and digital systems."
    },
    {
      id: 3,
      degree: "Cambridge Advanced Exam (CAE)",
      institution: "Cambridge English Assessment",
      logoSrc: `${MEDIA_BASE}/partners/cambridge.png`,
      period: "2019",
      description: "Achieved C1 CEFR level certification in English proficiency, demonstrating advanced language skills in reading, writing, speaking and listening."
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.mode === 'dark'
          ? 'rgba(15, 23, 42, 0.3)'
          : 'rgba(248, 250, 252, 0.5)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 1,
              textAlign: 'center'
            }}
          >
            Education & Certifications
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 6,
              maxWidth: 700,
              mx: 'auto',
              textAlign: 'center'
            }}
          >
            My academic background and professional certifications that form the foundation of my expertise in platform engineering, 
            full-stack development, and cooperative business models.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {education.map((item, index) => (
              <Grid item xs={12} md={6} key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      p: 1,
                      border: `1px solid ${theme.palette.divider}`,
                      backgroundColor: theme.palette.background.paper,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3, flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            mr: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 45,
                            height: 45,
                            borderRadius: '50%',
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                          }}
                        >
                          <GraduationCap size={22} />
                        </Box>
                        <Box>
                          <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                            {item.degree}
                          </Typography>
                          <Typography variant="body2" color="primary" sx={{ mt: 0.5 }}>
                            {item.institution.includes("USP") ? (
                              <a
                                href="https://www.usp.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: theme.palette.primary.main,
                                  textDecoration: 'none'
                                }}
                              >
                                {item.institution}
                              </a>
                            ) : item.institution.includes("Cambridge") ? (
                              <a
                                href="https://www.cambridgeenglish.org/exams-and-tests/advanced/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: theme.palette.primary.main,
                                  textDecoration: 'none'
                                }}
                              >
                                {item.institution}
                              </a>
                            ) : item.institution}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Calendar size={16} style={{ marginRight: '6px', opacity: 0.8 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item.period}
                        </Typography>
                      </Box>

                      <Typography variant="body1" paragraph>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};