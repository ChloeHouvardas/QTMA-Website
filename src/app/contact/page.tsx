import Image from "next/image";
import { Instagram, Linkedin, Mail } from "lucide-react";

import { Header } from "@/components/Header";
import { Faq } from "@/components/contact/Faq";
import { applicantFaqItems } from "@/data/contact-content";

const instagramUrl = "https://www.instagram.com/queenstechmedia/?hl=en";
const linkedInUrl = "https://www.linkedin.com/company/qtma/posts/?feedView=all";
const emailUrl = "mailto:queenstechandmedia@gmail.com";

export default function ContactPage() {
	return (
		<div id="top">
			<Header />

			<section className="bg-white pb-28 pt-[54px] sm:pb-32 sm:pt-[62px] lg:pb-32 lg:pt-[58px]">
				<h1 className="m-0 w-full text-center text-5xl font-semibold text-qtmaBlue sm:text-7xl">
					Contact
				</h1>

				<div className="mx-auto w-full max-w-[calc(1200px+(2*20px))] px-5">
					<div className="mt-[54px] sm:mt-[62px] lg:mt-[58px]">
						<p className="mb-0 pb-5 text-2xl font-light uppercase leading-none text-gray-400">
							CONNECT
						</p>
						<h2 className="mb-0 mt-4xl text-[clamp(3.25rem,4.2vw,2.25rem)] font-light leading-none text-qtmaBlue">
							Let&apos;s get in touch!
						</h2>
						<p className="mb-0 mt-6 max-w-[890px] font-light text-xl leading-[1.2] text-gray-900">
							Whether you&apos;re interested in partnering with QTMA, sponsoring
							an event, or learning more about our community, we&apos;re always
							happy to connect. Reach out and stay updated with our latest
							projects and events through our socials!
						</p>

						<nav
							aria-label="QTMA social links"
							className="mt-[23px] flex items-center gap-[9px] text-qtmaBlue [&_svg]:h-[29px] [&_svg]:w-[29px]"
						>
							<a
								aria-label="QTMA on Instagram"
								href={instagramUrl}
								rel="noreferrer"
								target="_blank"
							>
								<Instagram aria-hidden="true" strokeWidth={2.25} />
							</a>
							<a
								aria-label="QTMA on LinkedIn"
								href={linkedInUrl}
								rel="noreferrer"
								target="_blank"
							>
								<Linkedin aria-hidden="true" strokeWidth={2.25} />
							</a>
							<a aria-label="Email QTMA" href={emailUrl}>
								<Mail aria-hidden="true" strokeWidth={2.25} />
							</a>
						</nav>
					</div>

					<Image
						alt="QTMA members visiting Amazon Web Services"
						className="mt-[31px] h-auto w-full rounded-[20px] object-cover sm:mt-[30px] sm:rounded-[22px]"
						height={942}
						priority
						src="/assets/Visuals/contact/qtma-aws.jpg"
						width={1250}
					/>
					<div className="py-10">
						<p className="m-0 pb-5 text-2xl font-light uppercase leading-none text-gray-400">
							HIRING
						</p>
						<h2 className="mb-0 mt-4xl text-[clamp(3.25rem,4.2vw,2.25rem)] font-light leading-none text-qtmaBlue">
							Want to join our team?
						</h2>
						<p className="mb-0 mt-6 font-light text-xl leading-[1.2] text-gray-900">
							QTMA brings together talented designers, developers, and analysts
							to collaborate on meaningful projects that solve everyday
							problems. Stay tuned for our hiring package to learn about
							available roles and the application process. Follow{" "}
							<a
								className="font-normal text-qtmaBlue underline underline-offset-4 transition-colors hover:text-qtmaBlueDark"
								href={instagramUrl}
								rel="noreferrer"
								target="_blank"
							>
								@queenstechmedia
							</a>{" "}
							on Instagram to be notified of the latest hiring updates.
						</p>
						<Image
							alt="QTMA team taking a group selfie"
							className="mt-[31px] h-auto w-full rounded-[20px] object-cover sm:mt-[30px] sm:rounded-[22px]"
							height={834}
							src="/assets/Visuals/contact/qtma-selfie.png"
							width={1250}
						/>
					</div>
					<Faq items={applicantFaqItems} />
				</div>
			</section>
		</div>
	);
}
