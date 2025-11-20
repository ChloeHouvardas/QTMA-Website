import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/layout";
import Image from "next/image";
import Founding from "../../public/assets/Club Data/History/Founding.png";
import Expansion from "../../public/assets/Club Data/History/Expansion.png";
import Initiatives from "../../public/assets/Club Data/History/Initiatives.png";
import FamilyPhoto from "../../public/assets/Club Data/History/Innovation.png";
import Nav from "../Nav";
import Head from "next/head";
import Footer from "../../components/Footer";
import { FancyAmpersand } from "../../components/icons/FancyAmpersand";

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

export async function getStaticProps({params}) {
	return {
		props: {}
	};
}

export default function History() {
	const { height, width } = useWindowDimensions();
	const [isMobile, setIsMobile] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	
	const heroRef = useRef(null);
	const timelineRef = useRef(null);

	useEffect(() => {
		if (width <= 650) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [width]);

	// Parallax scroll effect
	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// mouse movement removed to avoid rerenders on cursor move

	// Timeline events data
	const timelineEvents = [
		{
			year: "2014",
			title: "The Founding",
			description: "QTMA is founded by Justin Herlick and Aleko Kiriakou to bridge the gap between Queen's University and the broader tech industry. Initially only a Commerce club, QTMA primarily focused on researching and analyzing key market trends.",
			image: Founding,
			imageWidth: 508,
			imageHeight: 346
		},
		{
			year: "2015-2016",
			title: "Club Expansion",
			description: "QTMA expands its presence by launching Insights – a yearly research pitch competition amongst internal members – and Byte Size – the club's weekly tech newsletters. The club becomes accessible to Engineering and Computer Science students. In addition, Project Tädistö is rolled out as an initiative for internal technical teams of three to develop apps.",
			image: Expansion,
			imageWidth: 508,
			imageHeight: 337.64
		},
		{
			year: "2017-2018",
			title: "Public Facing Initiatives",
			description: "To reach a wider audience, QTMA partners with Queen's clubs, including the Queen's Startup Summit (QSS) and Queen's Entrepreneurs Competition (QEC), as well as companies such as Shopify, IBM, Microsoft, Hitachi, Deloitte, and Trend Micro. Additional initiatives are launched including tech recruiting panels and a fintech hackathon.",
			image: Initiatives,
			imageWidth: 531,
			imageHeight: 354
		},
		{
			year: "2019-Present",
			title: "Innovation",
			description: "QTMA continues its mandate of making Queen's University a leading tech hub in Canada by becoming a full year product incubator. Across 4 interdisciplinary product teams, students work together to build tangible products that can be showcased and launched, providing them with a realistic preview of the industry and growing their network in the tech community.",
			image: FamilyPhoto,
			imageWidth: 530,
			imageHeight: 340
		}
	];

	return (
		<>
			<Head>
				<meta
					name="description"
					content="To reach a wider audience, QTMA partners with Queen's clubs, including the Queen's Startup
          Summit (QSS) and Queen's Entrepreneurs Competition (QEC), as well as companies such as
          Shopify, IBM, Microsoft, Hitachi, Deloitte, and Trend Micro. Additional initiatives are
          launched including tech recruiting panels and a fintech hackathon."
				/>
				<title>QTMA History</title>
				<meta name="og:title" content={"QTMA History"}/>
			</Head>
			<Nav/>
			
			{/* Hero Section with Parallax */}
			<section 
				ref={heroRef}
				className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50"
			>
				{/* Floating Background Elements */}
				<div className="absolute inset-0">
					<div 
						className="absolute w-64 h-64 bg-blue-200 opacity-20 rounded-full blur-3xl animate-pulse"
						style={{
							transform: `translateY(${scrollY * 0.1}px)`,
							top: '10%',
							left: '10%'
						}}
					/>
					<div 
						className="absolute w-48 h-48 bg-purple-200 opacity-25 rounded-full blur-2xl animate-pulse"
						style={{
							transform: `translateY(${scrollY * 0.15}px)`,
							top: '60%',
							right: '15%',
							animationDelay: '1s'
						}}
					/>
				</div>

				{/* Hero Content */}
				<div className="relative z-10 h-full flex items-center justify-center text-center px-4">
					<div 
						className="max-w-4xl"
						style={{
							transform: `translateY(${scrollY * -0.3}px)`
						}}
					>
						<h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6 animate-fade-in">
							Our History
						</h1>
						<p className="text-xl md:text-2xl text-gray-400 mb-8 animate-fade-in animation-delay-300 max-w-2xl mx-auto">
							The journey of QTMA from its founding to becoming Queen's premier product incubation club
						</p>
					</div>
				</div>


			</section>

			{/* Timeline Section */}
			<section 
				ref={timelineRef}
				className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white"
			>
				{/* Background Pattern */}
				<div 
					className="absolute inset-0 opacity-5"
					style={{
						transform: `translateY(${scrollY * -0.1}px)`,
						backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)',
						backgroundSize: '30px 30px'
					}}
				/>

				<div className="container mx-auto max-w-6xl relative z-10">
					{/* Timeline */}
					<div className="relative">
						{/* Timeline Line - Only visible on desktop */}
						<div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600 hidden md:block"></div>
						
						{/* Timeline Events */}
						{timelineEvents.map((event, index) => (
							<div 
								key={index}
								className={`mb-32 md:mb-48 relative ${index === timelineEvents.length - 1 ? 'mb-0' : ''}`}
							>
								{/* Timeline Dot - Only visible on desktop */}
								<div 
									className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white hidden md:block"
									style={{
										transform: `translateY(${scrollY * 0.02}px) translateX(-50%)`,
										top: '50%'
									}}
								></div>
								
								{/* Event Content */}
								<div 
									className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
									style={{
										transform: isMobile ? 'none' : `translateY(${Math.max(0, (scrollY - height * (index * 0.5 + 1)) * 0.1)}px)`
									}}
								>
									{/* Text Content */}
									<div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
										<div className="bg-blue-100 border-4 border-blue-600 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-all duration-300">
											<div className="text-xl font-bold text-blue-600 mb-2">{event.year}</div>
											<h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">{event.title}</h2>
											<p className="text-gray-400 text-base md:text-lg">{event.description}</p>
										</div>
									</div>
									
									{/* Image Content */}
									<div className="w-full md:w-1/2 flex justify-center">
										<div className="relative overflow-hidden rounded-xl border-4 border-blue-600 shadow-lg transform transition-all duration-500 hover:scale-[1.02]">
											<Image 
												src={event.image} 
												alt={event.title} 
												width={event.imageWidth} 
												height={event.imageHeight}
												className="w-full h-auto"
												placeholder="blur"
												blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdgJCIQR4QQAAAABJRU5ErkJggg=="
											/>
											<div 
												className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-50"
												style={{
													transform: `translateY(${Math.max(0, (scrollY - height * (index * 0.5 + 1)) * 0.05)}px)`
												}}
											></div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className="bg-blue-100 border-t-4 border-blue-600 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
				{/* Floating Elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div 
						className="absolute w-32 h-32 bg-blue-200 opacity-20 rounded-full blur-xl"
						style={{
							transform: `translateY(${scrollY * -0.1}px)`,
							top: '20%',
							left: '10%'
						}}
					/>
					<div 
						className="absolute w-24 h-24 bg-blue-200 opacity-25 rounded-full blur-lg"
						style={{
							transform: `translateY(${scrollY * -0.15}px)`,
							top: '70%',
							right: '20%'
						}}
					/>
				</div>

				<div 
					className="container mx-auto max-w-4xl text-center relative z-10"
					style={{
						transform: isMobile ? 'none' : `translateY(${Math.max(0, (scrollY - height * 3) * 0.1)}px)`
					}}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
						Join Us in Making History
					</h2>
					<p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
						Be part of the next chapter in QTMA's journey as we continue to innovate and build the future of technology at Queen's University.
					</p>
					<a 
						href="/contact" 
						className="text-qtmaPrimaryDark bg-white border-2 border-qtmaPrimaryDark rounded-full shadow-md inline-flex items-center gap-2 no-underline hover:bg-gray-100 hover:cursor-pointer transition px-8 py-4 text-lg font-semibold"
					>
						Get Involved
					</a>
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
					animation: fade-in 1s ease-out forwards;
				}
				
				.animation-delay-300 {
					animation-delay: 300ms;
				}
				
				.animation-delay-600 {
					animation-delay: 600ms;
				}
			`}</style>
			
			<Footer/>
		</>
	);
}