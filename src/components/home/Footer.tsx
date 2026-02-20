'use client';

import {
	Box,
	Button,
	Container,
	Grid,
	IconButton,
	Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import React from "react";
import EdnuxLogo from "../common/EdnuxLogo";

const XIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
		<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.677l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
	</svg>
);

const InstaIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
		<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
		<circle cx="12" cy="12" r="4" />
		<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
	</svg>
);

const LIIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
		<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
	</svg>
);

const Footer = () => {
	const theme = useTheme();

	const footerSections = [
		{
			title: "Product",
			links: [
				{ label: "Features", href: "/#features-section" },
				{ label: "Support", href: "mailto:support@ednux.com" },
			],
		},
		{
			title: "Company",
			links: [
				{ label: "About", href: "/about" },
				{ label: "Contact", href: "/contact" },
			],
		},
	];

	const socialLinks = [
		{ icon: <XIcon />, href: "https://x.com/ednuxofficial", label: "X" },
		{ icon: <InstaIcon />, href: "https://instagram.com/ednux_official", label: "Instagram" },
		{ icon: <LIIcon />, href: "https://linkedin.com/in/ednux-mobile-b8200635b", label: "LinkedIn" },
	];

	return (
		<Box
			component="footer"
			sx={{
				py: 8,
				px: 4,
				bgcolor:
					theme.palette.mode === "dark"
						? "rgba(0,0,0,0.02)"
						: "rgba(248,250,252,1)",
				borderTop: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
				position: "relative",
				overflow: "hidden",
				"&::before": {
					content: '""',
					position: "absolute",
					bottom: 50,
					right: 50,
					width: 400,
					height: 400,
					backgroundImage: 'url("/assets/images/ednux_logo.png")',
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					opacity: theme.palette.mode === "dark" ? 0.03 : 0.04,
					pointerEvents: "none",
					zIndex: 0,
				},
			}}
		>
			<Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
				<Grid container spacing={6}>
					{/* Logo and Description */}
					<Grid item xs={12} md={4}>
						<Box sx={{ mb: 1 }}>
							<Link href="/"><EdnuxLogo size={120} /></Link>
						</Box>
						<Typography
							variant="body2"
							sx={{
								color:
									theme.palette.mode === "dark"
										? "rgba(255,255,255,0.7)"
										: "rgba(71,85,105,1)",
								mb: 4,
								lineHeight: 1.7,
								fontSize: "0.95rem",
								maxWidth: "280px",
							}}
						>
							Ednux is the career operating system for African students, turning every class and activity into verified employment proof.
						</Typography>

						<Box sx={{ display: "flex", gap: 1 }}>
							{socialLinks.map((social) => (
								<IconButton
									key={social.label}
									component={Link}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.label}
									sx={{
										color:
											theme.palette.mode === "dark"
												? "rgba(255,255,255,0.6)"
												: "rgba(100,116,139,1)",
										"&:hover": {
											color: theme.palette.primary.main,
											bgcolor:
												theme.palette.mode === "dark"
													? "rgba(255,255,255,0.05)"
													: "rgba(0,0,0,0.04)",
										},
										transition: "all 0.2s ease-in-out",
									}}
								>
									{social.icon}
								</IconButton>
							))}
						</Box>
					</Grid>

					{/* Navigation Sections */}
					{footerSections.map((section) => (
						<Grid item xs={6} sm={4} md={2} key={section.title}>
							<Typography
								variant="h6"
								sx={{
									fontWeight: 600,
									fontSize: "1rem",
									mb: 3,
									color:
										theme.palette.mode === "dark"
											? "rgba(255,255,255,0.9)"
											: "rgba(15,23,42,1)",
								}}
							>
								{section.title}
							</Typography>
							<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
								{section.links.map((link) => (
									<Button
										key={link.label}
										component={Link}
										href={link.href}
										sx={{
											justifyContent: "flex-start",
											textTransform: "none",
											color:
												theme.palette.mode === "dark"
													? "rgba(255,255,255,0.7)"
													: "rgba(100,116,139,1)",
											fontSize: "0.9rem",
											fontWeight: 400,
											padding: 0,
											minWidth: "auto",
											"&:hover": {
												color: theme.palette.primary.main,
												bgcolor: "transparent",
											},
											transition: "color 0.2s ease-in-out",
										}}
									>
										{link.label}
									</Button>
								))}
							</Box>
						</Grid>
					))}

					{/* Get Started */}
					<Grid item xs={12} md={2}>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 600,
								fontSize: "1rem",
								mb: 3,
								color:
									theme.palette.mode === "dark"
										? "rgba(255,255,255,0.9)"
										: "rgba(15,23,42,1)",
							}}
						>
							Get Started
						</Typography>
						<Button
							component={Link}
							href="/waitlist#waitlist_info"
							variant="contained"
							sx={{
								borderRadius: 999,
								px: 2,
								py: 0.7,
								fontWeight: 500,
								fontSize: 14,
								bgcolor: "#2a5cff",
								color: "#fff",
								boxShadow: "0 2px 12px 0 rgba(42,92,255,0.10)",
								textTransform: "none",
								fontFamily: "Poppins, sans-serif",
								minWidth: 0,
								"&:hover": {
									bgcolor: "#1741b6",
									color: "#fff",
								},
							}}
						>
							Join waitlist
						</Button>
					</Grid>
				</Grid>

				{/* Bottom Section */}
				<Box
					sx={{
						mt: 8,
						pt: 6,
						borderTop: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "space-between",
						alignItems: { xs: "flex-start", md: "center" },
						gap: 3,
					}}
				>
					<Typography
						variant="body2"
						sx={{
							color:
								theme.palette.mode === "dark"
									? "rgba(255,255,255,0.6)"
									: "rgba(100,116,139,1)",
							fontSize: "0.9rem",
						}}
					>
						© 2026 Ednux. All rights reserved.
					</Typography>

					<Box sx={{ display: "flex", gap: { xs: 2, sm: 4 }, flexWrap: "wrap" }}>
						{[
							{ label: "Privacy Policy", href: "/privacy-policy" },
							{ label: "Terms of Service", href: "/terms-of-service" },
						].map((item) => (
							<Button
								key={item.label}
								component={Link}
								href={item.href}
								sx={{
									textTransform: "none",
									color:
										theme.palette.mode === "dark"
											? "rgba(255,255,255,0.6)"
											: "rgba(100,116,139,1)",
									fontSize: "0.9rem",
									fontWeight: 400,
									padding: 0,
									minWidth: "auto",
									textDecoration: "underline",
									textDecorationColor: "transparent",
									"&:hover": {
										color: theme.palette.primary.main,
										bgcolor: "transparent",
										textDecorationColor: "currentColor",
									},
									transition: "all 0.2s ease-in-out",
								}}
							>
								{item.label}
							</Button>
						))}
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
