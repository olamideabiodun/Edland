/**
 * Application configuration and constants
 * These values can be accessed throughout the application
 */

import { Platform } from "./platform";

interface PlatformConfig {
	imageSizes: string[];
	apiUrl: string;
	staticUrl: string;
	cdnUrl: string;
	environment: "development" | "staging" | "production";
	version: string;
}

interface Config {
	platform?: PlatformConfig;
	theme: {
		defaultMode: "light" | "dark" | "system";
		storageKey: string;
	};
	auth: {
		tokenStorage: {
			accessToken: string;
			refreshToken: string;
		};
		routes: {
			login: string;
			register: string;
			verifyOtp: string;
			forgotPassword: string;
			resetPassword: string;
			logout: string;
		};
	};
	app: {
		name: string;
		appId: string;
	};
	upload: {
		ALLOWED_FILE_TYPES: string[];
		MAX_FILE_SIZE: number;
	};
}

// Default configuration for web and mobile platforms
const defaultConfig: Config = {
	theme: {
		defaultMode: "system",
		storageKey: "ednux-theme-mode",
	},
	auth: {
		tokenStorage: {
			accessToken: "ednux-access-token",
			refreshToken: "ednux-refresh-token",
		},
		routes: {
			login: "/auth/signin",
			register: "/auth/signup",
			verifyOtp: "/auth/verify-otp",
			forgotPassword: "/auth/forgot-password",
			resetPassword: "/auth/reset-password",
			logout: "/auth/signout",
		},
	},
	app: {
		name: "Ednux",
		appId: "com.ednux.app",
	},
	upload: {
		ALLOWED_FILE_TYPES: [
			".jpg",
			".jpeg",
			".png",
			".pdf",
			".doc",
			".docx",
			".xls",
			".xlsx",
			".ppt",
			".pptx",
		],
		MAX_FILE_SIZE: 52428800, // 50MB in bytes
	},
};

// Web-specific configuration
const webConfig: PlatformConfig = {
	imageSizes: [
		"640px",
		"750px",
		"828px",
		"1080px",
		"1200px",
		"1920px",
		"2048px",
		"3840px",
	],
	apiUrl: process.env.NEXT_PUBLIC_API_URL || "https://api.ednux.com",
	staticUrl: process.env.NEXT_PUBLIC_STATIC_URL || "https://static.ednux.com",
	cdnUrl: process.env.NEXT_PUBLIC_CDN_URL || "https://cdn.ednux.com",
	environment:
		(process.env.NODE_ENV as "development" | "staging" | "production") ||
		"development",
	version: process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0",
};

// Native-specific configuration
const nativeConfig: PlatformConfig = {
	imageSizes: ["small", "medium", "large", "original"],
	apiUrl: process.env.API_URL || "https://api.ednux.com",
	staticUrl: process.env.STATIC_URL || "https://static.ednux.com",
	cdnUrl: process.env.CDN_URL || "https://cdn.ednux.com",
	environment: (process.env.ENV || "development") as
		| "development"
		| "staging"
		| "production",
	version: process.env.APP_VERSION || "1.0.0",
};

// Select platform-specific configuration based on the current platform
const platformConfig = Platform.select({
	web: webConfig,
	native: nativeConfig,
	default: webConfig,
});

// Create the final configuration by merging default and platform-specific configs
export const config: Config = {
	...defaultConfig,
	platform: platformConfig,
};
