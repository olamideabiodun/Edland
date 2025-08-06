import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
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

const Footer = () => {
	const theme = useTheme();

	const footerSections = [
		{
			title: "Product",
			links: [
				{ label: "Features", href: "/#productivity-section" },
				{ label: "Support", href: "/" },
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
					{/* Logo and Description Section */}
					<Grid item xs={12} md={4}>
						<Box sx={{ mb: 1 }}>
							<EdnuxLogo size={120} withText />
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
							Ednux enables users to track their learning progress, access
							powerful learning tools and personalized insights.
						</Typography>

						{/* Social Links */}
						<Box sx={{ display: "flex", gap: 1 }}>
							{socialLinks.map((social, index) => (
								<IconButton
									key={index}
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
					{footerSections.map((section, index) => (
						<Grid item xs={6} sm={4} md={2} key={index}>
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
								{section.links.map((link, linkIndex) => (
									<Button
										key={linkIndex}
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

					{/* Join Waitlist Section */}
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
								fontFamily: "Questrial, sans-serif",
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
						© 2025 Ednux. All rights reserved.
					</Typography>

					<Box
						sx={{
							display: "flex",
							gap: { xs: 2, sm: 4 },
							flexWrap: "wrap",
						}}
					>
						<Button
							component={Link}
							href="/privacy"
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
							Privacy Policy
						</Button>
						<Button
							component={Link}
							href="/terms"
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
							Terms of Service
						</Button>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
