"use client";

import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";

export default function Navbar() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        backdropFilter: "blur(14px)",
        background: "rgba(255,255,255,0.75)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={{ xs: 2, md: 8 }}
        py={2}
      >
        <Typography fontWeight={600}>EDNUX</Typography>

        <Stack direction="row" spacing={3}>
          <Button href="#features">Features</Button>
          <Button href="#pricing">Pricing</Button>
          <Button href="/waitlist" variant="contained">
            Get Access
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

