import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import type React from "react";

const Hero: React.FC = () => (
	<Box
		sx={{
			width: "100%",
			minHeight: { xs: "100vh", md: "100vh" },
			position: "relative",
			display: "flex",
			flexDirection: { xs: "column", md: "row", sm: "column" },
			alignItems: "center",
			justifyContent: "space-between",
			px: { xs: 2, md: 8, sm: 4 },
			pt: { xs: 12, md: 16 },
			pb: { xs: 4, md: 8, sm: 30 },
			overflow: "hidden",
			fontFamily: "Questrial",
			background: {
				xs: `
          url('/assets/images/glass_cirlcle.png') no-repeat -200px -120px / 700px 700px,
          radial-gradient(ellipse 70% 80% at 20% 35%, #6abcff 0%, transparent 80%),
          radial-gradient(ellipse 70% 80% at 60% 100%, #f57f3196 0%, transparent 70%),
          #fff
        `,
				md: `
          url('/assets/images/glass_cirlcle.png') no-repeat -85% 60% / 1050px 1050px,
          radial-gradient(ellipse 70% 80% at 20% 35%, #6abcff 0%, transparent 80%),
          radial-gradient(ellipse 70% 80% at 60% 100%, #f57f3196 0%, transparent 70%),
          #fff
        `,
			},
		}}
	>
		{/* Left: Headline and CTA */}
		<Box
			sx={{
				flex: 1,
				zIndex: 2,
				maxWidth: { xs: "100%", sm: "100%", md: "50%" },
				pr: { md: 4, sm: 30 },
			}}
		>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.9, ease: "easeIn" }}
			>
				<Typography
					variant="h1"
					sx={{
						fontWeight: 500,
						fontSize: { xs: "2.5rem", sm: "3.8rem", md: "4rem", lg: "4.5rem" },
						lineHeight: 1.1,
						mb: 3,
						color: "#232946",
					}}
				>
					Redefining{" "}
					<Box component="span" sx={{ color: "#2a5cff" }}>
						Education
					</Box>{" "}
					For Every Learner.
				</Typography>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.3, ease: "easeIn" }}
			>
				<Typography
					variant="h6"
					sx={{
						color: "#232946",
						fontWeight: 400,
						mb: 4,
						pr: { sm: 7 },
						fontSize: { xs: "1.1rem", md: "1.3rem" },
						maxWidth: 500,
						lineHeight: 1.4,
					}}
				>
					Empowering institutions, educators, and students with AI-driven
					simplicity and localized relevance.
				</Typography>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
			>
				<Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 6 }}>
					<Button
						href="#waitlist"
						variant="text"
						sx={{
							color: "#2a5cff",
							fontWeight: 300,
							fontSize: 18,
							textTransform: "none",
							px: 0,
							textDecoration: "none",
							"&:hover": {
								textDecoration: "underline",
							},
						}}
					>
						Get Early Access
					</Button>
					<Box
						sx={{
							width: 8,
							height: 8,
							bgcolor: "#2a5cff",
							borderRadius: "50%",
						}}
					/>
					<Button
						href="#how-it-works"
						variant="text"
						sx={{
							color: "#2a5cff",
							fontWeight: 300,
							fontSize: 18,
							textTransform: "none",
							px: 0,
							textDecoration: "none",
							"&:hover": {
								textDecoration: "underline",
							},
						}}
					>
						See how it works
					</Button>
				</Stack>
			</motion.div>
		</Box>
		{/* Right: Device mockup */}
		<Box
			sx={{
				flex: 1,
				zIndex: 2,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
				maxWidth: { xs: "100%", md: "50%" },
				width: "100%",
				mt: { xs: 6, md: -9 },
			}}
		>
			<motion.div
				initial={{ opacity: 0, x: 40 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1, delay: 0.6, ease: "easeIn" }}
				style={{
					position: "absolute",
					left: 0,
					top: 0,
					width: "100%",
					height: "100%",
				}}
			>
				<Box
					component="img"
					src="/assets/images/mockup_1.png"
					alt="Mobile App Mockup"
					sx={{
						height: { xs: 220, md: 340, sm: 350 },
						position: "absolute",
						left: { xs: "-12%", md: "-11%", sm: "-12%" },
						top: { xs: "10%", md: "16%", sm: "14%" },
						ml: { sm: 8 },
						zIndex: 2,
						borderRadius: 8,
					}}
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 40 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.9, delay: 0.7, ease: "easeIn" }}
				style={{ position: "relative", width: "100%", height: "100%" }}
			>
				<Box
					component="img"
					src="/assets/images/desktop_1.png"
					alt="Desktop App Mockup"
					sx={{
						height: { xs: 300, md: 500, sm: 500 },
						ml: { xs: 0, md: 16, sm: 13 },
						zIndex: 1,
						borderRadius: 12,
						position: "relative",
						top: { xs: "8%", md: "-16%" },
						left: { xs: "10%", md: "auto" },
						display: "block",
					}}
				/>
			</motion.div>
		</Box>

		{/* Bottom right callout */}
		<motion.div
			initial={{ opacity: 0, scale: 0.97 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.9, delay: 0.95, ease: "easeIn" }}
		>
			<Box
				sx={{
					position: { xs: "absolute", md: "absolute" },
					right: { xs: "auto", md: 80 },
					left: { xs: "50%", md: "67%" },
					transform: { xs: "translateX(-50%)", md: "none" },
					bottom: { xs: 30, md: 120 },
					mt: { xs: -1, md: -2 },
					mb: { xs: 0, md: -2 },
					zIndex: 10,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					width: { xs: "90%", md: "auto" },
					maxWidth: { xs: 320, md: 340 },
				}}
			>
				<Box
					sx={{
						position: "relative",
						px: { xs: 2, md: 2 },
						py: { xs: 1.5, md: 1.5 },
						borderRadius: "22px",
						bgcolor: "rgba(255, 255, 255, 0.62)",
						color: "#232946",
						fontWeight: 500,
						fontSize: { xs: 15, md: 16 },
						boxShadow: "0 4px 32px rgba(42,92,255,0.10)",
						textAlign: "center",
						fontFamily: "Questrial",
						overflow: "visible",
						width: { xs: "100%", md: "100%" },
						maxWidth: { xs: 300, md: 500 },
						minWidth: { xs: 180, md: "auto" },
						"::before": {
							content: '""',
							position: "absolute",
							inset: 0,
							borderRadius: "22px",
							padding: "1px",
							background:
								"linear-gradient(90deg, rgba(42,92,255,0.5) 0%, rgba(170,0,255,0.4) 100%)",
							WebkitMask:
								"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
							WebkitMaskComposite: "xor",
							maskComposite: "exclude",
							pointerEvents: "none",
							zIndex: 1,
						},
					}}
				>
					<Box
						sx={{
							position: "relative",
							zIndex: 2,
							whiteSpace: { xs: "normal", md: "normal" },
							wordBreak: "break-word",
							overflowWrap: "break-word",
						}}
					>
						social LMS for students, teachers & pros.
					</Box>
				</Box>
				{/* Curved dashed SVG arrow */}
			</Box>
		</motion.div>
	</Box>
);

export default Hero;
