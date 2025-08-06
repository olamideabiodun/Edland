/**
 * Authentication-related type definitions for the Ednux platform
 * These types are used across both web and mobile platforms
 */

import type { User } from "./user";

export interface AuthState {
	user: User | null;
	token: string | null;
	refreshToken: string | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	error: string | null;
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface RegisterData {
	name: string;
	email: string;
	password: string;
	role: string;
	phone?: string;
	institution?: string;
	institutionType?: "university" | "college" | "school" | "company" | "other";
	department?: string;
	position?: string;
}

export interface AuthResponse {
	token: string;
	refreshToken?: string;
	user: User;
	expiresIn?: number;
	message?: string;
}

// Email verification
export interface VerifyEmailRequest {
	email: string;
	code: string;
}

export interface ResendVerificationRequest {
	email: string;
}

// Phone verification
export interface SendPhoneVerificationRequest {
	phone: string;
}

export interface VerifyPhoneRequest {
	code: string;
}

// Institution verification
export interface SubmitInstitutionVerificationRequest {
	documents: string[];
}

export interface RefreshTokenRequest {
	refreshToken: string;
}

export interface VerifyOTPRequest {
	otp: string;
	email?: string;
	phone?: string;
}

export interface ForgotPasswordRequest {
	email: string;
}

export interface ResetPasswordRequest {
	token: string;
	password: string;
}

export interface ChangePasswordRequest {
	currentPassword: string;
	newPassword: string;
}

// OAuth providers supported by the platform
export type OAuthProvider = "google" | "microsoft" | "apple";

export interface OAuthRequest {
	provider: OAuthProvider;
	token?: string;
	code?: string;
	redirectUri?: string;
}

// Error response types
export interface AuthError {
	statusCode: number;
	message: string;
	error: string;
}

// Helper types for form validation
export interface ValidationErrors {
	[key: string]: string;
}
