"use client";

import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import { QtmaLogo } from "../components/icons/QtmaLogo";
import FloatingBlobs from "../components/FloatingBlobs";
import { Banner } from "../components/Banner";
import { LinkBox } from "../components/LinkBox";
import Nav from "./Nav.jsx";

import PlacementCloud from "../components/PlacementCloud";

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
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		if (width <= 650) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [width]);

	// mouse movement removed to avoid re-renders on cursor move

	return (
		<Layout home={true}>
			<div className="relative min-h-screen overflow-x-hidden w-full">
				<FloatingBlobs scrollY={scrollY} />

				<Nav />

				<section
					id="home"
					className="relative h-96 sm:h-screen w-full overflow-hidden"
				>
					<div className="flex flex-row">
						{/* <div className="w-30 h-30"></div> */}
						<div className="absolute top-8 sm:top-12 md:top-16 left-0 w-full flex items-start justify-center pointer-events-none">
							<div className="max-w-screen-xl w-full px-6 md:pt-20 mx-auto">
								<QtmaLogo className="w-1/3 md:w-1/3 lg:w-1/4 mx-auto" />
								<p className="text-center mx-auto text-[#A6A9BF] opacity-40 font-semibold">
									QUEEN’S TECHNOLOGY & MEDIA ASSOCIATION
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* FOREGROUND CONTENT */}
				<section className="-mt-48 sm:-mt-56 md:-mt-40 relative z-10 w-full">
					{/* Main Title with Parallax */}
					<div
						className="flex items-center justify-center w-full"
						style={{
							transform: `translateY(${scrollY * -0.2}px)`,
						}}
					></div>
					{!isMobile ? (
						<Banner
							className="my-200"
							title="Launch the next big thing."
							message="Designers. Developers. Analysts. Building at Canada's premier product incubation club."
							linkBox={
								<LinkBox message="VIEW OUR PRODUCTS" link="/products" hasIcon />
							}
							images={[
								"/assets/2025/Home/curious-mahir.jpg",
								"/assets/2025/Home/happy-alison.png",
								"/assets/2025/Home/happy-nathan.jpg",
							]}
						/>
					) : (
						<Banner
							className="my-200"
							title="Launch the next big thing."
							message="Designers. Developers. Analysts. Building at Canada's premier product incubation club."
							linkBox={
								<LinkBox message="VIEW OUR PRODUCTS" link="/products" hasIcon />
							}
							images={[
								"/assets/2025/Home/curious-mahir.jpg",
								"/assets/2025/Home/happy-alison.png",
								"/assets/2025/Home/happy-nathan.jpg",
							]}
						/>
					)}{" "}
					<div className="mt-16 mb-16"></div>
					<Banner
						title="Meet the next generation of leaders and innovators."
						message="Teams consist of highly motivated and vision-oriented students across all faculties."
						linkBox={<LinkBox message="MEET OUR TEAM" link="/team" hasIcon />}
						images={[
							"/assets/2025/Home/qtma-on-3.jpg",
							"/assets/2025/Home/thinking.jpg",
						]}
					/>
					<div className="mt-16 mb-16"></div>
					{!isMobile ? (
						<div
							className="relative rounded-none sm:rounded-3xl py-12 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden"
							style={{
								background:
									"radial-gradient(ellipse at 60% 40%, #e3edfa 60%, #f3f4fa 100%)",
								boxShadow: "0 8px 32px 0 rgba(53, 118, 211, 0.08)",
							}}
						>
							<div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-[#b3cfff] opacity-20 rounded-full blur-3xl z-0" />
							<div className="absolute bottom-0 right-0 w-[220px] h-[180px] bg-[#d1cfff] opacity-10 rounded-full blur-2xl z-0" />
							<div className="max-w-6xl mx-auto relative z-10">
								<div className="text-left max-w-[600px] mb-6 sm:mb-8">
									<h2 className="text-[#3576d3] text-2xl sm:text-3xl md:text-4xl font-medium mb-3 sm:mb-4">
										Why Choose QTMA?
									</h2>
									<p className="text-gray-400 text-lg sm:text-xl mb-6">
										We're more than just a club - we're a community of
										innovators, creators, and future leaders.
									</p>
								</div>
								<div className="grid md:grid-cols-3 gap-8">
									{[
										{
											title: "Real-World Experience",
											desc: "Work on actual products that solve real problems for real users.",
											icon: "🚀",
										},
										{
											title: "Industry Mentorship",
											desc: "Learn from professionals currently working at top tech companies.",
											icon: "👥",
										},
										{
											title: "Cross-Functional Teams",
											desc: "Collaborate with students from business, engineering, and design.",
											icon: "🎯",
										},
									].map((feature, index) => (
										<div
											key={index}
											className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
										>
											<div className="text-3xl mb-3 text-[#3576d3]">
												{feature.icon}
											</div>
											<h3 className="text-xl font-medium text-[#3576d3] mb-3">
												{feature.title}
											</h3>
											<p className="text-gray-400">{feature.desc}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					) : (
						<div
							className="relative rounded-none sm:rounded-3xl py-12 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden"
							style={{
								background:
									"radial-gradient(ellipse at 60% 40%, #e3edfa 60%, #f3f4fa 100%)",
								boxShadow: "0 8px 32px 0 rgba(53, 118, 211, 0.08)",
							}}
						>
							<div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-[#b3cfff] opacity-20 rounded-full blur-3xl z-0" />
							<div className="absolute bottom-0 right-0 w-[220px] h-[180px] bg-[#d1cfff] opacity-10 rounded-full blur-2xl z-0" />
							<div className="max-w-6xl mx-auto relative z-10">
								<div className="text-left max-w-[600px] mb-6 sm:mb-8">
									<h2 className="text-[#3576d3] text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
										Why Choose QTMA?
									</h2>
									<p className="text-gray-400 text-lg sm:text-xl mb-6">
										We're more than just a club - we're a community of
										innovators, creators, and future leaders.
									</p>
								</div>
								<div className="grid md:grid-cols-3 gap-8">
									{[
										{
											title: "Real-World Experience",
											desc: "Work on actual products that solve real problems for real users.",
											icon: "🚀",
										},
										{
											title: "Industry Mentorship",
											desc: "Learn from professionals currently working at top tech companies.",
											icon: "👥",
										},
										{
											title: "Cross-Functional Teams",
											desc: "Collaborate with students from business, engineering, and design.",
											icon: "🎯",
										},
									].map((feature, index) => (
										<div
											key={index}
											className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
										>
											<div className="text-3xl mb-3 text-[#3576d3]">
												{feature.icon}
											</div>
											<h3 className="text-xl font-medium text-[#3576d3] mb-3">
												{feature.title}
											</h3>
											<p className="text-gray-400">{feature.desc}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					)}{" "}
					<div className="mt-12 sm:mt-16 mb-12 sm:mb-16"></div>
					{/* Sponsors Section */}
					<div className="max-w-6xl mx-auto px-4 sm:px-8 mb-12 sm:mb-16">
						<h2 className="text-[#3576d3] text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-8">
							Our Partners & Sponsors
						</h2>
						<p className="text-gray-400 text-lg text-center mb-10 max-w-2xl mx-auto">
							We're proud to work with industry-leading organizations that
							support innovation and student development.
						</p>
						<div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
							<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
								<div className="w-full max-w-[140px] h-24 relative flex items-center justify-center">
									<img
										src="/assets/Club Data/Homepage/Sponsors/ComSoc.png"
										alt="ComSoc"
										className="max-w-full max-h-full object-contain"
									/>
								</div>
								<div className="w-full max-w-[140px] h-24 relative flex items-center justify-center">
									<img
										src="/assets/Club Data/Homepage/Sponsors/McKinsey.png"
										alt="McKinsey"
										className="max-w-full max-h-full object-contain"
									/>
								</div>
								<div className="w-full max-w-[140px] h-24 relative flex items-center justify-center">
									<img
										src="/assets/Club Data/Homepage/Sponsors/Queens_Artsci.png"
										alt="Queen's Arts & Science"
										className="max-w-full max-h-full object-contain"
									/>
								</div>
								<div className="w-full max-w-[140px] h-24 relative flex items-center justify-center">
									<img
										src="/assets/Club Data/Homepage/Sponsors/Queens_Computing.png"
										alt="Queen's Computing"
										className="max-w-full max-h-full object-contain"
									/>
								</div>
								<div className="w-full max-w-[140px] h-24 relative flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
									<img
										src="/assets/Club Data/Homepage/Sponsors/Trend_Micro.png"
										alt="Trend Micro"
										className="max-w-full max-h-full object-contain"
									/>
								</div>
							</div>
						</div>
					</div>
					{/* Final CTA Section - Styled like Banner */}
					<div
						className="relative rounded-none sm:rounded-3xl py-12 sm:py-16 px-4 sm:px-8 lg:px-16 mb-0 sm:mb-16 overflow-hidden"
						style={{
							background:
								"radial-gradient(ellipse at 60% 40%, #e3edfa 60%, #f3f4fa 100%)",
							boxShadow: "0 8px 32px 0 rgba(53, 118, 211, 0.08)",
						}}
					>
						<div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-[#b3cfff] opacity-20 rounded-full blur-3xl z-0" />
						<div className="absolute bottom-0 right-0 w-[220px] h-[180px] bg-[#d1cfff] opacity-10 rounded-full blur-2xl z-0" />
						<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative z-10">
							<div className="text-center md:text-left max-w-[600px] w-full">
								<h2 className="text-[#3576d3] text-2xl sm:text-3xl md:text-4xl font-medium mb-3 sm:mb-4">
									Ready to Build the Future?
								</h2>
								<p className="text-gray-400 text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
									Join QTMA today and be part of Queen's most innovative student
									organization with Alumni in the World's most Impactful
									Companies.
								</p>
								<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
									<LinkBox
										message="JOIN OUR COMMUNITY"
										link="/contact"
										hasIcon
									/>
									<LinkBox
										message="LEARN MORE ABOUT US"
										link="/about"
										hasIcon
									/>
								</div>
							</div>

							{/* Placement Cloud */}
							<div className="flex items-center justify-center">
								<PlacementCloud />
							</div>
						</div>
					</div>
				</section>

				{/* Custom Animations */}
				<style jsx>{`
					@keyframes fade-in {
						from {
							opacity: 0;
							transform: translateY(20px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					.animate-fade-in {
						animation: fade-in 1s ease-out;
					}
				`}</style>
			</div>
		</Layout>
	);
}
