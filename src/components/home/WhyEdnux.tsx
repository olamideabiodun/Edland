import { Box, Grid, Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import React from 'react';
import Image from 'next/image';

const WhyEdnux = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 8 },
        background: {
          xs: 'radial-gradient(ellipse 70% 80% at 60% 0%, #f57f3196 0%, transparent 70%),#fff',
          md: 'radial-gradient(ellipse 70% 80% at 60% 0%, #f57f3196 0%, transparent 70%),#fff'
        },
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        fontFamily: 'Questrial'
      }}
    >
      {/* Left: Text Content */}
      <Box sx={{ flex: 1, minWidth: 0, pr: { md: 6 }, zIndex: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 500,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            mb: 1.5,
            color: '#02071cff',
            lineHeight: 1.1
          }}
        >
          Why{' '}
          <Box component="span" sx={{ color: '#2a5cff' }}>
            Ednux?
          </Box>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: '#232946',
            mb: 3,
            fontSize: { xs: '0.8rem', md: '1.1rem' }
          }}
        >
          The Learning System You Actually Understand.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 300,
            color: '#232946',
            mb: 3,
            fontSize: { xs: '0.8rem', md: '1.1rem' }
          }}
        >
          Ednux is an advanced, social Learning Management System (LMS) that replaces the outdated, subjective grade-based assessment prevalent in Africa with a Competency-Based Education (CBE) model. Our platform is designed not just to deliver learning, but to generate verifiable, lifelong data assets—Verifiable Credentials (VCs)—that are owned and controlled entirely by the individual user.
        </Typography>
        <Box>
          {[
            {
              title: 'High-Integrity Assessment and Personalized Learning',
              desc: 'We move beyond the single, abstract grade to provide actionable, objective proof of skill mastery. Our technology is designed to not only measure what a student knows, but how they learn, ensuring assessment is accurate, fair, and transparent.',
            },
            {
              title: 'Lifelong Ownership and Data Privacy (SSI)',
              desc: 'We address the fundamental failure of trust and portability in traditional credential systems by giving individuals full, perpetual control over their academic and professional history.',
            },
            {
              title: 'Unmatched Verification Efficiency',
              desc: 'Our strategic choice of infrastructure directly solves the regional problem of bureaucratic delay, providing institutions and employers with instantaneous, fraud-proof verification capability.',
            }
          ].map((item, idx) => (
            <Box key={item.title} sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, color: '#232946', mb: 0.5 }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#232946',
                  opacity: 0.85,
                  fontSize: { xs: '0.7rem', md: '0.9rem' }
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      {/* Right: Image and Callout */}
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          mt: { xs: 5, md: 0 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
          mx: { xs: 'auto', md: 0 }
        }}
      >
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
          <Image
            src="/assets/images/circle_mockup.png"
            alt="Access to global learning environment"
            width={650}
            height={520}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              background: 'none',
              boxShadow: 'none'
            }}
            priority
          />
        </Box>
      </Box>
    </Box>
  );
};

export default WhyEdnux;
