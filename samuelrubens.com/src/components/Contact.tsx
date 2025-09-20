import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  useTheme,
  Alert,
  Snackbar,
  CircularProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import * as lucideReact from 'lucide-react';

export const Contact: React.FC = () => {
  const theme = useTheme();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/contato@samuelrubens.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          subject: formValues.subject,
          message: formValues.message,
          _subject: `[Portfolio Website] Contact from ${formValues.name}`,
          _replyto: formValues.email,
          source: 'portfolio-website',
          website_url: window.location.origin,
          page_source: window.location.pathname,
          _captcha: 'true',
          _template: 'box'
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormValues({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (err) {
      setError(true);
      setErrorMessage(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseAlert = (type: 'success' | 'error') => {
    if (type === 'success') setSuccess(false);
    else setError(false);
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
        position: 'relative',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '30%',
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(30, 41, 59, 0.4) 100%)'
            : 'linear-gradient(180deg, rgba(248, 250, 252, 0) 0%, rgba(241, 245, 249, 0.4) 100%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
            Entre em Contato
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
            Tem um projeto em mente ou interesse em colaborar em engenharia de plataforma, arquitetura de microsserviços ou soluções de deployment serverless? 
            Como fundador da Rubrion & MonDesa, sou especialista na abordagem "Railway + NeonDB = paraíso MVP" e modelos de desenvolvimento cooperativo.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Box sx={{ mb: { xs: 4, md: 0 } }}>
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                  Informações de Contato
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {/* Email */}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                      }}
                    >
                      <Mail size={18} />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                        Email
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        contato@samuelrubens.com
                      </Typography>
                    </Box>
                  </Box>

                  {/* WhatsApp Business */}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: '#25D366',
                        color: 'white',
                      }}
                    >
                      <lucideReact.MessageCircle size={18} />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                        WhatsApp Business
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontWeight: 500,
                          '& a': {
                            color: 'inherit',
                            textDecoration: 'none',
                            '&:hover': {
                              color: 'primary.main',
                              textDecoration: 'underline'
                            }
                          }
                        }}
                      >
                        <a 
                          href="https://wa.me/5511992562478?text=Olá%20Samuel!%20Tenho%20interesse%20em%20discutir%20uma%20oportunidade%20de%20projeto."
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Conversar no WhatsApp"
                        >
                          +55 (11) 99256-2478
                        </a>
                      </Typography>
                    </Box>
                  </Box>

                  {/* Address */}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                      }}
                    >
                      <MapPin size={18} />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                        Localização
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        São Carlos, São Paulo, Brasil
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Enviar Mensagem
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Nome"
                        name="name"
                        variant="outlined"
                        required
                        disabled={loading}
                        value={formValues.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        required
                        disabled={loading}
                        value={formValues.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Assunto"
                        name="subject"
                        variant="outlined"
                        required
                        disabled={loading}
                        value={formValues.subject}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Mensagem"
                        name="message"
                        multiline
                        rows={4}
                        variant="outlined"
                        required
                        disabled={loading}
                        value={formValues.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        color="primary"
                        disabled={loading}
                        endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send size={18} />}
                        sx={{
                          mt: 1,
                          py: 1.5,
                          px: 4,
                          fontWeight: 600,
                          transition: 'all 0.2s',
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                          }
                        }}
                      >
                        {loading ? 'Enviando...' : 'Enviar Mensagem'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Success notification */}
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => handleCloseAlert('success')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => handleCloseAlert('success')} severity="success" variant="filled">
          Obrigado! Sua mensagem foi enviada com sucesso.
        </Alert>
      </Snackbar>

      {/* Error notification */}
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => handleCloseAlert('error')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => handleCloseAlert('error')} severity="error" variant="filled">
          {errorMessage || 'Falha ao enviar mensagem. Tente novamente.'}
        </Alert>
      </Snackbar>
    </Box>
  );
};