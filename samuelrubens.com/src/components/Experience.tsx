import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import * as lucideReact from 'lucide-react';

// Define the Experience type
interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  logoSrc?: string;
  period: string;
  duration: string;
  location: string;
  description: string;
}

export const Experience: React.FC = () => {
  const theme = useTheme();
  const MEDIA_BASE = 'https://media.samuelrubens.com';

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Engenheiro de Software Sênior",
      company: "MT2 Data",
      logoSrc: `${MEDIA_BASE}/partners/mt2data.png`,
      period: "Ago 2025 - Presente",
      duration: "",
      location: "Remoto",
      description: "Liderando modernização de infraestrutura e plataformas de dados industriais."
    },
    {
      id: 2,
      role: "Tech Lead & Engenheiro de Software Sênior",
      company: "Prisma Tech",
      logoSrc: `${MEDIA_BASE}/partners/prismatech.png`,
      period: "Jun 2024 - Ago 2025",
      duration: "1 ano e 3 meses",
      location: "Remoto",
      description: "Promovido de Engenheiro de Software Sênior (Jan 2025) e Engenheiro de Software (Jun 2024)."
    },
    {
      id: 3,
      role: "Engenheiro de Software",
      company: "BTG Pactual",
      logoSrc: `${MEDIA_BASE}/partners/btg.png`,
      period: "Jul 2022 - Mar 2024",
      duration: "1 ano e 9 meses",
      location: "Remoto",
      description: "Desenvolvi funcionalidades críticas para o BTG TRADER e mantive infraestrutura de CI/CD."
    },
    {
      id: 4,
      role: "Engenheiro de Software",
      company: "U-Get",
      logoSrc: `${MEDIA_BASE}/partners/uget.png`,
      period: "Nov 2021 - Mai 2022",
      duration: "7 meses",
      location: "Remoto",
      description: "Desenvolvi apps mobile em Flutter e auxiliei na estruturação de ferramentas DevOps."
    },
    {
      id: 5,
      role: "Engenheiro de Software",
      company: "Zenith Aerospace",
      logoSrc: `${MEDIA_BASE}/partners/zenith.png`,
      period: "Fev 2021 - Nov 2021",
      duration: "10 meses",
      location: "Remoto",
      description: "Desenvolvi app mobile open source para Rastreamento de Sondas Atmosféricas."
    }
  ];

  const getLogoStyle = (isDarkTheme: boolean) => ({
    filter: isDarkTheme
      ? 'brightness(0) invert(1) opacity(0.9)'
      : 'brightness(0) opacity(0.85)',
    transition: 'filter 0.3s ease',
    maxHeight: '45px',
    maxWidth: '140px',
    objectFit: 'contain' as const
  });

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
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
            Experiência Profissional
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
            Minha jornada profissional através de organizações onde contribuí para projetos impactantes
            e cresci como profissional de tecnologia.
          </Typography>

          <Grid container spacing={3}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} md={6} key={exp.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      border: `1px solid ${theme.palette.divider}`,
                      backgroundColor: theme.palette.background.paper,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                        <Box
                          sx={{
                            mr: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: '50px',
                            height: '50px',
                          }}
                        >
                          {exp.logoSrc ? (
                            <img
                              src={exp.logoSrc}
                              alt={`${exp.company} logo`}
                              style={getLogoStyle(theme.palette.mode === 'dark')}
                            />
                          ) : (
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                backgroundColor: 'primary.main',
                                color: 'primary.contrastText',
                              }}
                            >
                              <lucideReact.Briefcase size={24} />
                            </Box>
                          )}
                        </Box>

                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h6" component="h3" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                            {exp.role}
                          </Typography>
                          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 500 }}>
                            {exp.company}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2, color: 'text.secondary' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <lucideReact.Calendar size={14} style={{ marginRight: '6px' }} />
                          <Typography variant="body2">{exp.period}</Typography>
                        </Box>
                        {exp.duration && (
                          <Typography variant="body2" color="text.secondary">
                            ({exp.duration})
                          </Typography>
                        )}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <lucideReact.MapPin size={14} style={{ marginRight: '6px' }} />
                          <Typography variant="body2">{exp.location}</Typography>
                        </Box>
                      </Box>

                      <Typography variant="body2" color="text.secondary">
                        {exp.description}
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