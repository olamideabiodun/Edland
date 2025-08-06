import { Box, type BoxProps, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import { config } from "../../utils/config";
import { Platform } from "../../utils/platform";

interface ResponsiveImageProps extends Omit<BoxProps, "component"> {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	fill?: boolean;
	priority?: boolean;
	quality?: number;
	objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
	borderRadius?: number | string;
	fallbackSrc?: string;
}

const ImageContainer = styled(Box)(({ theme }) => ({
	position: "relative",
	overflow: "hidden",
}));

// Custom image component for React Native
const NativeImage = ({ src, alt, width, height, style, ...props }: any) => {
	// In a real implementation, this would render a React Native Image component
	// For the web version, we render a placeholder that would be replaced by the native component
	return (
		<div
			data-testid="native-image"
			style={{
				width: width || "100%",
				height: height || "100%",
				backgroundColor: "#eee",
				...style,
			}}
			{...props}
		>
			{/* This is just a placeholder for testing */}
			<div
				style={{
					display: "none",
					visibility: "hidden",
				}}
			>
				{alt}
			</div>
		</div>
	);
};

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
	src,
	alt,
	width,
	height,
	fill = false,
	priority = false,
	quality = 80,
	objectFit = "cover",
	borderRadius = 0,
	fallbackSrc = "/assets/placeholder.jpg",
	sx,
	...boxProps
}) => {
	const [error, setError] = React.useState(false);
	const actualSrc = error && fallbackSrc ? fallbackSrc : src;

	// Use platform selection to render the appropriate component
	return Platform.select({
		// Web implementation using Next.js Image component
		web: (
			<ImageContainer
				sx={{
					width: fill ? "100%" : width,
					height: fill ? "100%" : height,
					borderRadius,
					...sx,
				}}
				{...boxProps}
			>
				<Image
					src={actualSrc}
					alt={alt}
					fill={fill}
					width={!fill ? width : undefined}
					height={!fill ? height : undefined}
					priority={priority}
					quality={quality}
					onError={() => setError(true)}
					style={{
						objectFit,
						borderRadius:
							typeof borderRadius === "number"
								? `${borderRadius}px`
								: borderRadius,
					}}
					sizes={
						config.platform?.imageSizes?.join(", ") ||
						"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					}
				/>
			</ImageContainer>
		),
		// Native implementation for React Native
		native: (
			<Box
				sx={{
					width: fill ? "100%" : width,
					height: fill ? "100%" : height,
					borderRadius,
					overflow: "hidden",
					...sx,
				}}
				{...boxProps}
			>
				<NativeImage
					src={actualSrc}
					alt={alt}
					width={width}
					height={height}
					style={{
						objectFit,
						borderRadius:
							typeof borderRadius === "number" ? borderRadius : borderRadius,
					}}
					onError={() => setError(true)}
					resizeMode={objectFit}
				/>
			</Box>
		),
		// Default to web implementation
		default: (
			<ImageContainer
				sx={{
					width: fill ? "100%" : width,
					height: fill ? "100%" : height,
					borderRadius,
					...sx,
				}}
				{...boxProps}
			>
				<Image
					src={actualSrc}
					alt={alt}
					fill={fill}
					width={!fill ? width : undefined}
					height={!fill ? height : undefined}
					priority={priority}
					quality={quality}
					onError={() => setError(true)}
					style={{
						objectFit,
						borderRadius:
							typeof borderRadius === "number"
								? `${borderRadius}px`
								: borderRadius,
					}}
					sizes={
						config.platform?.imageSizes?.join(", ") ||
						"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					}
				/>
			</ImageContainer>
		),
	}) as JSX.Element;
};
