import Image from "next/image";
import qtmaLogo from "../public/assets/Club Data/QTMA_logo.png";
import startup from "../public/assets/Visuals/Startup_SVG.png";
import Layout from "../components/layout";
import { Link as SLink } from "react-scroll";
import React, { useEffect, useState } from "react";
import { FancyAmpersand } from "../components/icons/FancyAmpersand";
import { Banner } from "../components/Banner";
import { LinkBox } from "../components/LinkBox";

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

export default function Home() {
	const { height, width } = useWindowDimensions();
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		if (width <= 650) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [width]);

	return (
		<Layout home={true}>
			{/* BACKGROUND SECTION */}
			<section
				id="home"
				className="relative h-screen w-full overflow-hidden bg-white"
			>
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
					<FancyAmpersand className="w-[200%] h-[200%] opacity-10 scale-150" />
				</div>
			</section>

			{/* FOREGROUND CONTENT */}
			<section className="-mt-32 sm:-mt-40 relative z-10 pb-32">
				<div className="flex items-center justify-center">
					<h1 className="text-center text-gray-400 text-3xl mb-4">
						QUEEN'S TECHNOLOGY AND MEDIA ASSOCIATION
					</h1>
				</div>
				<Banner
					title="Launch the next big thing."
					message="Designers. Developers. Analysts. Building at Canada’s premier product incubation club."
					linkBox={
						<LinkBox
							message="VIEW OUR PRODUCTS"
							link="https://forms.gle/3b1d7Z5x6f8a2g4i9"
							hasIcon
						/>
					}
					images={[
						"/assets/2025/Home/curious-mahir.jpg",
						"/assets/2025/Home/happy-alison.png",
						"/assets/2025/Home/happy-nathan.jpg",
					]}
				/>
				<Banner
					title="Meet the next generation of leaders and innovators."
					message="Teams consist of highly motivated and vision-oriented students across all faculties."
					linkBox={
						<LinkBox
							message="MEETING OUR TEAM"
							link="https://forms.gle/3b1d7Z5x6f8a2g4i9"
							hasIcon
						/>
					}
					images={[
						"/assets/2025/Home/qtma-on-3.jpg",
						"/assets/2025/Home/thinking.jpg",
					]}
				/>
			</section>
		</Layout>
	);
}
