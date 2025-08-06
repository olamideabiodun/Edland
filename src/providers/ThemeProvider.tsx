// src/providers/ThemeProvider.tsx
"use client";

import type { PaletteMode } from "@mui/material";
import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import type React from "react";
import { createContext, useContext, useMemo, useState } from "react";

// Define the color mode context type
type ColorModeContextType = {
	toggleColorMode: () => void;
};

// Create the color mode context
const ColorModeContext = createContext<ColorModeContextType>({
	toggleColorMode: () => {},
});

// Hook to use the color mode context
export const useColorMode = () => useContext(ColorModeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [mode, setMode] = useState<PaletteMode>("light");

	// Color mode toggler
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[],
	);

	// Create theme based on current mode
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					primary: {
						main: "#3a86ff",
						dark: "#2668cf",
						light: "#61a0ff",
					},
					secondary: {
						main: "#ff6b6b",
						dark: "#e05252",
						light: "#ff8c8c",
					},
					background: {
						default: mode === "light" ? "#f5f7fa" : "#111927",
						paper: mode === "light" ? "#ffffff" : "#1a2235",
					},
				},
				typography: {
					fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
					h1: {
						fontWeight: 700,
					},
					h2: {
						fontWeight: 700,
					},
					h3: {
						fontWeight: 600,
					},
					h4: {
						fontWeight: 600,
					},
					h5: {
						fontWeight: 600,
					},
					h6: {
						fontWeight: 500,
					},
					button: {
						fontWeight: 500,
						textTransform: "none",
					},
				},
				shape: {
					borderRadius: 12,
				},
				components: {
					MuiCssBaseline: {
						styleOverrides: {
							body: {
								scrollbarColor: "#1a365d #e0e0e0",
								"&::-webkit-scrollbar, & *::-webkit-scrollbar": {
									backgroundColor: mode === "light" ? "#e0e0e0" : "#2c2c2c",
									width: "6px",
									height: "6px",
								},
								"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
									borderRadius: 3,
									backgroundColor: "#1a365d",
									minHeight: 24,
									border: "none",
								},
								"&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
									{
										backgroundColor: "#122a4a",
									},
								"&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
									{
										backgroundColor: "#122a4a",
									},
								"&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
									{
										backgroundColor: "#153257",
									},
								"&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
									backgroundColor: mode === "light" ? "#e0e0e0" : "#2c2c2c",
								},
							},
						},
					},
					MuiButton: {
						styleOverrides: {
							root: {
								borderRadius: 8,
								boxShadow: "none",
								textTransform: "none",
								fontWeight: 500,
								padding: "10px 20px",
							},
							containedPrimary: {
								"&:hover": {
									boxShadow: "0 4px 12px rgba(58, 134, 255, 0.2)",
								},
							},
						},
					},
					MuiPaper: {
						styleOverrides: {
							root: {
								backgroundImage: "none",
							},
						},
					},
				},
			}),
		[mode],
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
		</ColorModeContext.Provider>
	);
}
