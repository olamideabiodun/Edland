'use client';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GitHubIcon from '@mui/icons-material/GitHub';
import GroupIcon from '@mui/icons-material/Group';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SchoolIcon from '@mui/icons-material/School';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import XIcon from '@mui/icons-material/Twitter';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  Typography,
  useTheme
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Footer from '../../components/home/Footer';
import Header from '../../components/home/Header';

export default function AboutPage() {
  const theme = useTheme();

  const features = [
    {
      icon: <AutoAwesomeIcon />,
      title: 'AI-Powered Learning',
      description:
				'Intelligent algorithms personalize learning paths and provide instant feedback to optimize educational outcomes.'
    },
    {
      icon: <GroupIcon />,
      title: 'Social Learning Hub',
      description:
				'Connect learners, educators, and professionals in collaborative spaces that foster knowledge sharing.'
    },
    {
      icon: <TrendingUpIcon />,
      title: 'Advanced Analytics',
      description:
				'Comprehensive insights into learning progress, engagement metrics, and performance optimization.'
    },
    {
      icon: <SecurityIcon />,
      title: 'Enterprise Security',
      description:
				'Bank-level security protocols ensure your educational data remains protected and compliant.'
    },
    {
      icon: <SupportAgentIcon />,
      title: '24/7 Support',
      description:
				'Round-the-clock assistance from our dedicated team of education technology specialists.'
    },
    {
      icon: <RocketLaunchIcon />,
      title: 'Scalable Platform',
      description:
				'From individual learners to enterprise organizations, our platform grows with your needs.'
    }
  ];

  const socialLinks = [
    { icon: <XIcon />, href: 'https://x.com/Mide_abiodun99', label: 'X' },
    {
      icon: <InstagramIcon />,
      href: 'https://instagram.com/mide__999',
      label: 'Instagram'
    },
    {
      icon: <LinkedInIcon />,
      href: 'https://linkedin.com/in/sokunbifaruq/',
      label: 'LinkedIn'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description:
				'We relentlessly explore new frontiers in educational technology—building tools that empower, adapt, and evolve with the needs of African learners.'
    },
    {
      title: 'Learner-Centric',
      description:
				'Every feature, decision, and design begins with one question: Does this help students succeed? Their growth is our north star.'
    },
    {
      title: 'Accessibility for All',
      description:
				'Quality education should be accessible to everyone, everywhere, at any time. We believe quality education should never be gated by geography, income, or device. Ednux is built to reach every learner, everywhere.'
    },
    {
      title: 'Community Driven',
      description:
				'Learning thrives in connection. We champion collaboration, peer support, and shared knowledge across institutions and borders.'
    }
  ];

  return (
    <Box
      sx={{ minHeight: '100vh', bgcolor: '#ffffff', fontFamily: 'Questrial' }}
    >
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#1a1a1a',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth='lg'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 4
            }}
          >
            <Chip
              label='About Ednux'
              sx={{
                bgcolor: 'rgba(255,255,255,0.1)',
                color: 'white',
                borderRadius: 5,
                px: 2,
                py: 1
              }}
            />
          </Box>

          <Grid container spacing={6} alignItems='center'>
            <Grid item xs={12} md={8}>
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  lineHeight: 1.1,
                  fontFamily: 'Questrial',
                  mb: 3
                }}
              >
								Transforming Education Through
                <Box
                  component='span'
                  sx={{
                    background: ' #2196F3',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    ml: 2
                  }}
                >
									AI Innovation
                </Box>
              </Typography>
              <Typography
                variant='h5'
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '1.3rem',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  mb: 4,
                  maxWidth: '600px'
                }}
              >
								We're building the future of education where artificial
								intelligence meets social learning, creating personalized
								experiences that adapt to every learner's unique journey.
              </Typography>
              <Button
                component={Link}
                href='/waitlist'
                variant='contained'
                size='large'
                sx={{
                  bgcolor: 'white',
                  color: '#1a1a1a',
                  px: 4,
                  py: 2,
                  borderRadius: 3,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(255,255,255,0.2)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
								Join Our Mission
              </Button>
            </Grid>
          </Grid>
        </Container>

        {/* Background Decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background:
							'linear-gradient(45deg, rgba(70, 47, 245, 0.1), rgba(33,150,243,0.1))',
            filter: 'blur(100px)'
          }}
        />
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant='h2'
              sx={{
                fontWeight: 'bold',
                color: '#1a1a1a',
                mb: 4,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
							Our Vision
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: '#666666',
                fontSize: '1.2rem',
                lineHeight: 1.7,
                mb: 4,
                maxWidth: '900px',
                mx: 'auto'
              }}
            >
							At Ednux, we envision a future where every African learner,
							regardless of background, location, or circumstance, has access to
							personalized, high-quality education that unlocks their full
							potential. We are building more than a platform. We are building a
							movement: A movement that redefines how students learn, how
							educators teach, and how institutions grow. A movement that
							replaces outdated systems with intelligent, inclusive, and
							adaptive tools. A movement that empowers communities to take
							ownership of their learning journeys.
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: '#666666',
                fontSize: '1.2rem',
                lineHeight: 1.7,
                maxWidth: '900px',
                mx: 'auto'
              }}
            >
              {' '}
							Our vision is to transform education across Africa by: Harnessing
							AI to deliver tailored learning experiences that adapt to each
							student’s pace, style, and goals. Making education mobile-first
							and accessible, so learning never stops, whether in the classroom,
							at home, or on the go. Connecting learners and educators through
							collaborative features that foster mentorship, peer support, and
							shared growth. Equipping institutions with data-driven insights to
							improve outcomes, reduce barriers, and scale impact. We believe
							the future of education is not imported, it’s built locally, with
							global standards and deep cultural relevance. Ednux is here to
							lead that future.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant='h2'
              sx={{
                fontWeight: 'bold',
                color: '#1a1a1a',
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
							Our Core Values
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {values.map((value, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    p: 4,
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    bgcolor: '#f8f9fa',
                    borderRadius: 2
                  }}
                >
                  <Typography
                    variant='h5'
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      color: '#1a1a1a'
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      color: '#666666',
                      lineHeight: 1.7,
                      fontSize: '1.1rem'
                    }}
                  >
                    {value.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Founder Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        <Container maxWidth='xl' sx={{ px: 0 }}>
          <Box sx={{ textAlign: 'center', mb: 6, px: 3 }}>
            <Typography
              variant='h2'
              sx={{
                fontWeight: 'bold',
                color: 'black',
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
							Meet Our Founder
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: 'rgba(1, 0, 0, 0.8)',
                fontSize: '1.2rem',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
							Passionate architect, technologist, and innovator with a vision of
							transforming African education.
            </Typography>
          </Box>

          <Card
            sx={{
              borderRadius: 0,
              overflow: 'hidden',
              background: '#eaf6fa',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
              width: '100vw',
              position: 'relative',
              left: '50%',
              right: '50%',
              marginLeft: '-50vw',
              marginRight: '-50vw'
            }}
          >
            <Grid container>
              {/* Content Side */}
              <Grid item xs={12} md={8}>
                <Box sx={{ p: { xs: 4, md: 6 } }}>
                  <Typography
                    variant='h2'
                    sx={{
                      fontWeight: 'bold',
                      color: '#1a1a1a',
                      mb: 1,
                      fontSize: { xs: '2rem', md: '2.5rem' }
                    }}
                  >
										FARUQ OLAMIDE SOKUNBI
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant='body2'
                      sx={{
                        color: '#666666',
                        fontSize: '0.9rem',
                        mb: 1
                      }}
                    >
											• Architecture Student & Software Engineer
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {socialLinks.map((social, index) => (
                        <IconButton
                          key={index}
                          component={Link}
                          href={social.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={social.label}
                          sx={{
                            color:
															theme.palette.mode === 'dark'
															  ? 'rgba(255,255,255,0.6)'
															  : 'rgba(100,116,139,1)',
                            '&:hover': {
                              color: theme.palette.primary.main,
                              bgcolor:
																theme.palette.mode === 'dark'
																  ? 'rgba(255,255,255,0.05)'
																  : 'rgba(0,0,0,0.04)'
                            },
                            transition: 'all 0.2s ease-in-out'
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      ))}
                    </Box>
                  </Box>

                  <Typography
                    variant='body1'
                    sx={{
                      color: '#333333',
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      maxWidth: '600px'
                    }}
                  >
										I founded Ednux after relocating to Cyprus to pursue
										architecture studies and experiencing firsthand how
										technology could revolutionize education. The contrast was
										remarkable: while students in Cyprus accessed assignments,
										grades, and assessments instantly through sophisticated
										learning management systems, many institutions in Nigeria
										continued to rely on traditional methods—printed handouts,
										manual grading, and significant feedback delays.
                    <br />
                    <br />
										This experience ignited my mission. I recognized not merely
										a gap, but a transformative opportunity to develop superior
										solutions for African learners. Ednux emerged from this
										vision: a comprehensive platform where students can learn,
										develop, and excel with the same efficiency and
										accessibility found in global educational systems.
                    <br />
                    <br />
										Balancing architecture studies while leading a startup has
										proven to be my most demanding challenge. From designing
										user interfaces to developing features and formulating
										growth strategies, the journey has been rigorous—yet my
										commitment remains unwavering. Architecture has instilled in
										me discipline, creativity, and the power of analytical
										thinking. Ednux channels these same principles into every
										feature we deliver.
                    <br />
                    <br />
										For me, transforming African education transcends being
										merely a goal—it represents a calling. I believe that when
										students receive appropriate tools, their creativity
										flourishes, their confidence strengthens, and their futures
										expand exponentially. Ednux is designed to empower students,
										providing them with support and instilling pride in their
										learning journey. This is the legacy I am building—one
										learner at a time.
                  </Typography>
                </Box>
              </Grid>

              {/* Image Side */}
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: { xs: 300, md: '100%' },
                    minHeight: { md: 600 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Placeholder for founder image */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: { xs: '240%', sm: 520, md: 650 },
                      maxWidth: '240%',
                      background: 'none',
                      boxShadow: 'none',
                      overflow: 'visible',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: { xs: 'auto', md: 0 }
                    }}
                  >
                    <Box
                      component='img'
                      src='/assets/images/founder.png'
                      alt='Access to global learning environment'
                      sx={{
                        width: '100%',
                        height: { xs: 320, sm: 420, md: 520 },
                        objectFit: 'contain',
                        display: 'block',
                        background: 'none',
                        boxShadow: 'none'
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
