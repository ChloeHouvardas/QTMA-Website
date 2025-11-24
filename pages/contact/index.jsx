import Layout from "../../components/layout";
import Image from "next/image";
import Instagram from "../../public/assets/Visuals/instagram.png";
import Nav from "../Nav";
import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import FloatingBlobsStill from "../../components/FloatingBlobsStill";
import { FaInstagram, FaFileDownload } from "react-icons/fa";

export default function Contact() {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="Connect with QTMA on Instagram for inquiries and view our hiring package"
				/>
				<title>QTMA - Contact</title>
				<meta name="og:title" content={"QTMA - Contact"}/>
			</Head>
			<Nav/>
			<Layout home={true}>
				<FloatingBlobsStill />
				
				<div className="mx-auto w-full max-w-[2400px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-4 max-[650px]:mt-[var(--nav-height-sm,80px)] relative z-10">
					<h1 className="text-[#3576d3] text-center text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
						Get In Touch
					</h1>
					
					{/* Contact Section with Home Page Style */}
					<div
						className="relative rounded-none sm:rounded-3xl py-12 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden"
						style={{
							background:
								"radial-gradient(ellipse at 60% 40%, #e3edfa 60%, #f3f4fa 100%)",
							boxShadow:
								"0 8px 32px 0 rgba(53, 118, 211, 0.08)",
						}}
					>
						{/* Decorative background blobs */}
						<div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-[#b3cfff] opacity-20 rounded-full blur-3xl z-0" />
						<div className="absolute bottom-0 right-0 w-[220px] h-[180px] bg-[#d1cfff] opacity-10 rounded-full blur-2xl z-0" />
						
						<div className="max-w-6xl mx-auto relative z-10">
							<div className="grid md:grid-cols-2 gap-8">
								{/* Instagram Card */}
								<div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
									<div className="flex flex-col items-center text-center space-y-4">
										<div className="text-5xl text-[#3576d3] mb-2">
											<FaInstagram />
										</div>
										<h3 className="text-2xl font-bold text-[#3576d3] mb-3">
											Follow Us on Instagram
										</h3>
										<p className="text-gray-400 text-lg mb-4">
											Send us a DM for any inquiries, questions, or just to say hi!
										</p>
										<a 
											href="https://www.instagram.com/qtma_queens" 
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block transform hover:scale-105 transition-transform"
										>
											<Image 
												alt="QTMA Instagram QR Code" 
												src={Instagram} 
												width={200} 
												height={200}
											/>
										</a>
										<a
											href="https://www.instagram.com/qtma_queens"
											target="_blank"
											rel="noopener noreferrer"
											className="text-[#3576d3] font-semibold text-lg hover:underline"
										>
											@qtma_queens
										</a>
									</div>
								</div>

								{/* Hiring Package Card */}
								<div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
									<div className="flex flex-col items-center text-center space-y-4">
										<div className="w-24 h-24 bg-gradient-to-br from-[#3576d3] to-[#2563b8] rounded-full flex items-center justify-center shadow-lg mb-2">
											<FaFileDownload className="text-4xl text-white" />
										</div>
										<h3 className="text-2xl font-bold text-[#3576d3] mb-3">
											View Our Hiring Package
										</h3>
										<p className="text-gray-400 text-lg mb-6">
											Interested in joining QTMA? Download our comprehensive hiring package to learn more about opportunities.
										</p>
										<a
											href="/assets/Club Data/Info/2025_Hiring_Package.pdf"
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-3 bg-gradient-to-br from-[#3576d3] to-[#2563b8] text-white font-semibold px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
										>
											<span>Download Hiring Package</span>
											<FaFileDownload className="text-xl" />
										</a>
									</div>
								</div>
							</div>

							{/* Additional Info */}
							<div className="mt-12 text-center">
								<div className="bg-white rounded-xl p-8 shadow-md">
									<h3 className="text-xl font-bold text-[#3576d3] mb-3">
										Want to Learn More?
									</h3>
									<p className="text-gray-400 text-lg max-w-2xl mx-auto">
										We're always excited to connect with students interested in product development, 
										potential partners, or anyone curious about what we do at QTMA.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
			<Footer/>
		</>
	);
}
