'use client';

import EmailIcon from '@mui/icons-material/Email';
import LaunchIcon from '@mui/icons-material/Launch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Link as MuiLink,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import Footer from '../../components/home/Footer';
import Header from '../../components/home/Header';

export default function ContactPage() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
		type: 'success' | 'error';
		message: string;
	} | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message:
						'Thank you for contacting Ednux. Your message will be reviewed, and an admin will respond to you shortly.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message:
					'Sorry, there was an error sending your message. Please try again or contact us directly at support@ednux.com.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email us',
      content: 'support@ednux.com',
      action: () => window.open('mailto:support@ednux.com')
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#ffffff',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#1a1a1a',
          color: 'white',
          py: { xs: 6, md: 8 },
          position: 'relative'
        }}
      >
        <Container maxWidth='lg'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 4
            }}
          ></Box>

          <Grid container spacing={6} alignItems='center'>
            <Grid item xs={12} md={6}>
              <Typography
                variant='h2'
                component='h1'
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  mb: 3
                }}
              >
								Get in touch
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  fontWeight: 400
                }}
              >
								Have questions or ready to transform your learning journey?
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.08)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                      }
                    }}
                    onClick={info.action}
                  >
                    <CardContent
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        py: 2.5,
                        px: 3,
                        '&:last-child': { pb: 2.5 }
                      }}
                    >
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                      >
                        <Box
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.1)',
                            borderRadius: 2,
                            p: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {React.cloneElement(info.icon, {
                            sx: { color: 'white', fontSize: '1.5rem' }
                          })}
                        </Box>
                        <Box>
                          <Typography
                            variant='h6'
                            sx={{
                              color: 'white',
                              fontSize: '1rem',
                              fontWeight: 600,
                              mb: 0.5
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant='body2'
                            sx={{
                              color: 'rgba(255,255,255,0.7)',
                              fontSize: '0.9rem'
                            }}
                          >
                            {info.content}
                          </Typography>
                        </Box>
                      </Box>
                      <IconButton
                        sx={{
                          color: 'rgba(255,255,255,0.7)',
                          '&:hover': {
                            color: 'white',
                            bgcolor: 'rgba(255,255,255,0.1)'
                          }
                        }}
                      >
                        <LaunchIcon fontSize='small' />
                      </IconButton>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box
        sx={{
          flex: 1,
          py: { xs: 6, md: 10 },
          bgcolor: '#ffffff'
        }}
      >
        <Container maxWidth='md'>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant='h3'
              component='h2'
              sx={{
                fontWeight: 'bold',
                color: '#1a1a1a',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
							Send us a message
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: '#666666',
                fontSize: '1.1rem'
              }}
            >
							We'd love to hear from you! Fill out the form below and we'll get
							back to you soon.
            </Typography>
          </Box>

          <Card
            sx={{
              borderRadius: 4,
              background: 'rgba(253, 254, 255, 0.25)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(9, 2, 28, 0.18)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Box component='form' onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label='Name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          border: '1px solid rgba(9, 2, 28, 0.18)',
                          '& fieldset': {
                            border: 'none'
                          },
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.17)'
                          },
                          '&.Mui-focused': {
                            bgcolor: 'rgba(255, 255, 255, 0.4)',
                            border: '1px solid rgba(255, 255, 255, 0.5)',
                            boxShadow: '0 0 0 2px rgba(0, 123, 255, 0.25)'
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(0, 0, 0, 0.7)',
                          '&.Mui-focused': {
                            color: 'rgba(0, 0, 0, 0.8)'
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label='Email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          border: '1px solid rgba(9, 2, 28, 0.18)',
                          '& fieldset': {
                            border: 'none'
                          },
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.4)'
                          },
                          '&.Mui-focused': {
                            bgcolor: 'rgba(255, 255, 255, 0.4)',
                            border: '1px solid rgba(255, 255, 255, 0.5)',
                            boxShadow: '0 0 0 2px rgba(0, 123, 255, 0.25)'
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(0, 0, 0, 0.7)',
                          '&.Mui-focused': {
                            color: 'rgba(0, 0, 0, 0.8)'
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label='Subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          border: '1px solid rgba(9, 2, 28, 0.18)',
                          '& fieldset': {
                            border: 'none'
                          },
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.4)'
                          },
                          '&.Mui-focused': {
                            bgcolor: 'rgba(255, 255, 255, 0.4)',
                            border: '1px solid rgba(255, 255, 255, 0.5)',
                            boxShadow: '0 0 0 2px rgba(0, 123, 255, 0.25)'
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(0, 0, 0, 0.7)',
                          '&.Mui-focused': {
                            color: 'rgba(0, 0, 0, 0.8)'
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label='Message'
                      name='message'
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          bgcolor: 'rgba(251, 251, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          border: '1px solid rgba(9, 2, 28, 0.18)',
                          '& fieldset': {
                            border: 'none'
                          },
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.4)'
                          },
                          '&.Mui-focused': {
                            bgcolor: 'rgba(255, 255, 255, 0.4)',
                            border: '1px solid rgba(255, 255, 255, 0.5)',
                            boxShadow: '0 0 0 2px rgba(0, 123, 255, 0.25)'
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(0, 0, 0, 0.7)',
                          '&.Mui-focused': {
                            color: 'rgba(0, 0, 0, 0.8)'
                          }
                        }
                      }}
                    />
                  </Grid>
                </Grid>

                {submitStatus && (
                  <Alert
                    severity={submitStatus.type}
                    sx={{
                      mt: 3,
                      borderRadius: 2
                    }}
                  >
                    {submitStatus.message}
                  </Alert>
                )}

                <Button
                  type='submit'
                  variant='contained'
                  size='large'
                  fullWidth
                  disabled={submitting}
                  startIcon={
                    submitting ? (
                      <CircularProgress size={20} color='inherit' />
                    ) : (
                      <SendIcon />
                    )
                  }
                  sx={{
                    mt: 4,
                    py: 2,
                    borderRadius: 3,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    bgcolor: '#1a1a1a',
                    '&:hover': {
                      bgcolor: '#333333',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
                    },
                    '&:disabled': {
                      bgcolor: '#cccccc'
                    },
                    transition: 'all 0.2s ease'
                  }}
                >
                  {submitting ? 'Sending...' : 'Submit'}
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <MuiLink
              component={Link}
              href='/'
              sx={{
                color: '#666666',
                textDecoration: 'none',
                '&:hover': {
                  color: theme.palette.primary.main,
                  textDecoration: 'underline'
                }
              }}
            >
							← Back to Home
            </MuiLink>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
