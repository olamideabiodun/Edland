"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";
import EdnuxLogo from "../common/EdnuxLogo";

const Header: React.FC = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const socialLinks = [
    { icon: <TwitterIcon />, href: "https://x.com/ednuxofficial", label: "X" },
    {
      icon: <InstagramIcon />,
      href: "https://instagram.com/ednux_official",
      label: "Instagram",
    },
    {
      icon: <LinkedInIcon />,
      href: "https://linkedin.com/in/ednux-mobile-b8200635b",
      label: "LinkedIn",
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1200,

        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.75)"
          : "rgba(255,255,255,0.55)",

        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.06)"
          : "1px solid rgba(0,0,0,0.03)",

        boxShadow: scrolled
          ? "0 10px 40px rgba(15,23,42,0.08)"
          : "none",

        transition: "all .25s ease",
      }}
    >
      {/* CONTAINER */}
      <Box
        sx={{
          maxWidth: "1240px",
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EdnuxLogo size={150} />
        </Box>

        {/* NAVIGATION - DESKTOP */}
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          {["home", "features", "about", "pricing", "contact"].map((item) => (
            <Button
              key={item}
              component={Link}
              href={
                item === "home"
                  ? "/"
                  : item === "Features"
                  ? "/#productivity-section"
                  : `/${item}`
              }
              sx={{
                fontSize: 14,
                textTransform: "none",
                fontWeight: 400,
                color: "#0f172a",
                px: 2,
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "rgba(15,23,42,0.05)",
                },
              }}
            >
               {item.charAt(0).toUpperCase() + item.slice(1)} {/* Capitalizes the first letter */}
            </Button>
          ))}
        </Stack>

        {/* ACTIONS - DESKTOP */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Button
            component={Link}
            href="/feedback"
            sx={{
              fontSize: 14,
              textTransform: "none",
              color: "#0f172a",
              px: 2,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "rgba(15,23,42,0.05)",
              },
            }}
          >
            Feedback
          </Button>

          <Button
            component={Link}
            href="/waitlist#waitlist_info"
            sx={{
              background:
                "linear-gradient(135deg,#2563eb,#4f46e5)",
              color: "#fff",
              px: 3,
              borderRadius: 2,
              fontSize: 14,
              textTransform: "none",
              boxShadow:
                "0 10px 30px rgba(37,99,235,0.35)",
              "&:hover": {
                background:
                  "linear-gradient(135deg,#1d4ed8,#4338ca)",
              },
            }}
          >
            Join Waitlist
          </Button>
        </Stack>

        {/* MOBILE HAMBURGER */}
        <IconButton
          onClick={handleDrawerOpen}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <svg width="28" height="28" viewBox="0 0 32 32">
            <rect x="7" y="9" width="18" height="3" rx="1.5" fill="#0f172a" />
            <rect x="11" y="15" width="14" height="3" rx="1.5" fill="#0f172a" />
            <rect x="15" y="21" width="10" height="3" rx="1.5" fill="#0f172a" />
          </svg>
        </IconButton>

        {/* MOBILE DRAWER */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          PaperProps={{
            sx: {
              width: 280,
              backdropFilter: "blur(16px)",
              backgroundColor: "rgba(255,255,255,0.8)",
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <List>
              {["Home", "Features", "About", "Pricing", "Contact"].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={
                      text === "Home"
                        ? "/"
                        : text === "Features"
                        ? "/#productivity-section"
                        : `/${text.toLowerCase()}`
                    }
                    onClick={handleDrawerClose}
                  >
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />

            <Stack spacing={2}>
              <Button
                component={Link}
                href="/feedback"
                onClick={handleDrawerClose}
              >
                Feedback
              </Button>

              <Button
                component={Link}
                href="/waitlist#waitlist_info"
                variant="contained"
                onClick={handleDrawerClose}
              >
                Join Waitlist
              </Button>

              <Stack direction="row" spacing={1}>
                {socialLinks.map((social, i) => (
                  <IconButton
                    key={i}
                    component={Link}
                    href={social.href}
                    target="_blank"
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
