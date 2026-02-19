'use client';

import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

export default function PricingPage() {
  const theme = useTheme();

  const plans = [
    {
      name: 'Free',
      subtitle: 'For individuals getting started',
      cta: 'Get Started',
      highlight: false,
      features: [
        'AI-assisted study tools',
        'Basic social learning access',
        'Limited storage',
        'Community support'
      ]
    },
    {
      name: 'Pro',
      subtitle: 'For serious learners',
      cta: 'Start Free Trial',
      highlight: true,
      features: [
        'Everything in Free',
        'Unlimited AI assistance',
        'Advanced analytics',
        'Workspace & task manager',
        'Priority support'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      subtitle: 'For schools & organizations',
      cta: 'Contact Sales',
      highlight: false,
      features: [
        'Everything in Pro',
        'Institution dashboards',
        'Team management',
        'Custom integrations',
        'Dedicated account manager'
      ]
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#ffffff', fontFamily: 'Questrial' }}>
      <Header />

      {/* ================= HERO ================= */}
      <Box
        sx={{
          bgcolor: '#090c11',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Chip
            label="Pricing"
            sx={{
              bgcolor: 'rgba(255,255,255,0.1)',
              color: 'white',
              borderRadius: 5,
              px: 2,
              py: 1,
              mb: 4
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '4rem' },
              lineHeight: 1.1,
              mb: 3
            }}
          >
            Simple & Transparent
            <Box
              component="span"
              sx={{
                ml: 2,
                background: '#2196F3',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Pricing
            </Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              maxWidth: 600,
              lineHeight: 1.6
            }}
          >
            Choose the plan that fits your learning journey. Upgrade, downgrade,
            or cancel anytime.
          </Typography>
        </Container>

        {/* Glow */}
        <Box
          sx={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background:
              'linear-gradient(45deg, rgba(70,47,245,0.15), rgba(33,150,243,0.15))',
            filter: 'blur(120px)'
          }}
        />
      </Box>

      {/* ================= PRICING ================= */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {plans.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    p: 1,
                    bgcolor: '#f8f9fa',
                    border: plan.highlight
                      ? `2px solid ${theme.palette.primary.main}`
                      : '1px solid #e5e7eb',
                    boxShadow: plan.highlight
                      ? '0 25px 50px rgba(33,150,243,0.25)'
                      : '0 10px 30px rgba(0,0,0,0.05)',
                    transform: plan.highlight ? 'translateY(-8px)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {plan.highlight && (
                      <Chip
                        label="Most Popular"
                        color="primary"
                        sx={{ mb: 2 }}
                      />
                    )}

                    <Typography variant="h4" fontWeight="bold" mb={1}>
                      {plan.name}
                    </Typography>

                    <Typography color="#666" mb={3}>
                      {plan.subtitle}
                    </Typography>

                    <Stack direction="row" alignItems="baseline" mb={4}>
                      <Typography variant="h2" fontWeight={800}>
                        {plan.price}
                      </Typography>
                      {plan.price !== 'Custom'}
                    </Stack>

                    <Button
                      component={Link}
                      href={
                        plan.name === 'Enterprise'
                          ? '/contact'
                          : '/waitlist'
                      }
                      fullWidth
                      variant={plan.highlight ? 'contained' : 'outlined'}
                      size="large"
                      sx={{
                        mb: 4,
                        py: 1.5,
                        borderRadius: 3,
                        fontWeight: 600,
                        textTransform: 'none'
                      }}
                    >
                      {plan.cta}
                    </Button>

                    <Stack spacing={2}>
                      {plan.features.map((feature, i) => (
                        <Stack
                          key={i}
                          direction="row"
                          spacing={1.5}
                          alignItems="center"
                        >
                          <CheckIcon
                            sx={{
                              color: theme.palette.primary.main,
                              fontSize: 20
                            }}
                          />
                          <Typography>{feature}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: '#0f172a',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            fontWeight="bold"
            mb={3}
            sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}
          >
          </Typography>

          <Typography
            sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}
          >
            Join thousands of learners using Ednux to achieve more.
          </Typography>

          <Button
            component={Link}
            href="/waitlist"
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: '#0f172a',
              px: 5,
              py: 1.8,
              borderRadius: 3,
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                bgcolor: '#f1f5f9',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Join Waitlist
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
