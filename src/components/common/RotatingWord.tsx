"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";

type Props = {
  words: string[];
  interval?: number;
};

export default function RotatingWord({
  words,
  interval = 2500,
}: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        transition: "all 0.3s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        color: "inherit",
      }}
    >
      {words[index]}
    </Box>
  );
}

