import { Instagram, Linkedin, Mail } from "lucide-react";

import { Header } from "@/components/Header";
import { Faq } from "@/components/contact/Faq";
import { applicantFaqItems } from "@/data/contact-content";

const instagramUrl = "https://www.instagram.com/queenstechmedia/?hl=en";
const linkedInUrl = "https://www.linkedin.com/company/qtma/posts/?feedView=all";

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
							CONTACT
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
							<span aria-label="Email coming soon">
								<Mail aria-hidden="true" strokeWidth={2.25} />
							</span>
						</nav>
					</div>

					<div
						aria-label="Contact"
						className="mt-[31px] flex aspect-[1.33] w-full items-center justify-center rounded-[20px] bg-qtmaOffWhite text-[15px] text-black/45 sm:mt-[30px] sm:rounded-[22px]"
						role="img"
					>
						Contact
					</div>
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
							available roles and the application process. Follow
							@queenstechmedia on Instagram to be notified of the latest hiring
							updates.
						</p>
						<div
							aria-label="Contact"
							className="mt-[31px] flex aspect-[1.33] w-full items-center justify-center rounded-[20px] bg-qtmaOffWhite text-[15px] text-black/45 sm:mt-[30px] sm:rounded-[22px]"
							role="img"
						>
							image
						</div>
					</div>
					<Faq items={applicantFaqItems} />
				</div>
			</section>
		</main>
	);
}
