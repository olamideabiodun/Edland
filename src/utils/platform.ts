"use client";

/**
 * Platform utility to detect and handle platform-specific code
 * This helps with cross-platform compatibility between web and mobile
 */

interface PlatformInfo {
	OS: "web" | "ios" | "android";
	isWeb: boolean;
	isNative: boolean;
	isIOS: boolean;
	isAndroid: boolean;
	select: <T>(options: {
		web?: T;
		ios?: T;
		android?: T;
		native?: T;
		default?: T;
	}) => T | undefined;
}

// Determine the platform
const detectPlatform = (): PlatformInfo => {
	// When running on the server during SSR, we can detect based on userAgent
	if (typeof navigator === "undefined") {
		// During SSR, default to web platform
		return createPlatformInfo("web");
	}

	// Check for React Native
	const userAgent = navigator.userAgent;

	if (typeof window !== "undefined" && (window as any).ReactNativeWebView) {
		// Running in React Native WebView
		if (
			userAgent.indexOf("iPhone") > -1 ||
			userAgent.indexOf("iPad") > -1 ||
			userAgent.indexOf("Mac") > -1
		) {
			return createPlatformInfo("ios");
		}
		if (userAgent.indexOf("Android") > -1) {
			return createPlatformInfo("android");
		}
	}

	// Default to web
	return createPlatformInfo("web");
};

const createPlatformInfo = (os: "web" | "ios" | "android"): PlatformInfo => {
	const isWeb = os === "web";
	const isNative = !isWeb;
	const isIOS = os === "ios";
	const isAndroid = os === "android";

	return {
		OS: os,
		isWeb,
		isNative,
		isIOS,
		isAndroid,
		select: <T>(options: {
			web?: T;
			ios?: T;
			android?: T;
			native?: T;
			default?: T;
		}): T | undefined => {
			// First check for specific platform match
			if (isWeb && options.web !== undefined) return options.web;
			if (isIOS && options.ios !== undefined) return options.ios;
			if (isAndroid && options.android !== undefined) return options.android;

			// Check for general native match
			if (isNative && options.native !== undefined) return options.native;

			// Fall back to default
			return options.default;
		},
	};
};

// Create and export the Platform object
export const Platform = detectPlatform();
