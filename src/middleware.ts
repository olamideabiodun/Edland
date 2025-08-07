import { NextResponse } from "next/server";
import { type NextRequestWithAuth, withAuth } from "next-auth/middleware";

// This function can be marked `async` if using `await` inside
export default withAuth(
	// `withAuth` augments your `Request` with the user's token.
	function middleware(request: NextRequestWithAuth) {
		return NextResponse.next();
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
		pages: {
			signIn: "/auth/signin",
			signOut: "/auth/signout",
			error: "/auth/error",
		},
	},
);

// Specify which routes this middleware applies to
export const config = {
	matcher: [
		// Match all dashboard routes
		"/dashboard/:path*",
		"/projects/:path*",
		"/gle/:path*",
		"/social-feed/:path*",
		"/teams/:path*",
		"/calendar/:path*",
		"/profile/:path*",
		"/files/:path*",
		"/ai-assistant/:path*", // Exclude public routes and auth pages
		"/((?!_next/static|_next/image|assets|favicon.ico|features(?:/.*)?|about|feedback|waitlist|sitemap.xml|sitemap-0.xml|contact|auth/signin|auth/signup|auth/forgot-password|auth/error|auth/reset-password|test-courses|$).*)",
	],
};
