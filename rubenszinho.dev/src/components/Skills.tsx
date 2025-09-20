import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

import {
  SiGo,
  SiTypescript,
  SiLua,
  SiGnubash,
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiGithubactions,
  SiAmazon,
  SiOracle,
  SiReact,
  SiVite,
  SiFlutter,
  SiGin,
  SiMqtt,
  SiEspressif,
  SiKotlin,
  SiFastapi,
  SiNodedotjs,
  SiPython,
  SiLangchain,
  SiRailway,
  SiCloudflare,
  SiSupabase,
  SiPostgresql
} from "react-icons/si";

// Import additional icons if needed
import { MdOutlineRadio } from "react-icons/md";
import { CloudQueue } from '@mui/icons-material';

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {
  const theme = useTheme();
  const iconSize = 24;
  const iconColor = theme.palette.primary.main;

  // Updated skill categories with React Icons matching README.md tech stack
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend & Mobile',
      skills: [
        { name: 'React', icon: <SiReact size={iconSize} color={iconColor} /> },
        { name: 'Vite', icon: <SiVite size={iconSize} color={iconColor} /> },
        { name: 'TypeScript', icon: <SiTypescript size={iconSize} color={iconColor} /> },
        { name: 'Flutter', icon: <SiFlutter size={iconSize} color={iconColor} /> },
        { name: 'Kotlin', icon: <SiKotlin size={iconSize} color={iconColor} /> },
      ]
    },
    {
      title: 'Backend & Languages',
      skills: [
        { name: 'Go', icon: <SiGo size={iconSize} color={iconColor} /> },
        { name: 'FastAPI', icon: <SiFastapi size={iconSize} color={iconColor} /> },
        { name: 'Node.js', icon: <SiNodedotjs size={iconSize} color={iconColor} /> },
        { name: 'Python', icon: <SiPython size={iconSize} color={iconColor} /> },
        { name: 'Gin (Go)', icon: <SiGin size={iconSize} color={iconColor} /> },
        { name: 'Lua', icon: <SiLua size={iconSize} color={iconColor} /> },
        { name: 'Shell Script', icon: <SiGnubash size={iconSize} color={iconColor} /> },
      ]
    },
    {
      title: 'AI & Platform Engineering',
      skills: [
        { name: 'LangChain', icon: <SiLangchain size={iconSize} color={iconColor} /> },
        { name: 'Kubernetes', icon: <SiKubernetes size={iconSize} color={iconColor} /> },
        { name: 'Docker', icon: <SiDocker size={iconSize} color={iconColor} /> },
        { name: 'Terraform', icon: <SiTerraform size={iconSize} color={iconColor} /> },
        { name: 'CI/CD (GitHub, Azure)', icon: <SiGithubactions size={iconSize} color={iconColor} /> },
        { name: 'MQTT', icon: <SiMqtt size={iconSize} color={iconColor} /> },
        { name: 'ESP32', icon: <SiEspressif size={iconSize} color={iconColor} /> },
      ]
    },
    {
      title: 'Serverless & Databases',
      skills: [
        { name: 'Railway', icon: <SiRailway size={iconSize} color={iconColor} /> },
        { name: 'Cloudflare', icon: <SiCloudflare size={iconSize} color={iconColor} /> },
        { name: 'Supabase', icon: <SiSupabase size={iconSize} color={iconColor} /> },
        { name: 'PostgreSQL', icon: <SiPostgresql size={iconSize} color={iconColor} /> },
        { name: 'AWS', icon: <SiAmazon size={iconSize} color={iconColor} /> },
        { name: 'Azure', icon: <CloudQueue sx={{ fontSize: iconSize, color: iconColor }} /> },
        { name: 'Oracle Cloud', icon: <SiOracle size={iconSize} color={iconColor} /> },
      ]
    }
  ];

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
            My Technical Skills
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
            I specialize in platform engineering and full-stack development with focus on microservices architecture,
            accessible serverless deployment, and the "Railway + NeonDB = MVP paradise" philosophy for rapid prototyping and scalable solutions.
          </Typography>

          <Grid container spacing={4}>
            {skillCategories.map((category, catIndex) => (
              <Grid item xs={12} md={4} key={category.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      border: `1px solid ${theme.palette.divider}`,
                      backgroundColor: theme.palette.background.paper,
                      borderRadius: 2,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      }
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        mb: 3,
                        fontWeight: 600,
                        pb: 2,
                        borderBottom: `1px solid ${theme.palette.divider}`
                      }}
                    >
                      {category.title}
                    </Typography>

                    {category.skills.map((skill) => (
                      <Box
                        key={skill.name}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2,
                          p: 1,
                          borderRadius: 1,
                          '&:hover': {
                            backgroundColor: theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.05)'
                              : 'rgba(0, 0, 0, 0.02)'
                          }
                        }}
                      >
                        <Box
                          sx={{
                            mr: 2,
                            minWidth: 24,
                            width: 24,
                            height: 24,
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {skill.icon}
                        </Box>
                        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
                          <Typography
                            variant="body1"
                            sx={{
                              lineHeight: 1.5,
                              fontWeight: 500,
                              whiteSpace: 'normal',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}
                          >
                            {skill.name}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};