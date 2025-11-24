import Nav from "../Nav";
import Head from "next/head";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";
import FloatingBlobsStill from "../../components/FloatingBlobsStill";

export default function About() {
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
					<h1 className="text-[#3576d3] text-center text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
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
									<h3 className="font-bold text-xl text-[#3576d3] mb-3">Product Development</h3>
									<p className="text-gray-600">
										Our teams follow agile methodologies to design, develop, and launch full-featured 
										applications, gaining real-world product management experience.
									</p>
								</div>
								<div className="bg-white rounded-lg p-6 shadow-sm">
									<h3 className="font-bold text-xl text-[#3576d3] mb-3">Skill Building</h3>
									<p className="text-gray-600">
										Members develop technical and professional skills through workshops, mentorship, 
										and hands-on project work in design, development, and business analysis.
									</p>
								</div>
								<div className="bg-white rounded-lg p-6 shadow-sm">
									<h3 className="font-bold text-xl text-[#3576d3] mb-3">Networking</h3>
									<p className="text-gray-600">
										Connect with like-minded students, alumni, and industry professionals who share 
										your passion for technology and innovation.
									</p>
								</div>
								<div className="bg-white rounded-lg p-6 shadow-sm">
									<h3 className="font-bold text-xl text-[#3576d3] mb-3">Portfolio Building</h3>
									<p className="text-gray-600">
										Work on tangible projects that you can showcase to future employers, 
										demonstrating your ability to deliver real products.
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* History Section */}
					<section className="mb-12 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl font-bold text-[#3576d3] mb-4 sm:mb-6">
							Our History
						</h2>
						<div className="text-base sm:text-lg text-gray-700 space-y-4">
							<p>
								Since our founding, QTMA has grown from a small group of passionate students into 
								one of the most sought-after clubs at Queen's University. Over the years, we've 
								launched dozens of successful products and helped hundreds of students develop 
								their skills in technology and product development.
							</p>
							<p>
								Our alumni have gone on to work at leading tech companies and startups around the world, 
								taking the skills and experiences they gained at QTMA to build remarkable careers. 
								Many have also launched their own ventures, applying the entrepreneurial mindset 
								fostered in our club.
							</p>
							<p>
								Today, QTMA continues to push the boundaries of student innovation, maintaining our 
								reputation as Canada's premier product incubation club while adapting to the 
								ever-evolving landscape of technology and design.
							</p>
						</div>
					</section>

					{/* Team Structure Section */}
					<section className="mb-12 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl font-bold text-[#3576d3] mb-6 sm:mb-8 text-center">
							Our Team Structure
						</h2>
						
						<div className="max-w-6xl mx-auto">
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
												<div className="text-lg font-bold text-gray-800">Business Analyst</div>
											</div>
										</div>
									</div>
									<div className="bg-white border-2 border-[#3576d3] rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow">
										<div className="text-center">
                                            <div className="text-[#3576d3] text-xs font-semibold mb-1">SENIOR</div>
											<div className="flex items-center justify-center gap-2">
												<span className="text-[#3576d3] text-xl">&lt;/&gt;</span>
												<div className="text-lg font-bold text-gray-800">Developer</div>
											</div>
										</div>
									</div>
									<div className="bg-white border-2 border-[#3576d3] rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow">
										<div className="text-center">
                                            <div className="text-[#3576d3] text-xs font-semibold mb-1">SENIOR</div>
											<div className="flex items-center justify-center gap-2">
												<span className="text-[#3576d3] text-xl">🎨</span>
												<div className="text-lg font-bold text-gray-800">UI/UX Designer</div>
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
								<h3 className="text-xl font-bold text-[#3576d3] mb-6 text-center">Role Responsibilities</h3>
								<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
									<div className="space-y-2">
										<div className="flex items-center gap-2">
											<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3576d3] to-[#2563b8] flex items-center justify-center text-white text-sm font-bold">PM</div>
											<h4 className="font-bold text-gray-800">Product Manager</h4>
										</div>
										<p className="text-sm text-gray-600 leading-relaxed">Team lead, product vision, product execution</p>
									</div>
									<div className="space-y-2">
										<div className="flex items-center gap-2">
											<div className="w-8 h-8 rounded-full bg-[#3576d3] flex items-center justify-center text-white text-xs">📊</div>
											<h4 className="font-bold text-gray-800">Business Analyst</h4>
										</div>
										<p className="text-sm text-gray-600 leading-relaxed">Marketing strategy, partnerships, financial model</p>
									</div>
									<div className="space-y-2">
										<div className="flex items-center gap-2">
											<div className="w-8 h-8 rounded-full bg-[#3576d3] flex items-center justify-center text-white text-xs">&lt;/&gt;</div>
											<h4 className="font-bold text-gray-800">Developer</h4>
										</div>
										<p className="text-sm text-gray-600 leading-relaxed">Architecting and building the product</p>
									</div>
									<div className="space-y-2">
										<div className="flex items-center gap-2">
											<div className="w-8 h-8 rounded-full bg-[#3576d3] flex items-center justify-center text-white text-xs">🎨</div>
											<h4 className="font-bold text-gray-800">UI/UX Designer</h4>
										</div>
										<p className="text-sm text-gray-600 leading-relaxed">Designing the product, user research</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</Layout>

			<Footer />
		</>
	);
}