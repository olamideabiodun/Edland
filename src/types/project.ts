/**
 * Project-related type definitions for the Ednux platform
 * These types are used across both web and mobile platforms
 */

import type { User } from "./user";

export type TaskStatus = "todo" | "in_progress" | "in_review" | "completed";
export type TaskPriority = "low" | "medium" | "high" | "urgent";
export type ProjectStatus = "active" | "archived" | "completed";

export interface Task {
	id: string;
	title: string;
	description: string;
	status: TaskStatus;
	priority: TaskPriority;
	assignedTo: string[];
	dueDate: string;
	attachments?: string[];
	tags?: string[];
	createdAt: string;
	updatedAt: string;
	createdBy: string;
	projectId: string;
	completedAt?: string;
}

export interface Project {
	id: string;
	title: string;
	description: string;
	status: ProjectStatus;
	members: string[];
	tasks: Task[];
	createdAt: string;
	updatedAt: string;
	createdBy: string;
	startDate: string;
	endDate?: string;
	tags?: string[];
	isPublic: boolean;
}

export interface ProjectMember {
	id: string;
	projectId: string;
	userId: string;
	role: "owner" | "editor" | "viewer";
	joinedAt: string;
	user?: User;
}

export interface ProjectComment {
	id: string;
	projectId: string;
	taskId?: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	createdBy: string;
	attachments?: string[];
	user?: User;
}

export interface ProjectActivity {
	id: string;
	projectId: string;
	activityType:
		| "create"
		| "update"
		| "delete"
		| "comment"
		| "status_change"
		| "member_added"
		| "member_removed";
	entityType: "project" | "task" | "comment" | "member";
	entityId: string;
	createdAt: string;
	createdBy: string;
	metadata?: Record<string, any>;
	user?: User;
}

// Request and response types for API calls
export interface CreateProjectRequest {
	title: string;
	description: string;
	members?: string[];
	startDate?: string;
	endDate?: string;
	tags?: string[];
	isPublic?: boolean;
}

export interface UpdateProjectRequest {
	title?: string;
	description?: string;
	status?: ProjectStatus;
	startDate?: string;
	endDate?: string;
	tags?: string[];
	isPublic?: boolean;
}

export interface CreateTaskRequest {
	title: string;
	description: string;
	status?: TaskStatus;
	priority?: TaskPriority;
	assignedTo?: string[];
	dueDate?: string;
	tags?: string[];
}

export interface UpdateTaskRequest {
	title?: string;
	description?: string;
	status?: TaskStatus;
	priority?: TaskPriority;
	assignedTo?: string[];
	dueDate?: string;
	tags?: string[];
}
