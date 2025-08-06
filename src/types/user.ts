export type UserRole = "student" | "educator" | "admin" | "professional";

export interface User {
	id: string;
	name?: string | null;
	email?: string | null;
	image?: string | null;
	avatar?: string;
	role?: "student" | "educator" | "admin" | "professional";

	// Verification status
	isVerified?: boolean;
	isEmailVerified?: boolean;
	isInstitutionVerified?: boolean;
	phoneVerified?: boolean;

	// Institution and contact info
	institution?: string;
	institutionType?: "university" | "college" | "school" | "company" | "other";
	department?: string;
	position?: string;
	phone?: string;

	// Address information
	address?: {
		street?: string;
		city?: string;
		state?: string;
		zipCode?: string;
		country?: string;
	};

	// Profile info
	bio?: string;
	website?: string;
	profileImage?: string;

	// Social links
	socialLinks?: {
		linkedin?: string;
		twitter?: string;
		github?: string;
	};

	// Institution verification
	institutionVerificationStatus?:
		| "pending"
		| "submitted"
		| "approved"
		| "rejected";

	// Timestamps
	lastLoginAt?: string;
	createdAt?: string;
	updatedAt?: string;

	// Legacy fields for compatibility
	major?: string;
	year?: string;
	company?: string;
	joined?: string;
}

export interface UserProfile extends User {
	bio: string;
	institution: string;
	department?: string;
	skills: string[];
	connections: string[];
	location?: string;
	phone?: string;
	website?: string;
	socialLinks?: {
		linkedin?: string;
		twitter?: string;
		github?: string;
		[key: string]: string | undefined;
	};
	preferences?: UserPreferences;

	// Address as location fallback
	address?: {
		street?: string;
		city?: string;
		state?: string;
		zipCode?: string;
		country?: string;
	};
}

export interface UserPreferences {
	emailNotifications: boolean;
	pushNotifications: boolean;
	darkMode: boolean;
	language: string;
	timezone: string;
}

export interface UserStats {
	projectsCount: number;
	coursesCount: number;
	connectionsCount: number;
	filesCount: number;
	lastActive: string;
}

export interface UserConnection {
	id: string;
	userId: string;
	connectedUserId: string;
	status: "pending" | "accepted" | "rejected";
	createdAt: string;
	user?: User;
	connectedUser?: User;
}

// Request and response types for API calls
export interface UpdateProfileRequest {
	name?: string;
	bio?: string;
	institution?: string;
	institutionType?: "university" | "college" | "school" | "company" | "other";
	department?: string;
	position?: string;
	skills?: string[];
	location?: string;
	phone?: string;
	website?: string;
	address?: {
		street?: string;
		city?: string;
		state?: string;
		zipCode?: string;
		country?: string;
	};
	socialLinks?: UserProfile["socialLinks"];
	profileImage?: string;
}

export interface UpdatePreferencesRequest {
	emailNotifications?: boolean;
	pushNotifications?: boolean;
	darkMode?: boolean;
	language?: string;
	timezone?: string;
}
