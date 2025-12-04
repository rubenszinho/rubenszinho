import React, { useRef } from 'react';
import { Box, Container, Typography, Card, CardContent, useTheme, Chip, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import * as lucideReact from 'lucide-react';

interface Project {
  id: number;
  name: string;
  organization?: string;
  organizationUrl?: string;
  logoSrc?: string;
  isWhiteLogo?: boolean;
  description: string;
  highlights: string[];
  links?: {
    github?: string;
    website?: string;
    playStore?: string;
  };
  type: 'founded' | 'work' | 'open-source';
}

export const Projects: React.FC = () => {
  const theme = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const MEDIA_BASE = import.meta.env.VITE_MEDIA_BASE_URL || 'https://media.rubenszinho.dev';

  const projects: Project[] = [
    // Founded Organizations
    {
      id: 1,
      name: "Rubrion",
      logoSrc: "/logo-rubrion.svg",
      description: "AI-powered SaaS platforms for business automation, visibility optimization, and intelligent scaling.",
      highlights: [
        "AI-Driven SaaS with intelligent automation and self-hosted AI agents.",
        "SEO & AEO tools for traditional and AI-powered search engines."
      ],
      links: {
        github: "https://github.com/rubrion/rubrion-web-client",
        website: "https://rubrion.ai"
      },
      type: 'founded'
    },
    {
      id: 2,
      name: "MonDesa",
      logoSrc: `${MEDIA_BASE}/partners/mondesa.png`,
      description: "Landslide Monitoring IoT platform with sensors and backend infrastructure.",
      highlights: [
        "ESP32 + LoRa/Wi-Fi/4G sensors with Go/Mosquitto backend.",
        "Technical partnership with CEMADEN for municipal integration."
      ],
      links: {
        github: "https://github.com/MonDesa/mondesa-web-client",
        website: "https://mondesa.org"
      },
      type: 'founded'
    },
    // Rubrion Projects
    {
      id: 3,
      name: "Engage Hub (Raia Group)",
      organization: "Rubrion",
      logoSrc: `${MEDIA_BASE}/partners/raia.svg`,
      description: "Open-source headless CMS with LLM-powered content generation and multi-tenant architecture.",
      highlights: [
        "Multi-tenant white-label with i18n and customizable themes.",
        "First whitelabel for Raia Group, generic at engage-hub.rubrion.ai."
      ],
      links: {
        github: "https://github.com/rubrion/engage-hub-business",
        website: "https://grupo-raia.org"
      },
      type: 'work'
    },
    {
      id: 4,
      name: "Bioexame Website & Portal",
      organization: "Rubrion",
      logoSrc: `${MEDIA_BASE}/partners/bioexame.png`,
      description: "Official website and patient portal for laboratory services access.",
      highlights: [
        "Seamless patient experience for lab services and results.",
        "Secure digital portal with modern UX."
      ],
      links: {
        github: "https://github.com/rubrion/bioexame-web-client",
        website: "https://bioexame.org"
      },
      type: 'work'
    },
    {
      id: 5,
      name: "Bioexame Training Platform",
      organization: "Rubrion",
      logoSrc: `${MEDIA_BASE}/partners/bioexame.png`,
      description: "Moodle-based clinical lab training platform for LGPD compliance.",
      highlights: [
        "Customized Moodle for clinical laboratory training.",
        "Supports LGPD compliance through structured internal training."
      ],
      links: {
        github: "https://github.com/rubrion/moodle-server",
        website: "https://treinamento.bioexame.org"
      },
      type: 'work'
    },
    {
      id: 6,
      name: "MVM WARROOM",
      organization: "Rubrion",
      logoSrc: `${MEDIA_BASE}/partners/mvm.png`,
      description: "Real-time TikTok Shop monitoring and analytics platform.",
      highlights: [
        "Dashboard with GMV, orders, compliance, and store health metrics.",
        "OAuth 2.0 integration for TikTok Shop BR/US with Rocket.Chat."
      ],
      type: 'work'
    },
    // MonDesa Projects
    {
      id: 7,
      name: "Fire Risk Predictor",
      organization: "MonDesa",
      logoSrc: `${MEDIA_BASE}/partners/mondesa.png`,
      description: "ML-based wildfire risk prediction using SISAM environmental data.",
      highlights: [
        "FastAPI backend with React frontend for interactive predictions.",
        "Multi-model comparison with threshold optimization and F1 charts."
      ],
      links: {
        github: "https://github.com/MonDesa/fire-risk-predictor",
        website: "https://frp.mondesa.org"
      },
      type: 'work'
    },
    // Work Projects
    {
      id: 8,
      name: "Dexco Logistics Optimizer",
      organization: "MT2 Data",
      logoSrc: `${MEDIA_BASE}/partners/dexco.svg`,
      description: "Industrial data platform with time-series models and priority algorithms.",
      highlights: [
        "Kanban-like platform with RBAC for directors, sellers, and drivers.",
        "CI/CD with serverless approach and bare-metal fallback."
      ],
      type: 'work'
    },
    {
      id: 9,
      name: "Vizionari.ai",
      organization: "MT2 Data",
      logoSrc: `${MEDIA_BASE}/partners/mt2data.png`,
      description: "AI-native analysis platform with Jupyter-style notebooks and LLM agents.",
      highlights: [
        "Jupyter-style notebooks combined with LLM agents.",
        "Zero-downtime serverless deployment."
      ],
      type: 'work'
    },
    {
      id: 10,
      name: "Rogues Ecosystem",
      organization: "Prisma Tech",
      logoSrc: `${MEDIA_BASE}/partners/rogues.png`,
      description: "NFT marketplace with hybrid authentication and on-chain staking.",
      highlights: [
        "WalletConnect/OAuth hybrid auth with on-chain staking.",
        "High-performance NFT gallery with Shopify integration."
      ],
      links: {
        website: "https://roguesnft.com"
      },
      type: 'work'
    },
    {
      id: 11,
      name: "FinanSafe",
      organization: "Prisma Tech",
      logoSrc: `${MEDIA_BASE}/partners/finansafe.png`,
      description: "Full-stack financial planning platform with recurring payments.",
      highlights: [
        "Recurring payment systems with AI-driven financial planning.",
        "Microservices architecture with serverless approach."
      ],
      links: {
        website: "https://grupofinansafe.com.br"
      },
      type: 'work'
    },
    {
      id: 12,
      name: "BTG TRADER",
      organization: "BTG Pactual",
      logoSrc: `${MEDIA_BASE}/partners/btg.png`,
      description: "Mobile trading app for one of Brazil's largest investment banks.",
      highlights: [
        "Critical features for BTG TRADER mobile app.",
        "CI/CD infrastructure and release automation in Azure DevOps."
      ],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.btg.pactual.homebroker.mobile"
      },
      type: 'work'
    },
    {
      id: 13,
      name: "Zenith Probe Tracker",
      organization: "Zenith Aerospace",
      logoSrc: `${MEDIA_BASE}/partners/zenith.png`,
      description: "Open source mobile app for Atmospheric Probe Tracking.",
      highlights: [
        "Mobile app for atmospheric probe tracking.",
        "Developed for Zenith Aerospace Group."
      ],
      links: {
        github: "https://github.com/zfrancisco-oss/probe-tracker"
      },
      type: 'open-source'
    }
  ];

  const getLogoStyle = (isDarkTheme: boolean, isWhiteLogo?: boolean) => ({
    filter: isWhiteLogo
      ? (isDarkTheme ? 'none' : 'brightness(0) opacity(0.85)')
      : (isDarkTheme ? 'brightness(0) invert(1) opacity(0.9)' : 'brightness(0) opacity(0.85)'),
    transition: 'filter 0.3s ease',
    maxHeight: '40px',
    maxWidth: '120px',
    objectFit: 'contain' as const
  });

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'founded': return 'Founded';
      case 'work': return 'Work Project';
      case 'open-source': return 'Open Source';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'founded': return 'success';
      case 'work': return 'primary';
      case 'open-source': return 'secondary';
      default: return 'default';
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Split projects into two rows
  const row1 = projects.filter((_, index) => index % 2 === 0);
  const row2 = projects.filter((_, index) => index % 2 === 1);

  const renderProjectCard = (project: Project, index: number) => (
    <Box
      key={project.id}
      sx={{
        minWidth: { xs: 260, sm: 300, md: 340 },
        maxWidth: { xs: 260, sm: 300, md: 340 },
        flexShrink: 0,
      }}
    >
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
            display: 'flex',
            flexDirection: 'column',
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.paper,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }
          }}
        >
          <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {project.logoSrc ? (
                  <img
                    src={project.logoSrc}
                    alt={`${project.name} logo`}
                    style={getLogoStyle(theme.palette.mode === 'dark', project.isWhiteLogo)}
                  />
                ) : (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '8px',
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                    }}
                  >
                    <lucideReact.FolderGit2 size={20} />
                  </Box>
                )}
                <Box>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                    {project.name}
                  </Typography>
                  {project.organization && (
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                      {project.organization}
                    </Typography>
                  )}
                </Box>
              </Box>
              <Chip
                label={getTypeLabel(project.type)}
                size="small"
                color={getTypeColor(project.type) as any}
                sx={{ borderRadius: '4px', fontSize: '0.7rem' }}
              />
            </Box>

            {/* Description */}
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.85rem' }}>
              {project.description}
            </Typography>

            {/* Highlights */}
            <Box sx={{ mb: 2, flexGrow: 1 }}>
              <ul style={{ paddingLeft: '16px', margin: '0' }}>
                {project.highlights.slice(0, 2).map((highlight, i) => (
                  <li key={i}>
                    <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.8rem' }}>
                      {highlight.length > 100 ? `${highlight.slice(0, 100)}...` : highlight}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>

            {/* Links */}
            {project.links && (
              <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                {project.links.github && (
                  <Box
                    component="a"
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    <lucideReact.Github size={14} />
                    GitHub
                  </Box>
                )}
                {project.links.website && (
                  <Box
                    component="a"
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    <lucideReact.ExternalLink size={14} />
                    Website
                  </Box>
                )}
                {project.links.playStore && (
                  <Box
                    component="a"
                    href={project.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    <lucideReact.Smartphone size={14} />
                    Play Store
                  </Box>
                )}
              </Box>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );

  return (
    <Box
      id="projects"
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
            Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 4,
              maxWidth: 700,
              mx: 'auto',
              textAlign: 'center'
            }}
          >
            A collection of projects I've founded, built, and contributed to throughout my career.
            From platform engineering cooperatives to enterprise solutions.
          </Typography>

          {/* Carousel with Navigation Controls */}
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            {/* Left Navigation Arrow */}
            <IconButton
              onClick={() => scroll('left')}
              sx={{
                position: 'absolute',
                left: { xs: -8, md: -24 },
                zIndex: 2,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: theme.palette.background.paper,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                }
              }}
              aria-label="Scroll left"
            >
              <lucideReact.ChevronLeft size={20} />
            </IconButton>

            {/* Scrollable Carousel Container */}
            <Box
              ref={scrollContainerRef}
              sx={{
                overflowX: 'auto',
                overflowY: 'hidden',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                pb: 2,
                mx: { xs: 4, md: 5 },
              }}
            >
            <Stack spacing={2}>
              {/* Row 1 */}
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  minWidth: 'max-content',
                }}
              >
                {row1.map((project, index) => renderProjectCard(project, index * 2))}
              </Stack>

              {/* Row 2 */}
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  minWidth: 'max-content',
                }}
              >
                {row2.map((project, index) => renderProjectCard(project, index * 2 + 1))}
              </Stack>
            </Stack>
            </Box>

            {/* Right Navigation Arrow */}
            <IconButton
              onClick={() => scroll('right')}
              sx={{
                position: 'absolute',
                right: { xs: -8, md: -24 },
                zIndex: 2,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: theme.palette.background.paper,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                }
              }}
              aria-label="Scroll right"
            >
              <lucideReact.ChevronRight size={20} />
            </IconButton>
          </Box>

          {/* Scroll hint for mobile */}
          <Typography
            variant="caption"
            sx={{
              display: { xs: 'block', md: 'none' },
              textAlign: 'center',
              color: 'text.secondary',
              mt: 2,
            }}
          >
            Swipe to see more projects →
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};
