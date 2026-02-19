"use client";

import {
  ArticleOutlined,
  GroupsOutlined,
  SchoolOutlined,
  ArrowForward,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Header from "@/components/home/Header";

export default function FeaturesSection() {
  const theme = useTheme();

  const features = [
    {
      title: "Social Networking",
      description:
        "Connect learners, classmates, and professionals in collaborative spaces built for meaningful knowledge sharing.",
      icon: <GroupsOutlined />,
    },
    {
      title: "Workspace Tools",
      description:
        "Manage projects, assign tasks, track progress, and organize deadlines in one powerful workspace.",
      icon: <ArticleOutlined />,
    },
    {
      title: "Learning Management",
      description:
        "Access courses, assignments, and study resources with intelligent organization and search.",
      icon: <SchoolOutlined />,
    },
  ];

  return (
    <>
      {/* GLOBAL HEADER */}
      <Header />

      {/* FEATURES HERO */}
      <Box
        sx={{
          bgcolor: "#1a1a1a",
          color: "white",
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
          fontFamily: "Questrial",
        }}
      >
        <Container maxWidth="lg">

          {/* HEADER TEXT */}
          <Box sx={{ mb: 8 }}>
            <Chip
              label="Features"
              sx={{
                bgcolor: "rgba(255,255,255,0.1)",
                color: "white",
                borderRadius: 5,
                px: 2,
                py: 1,
                mb: 4,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2.5rem", md: "4rem" },
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              Built to Power
              <Box
                component="span"
                sx={{
                  ml: 2,
                  background: "#2196F3",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Modern Learning
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.8)",
                maxWidth: 620,
                lineHeight: 1.6,
                fontSize: "1.3rem",
              }}
            >
              Everything you need to learn, collaborate, and stay productive in
              one intelligent platform.
            </Typography>
          </Box>

          {/* FEATURE CARDS */}
          <Grid container spacing={6}>
            {features.map((item, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    background: "#f8f9fa",
                    color: "#1a1a1a",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 35px 70px rgba(33,150,243,0.25)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>

                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        bgcolor: "rgba(33,150,243,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        color: theme.palette.primary.main,
                        fontSize: 30,
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography variant="h5" fontWeight="bold" mb={2}>
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#666666",
                        lineHeight: 1.7,
                        mb: 4,
                        fontSize: "1.05rem",
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Button
                      endIcon={<ArrowForward />}
                      sx={{
                        px: 0,
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        textTransform: "none",
                      }}
                    >
                      Learn more
                    </Button>

                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* BACKGROUND GLOW */}
        <Box
          sx={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "linear-gradient(45deg, rgba(70,47,245,0.15), rgba(33,150,243,0.15))",
            filter: "blur(120px)",
          }}
        />
      </Box>
    </>
  );
}
