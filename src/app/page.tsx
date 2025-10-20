'use client';

import { keyframes } from '@emotion/react';
import {
  ArrowForward,
  ArticleOutlined,
  ChatBubbleOutlineRounded,
  CheckCircleOutline,
  FolderOutlined,
  GroupsOutlined,
  Psychology,
  SchoolOutlined,
  TrackChangesOutlined
} from '@mui/icons-material';
import {
  alpha,
  Backdrop,
  Box,
  Button,
  Container,
  Fade,
  Grid,
  Modal,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import Script from 'next/script';
import React, { useState } from 'react';
import EdnuxLogo from '../components/common/EdnuxLogo';
import FaqSection from '../components/home/FaqSection';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import InteractiveDashboardSection from '../components/home/InteractiveDashboardSection';
import ProductivitySection from '../components/home/ProductivitySection';
import High_integrity from '../components/home/High_integrity';
import WhyEdnux from '../components/home/WhyEdnux';
import WorkspaceToolsSection from '../components/home/WorkspaceToolsSection';

// Define animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.03);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
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

// Feature details for the modals
const featureDetails = [
  {
    title: 'Collaborative Learning Environment',
    content: `
      <h3>Interactive Virtual Classrooms</h3>
      <p>Engage in real-time collaborative learning sessions with classmates and educators. Our platform supports interactive discussions, group activities, and live presentations.</p>
      <h3>Knowledge Sharing Tools</h3>
      <p>Easily share insights, resources, and study materials with your academic network. Highlight key concepts and annotate shared content for better understanding.</p>
      <h3>Study Group Formation</h3>
      <p>Create or join study groups based on courses, interests, or projects. Schedule group study sessions and track collective progress toward learning goals.</p>
      <h3>Peer Review System</h3>
      <p>Improve your work through structured peer feedback. Our system facilitates anonymous reviews and constructive feedback exchanges between students.</p>
    `,
    image:
			'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    icon: <GroupsOutlined />
  },
  {
    title: 'Smart Project Management',
    content: `
      <h3>Project Planning & Scheduling</h3>
      <p>Create comprehensive project plans with milestones, deadlines, and task assignments. Our intuitive interface makes complex project management simple for students.</p>
      <h3>Team Collaboration Tools</h3>
      <p>Work seamlessly with team members on group projects. Assign roles, track contributions, and maintain clear communication throughout the project lifecycle.</p>
      <h3>Progress Tracking</h3>
      <p>Monitor individual and team progress with visual dashboards and automated reminders. Stay on schedule with intelligent task prioritization based on deadlines.</p>
      <h3>Integration with Academic Calendar</h3>
      <p>Sync project deadlines with your academic calendar to manage your workload efficiently. Receive smart scheduling suggestions to balance project work with other coursework.</p>
    `,
    image: '/assets/images/progress-tracking-illustration.png',
    icon: <ArticleOutlined />
  },
  {
    title: 'Advanced Learning Tools',
    content: `
      <h3>AI-Powered Study Assistance</h3>
      <p>Enhance your learning with personalized AI study tools that adapt to your learning style. Get help with research, writing, and problem-solving tailored to your academic needs.</p>
      <h3>Interactive Learning Materials</h3>
      <p>Access engaging, multimedia learning resources designed for better comprehension and retention. Practice concepts with interactive exercises and simulations.</p>
      <h3>Custom Learning Paths</h3>
      <p>Follow personalized learning paths based on your goals, strengths, and areas for improvement. Our system adapts content recommendations to optimize your learning journey.</p>
      <h3>Cross-Reference System</h3>
      <p>Connect concepts across different courses and subjects for deeper understanding. Our platform highlights relationships between topics to build comprehensive knowledge.</p>
    `,
    image: '/assets/images/chat-illustration.png',
    icon: <Psychology />
  },
  {
    title: 'Vibrant Social Feed & Community',
    content: `
      <h3>Dynamic Academic Community</h3>
      <p>Connect with your broader educational network. Share achievements, ask questions, and exchange insights with fellow students and instructors.</p>
      <h3>Effortless Knowledge Sharing</h3>
      <p>Post educational content, interesting findings, and academic resources. Our platform encourages the exchange of knowledge in a supportive environment.</p>
      <h3>Personalized Content Stream</h3>
      <p>Your feed is tailored to your academic interests and connections, showing relevant posts from instructors, classmates, and trusted educational sources.</p>
      <h3>Collaborative Discussion Groups</h3>
      <p>Participate in subject-specific discussion groups moderated by educators and field experts. Expand your understanding through diverse perspectives.</p>
    `,
    image: '/assets/images/posts-news-illustration.png',
    icon: <GroupsOutlined />
  },
  {
    title: 'Personalized Learning Dashboard',
    content: `
      <h3>Customized Welcome Experience</h3>
      <p>Begin your day with a quick access to your most important activities and resources.</p>
      <h3>At-a-Glance Class Schedule</h3>
      <p>Instantly see your classes for the day, with quick links to join sessions, access materials, or contact instructors.</p>
      <h3>Holistic Progress Visualization</h3>
      <p>Track your overall academic progress with intuitive visual indicators, including completion percentages, skill development metrics, and performance analytics.</p>
      <h3>Smart Reminders & Prioritization</h3>
      <p>Receive intelligent notifications about upcoming deadlines and suggested tasks based on your schedule and learning priorities.</p>
    `,
    image: '/assets/images/learning-management-illustration.png',
    icon: <TrackChangesOutlined />
  },
  {
    title: 'Advanced Educational File Management',
    content: `
      <h3>Specialized Academic Organization</h3>
      <p>Organize course materials, research, and project files in a system designed specifically for educational content. Create folders, tag files, and use custom categorization for easy access.</p>
      <h3>Academic Version Control</h3>
      <p>Never lose track of document changes with built-in version tracking. Access previous versions of papers and projects, compare changes, and restore earlier drafts.</p>
      <h3>Secure Academic Sharing</h3>
      <p>Share files securely with instructors, classmates, or project teammates. Set precise permissions to control who can view, edit, or comment on your academic work.</p>
      <h3>Cross-Platform Compatibility</h3>
      <p>Work with documents, presentations, spreadsheets, research data, and code. Preview files directly in the browser without needing to download or switch applications.</p>
    `,
    image: '/assets/images/file-management-illustration.png',
    icon: <FolderOutlined />
  }
];

const HomeContent = () => {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleOpenModal = (index: number) => {
    setOpenModal(index);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const coreFeaturesList = [
    {
      title: 'Collaborative Learning Environment',
      description:
				'Connect with classmates and educators in a shared digital workspace designed for interactive learning and knowledge sharing.',
      icon: (
        <GroupsOutlined
          sx={{ fontSize: 40, color: theme.palette.primary.main }}
        />
      )
    },
    {
      title: 'Smart Project Management',
      description:
				'Organize your academic projects with intuitive tools for planning, tracking, and collaborating with team members.',
      icon: (
        <ArticleOutlined
          sx={{ fontSize: 40, color: theme.palette.secondary.main }}
        />
      )
    },
    {
      title: 'Personalized Learning Path',
      description:
				'Access customized course recommendations and learning materials tailored to your educational goals and learning style.',
      icon: (
        <SchoolOutlined
          sx={{ fontSize: 40, color: theme.palette.primary.main }}
        />
      )
    },
    {
      title: 'Integrated Resource Library',
      description:
				'Store, organize, and share educational resources in one centralized location with powerful search capabilities.',
      icon: (
        <FolderOutlined
          sx={{ fontSize: 40, color: theme.palette.secondary.main }}
        />
      )
    },
    {
      title: 'Real-time Communication Tools',
      description:
				'Engage in discussions, receive instant feedback, and collaborate with peers through integrated messaging and video tools.',
      icon: (
        <ChatBubbleOutlineRounded
          sx={{ fontSize: 40, color: theme.palette.primary.main }}
        />
      )
    },
    {
      title: 'Comprehensive Progress Tracking',
      description:
				'Monitor your academic progress with detailed analytics, performance insights, and achievement tracking.',
      icon: (
        <TrackChangesOutlined
          sx={{ fontSize: 40, color: theme.palette.secondary.main }}
        />
      )
    }
  ];

    return (
      <>
        {/* Google tag (gtag.js)  */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-49F66DF463" async />
        <Script id="ga-init-home" strategy="afterInteractive">{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-49F66DF463');
`}</Script>
      <Header />

      <Hero />
      <WhyEdnux />
      <High_integrity />
      <ProductivitySection />
      <InteractiveDashboardSection />
      <WorkspaceToolsSection />

      {/* Goal Section */}
      <Box
        sx={{
          my: 10,
          py: 8,
          px: { xs: 3, md: 6 },
          mx: { xs: 2, sm: 4, md: 6 },
          borderRadius: 4,
          border:
						'2px solid radial-gradient(ellipse 60% 70% at 20% 80%, rgba(70, 139, 249, 0.3) 0%, transparent 70%), #000000',
          position: 'relative',
          overflow: 'hidden',
          background: theme.palette
            ? 'radial-gradient(circle at 50% 50%, rgba(67, 98, 238, 0.06), transparent 70%)'
            : 'radial-gradient(circle at 50% 50%, rgba(67, 98, 238, 0.81), transparent 70%)',
          backdropFilter: 'blur(10px)',
          boxShadow:
						theme.palette.mode === 'dark'
						  ? '0 10px 40px rgba(0,0,0,0.2)'
						  : '0 10px 40px rgba(0,0,0,0.05)',
          animation: `${fadeIn} 0.8s ease-out`
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems='center'>
          <Grid item xs={12} md={6}>
            <Typography
              variant='h6'
              component='div'
              color={'#2a5cff'}
              fontWeight='600'
              fontFamily={'Questrial'}
              sx={{ mb: 2 }}
            >
							OUR MISSION
            </Typography>
            <Typography
              fontWeight='500'
              fontFamily={'Questrial'}
              sx={{
                mb: 3,
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
              }}
            >
							Transforming Education Through Technology
            </Typography>
            <Typography
              variant='body1'
              sx={{
                mb: 4,
                color:
									theme.palette.mode === 'dark'
									  ? '#ffffff'
									  : theme.palette.text.secondary,
                fontSize: '1.1rem',
                lineHeight: 1.2
              }}
            >
							We're on a mission to make education more accessible,
							collaborative, and engaging. Ednux brings together the best tools
							and technologies to create an ecosystem where students, educators,
							and professionals can thrive.
            </Typography>

            <Grid container spacing={1.5} sx={{ mb: 4 }}>
              {[
                { text: 'Connect students and educators globally' },
                { text: 'Create innovative learning experiences' },
                { text: 'Streamline administrative workflows' },
                { text: 'Facilitate peer-to-peer knowledge sharing' },
                { text: 'Provide cutting-edge educational tools' },
                { text: 'Make education more accessible' }
              ].map((item, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 1,
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: alpha(
                          theme.palette.primary.main,
                          0.05
                        ),
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    <CheckCircleOutline
                      sx={{
                        color: 'primary.main',
                        mr: 1.5,
                        fontSize: 20
                      }}
                    />
                    <Typography
                      variant='body1'
                      sx={{
                        color:
													theme.palette.mode === 'dark'
													  ? '#ffffff'
													  : theme.palette.text.primary
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Button
              component={Link}
              href='/about'
              variant='contained'
              sx={{
                borderRadius: 999,
                px: 2,
                py: 0.7,
                fontWeight: 500,
                fontSize: 14,
                bgcolor: '#2a5cff',
                color: '#fff',
                boxShadow: '0 2px 12px 0 rgba(42,92,255,0.10)',
                textTransform: 'none',
                fontFamily: 'Questrial, sans-serif',
                minWidth: 0,
                '&:hover': {
                  bgcolor: '#1741b6',
                  color: '#fff'
                }
              }}
            >
							Learn About Us
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow:
									theme.palette.mode === 'dark'
									  ? '0 25px 50px rgba(0,0,0,0.5)'
									  : '0 25px 50px rgba(0,0,0,0.2)',
                height: { xs: '300px', md: '400px' },
                backgroundImage:
									'url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animation: `${float} 6s infinite ease-in-out`
              }}
            >
              {/* Overlay for better text readability */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
										'linear-gradient(135deg, rgba(67, 98, 238, 0.32), rgba(165, 110, 244, 0.7))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography
                  variant='h4'
                  component='div'
                  color='white'
                  fontWeight='700'
                  textAlign='center'
                  sx={{ px: 3 }}
                >
									Building the Future of Education
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 6 },
          textAlign: 'center',
          position: 'relative',
          background:
						theme.palette.mode === 'dark'
						  ? 'linear-gradient(135deg, #1a2a4a 0%, #2d3561 100%)'
						  : 'linear-gradient(135deg, #f8f9fd 0%, #e8ecff 100%)',
          overflow: 'hidden'
        }}
      >
        {/* Background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
							theme.palette.mode === 'dark'
							  ? 'radial-gradient(circle at 50% 50%, rgba(67, 97, 238, 0.1), transparent 70%)'
							  : 'radial-gradient(circle at 50% 50%, rgba(67, 97, 238, 0.05), transparent 70%)',
            zIndex: 0
          }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          <Typography
            variant='h2'
            component='h2'
            fontWeight='500'
            fontFamily={'Questrial'}
            sx={{
              mb: 3,
              background: 'linear-gradient(90deg, #4361ee 0%, #a56ef4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              animation: `${fadeIn} 0.8s ease-out`
            }}
          >
						Be Part of Africa’s Learning Revolution!
          </Typography>
          <Typography
            variant='h6'
            sx={{
              mb: 5,
              color:
								theme.palette.mode === 'dark'
								  ? '#ffffff'
								  : theme.palette.text.secondary,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
              animation: `${fadeIn} 0.8s ease-out`,
              animationDelay: '0.2s'
            }}
          >
						Ednux is still a work in progress — and we are listening. We're
						gathering the voices of thousands of African students to build
						something that truly serves. Tell us what you want, what you need.
						Be the first to try it when we launch!
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent='center'
            alignItems='center'
            sx={{
              animation: `${fadeIn} 0.8s ease-out`,
              animationDelay: '0.4s'
            }}
          >
            <Button
              component={Link}
              href='/waitlist'
              variant='contained'
              endIcon={<ArrowForward />}
              sx={{
                borderRadius: 999,
                px: 2,
                py: 0.7,
                fontWeight: 500,
                fontSize: 14,
                bgcolor: '#2a5cff',
                color: '#fff',
                boxShadow: '0 2px 12px 0 rgba(42,92,255,0.10)',
                textTransform: 'none',
                fontFamily: 'Questrial, sans-serif',
                minWidth: 0,
                '&:hover': {
                  bgcolor: '#1741b6',
                  color: '#fff'
                }
              }}
            >
							Join waitlist
            </Button>

            <Button
              component={Link}
              href='/feedback'
              variant='outlined'
              sx={{
                borderRadius: 999,
                px: 1.8,
                py: 0.6,
                fontWeight: 500,
                fontSize: 13,
                color: '#232946',
                borderColor: '#2a5cff',
                textTransform: 'none',
                background: 'rgba(255, 255, 255, 0.03)',
                boxShadow: 'none',
                fontFamily: 'Questrial, sans-serif',
                minWidth: 0,
                '&:hover': {
                  background: 'rgba(240,240,255,0.7)',
                  borderColor: '#232946'
                }
              }}
            >
							feedback
            </Button>
          </Stack>
        </Box>
      </Box>
      <FaqSection />

      <Footer />
    </>
  );
};

export default function Home() {
  return <HomeContent />;
}
