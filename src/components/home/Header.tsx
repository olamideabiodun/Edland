'use client';

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
import { useState } from "react";
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

const Header: React.FC = () => {
	const theme = useTheme();
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleDrawerOpen = () => setDrawerOpen(true);
	const handleDrawerClose = () => setDrawerOpen(false);

	const socialLinks = [
		{ icon: <XIcon />, href: "https://x.com/ednuxofficial", label: "X" },
		{ icon: <InstaIcon />, href: "https://instagram.com/ednux_official", label: "Instagram" },
		{ icon: <LIIcon />, href: "https://linkedin.com/in/ednux-mobile-b8200635b", label: "LinkedIn" },
	];

	return (
		<Box
			sx={{
				width: "100%",
				px: { xs: 0.3, md: 1.5 },
				py: 0,
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 1200,
				bgcolor: "rgba(255,255,255,0.55)",
				borderBottom: "0.5px solid rgba(180,180,200,0.18)",
				boxShadow: "0 4px 24px 0 rgba(80,100,180,0.10)",
				backdropFilter: "blur(32px)",
				WebkitBackdropFilter: "blur(32px)",
				minHeight: 20,
				transition: "background 0.3s",
			}}
		>
			{/* Logo */}
			<Box sx={{ display: "flex", alignItems: "center", minWidth: 100 }}>
				<EdnuxLogo size={70} />
			</Box>

			{/* Navigation - Desktop */}
			<Stack
				direction="row"
				spacing={1}
				sx={{
					ml: 1.5,
					flexGrow: 1,
					justifyContent: "center",
					display: { xs: "none", md: "flex" },
				}}
			>
				{[
					{ label: "home", href: "/" },
					{ label: "features", href: "/#features-section" },
					{ label: "about", href: "/about" },
					{ label: "contact", href: "/contact" },
				].map((item) => (
					<Button
						key={item.label}
						component={Link}
						href={item.href}
						color="inherit"
						sx={{
							fontWeight: 400,
							fontSize: 15,
							textTransform: "none",
							color: "#232946",
							letterSpacing: 0.5,
							px: 1.5,
							fontFamily: "Poppins, sans-serif",
						}}
					>
						{item.label}
					</Button>
				))}
			</Stack>

			{/* Buttons - Desktop */}
			<Stack direction="row" spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
				<Button
					component={Link}
					href="/feedback"
					variant="outlined"
					sx={{
						borderRadius: 999,
						px: 1.8,
						py: 0.6,
						fontWeight: 500,
						fontSize: 13,
						color: "#232946",
						borderColor: "#232946",
						textTransform: "none",
						background: "rgba(255,255,255,0.5)",
						boxShadow: "none",
						fontFamily: "Poppins, sans-serif",
						minWidth: 0,
						"&:hover": {
							background: "rgba(240,240,255,0.7)",
							borderColor: "#232946",
						},
					}}
				>
					feedback
				</Button>
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
			</Stack>

			{/* Hamburger Icon - Mobile */}
			<IconButton
				edge="end"
				color="inherit"
				aria-label="menu"
				onClick={handleDrawerOpen}
				sx={{ display: { xs: "flex", md: "none" }, ml: 0.1, borderRadius: 2, p: 1 }}
			>
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="7" y="9" width="18" height="3" rx="1.5" fill="#232946" />
					<rect x="11" y="15" width="14" height="3" rx="1.5" fill="#232946" />
					<rect x="15" y="21" width="10" height="3" rx="1.5" fill="#232946" />
				</svg>
			</IconButton>

			{/* Drawer for Mobile Menu */}
			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={handleDrawerClose}
				PaperProps={{
					sx: {
						width: 260,
						pt: 2,
						bgcolor: "rgba(255, 255, 255, 0.6)",
						backdropFilter: "blur(10px)",
						WebkitBackdropFilter: "blur(10px)",
						border: "1px solid rgba(180,180,200,0.18)",
						overflow: "hidden",
					},
				}}
			>
				<Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, pt: 1 }}>
					<IconButton onClick={handleDrawerClose} aria-label="close" size="large" sx={{ color: "#232946" }}>
						<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="7.393" y="9.22183" width="2.6" height="16" rx="1.3" transform="rotate(-45 7.393 9.22183)" fill="#232946" />
							<rect x="9.22183" y="20.607" width="2.6" height="16" rx="1.3" transform="rotate(-135 9.22183 20.607)" fill="#232946" />
						</svg>
					</IconButton>
				</Box>

				<List>
					{[
						{ label: "Home", href: "/" },
						{ label: "Features", href: "/#features-section" },
						{ label: "About", href: "/about" },
						{ label: "Contact", href: "/contact" },
					].map((item) => (
						<ListItem key={item.label} disablePadding>
							<ListItemButton component={Link} href={item.href} onClick={handleDrawerClose}>
								<ListItemText primary={item.label} />
							</ListItemButton>
						</ListItem>
					))}
				</List>

				<Divider sx={{ my: 1 }} />

				<Box sx={{ px: 2, pb: 2, display: "flex", flexDirection: "column", gap: 2 }}>
					<Button
						component={Link}
						href="/feedback"
						variant="outlined"
						onClick={handleDrawerClose}
						sx={{
							borderRadius: 999,
							px: 1.8,
							py: 0.6,
							fontWeight: 500,
							fontSize: 13,
							color: "#232946",
							borderColor: "#232946",
							textTransform: "none",
							boxShadow: "none",
							fontFamily: "Poppins, sans-serif",
							minWidth: 0,
							"&:hover": { background: "rgba(46, 46, 247, 0.7)", borderColor: "#232946" },
						}}
					>
						feedback
					</Button>
					<Button
						component={Link}
						href="/waitlist#waitlist_info"
						variant="contained"
						onClick={handleDrawerClose}
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
							"&:hover": { bgcolor: "#1741b6", color: "#fff" },
						}}
					>
						Join waitlist
					</Button>

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
									color: "rgba(100,116,139,1)",
									"&:hover": { color: theme.palette.primary.main, bgcolor: "rgba(0,0,0,0.04)" },
									transition: "all 0.2s ease-in-out",
								}}
							>
								{social.icon}
							</IconButton>
						))}
					</Box>
				</Box>
			</Drawer>
		</Box>
	);
};

export default Header;
