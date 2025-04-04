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
      role: "Platform Engineer & Full-Stack Developer",
      company: "Rubrion",
      logoSrc: "/logo-rubrion.svg",
      period: "Nov 2024 - Present",
      location: "São Carlos, São Paulo, Brazil (Remote)",
      description: [
        "Founded Platform Engineering Cooperative developing microservices with accessible serverless deployment using Go, TypeScript, React, and Vite.",
        "Built core technologies stack: Railway + Cloudflare infrastructure with NeonDB for MVP paradise philosophy.",
        "Established cooperative network including MT2Data (Data Engineering & BI), PrismaTech (AI Consulting), and Grupo Raia (AI Community).",
        "Architecture focus: multi-tenant platforms with one-click deployment via Kubernetes and Terraform."
      ],
      skills: ["Go", "TypeScript", "React", "Vite", "Railway", "Cloudflare", "NeonDB", "Kubernetes", "Terraform"]
    },
    {
      id: 2,
      role: "Founder",
      company: "MonDesa",
      logoSrc: "/logo-mondesa.png",
      period: "Oct 2024 - Present",
      location: "São Carlos, São Paulo, Brazil (Hybrid)",
      description: [
        "Landslide-Monitoring: sensors (ESP32 + LoRa/Wi-Fi/4G) and backend in Go / Mosquitto using containers.",
        "EneMeter: energy telemetry (MKR Zero + LTC2943) to optimize sensor duty cycles.",
        "Design of a resilient MQTT schema and benchmarking of low-power radios.",
        "Proposal for a public API for municipal integration; technical partnership with CEMADEN."
      ],
      skills: ["IoT", "ESP32", "LoRa", "MQTT", "Go", "Containers", "Docker", "Kubernetes"]
    },
    {
      id: 3,
      role: "Mobile Developer Intern",
      company: "BTG Pactual Bank",
      period: "Jul 2022 - Mar 2024",
      location: "São Paulo, São Paulo, Brazil (Remote)",
      description: [
        "Developed new features for the BTG TRADER app using Flutter.",
        "Created pipelines for release automation in Azure DevOps, improving delivery speed and deployment reliability.",
        "Maintained automation scripts for testing and continuous integration using Lua and Shell Script."
      ],
      skills: ["Flutter", "Azure DevOps", "Lua", "Shell Script", "CI/CD", "Mobile Development"]
    },
    {
      id: 4,
      role: "Full-Stack Developer Intern",
      company: "U-GET",
      // logoSrc removed, making it optional
      period: "Oct 2021 - Jun 2022",
      location: "São Paulo, São Paulo, Brazil (Remote)",
      description: [
        "Developed mobile apps in Flutter, including the BenGelado app.",
        "Built backend APIs using Rust, migrating from a legacy PHP-based system.",
        "Contributed to the development of a native Android app with computer vision integration."
      ],
      skills: ["Flutter", "Rust", "API Development", "Android", "Computer Vision", "Mobile Development"]
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
            Work Experience
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
            My professional journey through organizations where I've contributed to impactful projects,
            developed innovative solutions, and grown as a technology professional.
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
                                    Developed new features for the{' '}
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
                                      BTG TRADER app
                                    </Box>
                                    {' '}using Flutter.
                                  </>
                                ) : exp.company === "U-GET" && i === 0 && item.includes("BenGelado") ? (
                                  <>
                                    Developed mobile apps in Flutter, including the{' '}
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
                                      BenGelado app
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