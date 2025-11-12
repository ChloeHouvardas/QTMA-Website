"use client";
import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import { QtmaLogo } from "../components/icons/QtmaLogo";
import FloatingBlobs from "../components/FloatingBlobs";
import { Banner } from "../components/Banner";
import { LinkBox } from "../components/LinkBox";
import Nav from "./Nav.jsx";
import { Parallax } from "react-scroll-parallax";
import DecorativePatches from "../components/DecorativePatches";
import { LogoAndDecos } from "../components/icons/LogoAndDecos";

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
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		if (width <= 650) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [width]);

	// Mouse tracking for interactive effects
	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({
				x: (e.clientX / window.innerWidth) * 100,
				y: (e.clientY / window.innerHeight) * 100,
			});
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<Layout home={true}>
			<div className="relative min-h-screen">
				<FloatingBlobs
					mousePosition={mousePosition}
					scrollY={scrollY}
				/>

				<Nav />

				<section
					id="home"
					className="relative h-screen w-full overflow-hidden"
				>
					<div className="flex flex-row">
						{/* <div className="w-30 h-30"></div> */}
						<div className="absolute top-0  left-0 w-full pr-[5%] flex items-start justify-center pointer-events-none">
						{/* Logo and decorative artwork aligned to the top */}
							<LogoAndDecos />
						</div>
					</div>
					

				</section>

				{/* FOREGROUND CONTENT */}
				<section className="-mt-32 sm:-mt-40 relative z-10">
					{/* Main Title with Parallax */}
					<div
						className="flex items-center justify-center"
						style={{
							transform: `translateY(${scrollY * -0.2}px)`,
						}}
					>
						
					</div>
					<Parallax speed={10}>
						<Banner
							className="my-200"
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
					</Parallax>

					<Banner
						title="Meet the next generation of leaders and innovators."
						message="Teams consist of highly motivated and vision-oriented students across all faculties."
						linkBox={
							<LinkBox
								message="MEET OUR TEAM"
								link="https://forms.gle/3b1d7Z5x6f8a2g4i9"
								hasIcon
							/>
						}
						images={[
							"/assets/2025/Home/qtma-on-3.jpg",
							"/assets/2025/Home/thinking.jpg",
						]}
					/>
					<Parallax speed={10}>
						{/* Parallax Stats Section - Styled like Banner */}
						<div
							className="relative rounded-3xl py-16 px-4 sm:px-8 lg:px-16 mt-16 mb-12 overflow-hidden"
							style={{
								background:
									"radial-gradient(ellipse at 60% 40%, #e3edfa 60%, #f3f4fa 100%)",
								boxShadow:
									"0 8px 32px 0 rgba(53, 118, 211, 0.08)",
							}}
						>
							{/* Soft blurred glows */}
							<div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-[#b3cfff] opacity-20 rounded-full blur-3xl z-0" />
							<div className="absolute bottom-0 right-0 w-[220px] h-[180px] bg-[#d1cfff] opacity-10 rounded-full blur-2xl z-0" />
							{/* Stats Content */}
							<div className="max-w-6xl mx-auto relative z-10">
								<div className="text-center mb-8">
									<h2 className="text-[#3576d3] text-3xl sm:text-4xl mb-4">
										Innovation by the Numbers
									</h2>
									<p className="text-gray-400 text-lg sm:text-xl mb-6">
										See the impact we're making at Queen's
										University
									</p>
								</div>
								<div className="grid md:grid-cols-4 gap-8">
									{[
										{
											number: "150+",
											label: "Active Members",
										},
										{
											number: "50+",
											label: "Products Built",
										},
										{
											number: "25+",
											label: "Industry Partners",
										},
										{ number: "5", label: "Years Strong" },
									].map((stat, index) => (
										<div
											key={index}
											className="text-center"
										>
											<div className="text-3xl md:text-4xl font-bold text-[#3576d3] mb-2">
												{stat.number}
											</div>
											<div className="text-gray-400 text-lg">
												{stat.label}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</Parallax>

					<Parallax speed={20}>
						{/* Feature Cards Section - Styled like Banner */}
						<div
							className="relative rounded-3xl py-16 px-4 sm:px-8 lg:px-16 mt-12 mb-16 overflow-hidden"
							style={{
								background:
									"radial-gradient(ellipse at 60% 40%, #e3edfa 60%, #f3f4fa 100%)",
								boxShadow:
									"0 8px 32px 0 rgba(53, 118, 211, 0.08)",
							}}
						>
							<div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-[#b3cfff] opacity-20 rounded-full blur-3xl z-0" />
							<div className="absolute bottom-0 right-0 w-[220px] h-[180px] bg-[#d1cfff] opacity-10 rounded-full blur-2xl z-0" />
							<div className="max-w-6xl mx-auto relative z-10">
								<div className="text-left max-w-[600px] mb-8">
									<h2 className="text-[#3576d3] text-3xl sm:text-4xl mb-4">
										Why Choose QTMA?
									</h2>
									<p className="text-gray-400 text-lg sm:text-xl mb-6">
										We're more than just a club - we're a
										community of innovators, creators, and
										future leaders.
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
											<h3 className="text-xl font-bold text-[#3576d3] mb-3">
												{feature.title}
											</h3>
											<p className="text-gray-400">
												{feature.desc}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</Parallax>

					{/* Additional Banner - Process Section */}
					<div
						style={{
							transform: `translateY(${Math.max(
								0,
								(scrollY - height * 2.2) * 0.15
							)}px)`,
						}}
					>
						<Banner
							title="From Concept to Creation"
							message="Our structured approach takes your ideas from initial brainstorming to fully-launched products that make an impact."
							linkBox={
								<LinkBox
									message="SEE OUR PROCESS"
									link="/history"
									hasIcon
								/>
							}
							images={[
								"/assets/2025/Home/curious-mahir.jpg",
								"/assets/2025/Home/thinking.jpg",
							]}
						/>
					</div>

					{/* Final CTA Section - Styled like Banner */}
					<div
						className="relative rounded-3xl py-16 px-4 sm:px-8 lg:px-16 mt-32 mb-16 overflow-hidden"
						style={{
							background:
								"radial-gradient(ellipse at 60% 40%, #e3edfa 60%, #f3f4fa 100%)",
							boxShadow: "0 8px 32px 0 rgba(53, 118, 211, 0.08)",
						}}
					>
						<div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-[#b3cfff] opacity-20 rounded-full blur-3xl z-0" />
						<div className="absolute bottom-0 right-0 w-[220px] h-[180px] bg-[#d1cfff] opacity-10 rounded-full blur-2xl z-0" />
						<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
							<div className="text-left max-w-[600px]">
								<h2 className="text-[#3576d3] text-3xl sm:text-4xl mb-4">
									Ready to Build the Future?
								</h2>
								<p className="text-gray-400 text-lg sm:text-xl mb-6">
									Join QTMA today and be part of Queen's most
									innovative student organization.
								</p>
								<div className="flex flex-col sm:flex-row gap-4">
									<LinkBox
										message="JOIN OUR COMMUNITY"
										link="/contact"
										hasIcon
									/>
									<LinkBox
										message="EXPLORE PLACEMENTS"
										link="/placements"
										hasIcon
									/>
								</div>
							</div>

							{/* Decorative Image */}
							<div className="relative w-[280px] h-[280px] hidden md:block">
								<div className="absolute top-0 right-10 w-40 h-40 bg-[#b3cfff] opacity-20 rounded-lg blur-2xl"></div>
								<div className="absolute bottom-0 right-0 w-32 h-32 bg-[#d1cfff] opacity-15 rounded-lg blur-2xl"></div>
								<div className="absolute bottom-0 right-40 w-48 h-48 bg-[#e3edfa] opacity-25 rounded-lg blur-2xl"></div>
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
