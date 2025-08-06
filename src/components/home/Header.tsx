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
import { useState } from "react";
import EdnuxLogo from "../common/EdnuxLogo";

const Header: React.FC = () => {
	const theme = useTheme();
	const [drawerOpen, setDrawerOpen] = useState(false);

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
				<Button
					component={Link}
					href="/"
					color="inherit"
					sx={{
						fontWeight: 400,
						fontSize: 15,
						textTransform: "none",
						color: "#232946",
						letterSpacing: 0.5,
						px: 1.5,
						fontFamily: "Questrial, sans-serif",
					}}
				>
					home
				</Button>
				<Button
					component={Link}
					href="/#productivity-section"
					color="inherit"
					sx={{
						fontWeight: 400,
						fontSize: 15,
						textTransform: "none",
						color: "#232946",
						letterSpacing: 0.5,
						px: 1.5,
						fontFamily: "Questrial, sans-serif",
					}}
				>
					features
				</Button>
				<Button
					component={Link}
					href="/about"
					color="inherit"
					sx={{
						fontWeight: 400,
						fontSize: 15,
						textTransform: "none",
						color: "#232946",
						letterSpacing: 0.5,
						px: 1.5,
						fontFamily: "Questrial, sans-serif",
					}}
				>
					about
				</Button>
				<Button
					component={Link}
					href="/contact"
					color="inherit"
					sx={{
						fontWeight: 400,
						fontSize: 15,
						textTransform: "none",
						color: "#232946",
						letterSpacing: 0.5,
						px: 1.5,
						fontFamily: "Questrial, sans-serif",
					}}
				>
					contact
				</Button>
			</Stack>
			{/* Buttons - Desktop */}
			<Stack
				direction="row"
				spacing={2}
				sx={{ display: { xs: "none", md: "flex" } }}
			>
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
						fontFamily: "Questrial, sans-serif",
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
			</Stack>
			{/* Hamburger Icon - Mobile */}
			<IconButton
				edge="end"
				color="inherit"
				aria-label="menu"
				onClick={handleDrawerOpen}
				sx={{
					display: { xs: "flex", md: "none" },
					ml: 0.1,
					borderRadius: 2,
					p: 1,
				}}
			>
				{/* Custom Hamburger Icon with rounded edges */}
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
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
						boxShadow: "0 4px 24px 0 rgba(185, 196, 240, 0)",
						backdropFilter: "blur(10px)",
						WebkitBackdropFilter: "blur(10px)",
						border: "1px solid rgba(180,180,200,0.18)",
						overflow: "hidden",
					},
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
						px: 2,
						pt: 1,
					}}
				>
					<IconButton
						onClick={handleDrawerClose}
						aria-label="close"
						size="large"
						sx={{ color: "#232946" }}
					>
						<svg
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="7.393"
								y="9.22183"
								width="2.6"
								height="16"
								rx="1.3"
								transform="rotate(-45 7.393 9.22183)"
								fill="#232946"
							/>
							<rect
								x="9.22183"
								y="20.607"
								width="2.6"
								height="16"
								rx="1.3"
								transform="rotate(-135 9.22183 20.607)"
								fill="#232946"
							/>
						</svg>
					</IconButton>
				</Box>
				<List>
					<ListItem disablePadding>
						<ListItemButton
							component={Link}
							href="/"
							onClick={handleDrawerClose}
						>
							<ListItemText primary="Home" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton
							component={Link}
							href="/#productivity-section"
							onClick={handleDrawerClose}
						>
							<ListItemText primary="Features" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton
							component={Link}
							href="/about"
							onClick={handleDrawerClose}
						>
							<ListItemText primary="About" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton
							component={Link}
							href="/contact"
							onClick={handleDrawerClose}
						>
							<ListItemText primary="Contact" />
						</ListItemButton>
					</ListItem>
				</List>
				<Divider sx={{ my: 1 }} />
				<Box
					sx={{
						px: 2,
						pb: 2,
						display: "flex",
						flexDirection: "column",
						gap: 2,
					}}
				>
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
							fontFamily: "Questrial, sans-serif",
							minWidth: 0,
							"&:hover": {
								background: "rgba(46, 46, 247, 0.7)",
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
				</Box>
			</Drawer>
		</Box>
	);
};

export default Header;
