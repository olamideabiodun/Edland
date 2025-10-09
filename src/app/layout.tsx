// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "../providers/ThemeProvider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import GoogleAnalytics from "../components/common/GoogleAnalytics";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Ednux | Learn. Grow. Lead.",
	description:
		"Africa’s next-generation learning platform for students, educators, and professionals.",
	openGraph: {
		title: "Ednux | Social LMS for intuitive learners.",
		description:
			"Ednux is an AI-powered learning platform built for African students, educators, and professionals. Discover personalized tools, explore global learning experience, and a smarter way to learn, grow, and thrive.",
		url: "https://ednux.com",
		siteName: "Ednux",
		images: ["/assets/images/metadata_image.png"],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		site: "@ednux",
		title: "Ednux | Social LMS for intuitive learners.",
		description: "Ednux is an AI-powered learning platform built for African students, educators, and professionals. Discover personalized tools, explore global learning experience, and a smarter way to learn, grow, and thrive.",
		images: ["/assets/images/metadata_image.png"],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className={inter.className}>
					<GoogleAnalytics />
					<SpeedInsights />
					<Analytics />
					<ThemeProvider>
								<ClerkProvider>{children}</ClerkProvider>
					</ThemeProvider>
			</body>
		</html>
	);
}
