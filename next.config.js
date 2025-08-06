/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["cdn.ednux.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	async rewrites() {
		// Only rewrite API requests if the API_BASE_URL is defined
		if (process.env.API_BASE_URL) {
			return [
				{
					source: "/api/:path*",
					destination: process.env.API_BASE_URL + "/:path*",
				},
			];
		}
		return [];
	},
	transpilePackages: [
		"react-native",
		"react-native-web",
		"@react-native",
		"@react-native-community",
		"react-native-reanimated",
	],
	compress: true,
	env: {
		APP_ENV: process.env.APP_ENV || "development",
	},
};

module.exports = nextConfig;
