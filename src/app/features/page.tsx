"use client";

import {
	ArticleOutlined,
	FolderOutlined,
	GroupsOutlined,
	Psychology,
	TrackChangesOutlined,
} from "@mui/icons-material";
import { SchoolOutlined, ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import React from "react";
export default function FeaturesSection() {
	const theme = useTheme();
    function handleOpenModal(idx: number): void {
        throw new Error("Function not implemented.");
    }

	// Add fadeIn if needed, or remove animation if not defined
	return (
		<Box
			sx={{
				my: 10,
				py: 8,
				px: { xs: 3, md: 6 },
				mx: { xs: 2, sm: 4, md: 6 },
				borderRadius: 4,
				position: "relative",
				overflow: "hidden",
				bgcolor:
					theme.palette.mode === "dark"
						? "rgba(45,45,45,0.7)"
						: "rgba(248,249,253,0.7)",
				backdropFilter: "blur(10px)",
				boxShadow:
					theme.palette.mode === "dark"
						? "0 10px 40px rgba(0,0,0,0.2)"
						: "0 10px 40px rgba(0,0,0,0.05)",
			}}
		>
			{/* Glassmorphism effect for dark mode */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background:
						theme.palette.mode === "dark"
							? "linear-gradient(135deg, rgba(67, 97, 238, 0.03) 0%, rgba(165, 110, 244, 0.03) 100%)"
							: "none",
					zIndex: 0,
				}}
			/>

			<Box sx={{ position: "relative", zIndex: 1 }}>
				<Typography
					variant="h2"
					component="h2"
					align="center"
					fontWeight="800"
					sx={{
						mb: 2,
						background: "linear-gradient(90deg, #4361ee 0%, #a56ef4 100%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
					}}
				>
					Boost Your Productivity
				</Typography>
				<Typography
					variant="h6"
					align="center"
					color="text.secondary"
					sx={{
						mb: 6,
						maxWidth: "800px",
						mx: "auto",
						px: 2,
						fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
					}}
				>
					Ednux streamlines your workflow with intuitive tools designed to help
					you focus on what matters most.
				</Typography>

				<Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
					{[
						{
							title: "Social Networking",
							description:
								"Connect with classmates and colleagues in a professional environment built for collaboration and knowledge sharing.",
							icon: (
								<GroupsOutlined
									sx={{ fontSize: 36, color: theme.palette.primary.main }}
								/>
							),
							color: theme.palette.primary.main,
						},
						{
							title: "Workspace Tools",
							description:
								"Manage projects, assign tasks, track progress, and set deadlines all in one integrated workspace.",
							icon: (
								<ArticleOutlined
									sx={{ fontSize: 36, color: theme.palette.secondary.main }}
								/>
							),
							color: theme.palette.secondary.main,
						},
						{
							title: "Learning Management",
							description:
								"Access courses, assignments, and study materials with powerful organization and search capabilities.",
							icon: (
								<SchoolOutlined
									sx={{ fontSize: 36, color: theme.palette.primary.main }}
								/>
							),
							color: theme.palette.primary.main,
						},
					].map((item, idx) => (
						<Grid item xs={12} md={4} key={idx}>
							<Paper
								elevation={0}
								sx={{
									p: { xs: 3, md: 4 },
									height: "100%",
									borderRadius: 4,
									backgroundColor: (theme) =>
										theme.palette.mode === "dark"
											? theme.palette.background.paper + "b3"
											: theme.palette.background.paper + "b3",
									backdropFilter: "blur(8px)",
									transition: "all 0.3s ease",
									"&:hover": {
										transform: "translateY(-10px)",
										boxShadow: `0 15px 30px ${alpha(item.color, 0.2)}`,
									},
									display: "flex",
									flexDirection: "column",
									border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)"}`,
									// animation: `${fadeIn} 0.8s ease-out`,
									animationDelay: `${0.2 * idx}s`,
									cursor: "pointer",
								}}
							>
								<Box
									sx={{
										mb: 3,
										display: "inline-flex",
										bgcolor: alpha(item.color, 0.1),
										p: 2,
										borderRadius: 3,
										transition: "all 0.3s ease",
										transform: "scale(1)",
										"&:hover": {
											transform: "scale(1.1)",
											bgcolor: alpha(item.color, 0.15),
										},
									}}
								>
									{item.icon}
								</Box>
								<Typography
									variant="h5"
									component="h3"
									fontWeight="700"
									gutterBottom
								>
									{item.title}
								</Typography>
								<Typography
									variant="body1"
									color="text.secondary"
									paragraph
									sx={{ flexGrow: 1 }}
								>
									{item.description}
								</Typography>
								<Button
									variant="text"
									endIcon={<ArrowForward />}
									sx={{
										alignSelf: "flex-start",
										color: item.color,
										"&:hover": {
											bgcolor: alpha(item.color, 0.05),
										},
									}}
									onClick={() => handleOpenModal(idx)}
								>
									Learn more
								</Button>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
}
