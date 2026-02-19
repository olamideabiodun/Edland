import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type React from "react";
import RotatingWord from "@/components/common/RotatingWord";
import Container from "@/components/Layout/Container";

const Hero: React.FC = () => (
  <Box
    sx={{
      width: "100%",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Questrial",

     background: {
  xs: `
    radial-gradient(circle at 20% 20%, rgba(125, 153, 196, 0.6), transparent 70%),
    #fefefe
  `,
  md: `
    radial-gradient(circle at 30% 30%, rgba(125,153, 196, 0.6), transparent 70%),
    #fefefe
  `,
},




    }}
  >
    <Container>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          pt: { xs: 12, md: 16 },
          pb: { xs: 10, md: 14 },
        }}
      >
        {/* LEFT CONTENT */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "50%" },
			mx: "auto",
            display: "flex",
            flexDirection: "column",
			alignItems: "center",
			textAlign: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                letterSpacing: "-0.03em",
                fontSize: {
                  xs: "2.4rem",
                  sm: "3.2rem",
                  md: "3.8rem",
                  lg: "4.2rem",
                },
                lineHeight: 1.05,
                mb: 2.5,
                color: "#0f172a",
				maxWidth: 680,
				mx: "auto",
			}}
            >
              Redefining{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg,#2563eb,#4f46e5)",
                  color: "#fff",
                  px: 1.4,
                  py: 0.4,
                  borderRadius: "12px",
                  display: "inline-flex",
                  alignItems: "center",
                  mx: 0.5,
                  boxShadow:
                    "0 8px 24px rgba(37,99,235,0.35)",
                }}
              >
                <RotatingWord
                  words={[
                    "Education",
                    "Assessment",
                    "Verification",
                    "Collaboration",
                  ]}
                />
              </Box>{" "} <br/>
              For Every Learner.
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Typography
              sx={{
                color: "#475569",
                fontWeight: 400,
                mb: 4,
                fontSize: { xs: "1.05rem", md: "1.15rem" },
                maxWidth: 520,
                lineHeight: 1.6,
              }}
            >
              Empowering institutions, educators, and students
              with AI-driven simplicity and localized relevance.
            </Typography>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                href="/waitlist"
                sx={{
                  background:
                    "linear-gradient(135deg,#2563eb,#4f46e5)",
                  color: "#fff",
                  px: 4,
                  py: 1.3,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: 15,
                  fontWeight: 500,
                  boxShadow:
                    "0 12px 30px rgba(37,99,235,0.35)",
                  transition: "all .2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    background:
                      "linear-gradient(135deg,#1d4ed8,#4338ca)",
                  },
                }}
              >
                Get Started Free
              </Button>

              <Button
                href="/#how-it-works"
                sx={{
                  color: "#0f172a",
                  px: 3,
                  py: 1.3,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: 15,
                  fontWeight: 500,
                  backgroundColor: "transparent",
                  transition: "all .2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    backgroundColor: "rgba(15,23,42,0.05)",
                  },
                }}
              >
                View Features
              </Button>
            </Stack>
          </motion.div>
        </Box>
        
      </Box>
    </Container>
  </Box>
);

export default Hero;
