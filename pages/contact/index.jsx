import Layout from "../../components/layout";
import Image from "next/image";
import Instagram from "../../public/assets/Visuals/instagram.png";
import Nav from "../Nav";
import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import FloatingBlobsStill from "../../components/FloatingBlobsStill";
import { FaInstagram, FaFileDownload, FaEnvelope } from "react-icons/fa";

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
			<Layout background="linear-gradient(135deg, #e3edfa 0%, #f3f4fa 100%)">
				<FloatingBlobsStill />
				
				<div className="mx-auto w-full max-w-[2400px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-4 max-[650px]:mt-[var(--nav-height-sm,80px)] relative z-10">
					<h1 className="text-[#3576d3] text-center text-3xl sm:text-4xl font-medium mb-6 sm:mb-8">
						Get In Touch
					</h1>
					
					<p className="text-gray-400 text-center text-lg sm:text-xl max-w-3xl mx-auto mb-12">
						Have questions? Want to join our team? We'd love to hear from you.
					</p>

					{/* Main Contact Grid */}
					<div className="grid md:grid-cols-2 gap-8 mb-12">
						{/* Instagram Card */}
						<div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
							<div className="flex flex-col items-center text-center space-y-4">
								<div className="w-16 h-16 bg-gradient-to-br from-[#3576d3] to-[#2563b8] rounded-full flex items-center justify-center mb-2">
									<FaInstagram className="text-3xl text-white" />
								</div>
								<h3 className="text-xl text-[#3576d3]">
									Connect With Us
								</h3>
								<p className="text-gray-400 text-base">
									Stay updated with our latest projects and events. For any inquiries please send us a DM
								</p>
								<a
									href="https://www.instagram.com/queenstechmedia"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#3576d3] font-semibold hover:underline"
								>
									@queenstechmedia
								</a>
							</div>
						</div>

						{/* Hiring Package Card */}
						<div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
							<div className="flex flex-col items-center text-center space-y-4">
								<div className="w-16 h-16 bg-gradient-to-br from-[#3576d3] to-[#2563b8] rounded-full flex items-center justify-center mb-2">
									<FaFileDownload className="text-3xl text-white" />
								</div>
								<h3 className="text-xl text-[#3576d3]">
									Join Our Team
								</h3>
								<p className="text-gray-400 text-base">
									Download our comprehensive hiring package
								</p>
								<a
									href="/assets/Club Data/Info/2025_Hiring_Package.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block bg-gradient-to-br from-[#3576d3] to-[#2563b8] text-white font-semibold px-6 py-2 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
								>
									Download
								</a>
							</div>
						</div>
					</div>
				</div>
			</Layout>
			<Footer/>
		</>
	);
}
