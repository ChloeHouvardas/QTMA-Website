"use client";
import { LinkBox } from "./LinkBox";
import Image from "next/image";
import React from "react"; // Added missing import for React
import { Parallax } from "react-scroll-parallax";

type BannerProps = {
	title: string;
	message: string;
	linkBox: React.ReactNode;
	images?: string[];
};

function isClassNameElement(
	element: any
): element is React.ReactElement<{ className?: string }> {
	return (
		element &&
		typeof element === "object" &&
		"props" in element &&
		"className" in element.props
	);
}

export function Banner({ title, message, linkBox, images = [] }: BannerProps) {
	const renderImages = () => {
		if (images.length === 2) {
			return (
				<div className="relative w-[420px] h-[320px] flex items-end justify-end">
					{/* Main image */}
					<div className="relative z-10">
						<Parallax
							scale={[1.4, 1.2]}
							opacity={[0.6, 1]}
							easing="easeOutCubic"
							shouldAlwaysCompleteAnimation
						>
							<Image
								src={images[0]}
								alt="main"
								width={380}
								height={260}
								className="rounded-xl shadow-xl border-8 border-white object-cover"
								style={{ objectFit: "cover" }}
							/>
						</Parallax>
					</div>
					{/* Overlapping small image */}
					<div className="absolute left-0 bottom-0 z-20">
						<Parallax
							scale={[1.1, 1]}
							opacity={[0.8, 1]}
							easing="easeOutCubic"
							shouldAlwaysCompleteAnimation
						>
							<Image
								src={images[1]}
								alt="overlap"
								width={170}
								height={120}
								className="rounded-xl shadow-lg border-8 border-white object-cover"
								style={{ objectFit: "cover" }}
							/>
						</Parallax>
					</div>
				</div>
			);
		} else if (images.length === 3) {
			// Fallback to previous layout for 3 images
			return (
				<div className="relative w-[280px] h-[280px]">
					<Image
						src={images[2]}
						alt="top"
						width={170}
						height={170}
						className="absolute top-0 right-10 transform -translate-x-1/2 rounded-lg shadow-lg border-8 border-white"
					/>
					<Image
						src={images[1]}
						alt="bottom-right"
						width={90}
						height={90}
						className="absolute bottom-0 right-0 rounded-lg shadow-lg border-8 border-white"
					/>
					<Image
						src={images[0]}
						alt="left"
						width={250}
						height={250}
						className="absolute bottom-0 right-40 rounded-lg shadow-lg border-8 border-white"
					/>
				</div>
			);
		}
		return null;
	};

	return (
		<div className="relative overflow-hidden w-full">
			{/* Soft blue/purple gradient background */}
			<div
				className="absolute inset-0 z-0 pointer-events-none"
				style={{
					background:
						"radial-gradient(ellipse at 60% 40%, #e3edfa 60%, #f3f4fa 100%)",
				}}
			/>
			{/* Optional blurred glow */}
			<div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#b3cfff] opacity-30 rounded-full blur-3xl z-0" />
			<div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#d1cfff] opacity-20 rounded-full blur-2xl z-0" />

			<div className="relative z-10 bg-transparent py-8 sm:py-12 md:py-16 w-full">
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 sm:gap-8 min-h-[280px] sm:min-h-[320px] w-full px-4 md:px-6 lg:px-8">
					<div className="flex-1 text-center md:text-left max-w-full md:max-w-[540px] w-full">
						<h1 className="text-[#3576d3] text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-6 leading-tight">
							{title}
						</h1>
						<p className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
							{message}
						</p>
						{/* Only clone if className is a valid prop */}
						{React.isValidElement(linkBox) && isClassNameElement(linkBox)
							? React.cloneElement(linkBox, {
									className:
										"border-[#3576d3] text-[#3576d3] hover:bg-[#e3edfa] focus:ring-[#3576d3]",
								})
							: linkBox}
					</div>
					<div className="flex-1 flex items-center justify-center w-full">
						{renderImages()}
					</div>
				</div>
			</div>
		</div>
	);
}
