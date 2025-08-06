/**
 * Typography utility functions
 *
 * These functions help prevent hydration errors caused by invalid HTML nesting,
 * particularly when using Material UI Typography components with complex content.
 */
import React from "react";

/**
 * Default props to make a Typography component safe for containing
 * block-level elements like divs (e.g., Box components)
 */
export const safeTypographyProps = {
	component: "div" as const, // Cast as const to maintain exact type
};

/**
 * Utility function that checks if content contains JSX that might render
 * as block-level elements, and if so, wraps it in a div
 */
export const ensureSafeContent = (
	content: React.ReactNode,
): React.ReactNode => {
	// This is a simple check - in a real implementation we might want
	// more sophisticated detection of components that render block elements
	if (typeof content !== "string" && typeof content !== "number") {
		return React.createElement("div", {}, content);
	}
	return content;
};
