import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	alpha,
	Box,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type React from "react";
import { useState } from "react";

const faqData = [
	{
		category: "General Questions",
		items: [
			{
				q: "What is Ednux?",
				a: "Ednux is an AI-powered learning platform designed for African students, educators, and professionals. It streamlines access to personalized, practical learning across institutions.",
			},
			{
				q: "Who can use Ednux?",
				a: "Students, teachers, institutions, and professionals across Africa—and beyond—who want a smarter, localized learning experience.",
			},
			{
				q: "How does Ednux work?",
				a: "Ednux uses AI to organize course materials, track learning progress, and personalize content. It’s accessible via browser and mobile.",
			},
		],
	},
	{
		category: "For Educators",
		items: [
			{
				q: "Can I upload my own materials?",
				a: "Yes. Ednux lets you upload documents, videos, quizzes, and slides with support for popular formats.",
			},
			{
				q: "Does Ednux support grading and assessments?",
				a: "Absolutely. You can create assignments, set criteria, and manage grading workflows directly.",
			},
			{
				q: "What languages does Ednux support?",
				a: "English-first, with local language expansions underway for key African regions.",
			},
		],
	},
	{
		category: "For Students",
		items: [
			{
				q: "Can I access Ednux offline?",
				a: "Yes, selected modules can be downloaded and accessed offline.",
			},
			{
				q: "Will Ednux help me stay on track?",
				a: "Definitely. Smart reminders, progress trackers, and personalized suggestions help you stay motivated.",
			},
			{
				q: "Are my data and progress secure?",
				a: "Yes. Ednux uses secure protocols and adheres to local data privacy regulations.",
			},
		],
	},
	{
		category: "For Institutions",
		items: [
			{
				q: "Can Ednux integrate with our existing systems?",
				a: "Yes. API-based integration is available for student records, payments, and internal platforms.",
			},
			{
				q: "What is the pricing model for institutions?",
				a: "Flexible. We offer tiered plans based on student count, features, and customization needs.",
			},
			{
				q: "Can we white-label Ednux for our campus?",
				a: "That’s possible. Contact us for branding options and technical setup details.",
			},
		],
	},
	{
		category: "Technical & Support",
		items: [
			{
				q: "What if I encounter a bug or issue?",
				a: "You can report it via our Help Center or reach support via contact page.",
			},
			{
				q: "Is Ednux mobile-friendly?",
				a: "Yes. The platform is optimized for mobile, tablet, and desktop, with adaptive UI across devices.",
			},
			{
				q: "How often is Ednux updated?",
				a: "Weekly improvements, with major releases every quarter based on user feedback.",
			},
		],
	},
	{
		category: "EDnux GLE & Social Learning",
		items: [
			{
				q: "What is the EDnux GLE?",
				a: "The EDnux Global Learning Ecosystem (GLE) is a shared social space where students and educators across Africa connect, exchange ideas, and collaborate on projects. It’s designed to foster community-driven learning.",
			},
			{
				q: "How do social feeds work on Ednux?",
				a: "Each user gets a personalized social dashboard—think of it as your academic timeline. You can post questions, share resources, follow educators, and join conversations on trending topics or learning goals.",
			},
			{
				q: "Can institutions manage what appears on social feeds?",
				a: "Yes. Institutions have moderation tools and can curate feeds for academic relevance while still allowing organic student interaction.",
			},
			{
				q: "Does GLE support collaborative study groups?",
				a: "Definitely. Users can form or join virtual learning circles, participate in shared quizzes, and follow mentors for guided pathways.",
			},
			{
				q: "Is GLE safe and moderated?",
				a: "Very. Content is filtered using AI-powered moderation and local policy guidelines. Plus, users can report anything that feels off.",
			},
		],
	},
];

const FaqSection = () => {
	const theme = useTheme();
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleChange =
		(panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<Box
			sx={{
				width: "100%",
				bgcolor:
					theme.palette.mode === "dark" ? alpha("#1b1a18ff", 0.95) : "#fff",
				borderTop: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"}`,
				borderBottom: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"}`,
				py: { xs: 8, md: 12 },
				px: { xs: 0, md: 0 },
				position: "relative",
				zIndex: 2,
			}}
			id="faq"
		>
			<Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
				<Typography
					variant="h2"
					align="center"
					fontWeight={500}
					fontFamily="Questrial"
					sx={{
						mb: 3,
						fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2.1rem" },
						background: "linear-gradient(90deg, #4361ee 0%, #c16ef4ff 100%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						letterSpacing: "-1px",
					}}
				>
					Frequently Asked Questions
				</Typography>
				<Grid container spacing={2}>
					{faqData.map((section, idx) => (
						<Grid item xs={12} key={section.category}>
							<Typography
								variant="h6"
								fontWeight={600}
								sx={{
									mb: 1,
									color: theme.palette.text.primary,
									letterSpacing: "-0.5px",
									fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.2rem" },
								}}
							>
								{section.category}
							</Typography>
							{section.items.map((item, qidx) => (
								<Accordion
									key={item.q}
									expanded={expanded === `${idx}-${qidx}`}
									onChange={handleChange(`${idx}-${qidx}`)}
									sx={{
										mb: 1.2,
										borderRadius: "30px",
										boxShadow: "none",
										border: `1px solid ${theme.palette.mode === "dark" ? "rgba(108,99,255,0.25)" : "rgba(192, 67, 238, 0.25)"}`,
										background: "none",
										"&:before": { display: "none" },
										transition: "box-shadow 0.2s",
										position: "relative",
										overflow: "hidden",
									}}
								>
									<AccordionSummary
										expandIcon={
											<ExpandMoreIcon
												sx={{ color: theme.palette.primary.main, fontSize: 22 }}
											/>
										}
										aria-controls={`faq-content-${idx}-${qidx}`}
										id={`faq-header-${idx}-${qidx}`}
										sx={{
											px: 2,
											py: 1.1,
											fontWeight: 600,
											fontSize: 15,
											color: theme.palette.text.primary,
											letterSpacing: "-0.5px",
											minHeight: 0,
										}}
									>
										{item.q}
									</AccordionSummary>
									<AccordionDetails
										sx={{
											px: 2,
											pb: 1.2,
											pt: 0,
											color: theme.palette.text.secondary,
											fontSize: 14,
											minHeight: 0,
										}}
									>
										{item.a}
									</AccordionDetails>
								</Accordion>
							))}
						</Grid>
					))}
				</Grid>
			</Container>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					mt: 4,
					position: "relative",
					zIndex: 2,
				}}
			>
				<Typography
					variant="body2"
					sx={{
						color: theme.palette.text.secondary,
						fontSize: { xs: "0.9rem", md: "1rem" },
						maxWidth: 600,
						textAlign: "center",
						px: 2,
					}}
				>
					If you have more questions, feel free to reach out via our{" "}
					<a href="/contact" style={{ color: theme.palette.primary.main }}>
						Contact Page
					</a>
					.
				</Typography>
			</Box>
		</Box>
	);
};

export default FaqSection;
