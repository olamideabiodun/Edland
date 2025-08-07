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
        <Box>
          {[
            {
              title: 'Localized Learning, Global standards',
              desc: 'Deliver curriculum and assessments tailored to African contexts—with the quality and flexibility of world-class systems.'
            },
            {
              title: 'Smart Automation for Educators',
              desc: 'Auto-grade, analyze, and improve learning outcomes without added stress. Focus on teaching, not admin.'
            },
            {
              title: 'Data You Can Act On',
              desc: 'From attendance to performance trends—see the story behind your numbers with visual dashboards built for impact.'
            },
            {
              title: 'Seamless, Scalable, Secure',
              desc: 'Whether it&apos; a single classroom or national rollout, Ednux adapts to your needs with encrypted infrastructure and modular design.'
            },
            {
              title: 'Built in Africa, for every learner.',
              desc: 'Created by African developers who understand your obstacles—and your aspirations. Ednux is a platform designed to meet real needs, with tools that scale alongside your ambition.'
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
