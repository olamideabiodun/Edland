'use client';

import Footer from '../../components/home/Footer';
import Header from '../../components/home/Header';
import { keyframes } from '@emotion/react';
import {
  ArrowBack,
  CheckCircleOutline,
  SendRounded
} from '@mui/icons-material';
import {
  alpha,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  type SelectChangeEvent,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import Link from 'next/link';
import type React from 'react';
import { useEffect, useState } from 'react';

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

interface FormData {
	name: string;
	email: string;
	userType: string;
	feedback: string;
	suggestions: string;
	subscribeNewsletter: boolean;
}

interface FormErrors {
	name: boolean;
	email: boolean;
	userType: boolean;
}

export default function FeedbackPage() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    userType: '',
    feedback: '',
    suggestions: '',
    subscribeNewsletter: true
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: false,
    email: false,
    userType: false
  });
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Clear timeout on unmount to prevent memory leaks
  useEffect(() => {
    // No timeout is set in this effect, so no need to clear it
    return () => {};
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Only update errors if the field currently has an error
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setFormData((prev) => ({ ...prev, userType: e.target.value }));
    if (errors.userType) {
      setErrors((prev) => ({ ...prev, userType: false }));
    }
  };

  // Explicitly handle the checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Checkbox changed:', e.target.checked);
    setFormData((prev) => ({
      ...prev,
      subscribeNewsletter: e.target.checked
    }));
  };

  const validateForm = (): boolean => {
    // Basic validation
    const newErrors = {
      name: !formData.name.trim(),
      email:
				!formData.email.trim() ||
				!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      userType: !formData.userType
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    // Simulate form submission
    setLoading(true);

    // Mock API call
    const timeoutId = setTimeout(() => {
      try {
        // Simulate successful submission
        setLoading(false);
        setSuccess(true);

        // Reset form after success
        setFormData({
          name: '',
          email: '',
          userType: '',
          feedback: '',
          suggestions: '',
          subscribeNewsletter: true
        });
      } catch (error) {
        setLoading(false);
        setSubmitError(
          'There was an error submitting your feedback. Please try again.'
        );
      }
    }, 1500);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          py: 4,
          position: 'relative',
          fontFamily: 'Questrial',
          overflow: 'hidden'
        }}
      >
        {/* Decorative background elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)} 0%, ${alpha(theme.palette.primary.light, 0.1)} 100%)`,
            filter: 'blur(60px)',
            zIndex: 0,
            animation: `${float} 8s infinite ease-in-out`
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.2)} 0%, ${alpha(theme.palette.secondary.light, 0.1)} 100%)`,
            filter: 'blur(60px)',
            zIndex: 0,
            animation: `${float} 10s infinite ease-in-out`,
            animationDelay: '1s'
          }}
        />

        {/* Main Content */}
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={4}
            sx={{
              position: 'relative',
              zIndex: 1,
              pt: 7,
              fontFamily: 'Questrial'
            }}
          >
            {/* Left side - Information */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Box sx={{ animation: `${fadeIn} 0.6s ease-out` }}>
                <Typography
                  variant='h3'
                  component='h1'
                  fontWeight={700}
                  gutterBottom
                  sx={{
                    fontFamily: 'Questrial',
                    color:
											theme.palette.mode === 'dark'
											  ? '#ffffff'
											  : 'text.primary'
                  }}
                >
									We're Building Something Special
                </Typography>

                <Typography
                  variant='body1'
                  paragraph
                  sx={{
                    mb: 3,
                    fontSize: '1.1rem',
                    fontFamily: 'Questrial',
                    color:
											theme.palette.mode === 'dark'
											  ? 'rgba(255, 255, 255, 0.9)'
											  : 'text.primary'
                  }}
                >
									Ednux is currently under development, and we're working hard
									to bring you the best educational platform experience.
                </Typography>

                <Typography
                  variant='body1'
                  paragraph
                  sx={{
                    mb: 3,
                    fontSize: '1.1rem',
                    fontFamily: 'Questrial',
                    color:
											theme.palette.mode === 'dark'
											  ? 'rgba(255, 255, 255, 0.9)'
											  : 'text.primary'
                  }}
                >
									Your feedback is invaluable to us! Help shape the future of
									Ednux by sharing your thoughts, ideas, and expectations.
                </Typography>

                <Typography
                  variant='body1'
                  paragraph
                  sx={{
                    fontSize: '1.1rem',
                    fontFamily: 'Questrial',
                    color:
											theme.palette.mode === 'dark'
											  ? 'rgba(255, 255, 255, 0.9)'
											  : 'text.primary'
                  }}
                >
									Subscribe to our newsletter to stay updated on our progress
									and be the first to know when we launch.
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mt: 4,
                    p: 2,
                    fontFamily: 'Questrial',
                    borderRadius: 2,
                    bgcolor: alpha(
                      theme.palette.primary.main,
                      theme.palette.mode === 'dark' ? 0.1 : 0.05
                    ),
                    border: `1px solid ${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.2 : 0.1)}`
                  }}
                >
                  <CheckCircleOutline color='primary' sx={{ mr: 2 }} />
                  <Typography
                    variant='body2'
                    sx={{
                      color:
												theme.palette.mode === 'dark'
												  ? 'rgba(255, 255, 255, 0.9)'
												  : 'text.primary'
                    }}
                  >
										Early subscribers will receive{' '}
                    <strong>exclusive access</strong> to our beta version and
										special launch offers!
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right side - Form */}
            <Grid item xs={12} md={7}>
              {success ? (
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    textAlign: 'center',
                    bgcolor: alpha(theme.palette.background.paper, 0.7),
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'}`,
                    animation: `${fadeIn} 0.6s ease-out`
                  }}
                >
                  <CheckCircleOutline
                    color='primary'
                    sx={{ fontSize: 60, mb: 2 }}
                  />
                  <Typography
                    variant='h4'
                    gutterBottom
                    fontWeight={600}
                    sx={{ color: 'text.primary' }}
                  >
										Thank You!
                  </Typography>
                  <Typography
                    variant='body1'
                    paragraph
                    sx={{
                      mb: 3,
                      color:
												theme.palette.mode === 'dark'
												  ? 'rgba(255, 255, 255, 0.87)'
												  : 'text.primary'
                    }}
                  >
										Your feedback has been submitted successfully. We appreciate
										your input in helping us build a better Ednux!
                  </Typography>
                  <Typography
                    variant='body1'
                    paragraph
                    sx={{
                      color:
												theme.palette.mode === 'dark'
												  ? 'rgba(255, 255, 255, 0.87)'
												  : 'text.primary'
                    }}
                  >
                    {formData.subscribeNewsletter
                      ? 'You\'ve been added to our newsletter. We\'ll keep you updated on our progress!'
                      : 'We\'ll keep working on making Ednux better based on your feedback.'}
                  </Typography>
                </Paper>
              ) : (
                <Paper
                  component='form'
                  onSubmit={handleSubmit}
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    bgcolor: alpha(theme.palette.background.paper, 0.7),
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'}`,
                    animation: `${fadeIn} 0.6s ease-out`,
                    position: 'relative',
                    '& .MuiTextField-root': {
                      '& .MuiInputLabel-root': {
                        color:
													theme.palette.mode === 'dark'
													  ? 'rgba(255, 255, 255, 0.8)'
													  : undefined
                      },
                      '& .MuiInputBase-input': {
                        color:
													theme.palette.mode === 'dark' ? '#fff' : undefined,
                        '&::placeholder': {
                          color:
														theme.palette.mode === 'dark'
														  ? 'rgba(255, 255, 255, 0.5)'
														  : undefined,
                          opacity:
														theme.palette.mode === 'dark' ? 1 : undefined
                        }
                      }
                    },
                    '& .MuiSelect-select': {
                      color: theme.palette.mode === 'dark' ? '#fff' : undefined
                    },
                    '& .MuiInputLabel-root': {
                      color:
												theme.palette.mode === 'dark'
												  ? 'rgba(255, 255, 255, 0.8)'
												  : undefined
                    }
                  }}
                >
                  <Typography
                    variant='h5'
                    component='h2'
                    gutterBottom
                    fontWeight={600}
                    sx={{
                      color:
												theme.palette.mode === 'dark'
												  ? '#ffffff'
												  : 'text.primary',
                      textShadow:
												theme.palette.mode === 'dark'
												  ? '0 0 10px rgba(255,255,255,0.1)'
												  : 'none'
                    }}
                  >
										Share Your Feedback
                  </Typography>

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ position: 'relative', mb: 2 }}>
                        <TextField
                          label='Your Name'
                          fullWidth
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                          required
                          error={errors.name}
                          helperText={errors.name ? 'Name is required' : ''}
                          InputLabelProps={{
                            shrink: true,
                            sx: {
                              bgcolor:
																theme.palette.mode === 'dark'
																  ? 'rgba(30, 41, 59, 0.8)'
																  : theme.palette.background.paper,
                              px: 0.5,
                              ml: -0.5,
                              color:
																theme.palette.mode === 'dark'
																  ? 'rgba(255, 255, 255, 0.8)'
																  : undefined
                            }
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 1,
                              height: 56,
                              color:
																theme.palette.mode === 'dark'
																  ? '#fff'
																  : undefined,
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor:
																	theme.palette.mode === 'dark'
																	  ? 'rgba(255,255,255,0.15)'
																	  : 'rgba(0,0,0,0.1)'
                              }
                            },
                            '& .MuiFormHelperText-root': {
                              color:
																theme.palette.mode === 'dark'
																  ? 'rgba(255,255,255,0.7)'
																  : undefined
                            }
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ position: 'relative', mb: 2 }}>
                        <TextField
                          label='Email Address'
                          fullWidth
                          type='email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          required
                          error={errors.email}
                          helperText={
                            errors.email ? 'Please enter a valid email' : ''
                          }
                          InputLabelProps={{
                            shrink: true,
                            sx: {
                              bgcolor:
																theme.palette.mode === 'dark'
																  ? 'rgba(30, 41, 59, 0.8)'
																  : theme.palette.background.paper,
                              px: 0.5,
                              ml: -0.5,
                              color:
																theme.palette.mode === 'dark'
																  ? 'rgba(255, 255, 255, 0.8)'
																  : undefined
                            }
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 1,
                              height: 56,
                              color:
																theme.palette.mode === 'dark'
																  ? '#fff'
																  : undefined,
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor:
																	theme.palette.mode === 'dark'
																	  ? 'rgba(255,255,255,0.15)'
																	  : 'rgba(0,0,0,0.1)'
                              }
                            },
                            '& .MuiFormHelperText-root': {
                              color:
																theme.palette.mode === 'dark'
																  ? 'rgba(255,255,255,0.7)'
																  : undefined
                            }
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ position: 'relative', mb: 2 }}>
                        <FormControl
                          fullWidth
                          variant='outlined'
                          error={errors.userType}
                        >
                          <InputLabel
                            id='user-type-label'
                            shrink
                            sx={{
                              backgroundColor:
																theme.palette.mode === 'dark'
																  ? 'rgba(30, 41, 59, 0.8)'
																  : theme.palette.background.paper,
                              px: 0.5,
                              ml: -0.5,
                              color:
																theme.palette.mode === 'dark'
																  ? 'rgba(255, 255, 255, 0.8)'
																  : undefined
                            }}
                          >
														I am a...
                          </InputLabel>

                          <Select
                            native
                            labelId='user-type-label'
                            id='user-type'
                            name='userType'
                            value={formData.userType}
                            onChange={handleSelectChange as any}
                            label='I am a...'
                            error={errors.userType}
                            sx={{
                              height: 56,
                              borderRadius: 1,
                              color:
																theme.palette.mode === 'dark'
																  ? '#fff'
																  : undefined,
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor:
																	theme.palette.mode === 'dark'
																	  ? 'rgba(255,255,255,0.15)'
																	  : 'rgba(0,0,0,0.1)'
                              }
                            }}
                          >
                            <option
                              value=""
                              disabled
                              style={{
                                color:
                                  theme.palette.mode === 'dark'
                                    ? '#fff'
                                    : undefined
                              }}
                            >
                              Select user type
                            </option>
                            <option
                              value='student'
                              style={{
                                color:
																	theme.palette.mode === 'dark'
																	  ? '#fff'
																	  : undefined
                              }}
                            >
															Student
                            </option>
                            <option
                              value='teacher'
                              style={{
                                color:
																	theme.palette.mode === 'dark'
																	  ? '#fff'
																	  : undefined
                              }}
                            >
															Teacher/Educator
                            </option>
                            <option
                              value='professional'
                              style={{
                                color:
																	theme.palette.mode === 'dark'
																	  ? '#fff'
																	  : undefined
                              }}
                            >
															Professional
                            </option>
                            <option
                              value='other'
                              style={{
                                color:
																	theme.palette.mode === 'dark'
																	  ? '#fff'
																	  : undefined
                              }}
                            >
															Other
                            </option>
                          </Select>
                          {errors.userType && (
                            <FormHelperText
                              sx={{
                                bgcolor:
																	theme.palette.mode === 'dark'
																	  ? 'rgba(30, 41, 59, 0.8)'
																	  : theme.palette.background.paper,
                                mx: 0,
                                px: 1,
                                display: 'inline-block',
                                color:
																	theme.palette.mode === 'dark'
																	  ? 'rgba(255,80,80,0.9)'
																	  : undefined
                              }}
                            >
															Please select an option
                            </FormHelperText>
                          )}
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ position: 'relative', mb: 2 }}>
                        <TextField
                          label='What features are you most interested in?'
                          fullWidth
                          multiline
                          rows={2}
                          name='feedback'
                          value={formData.feedback}
                          onChange={handleChange}
                          placeholder='e.g., classroom management, social learning, AI assistance...'
                          InputLabelProps={{
                            shrink: true,
                            sx: {
                              bgcolor:
																theme.palette.mode === 'dark'
																  ? 'rgba(30, 41, 59, 0.8)'
																  : theme.palette.background.paper,
                              px: 0.5,
                              ml: -0.5,
                              color:
																theme.palette.mode === 'dark'
																  ? 'rgba(255, 255, 255, 0.8)'
																  : undefined
                            }
                          }}
                          InputProps={{
                            sx: {
                              '&::placeholder': {
                                color:
																	theme.palette.mode === 'dark'
																	  ? 'rgba(255, 255, 255, 0.5)'
																	  : undefined
                              }
                            }
                          }}
                          inputProps={{
                            style: {
                              color:
																theme.palette.mode === 'dark'
																  ? '#fff'
																  : undefined
                            }
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ position: 'relative', mb: 2 }}>
                        <TextField
                          label='Any suggestions or ideas for Ednux?'
                          fullWidth
                          multiline
                          rows={3}
                          name='suggestions'
                          value={formData.suggestions}
                          onChange={handleChange}
                          placeholder='Share your thoughts about what would make Ednux perfect for you...'
                          InputLabelProps={{
                            shrink: true,
                            sx: {
                              bgcolor:
																theme.palette.mode === 'dark'
																  ? 'rgba(30, 41, 59, 0.8)'
																  : theme.palette.background.paper,
                              px: 0.5,
                              ml: -0.5,
                              color:
																theme.palette.mode === 'dark'
																  ? 'rgba(255, 255, 255, 0.8)'
																  : undefined
                            }
                          }}
                          InputProps={{
                            sx: {
                              color:
																theme.palette.mode === 'dark'
																  ? '#fff'
																  : undefined,
                              '& textarea::placeholder': {
                                color:
																	theme.palette.mode === 'dark'
																	  ? 'rgba(255, 255, 255, 0.5)'
																	  : undefined,
                                opacity: 1
                              }
                            }
                          }}
                          inputProps={{
                            style: {
                              color:
																theme.palette.mode === 'dark'
																  ? '#fff'
																  : undefined
                            }
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 1,
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor:
																	theme.palette.mode === 'dark'
																	  ? 'rgba(255,255,255,0.15)'
																	  : 'rgba(0,0,0,0.1)'
                              }
                            },
                            '& .MuiFormHelperText-root': {
                              color:
																theme.palette.mode === 'dark'
																  ? 'rgba(255,255,255,0.7)'
																  : undefined
                            }
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          position: 'relative',
                          my: 2,
                          display: 'flex',
                          alignItems: 'flex-start',
                          bgcolor:
														theme.palette.mode === 'dark'
														  ? 'rgba(30, 41, 59, 0.8)'
														  : alpha(theme.palette.background.paper, 0.9),
                          p: 1.5,
                          borderRadius: 1,
                          border: '1px solid',
                          borderColor: alpha(
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                            theme.palette.mode === 'dark' ? 0.15 : 0.1
                          )
                        }}
                      >
                        <input
                          type='checkbox'
                          id='newsletter-checkbox'
                          checked={formData.subscribeNewsletter}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              subscribeNewsletter: e.target.checked
                            }))
                          }
                          style={{
                            marginRight: '8px',
                            marginTop: '4px',
                            width: '18px',
                            height: '18px',
                            accentColor: theme.palette.primary.main,
                            cursor: 'pointer'
                          }}
                        />
                        <label
                          htmlFor='newsletter-checkbox'
                          style={{
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontFamily: theme.typography.fontFamily,
                            color:
															theme.palette.mode === 'dark'
															  ? 'rgba(255, 255, 255, 0.87)'
															  : undefined
                          }}
                        >
													Subscribe to our newsletter for updates on our launch
                        </label>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        size='large'
                        fullWidth
                        disabled={loading}
                        endIcon={
                          loading ? (
                            <CircularProgress size={20} />
                          ) : (
                            <SendRounded />
                          )
                        }
                        sx={{
                          py: 1.5,
                          mt: 2,
                          fontWeight: 600
                        }}
                      >
                        {loading ? 'Submitting...' : 'Submit Feedback'}
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
