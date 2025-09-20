import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, useTheme, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import * as lucideReact from 'lucide-react';

// Define the Experience type
interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  logoSrc?: string; // Make logoSrc optional
  preserveLogoColor?: boolean; // Add flag to preserve original logo colors
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export const Experience: React.FC = () => {
  const theme = useTheme();

  // Actual experience data
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Engenheiro de Plataforma & Desenvolvedor Full-Stack",
      company: "Rubrion",
      logoSrc: "/logo-rubrion.svg",
      period: "Nov 2024 - Presente",
      location: "São Carlos, São Paulo, Brasil (Remoto)",
      description: [
        "Fundei a Cooperativa de Engenharia de Plataforma desenvolvendo microsserviços com deployment serverless acessível usando Go, TypeScript, React e Vite.",
        "Construí stack de tecnologias centrais: infraestrutura Railway + Cloudflare com NeonDB para filosofia de paraíso MVP.",
        "Estabeleci rede cooperativa incluindo MT2Data (Engenharia de Dados & BI), PrismaTech (Consultoria em IA), Grupo Raia (Comunidade de IA) e Bioexame (Plataforma de Laboratório Clínico).",
        "Foco em arquitetura: plataformas multi-tenant com deployment em um clique via Kubernetes e Terraform."
      ],
      skills: ["Go", "TypeScript", "React", "Vite", "Railway", "Cloudflare", "NeonDB", "Kubernetes", "Terraform", "Node.js"]
    },
    {
      id: 2,
      role: "Fundador",
      company: "MonDesa",
      logoSrc: "/logo-mondesa.png",
      period: "Out 2024 - Presente",
      location: "São Carlos, São Paulo, Brasil (Híbrido)",
      description: [
        "Monitoramento de Deslizamentos: sensores (ESP32 + LoRa/Wi-Fi/4G) e backend em Go / Mosquitto usando containers.",
        "EneMeter: telemetria de energia (MKR Zero + LTC2943) para otimizar ciclos de duty dos sensores.",
        "Design de esquema MQTT resiliente e benchmarking de rádios de baixo consumo.",
        "Proposta de API pública para integração municipal; parceria técnica com CEMADEN."
      ],
      skills: ["IoT", "ESP32", "LoRa", "MQTT", "Go", "Containers", "Docker", "Kubernetes"]
    },
    {
      id: 3,
      role: "Estagiário Desenvolvedor Mobile",
      company: "BTG Pactual Bank",
      period: "Jul 2022 - Mar 2024",
      location: "São Paulo, São Paulo, Brasil (Remoto)",
      description: [
        "Desenvolvi novas funcionalidades para o app BTG TRADER usando Flutter.",
        "Criei pipelines para automação de releases no Azure DevOps, melhorando velocidade de entrega e confiabilidade de deployment.",
        "Mantive scripts de automação para testes e integração contínua usando Lua e Shell Script."
      ],
      skills: ["Flutter", "Azure DevOps", "Lua", "Shell Script", "CI/CD", "Desenvolvimento Mobile"]
    },
    {
      id: 4,
      role: "Estagiário Desenvolvedor Full-Stack",
      company: "U-GET",
      // logoSrc removed, making it optional
      period: "Out 2021 - Jun 2022",
      location: "São Paulo, São Paulo, Brasil (Remoto)",
      description: [
        "Desenvolvi aplicativos mobile em Flutter, incluindo o app BenGelado.",
        "Construí APIs backend usando Rust, migrando de um sistema legado baseado em PHP.",
        "Contribuí para o desenvolvimento de um app Android nativo com integração de visão computacional."
      ],
      skills: ["Flutter", "Rust", "Desenvolvimento de API", "Android", "Visão Computacional", "Desenvolvimento Mobile"]
    }
  ];

  // Function to apply theme-based filters to SVG logos
  const getLogoStyle = (isDarkTheme: boolean, preserveColor: boolean = false) => ({
    filter: preserveColor
      ? 'none' // Preserve original colors
      : isDarkTheme
        ? 'brightness(0) invert(1) opacity(0.9)' // Make logos white in dark mode
        : 'brightness(0) opacity(0.85)', // Make logos black in light mode
    transition: 'filter 0.3s ease',
    maxHeight: '45px',
    maxWidth: '140px',
    objectFit: 'contain' as const
  });

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.mode === 'dark'
          ? 'rgba(15, 23, 42, 0.6)'
          : 'rgba(248, 250, 252, 0.8)',
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
            Minha jornada profissional através de organizações onde contribuí para projetos impactantes,
            desenvolvi soluções inovadoras e cresci como profissional de tecnologia.
          </Typography>

          {/* Experience Cards */}
          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} key={exp.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    elevation={0}
                    sx={{
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
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, mb: 2 }}>
                        {/* Company Logo or Icon - Standardized container size with better mobile alignment */}
                        <Box
                          sx={{
                            mr: { xs: 0, sm: 3 },
                            mb: { xs: 2, sm: 0 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: { xs: 'flex-start', sm: 'center' }, // Left align on mobile, center on desktop
                            minWidth: { sm: '140px' }, // Only set fixed width on larger screens
                            width: { xs: 'auto', sm: '140px' }, // Auto width on mobile for better alignment
                            height: '60px',
                            pl: { xs: 0.5, sm: 0 }, // Small padding on mobile to align with content
                          }}
                        >
                          {exp.logoSrc ? (
                            <img
                              src={exp.logoSrc}
                              alt={`${exp.company} logo`}
                              style={getLogoStyle(theme.palette.mode === 'dark', exp.preserveLogoColor)}
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

                        {/* Role and Company */}
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                            {exp.role}
                          </Typography>
                          <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                            {exp.company === "Rubrion" ? (
                              <Box
                                component="a"
                                href="https://github.com/Rubrion"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  color: 'primary.main',
                                  textDecoration: 'none',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: 0.5,
                                  '&:hover': {
                                    textDecoration: 'underline',
                                  }
                                }}
                              >
                                {exp.company}
                                <lucideReact.Github size={16} />
                              </Box>
                            ) : exp.company === "MonDesa" ? (
                              <Box
                                component="a"
                                href="https://github.com/MonDesa"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  color: 'primary.main',
                                  textDecoration: 'none',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: 0.5,
                                  '&:hover': {
                                    textDecoration: 'underline',
                                  }
                                }}
                              >
                                {exp.company}
                                <lucideReact.Github size={16} />
                              </Box>
                            ) : exp.company}
                          </Typography>

                          {/* Period and Location */}
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2, color: 'text.secondary' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <lucideReact.Calendar size={16} style={{ marginRight: '6px' }} />
                              <Typography variant="body2">{exp.period}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <lucideReact.MapPin size={16} style={{ marginRight: '6px' }} />
                              <Typography variant="body2">{exp.location}</Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>

                      {/* Description - Also align the bullet points better */}
                      <Box sx={{ mb: 2 }}>
                        <ul style={{ paddingLeft: '16px', margin: '0' }}>
                          {exp.description.map((item, i) => (
                            <li key={i}>
                              <Typography variant="body2" sx={{ mb: 0.5 }}>
                                {exp.company === "BTG Pactual Bank" && i === 0 && item.includes("BTG TRADER") ? (
                                  <>
                                    Desenvolvi novas funcionalidades para o{' '}
                                    <Box
                                      component="a"
                                      href="https://play.google.com/store/apps/details?id=com.btg.pactual.homebroker.mobile&hl=pt_BR"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      sx={{
                                        color: 'inherit',
                                        textDecoration: 'underline',
                                        '&:hover': {
                                          color: 'primary.main',
                                        }
                                      }}
                                    >
                                      app BTG TRADER
                                    </Box>
                                    {' '}usando Flutter.
                                  </>
                                ) : exp.company === "U-GET" && i === 0 && item.includes("BenGelado") ? (
                                  <>
                                    Desenvolvi aplicativos mobile em Flutter, incluindo o{' '}
                                    <Box
                                      component="a"
                                      href="https://play.google.com/store/apps/details?id=com.uget_maintenance"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      sx={{
                                        color: 'inherit',
                                        textDecoration: 'underline',
                                        '&:hover': {
                                          color: 'primary.main',
                                        }
                                      }}
                                    >
                                      app BenGelado
                                    </Box>.
                                  </>
                                ) : (
                                  item
                                )}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>

                      {/* Skills */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                        {exp.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            color="primary"
                            variant="outlined"
                            sx={{
                              borderRadius: '4px',
                              '& .MuiChip-label': {
                                px: 1.5
                              }
                            }}
                          />
                        ))}
                      </Box>
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