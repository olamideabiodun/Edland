import { fireEvent, render, screen } from "@testing-library/react";
import type React from "react";
import "@testing-library/jest-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { FileUploader } from "../FileUploader";

// Mock the config object used in FileUploader
jest.mock("@/utils/config", () => ({
	config: {
		upload: {
			ALLOWED_FILE_TYPES: [".jpg", ".png", ".pdf"],
			MAX_FILE_SIZE: 52428800, // 50MB
		},
	},
}));

// Create a theme for testing
const theme = createTheme();

// Wrap component with necessary providers
const renderWithProviders = (ui: React.ReactElement) => {
	return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("FileUploader", () => {
	const mockOnFilesSelected = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("renders correctly in web mode", () => {
		renderWithProviders(<FileUploader onFilesSelected={mockOnFilesSelected} />);

		// Verify component renders with correct text
		expect(screen.getByText("Drag and drop files here")).toBeInTheDocument();
		expect(screen.getByText("Choose Files")).toBeInTheDocument();
	});

	it("shows custom button text when provided", () => {
		renderWithProviders(
			<FileUploader
				onFilesSelected={mockOnFilesSelected}
				buttonText="Upload Documents"
			/>,
		);

		expect(screen.getByText("Upload Documents")).toBeInTheDocument();
	});

	it("shows loading state correctly", () => {
		renderWithProviders(
			<FileUploader
				onFilesSelected={mockOnFilesSelected}
				isLoading={true}
				uploadProgress={42}
			/>,
		);

		expect(screen.getByText("42% Uploaded")).toBeInTheDocument();
	});

	it("shows error message when there is an error", () => {
		const errorMessage = "File too large";
		renderWithProviders(
			<FileUploader
				onFilesSelected={mockOnFilesSelected}
				error={errorMessage}
			/>,
		);

		expect(screen.getByText(errorMessage)).toBeInTheDocument();
	});

	it("calls onFilesSelected when files are selected", () => {
		renderWithProviders(<FileUploader onFilesSelected={mockOnFilesSelected} />);

		// Create a file input event
		const file = new File(["dummy content"], "example.txt", {
			type: "text/plain",
		});
		const input = screen
			.getByRole("button", { name: /choose files/i })
			.querySelector("input");

		if (input) {
			Object.defineProperty(input, "files", {
				value: [file],
			});

			fireEvent.change(input);

			expect(mockOnFilesSelected).toHaveBeenCalledWith([file]);
		}
	});
});
