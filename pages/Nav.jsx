import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function getWindowDimensions() {
	if (typeof window !== "undefined") {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height,
		};
	}
	return {
		width: 0,
		height: 0,
	};
}

export function useWindowDimensions() {
	const [windowdimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowdimensions;
}

export default function Nav() {
	const router = useRouter();
	const [navOn, setNavOn] = useState(false);
	const { width } = useWindowDimensions();
	const [isTablet, setIsTablet] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setIsTablet(width <= 1100);
		if (width > 1100) {
			setNavOn(false);
		}
	}, [width]);

	const currentPath = router.pathname;

	return (
		<>
			{/* Sticky Header */}
			<header
				className={`sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm transition-shadow duration-300 ${
					isScrolled ? "shadow-md" : ""
				}`}
			>
				{/* Desktop Nav */}
				<div className={`${isTablet ? "hidden" : "block"}`}>
					<div className="max-w-screen-xl mx-auto px-6 py-4">
						<div className="flex justify-center">
							{/* old text colour text-gray-800 */}
							{/* [2C3357] */}
							<div className="flex items-center gap-6  text-[#2C3357] opacity-40 font-weight-600">
								{[
									"/",
									"/PRODUCTS",
									"/TEAM",
									// "/placements",
									// "/contact",
								].map((path) => {
									const name =
										path === "/"
											? "HOME"
											: path
													.replace("/", "")
													.charAt(0)
													.toUpperCase() +
											  path.slice(2);
									return (
										<Link
											key={path}
											href={path}
											className={`nav-link hover:text-blue-600 transition-colors ${
												currentPath === path
													? "text-blue-600 font-semibold"
													: ""
											}`}
										>
											{name}
										</Link>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Mobile Hamburger */}
			<div className={`${isTablet && !navOn ? "block" : "hidden"}`}>
				<div
					className="p-3 cursor-pointer hover:bg-gray-100 transition-colors fixed top-0 right-0 z-50"
					onClick={() => {
						setNavOn(!navOn);
					}}
				>
					<AiOutlineMenu size={24} className="text-[#2C3357]" />
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			<div
				className={`${
					isTablet ? "block" : "hidden"
				} fixed top-0 right-0 h-full w-80 bg-blue-600 shadow-2xl transition-transform duration-300 ease-in-out ${
					navOn ? "translate-x-0" : "translate-x-full"
				} z-40`}
			>
				<div className="p-6">
					<div className="flex justify-end mb-8">
						<button
							onClick={() => setNavOn(false)}
							className="text-white hover:text-blue-200 text-2xl"
						>
							×
						</button>
					</div>
					<div className="flex flex-col gap-6 text-white text-lg">
						{[
							"/HOME",
							"/PRODUCTS",
							// "/history",
							"/TEAM",
							// "/placements",
							// "/contact",
						].map((path) => {
							const name =
								path === "/"
									? "Home"
									: path
											.replace("/", "")
											.charAt(0)
											.toUpperCase() + path.slice(2);
							return (
								<Link
									key={path}
									href={path}
									onClick={() => setNavOn(false)}
									className={`nav-link hover:text-blue-200 transition-colors py-2 ${
										currentPath === path
											? "text-blue-200 font-semibold border-l-4 border-blue-200 pl-4"
											: ""
									}`}
								>
									{name}
								</Link>
							);
						})}
					</div>
				</div>
			</div>

			{/* Mobile overlay */}
			{navOn && isTablet && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-30"
					onClick={() => setNavOn(false)}
				/>
			)}
		</>
	);
}
