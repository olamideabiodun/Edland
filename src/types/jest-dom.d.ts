/// <reference types="@testing-library/jest-dom" />

// Extending Jest matchers with testing-library matchers
declare global {
	namespace jest {
		interface Matchers<R> {
			toBeInTheDocument(): R;
			toHaveAttribute(attr: string, value?: string): R;
			toHaveTextContent(text: string | RegExp): R;
			toHaveClass(className: string): R;
			toBeVisible(): R;
			toBeDisabled(): R;
			toHaveFocus(): R;
			toBeChecked(): R;
			toBePartiallyChecked(): R;
			toHaveValue(value?: string | string[] | number): R;
			toHaveStyle(style: Record<string, any>): R;
			toContainElement(element: HTMLElement | null): R;
			toContainHTML(htmlText: string): R;
			toBeEmpty(): R;
			toBeInvalid(): R;
			toBeValid(): R;
			toBeRequired(): R;
		}
	}
}
