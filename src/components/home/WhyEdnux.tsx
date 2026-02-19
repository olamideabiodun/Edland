'use client';

import { Box, Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'High-Integrity Assessment & Personalized Learning',
    desc: 'We move beyond single abstract grades to provide objective proof of skill mastery, measuring not just what learners know, but how they learn.'
  },
  {
    title: 'Lifelong Ownership & Data Privacy (SSI)',
    desc: 'Individuals retain permanent control of their academic and professional history with portable, verifiable credentials.'
  },
  {
    title: 'Instant & Fraud-Proof Verification',
    desc: 'Institutions and employers can verify credentials in seconds, eliminating bureaucracy and credential fraud.'
  }
];

const WhyEdnux = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 10, md: 16 },
        background: `
          radial-gradient(circle at 20% 20%, ${alpha('#6366f1', 0.12)}, transparent 55%),
          radial-gradient(circle at 80% 30%, ${alpha('#9fb2f0', 0.12)}, transparent 55%),
          #fafafa
        `
      }}
    >
      {/* Centered Container */}
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 2, sm: 4, md: 6 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 6, md: 10 },
          alignItems: 'center'
        }}
      >
        {/* LEFT CONTENT */}
        <Box>
          <Typography
            sx={{
              fontSize: { xs: '2.4rem', md: '3.2rem' },
              fontWeight: 600,
              lineHeight: 1.1,
              mb: 2,
              color: '#02071c'
            }}
          >
            Why{' '}
            <Box component="span" sx={{ color: '#4f46e5' }}>
              Ednux?
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.15rem' },
              fontWeight: 500,
              mb: 3,
              color: '#232946'
            }}
          >
            The Learning System You Actually Understand.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              color: '#4b5563',
              mb: 5,
              maxWidth: 520
            }}
          >
            Ednux is an advanced social Learning Management System (LMS) that replaces outdated
            grade-based assessment with Competency-Based Education (CBE), generating lifelong
            verifiable credentials owned by the learner.
          </Typography>

          {/* Feature Cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 2.5
            }}
          >
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: '16px',
                    background: alpha('#ffffff', 0.7),
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha('#000', 0.06)}`,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 18px 40px rgba(0,0,0,0.08)'
                    }
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      mb: 0.8,
                      color: '#111827'
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.95rem',
                      color: '#4b5563',
                      lineHeight: 1.6
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: 520, md: 620 }
            }}
          >
            <Image
              src="/assets/images/circle_mockup.png"
              alt="Ednux platform visualization"
              width={620}
              height={520}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain'
              }}
              priority
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyEdnux;
