import Nav from "../Nav";
import Head from "next/head";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";
import FloatingBlobsStill from "../../components/FloatingBlobsStill";
import Image from "next/image";
import { useState } from "react";
import Founding from "../../public/assets/Club Data/History/Founding.png";
import Expansion from "../../public/assets/Club Data/History/Expansion.png";
import Initiatives from "../../public/assets/Club Data/History/Initiatives.png";
import Innovation from "../../public/assets/Club Data/History/Innovation.png";

export default function About() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const historySlides = [
		{
			year: "2014",
			title: "The Founding",
			description: "QTMA is founded by Justin Herlick and Aleko Kiriakou to bridge the gap between Queen's University and the broader tech industry. Initially only a Commerce club, QTMA primarily focused on researching and analyzing key market trends.",
			image: Founding,
		},
		{
			year: "2015-2016",
			title: "Club Expansion",
			description: "QTMA expands its presence by launching Insights – a yearly research pitch competition amongst internal members – and Byte Size – the club's weekly tech newsletters. The club becomes accessible to Engineering and Computer Science students. In addition, Project Tädistö is rolled out as an initiative for internal technical teams of three to develop apps.",
			image: Expansion,
		},
		{
			year: "2017-2018",
			title: "Public Facing Initiatives",
			description: "To reach a wider audience, QTMA partners with Queen's clubs, including the Queen's Startup Summit (QSS) and Queen's Entrepreneurs Competition (QEC), as well as companies such as Shopify, IBM, Microsoft, Hitachi, Deloitte, and Trend Micro. Additional initiatives are launched including tech recruiting panels and a fintech hackathon.",
			image: Initiatives,
		},
		{
			year: "2019-Present",
			title: "Innovation & Product Incubation",
			description: "QTMA continues its mandate of making Queen's University a leading tech hub in Canada by becoming a full year product incubator. Across 4 interdisciplinary product teams, students work together to build tangible products that can be showcased and launched, providing them with a realistic preview of the industry and growing their network in the tech community.",
			image: Innovation,
		},
	];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % historySlides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + historySlides.length) % historySlides.length);
	};
	return (
		<>
			<Head>
				<meta name="description" content="About QTMA" />
				<title>QTMA - About</title>
				<meta name="og:title" content={"QTMA - About"} />
			</Head>

			<Nav />

			<Layout
				background="linear-gradient(135deg, #e3edfa 0%, #f3f4fa 100%)"
				metaInfo={
					"Learn more about Queen's Technology & Media Association"
				}
			>
				<FloatingBlobsStill />
				<div className="mx-auto w-full max-w-[2400px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-4 max-[650px]:mt-[var(--nav-height-sm,80px)] relative z-10">
					<h1 className="text-[#3576d3] text-center text-3xl sm:text-4xl font-medium mb-6 sm:mb-8">
						About QTMA
					</h1>

					{/* What is QTMA Section */}
					<section className="mb-12 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl font-bold text-[#3576d3] mb-4 sm:mb-6">
							What is QTMA?
						</h2>
						<div className="text-base sm:text-lg text-gray-700 space-y-4">
							<p>
								The Queen's Technology & Media Association (QTMA) is Canada's premier product incubation club, 
								where students transform innovative ideas into real-world applications. We bring together 
								talented designers, developers, and analysts to collaborate on meaningful projects that 
								solve everyday problems.
							</p>
							<p>
								Founded at Queen's University, QTMA provides a unique environment where students gain 
								hands-on experience in product development, from initial concept to launch. Our club 
								fosters creativity, innovation, and professional growth in a supportive community.
							</p>
						</div>
					</section>

					{/* What do we do Section */}
					<section className="mb-12 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl font-bold text-[#3576d3] mb-4 sm:mb-6">
							What Do We Do?
						</h2>
						<div className="text-base sm:text-lg text-gray-700 space-y-4">
							<p>
								At QTMA, we specialize in building innovative digital products from the ground up. 
								Each year, our teams work on multiple projects that address real student needs and 
								market opportunities.
							</p>
							<div className="grid md:grid-cols-2 gap-6 my-6">
						<div className="bg-white rounded-lg p-6 shadow-sm">
							<h3 className="font-medium text-xl text-[#3576d3] mb-3">Product Development</h3>
									<p className="text-gray-600">
										Our teams follow agile methodologies to design, develop, and launch full-featured 
										applications, gaining real-world product management experience.
									</p>
								</div>
						<div className="bg-white rounded-lg p-6 shadow-sm">
							<h3 className="font-medium text-xl text-[#3576d3] mb-3">Skill Building</h3>
									<p className="text-gray-600">
										Members develop technical and professional skills through workshops, mentorship, 
										and hands-on project work in design, development, and business analysis.
									</p>
								</div>
						<div className="bg-white rounded-lg p-6 shadow-sm">
							<h3 className="font-medium text-xl text-[#3576d3] mb-3">Networking</h3>
									<p className="text-gray-600">
										Connect with like-minded students, alumni, and industry professionals who share 
										your passion for technology and innovation.
									</p>
								</div>
						<div className="bg-white rounded-lg p-6 shadow-sm">
							<h3 className="font-medium text-xl text-[#3576d3] mb-3">Portfolio Building</h3>
									<p className="text-gray-600">
										Work on tangible projects that you can showcase to future employers, 
										demonstrating your ability to deliver real products.
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* Team Structure Section */}
					<section className="mb-12 sm:mb-16">
					<h2 className="text-2xl sm:text-3xl font-medium text-[#3576d3] mb-6 sm:mb-8 text-center">
						Our Team Structure
					</h2>						<div className="max-w-6xl mx-auto">
							{/* Team Hierarchy Visualization */}
							<div className="flex flex-col items-center mb-12">
								{/* Product Manager - Top Level */}
								<div className="bg-gradient-to-br from-[#3576d3] to-[#2563b8] text-white rounded-2xl px-10 py-5 mb-8 shadow-lg transform hover:scale-105 transition-transform">
									<div className="text-center">
										<div className="text-blue-100 text-xs font-semibold mb-1 tracking-wider">PRODUCT MANAGER</div>
										<div className="text-3xl font-bold">PM</div>
									</div>
								</div>

								{/* Connecting Line */}
								<div className="w-0.5 h-12 bg-gradient-to-b from-[#3576d3] to-gray-300"></div>

								{/* Senior Team Members - Second Level */}
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
									<div className="bg-white border-2 border-[#3576d3] rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow">
										<div className="text-center">
											<div className="text-[#3576d3] text-xs font-semibold mb-1">SENIOR</div>
										<div className="flex items-center justify-center gap-2">
											<span className="text-[#3576d3] text-xl">📊</span>
											<div className="text-lg font-medium text-gray-800">Business Analyst</div>
										</div>
										</div>
									</div>
									<div className="bg-white border-2 border-[#3576d3] rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow">
										<div className="text-center">
                                            <div className="text-[#3576d3] text-xs font-semibold mb-1">SENIOR</div>
										<div className="flex items-center justify-center gap-2">
											<span className="text-[#3576d3] text-xl">&lt;/&gt;</span>
											<div className="text-lg font-medium text-gray-800">Developer</div>
										</div>
										</div>
									</div>
									<div className="bg-white border-2 border-[#3576d3] rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow">
										<div className="text-center">
                                            <div className="text-[#3576d3] text-xs font-semibold mb-1">SENIOR</div>
										<div className="flex items-center justify-center gap-2">
											<span className="text-[#3576d3] text-xl">🎨</span>
											<div className="text-lg font-medium text-gray-800">UI/UX Designer</div>
										</div>
										</div>
									</div>
								</div>

								{/* Connecting Lines to Junior Team */}
								<div className="grid grid-cols-3 gap-6 w-full mb-4">
									<div className="flex justify-center">
										<div className="w-0.5 h-8 bg-gray-300"></div>
									</div>
									<div className="flex justify-center">
										<div className="w-0.5 h-8 bg-gray-300"></div>
									</div>
									<div className="flex justify-center">
										<div className="w-0.5 h-8 bg-gray-300"></div>
									</div>
								</div>

								{/* Junior Team Members - Third Level */}
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
									{/* Junior Business Analysts Column */}
									<div className="space-y-3">
										<div className="bg-gradient-to-br from-blue-50 to-white border border-[#3576d3] rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
											<div className="flex items-center gap-2 text-sm">
												<span className="text-[#3576d3]">📊</span>
												<span className="font-semibold text-gray-700">Junior BA</span>
											</div>
										</div>
										<div className="bg-gradient-to-br from-blue-50 to-white border border-[#3576d3] rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
											<div className="flex items-center gap-2 text-sm">
												<span className="text-[#3576d3]">📊</span>
												<span className="font-semibold text-gray-700">Junior BA</span>
											</div>
										</div>
									</div>

									{/* Junior Developers Column */}
									<div className="space-y-3">
										<div className="bg-gradient-to-br from-blue-50 to-white border border-[#3576d3] rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
											<div className="flex items-center gap-2 text-sm">
												<span className="text-[#3576d3]">&lt;/&gt;</span>
												<span className="font-semibold text-gray-700">Junior Dev</span>
											</div>
										</div>
										<div className="bg-gradient-to-br from-blue-50 to-white border border-[#3576d3] rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
											<div className="flex items-center gap-2 text-sm">
												<span className="text-[#3576d3]">&lt;/&gt;</span>
												<span className="font-semibold text-gray-700">Junior Dev</span>
											</div>
										</div>
										<div className="bg-gradient-to-br from-blue-50 to-white border border-[#3576d3] rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
											<div className="flex items-center gap-2 text-sm">
												<span className="text-[#3576d3]">&lt;/&gt;</span>
												<span className="font-semibold text-gray-700">Junior Dev</span>
											</div>
										</div>
									</div>

									{/* Junior UI/UX Designers Column */}
									<div className="space-y-3">
										<div className="bg-gradient-to-br from-blue-50 to-white border border-[#3576d3] rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
											<div className="flex items-center gap-2 text-sm">
												<span className="text-[#3576d3]">🎨</span>
												<span className="font-semibold text-gray-700">Junior UI/UX</span>
											</div>
										</div>
										<div className="bg-gradient-to-br from-blue-50 to-white border border-[#3576d3] rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
											<div className="flex items-center gap-2 text-sm">
												<span className="text-[#3576d3]">🎨</span>
												<span className="font-semibold text-gray-700">Junior UI/UX</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Role Descriptions */}
							<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
								<h3 className="text-xl font-medium text-[#3576d3] mb-6 text-center">Role Responsibilities</h3>
								<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
									<div className="space-y-2">
										<div className="flex items-center gap-2">
									<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3576d3] to-[#2563b8] flex items-center justify-center text-white text-sm font-bold">PM</div>
									<h4 className="font-medium text-gray-800">Product Manager</h4>
								</div>
								<p className="text-sm text-gray-600 leading-relaxed">Team lead, product vision, product execution</p>
									</div>
									<div className="space-y-2">
										<div className="flex items-center gap-2">
									<div className="w-8 h-8 rounded-full bg-[#3576d3] flex items-center justify-center text-white text-xs">📊</div>
									<h4 className="font-medium text-gray-800">Business Analyst</h4>
								</div>
								<p className="text-sm text-gray-600 leading-relaxed">Marketing strategy, partnerships, financial model</p>
									</div>
									<div className="space-y-2">
										<div className="flex items-center gap-2">
									<div className="w-8 h-8 rounded-full bg-[#3576d3] flex items-center justify-center text-white text-xs">&lt;/&gt;</div>
									<h4 className="font-medium text-gray-800">Developer</h4>
								</div>
								<p className="text-sm text-gray-600 leading-relaxed">Architecting and building the product</p>
									</div>
									<div className="space-y-2">
										<div className="flex items-center gap-2">
									<div className="w-8 h-8 rounded-full bg-[#3576d3] flex items-center justify-center text-white text-xs">🎨</div>
									<h4 className="font-medium text-gray-800">UI/UX Designer</h4>
								</div>
								<p className="text-sm text-gray-600 leading-relaxed">Designing the product, user research</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Detailed History Timeline Section */}
					<section className="mb-12 sm:mb-16">
					<h2 className="text-2xl sm:text-3xl font-medium text-[#3576d3] mb-6 sm:mb-8 text-center">
						Our History
					</h2>						{/* Carousel Container */}
						<div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
							{/* Slides */}
							<div className="relative h-[600px] sm:h-[650px] md:h-[700px]">
								{historySlides.map((slide, index) => (
									<div
										key={index}
										className={`absolute inset-0 transition-opacity duration-500 ${
											index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
										}`}
									>
										<div className="flex flex-col h-full">
											{/* Image Section */}
											<div className="relative h-2/5 bg-gradient-to-br from-[#3576d3]/10 to-[#2563b8]/10 flex-shrink-0">
												<Image
													src={slide.image}
													alt={slide.title}
													fill
													className="object-contain"
													priority={index === 0}
													unoptimized
													quality={100}
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
											</div>

											{/* Content Section */}
											<div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center overflow-y-auto">
												<div className="max-w-3xl mx-auto text-center">
													<div className="inline-block px-6 py-2 bg-gradient-to-br from-[#3576d3] to-[#2563b8] text-white font-bold text-lg rounded-full mb-4 shadow-md">
														{slide.year}
													</div>
													<h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#3576d3] mb-4">
														{slide.title}
													</h3>
													<p className="text-gray-700 text-base sm:text-lg leading-relaxed">
														{slide.description}
													</p>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>

							{/* Navigation Arrows */}
							<button
								onClick={prevSlide}
								className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
								aria-label="Previous slide"
							>
								<svg className="w-6 h-6 text-[#3576d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
								</svg>
							</button>
							<button
								onClick={nextSlide}
								className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
								aria-label="Next slide"
							>
								<svg className="w-6 h-6 text-[#3576d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</button>

							{/* Dots Indicator */}
							<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
								{historySlides.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentSlide(index)}
										className={`w-3 h-3 rounded-full transition-all duration-300 ${
											index === currentSlide
												? "bg-[#3576d3] w-8"
												: "bg-gray-300 hover:bg-gray-400"
										}`}
										aria-label={`Go to slide ${index + 1}`}
									/>
								))}
							</div>
						</div>
					</section>
				</div>
			</Layout>

			<Footer />
		</>
	);
}