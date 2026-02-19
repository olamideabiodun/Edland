import { Box } from "@mui/material";
import type React from "react";

const Container: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: "1240px",
        mx: "auto",
        px: { xs: 2, sm: 4, md: 6 },
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;

