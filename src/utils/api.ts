"use client";

import axios, {
	type AxiosError,
	type AxiosRequestConfig,
	type AxiosResponse,
} from "axios";
import { Platform } from "./platform";

// Type for API error responses
interface ApiErrorResponse {
	message?: string;
	error?: string;
	statusCode?: number;
}

// Flag to use mock responses for development
// Use mock API if explicitly set to true OR if API base URL is missing
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const USE_MOCK_API = false; // Changed to false to use real backend

// Create axios instance with default config
const api = axios.create({
	baseURL: API_BASE_URL || "http://localhost:3003", // Updated to match backend server port
	timeout: 30000,
	headers: {
		"Content-Type": "application/json",
	},
});

// Request interceptor - adds auth token to requests
api.interceptors.request.use(
	(config) => {
		// If we're in mock mode and not actually connecting to a backend,
		// then cancel the request early
		if (USE_MOCK_API && !API_BASE_URL) {
			// Create a cancelled request
			const controller = new AbortController();
			controller.abort();
			config.signal = controller.signal;
			return config;
		}

		// Get token from localStorage on web or AsyncStorage on React Native
		let token = null;

		if (Platform.isWeb) {
			token =
				typeof window !== "undefined"
					? localStorage.getItem("ednux_token")
					: null;
		} else {
			// For React Native, we'll assume the token is handled by the app and passed in the headers
			// The actual AsyncStorage implementation would be in the React Native project
		}

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// Response interceptor - handles token refresh and errors
api.interceptors.response.use(
	(response) => response,
	async (error: AxiosError) => {
		const originalRequest = error.config as AxiosRequestConfig & {
			_retry?: boolean;
		};

		// If the error is a 401 Unauthorized and we haven't already tried to refresh the token
		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				// Attempt to refresh the token
				const refreshToken = Platform.isWeb
					? localStorage.getItem("ednux_refresh_token")
					: null; // In React Native, get from AsyncStorage

				if (!refreshToken) {
					// No refresh token, redirecting to login
					handleAuthError();
					return Promise.reject(error);
				} // Call refresh token endpoint
				const response = await axios.post(
					`${API_BASE_URL}/auth/refresh-token`,
					{ refreshToken },
				);

				if (response.data.token) {
					// Store the new token
					if (Platform.isWeb) {
						localStorage.setItem("ednux_token", response.data.token);
						if (response.data.refreshToken) {
							localStorage.setItem(
								"ednux_refresh_token",
								response.data.refreshToken,
							);
						}
					} else {
						// For React Native, store in AsyncStorage
					}

					// Update the original request with the new token
					if (originalRequest.headers) {
						originalRequest.headers.Authorization = `Bearer ${response.data.token}`;
					}

					// Retry the original request
					return api(originalRequest);
				}
			} catch (refreshError) {
				console.error("Token refresh failed:", refreshError);
				handleAuthError();
				return Promise.reject(refreshError);
			}
		}

		// For other errors, just reject
		return Promise.reject(error);
	},
);

// Handle authentication errors
const handleAuthError = () => {
	// Clear tokens
	if (Platform.isWeb) {
		localStorage.removeItem("ednux_token");
		localStorage.removeItem("ednux_refresh_token");

		// Redirect to login page
		if (typeof window !== "undefined") {
			window.location.href = "/auth/signin";
		}
	} else {
		// For React Native, clear AsyncStorage and redirect in the app
	}
};

// Wrapper to handle errors consistently and support mock mode
export const apiRequest = async <T>(
	method: "get" | "post" | "put" | "delete",
	url: string,
	data?: any,
	options?: AxiosRequestConfig,
): Promise<T> => {
	// If in mock mode and URL contains certain endpoints, return mock data
	if (USE_MOCK_API) {
		console.log(`Mock API request: ${method.toUpperCase()} ${url}`);

		// Add delay to simulate network request
		await new Promise((resolve) => setTimeout(resolve, 300));

		// Default mock response if no specific handler
		return { success: true, message: "Mock API response" } as unknown as T;
	}

	// Real API request
	try {
		let response: AxiosResponse;

		switch (method) {
			case "get":
				response = await api.get(url, options);
				break;
			case "post":
				response = await api.post(url, data, options);
				break;
			case "put":
				response = await api.put(url, data, options);
				break;
			case "delete":
				response = await api.delete(url, options);
				break;
			default:
				throw new Error(`Unsupported method: ${method}`);
		}

		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError<ApiErrorResponse>;
			// Handle specific error cases
			if (axiosError.response) {
				// The request was made and the server responded with an error status
				const errorMessage =
					axiosError.response.data?.message ||
					axiosError.response.data?.error ||
					"An error occurred";
				throw new Error(errorMessage);
			} else if (axiosError.request) {
				// The request was made but no response was received
				throw new Error(
					"No response from server. Please check your internet connection.",
				);
			} else {
				// Something happened in setting up the request
				throw new Error(axiosError.message || "Request configuration error");
			}
		}

		// For non-Axios errors
		throw error;
	}
};

// Export apiCall as an alias for apiRequest for backward compatibility
export const apiCall = async (
	url: string,
	options?: { method?: string; data?: any; headers?: any },
) => {
	const method = (options?.method || "GET").toLowerCase() as
		| "get"
		| "post"
		| "put"
		| "delete";
	const config = {
		headers: options?.headers || {},
	};

	return apiRequest(method, url, options?.data, config);
};

export default api;
