import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";

import { ContactForm } from "@/components/home/ContactForm";
import { Header } from "@/components/home/Header";
import { Products } from "@/components/home/Products";
import { Values } from "@/components/home/Values";
import { products, values } from "@/data/home-content";

const instagramUrl = "https://www.instagram.com/queenstechmedia/";
const linkedInUrl = "https://ca.linkedin.com/company/qtma";

const heroBands = [
	{ left: 100, opacity: 0.02, right: 100 },
	{ left: 100, opacity: 0.05, right: 100 },
	{ left: 100, opacity: 0.12, right: 100 },
	{ left: 62.9, opacity: 0.25, right: 69.7 },
	{ left: 50.4, opacity: 0.44, right: 50.4 },
	{ left: 46.4, opacity: 0.39, right: 46.4 },
	{ left: 40.6, opacity: 0.44, right: 40.6 },
	{ left: 32, opacity: 0.74, right: 32 },
	{ left: 25.6, opacity: 1, right: 25.6 },
	{ left: 24, opacity: 1, right: 24 },
	{ left: 24.9, opacity: 1, right: 24.9 },
	{ left: 27.5, opacity: 1, right: 27.5 },
	{ left: 24.9, opacity: 1, right: 24.9 },
	{ left: 25.6, opacity: 1, right: 25.6 },
	{ left: 23.7, opacity: 1, right: 23.7 },
	{ left: 24.9, opacity: 1, right: 24.9 },
	{ left: 24, opacity: 1, right: 24 },
	{ left: 24.9, opacity: 1, right: 24.9 },
	{ left: 33.7, opacity: 1, right: 33.7 },
	{ left: 37, opacity: 1, right: 37 },
	{ left: 55.9, opacity: 0.74, right: 55.9 },
	{ left: 65.2, opacity: 0.44, right: 65.2 },
	{ left: 81.1, opacity: 0.31, right: 81.1 },
	{ left: 81.1, opacity: 0.1, right: 81.1 },
];

export default function HomePage() {
	return (
		<main id="top">
			<Header />

			<section className="hero" aria-labelledby="hero-title">
				<div className="hero__bands hero__bands--left" aria-hidden="true">
					{heroBands.map((band, index) => (
						<span
							key={index}
							style={{ opacity: band.opacity, width: `${band.left}%` }}
						/>
					))}
				</div>
				<div className="hero__bands hero__bands--right" aria-hidden="true">
					{heroBands.map((band, index) => (
						<span
							key={index}
							style={{ opacity: band.opacity, width: `${band.right}%` }}
						/>
					))}
				</div>
				<div className="site-container hero__content">
					<p className="hero__eyebrow">WELCOME TO QTMA</p>
					<h1 id="hero-title">
						Launch the
						<br />
						Next <span>big thing</span>
					</h1>
					<p className="hero__description">
						Queen&apos;s University&apos;s largest product incubator, taking
						products from idea to launch.
					</p>
					<div className="hero__actions">
						<Link className="hero__button hero__button--primary" href="/about">
							Learn more
							<Image
								alt=""
								aria-hidden="true"
								height={11}
								src="/assets/figma/hero-arrow.svg"
								width={13}
							/>
						</Link>
						<Link className="hero__button hero__button--secondary" href="/team">
							Meet the team
						</Link>
					</div>
				</div>
			</section>

			<Products products={products} />

			<Values values={values} />

			<section
				className="section contact"
				id="contact"
				aria-labelledby="contact-title"
			>
				<div className="site-container">
					<div className="section-heading contact__heading">
						<p className="eyebrow eyebrow--blue">STAY IN THE LOOP</p>
						<h2 id="contact-title">LET&apos;S KEEP IN TOUCH.</h2>
					</div>

					<div className="contact__grid">
						<a
							className="social-card"
							href={instagramUrl}
							rel="noreferrer"
							target="_blank"
						>
							<div className="social-card__topline">
								<span className="social-card__icon">
									<Instagram aria-hidden="true" />
								</span>
								<ArrowUpRight aria-hidden="true" />
							</div>
							<div className="social-card__art" aria-hidden="true">
								<Image
									fill
									sizes="(max-width: 900px) 100vw, 50vw"
									src="/assets/content-placeholder.svg"
									alt=""
								/>
							</div>
							<div>
								<p>Follow the journey</p>
								<h3>@queenstechmedia</h3>
							</div>
						</a>

						<ContactForm />
					</div>
				</div>
			</section>

			<footer className="footer">
				<div className="site-container footer__inner">
					<a className="footer__brand" href="#top" aria-label="QTMA home">
						<Image
							alt="QTMA"
							height={67}
							src="/assets/Visuals/QTMALogo.png"
							width={246}
						/>
						<span>Queen&apos;s Technology &amp; Media Association</span>
					</a>

					<div className="footer__socials" aria-label="Social links">
						<a
							href={instagramUrl}
							rel="noreferrer"
							target="_blank"
							aria-label="QTMA on Instagram"
						>
							<Instagram aria-hidden="true" />
						</a>
						<a
							href={linkedInUrl}
							rel="noreferrer"
							target="_blank"
							aria-label="QTMA on LinkedIn"
						>
							<Linkedin aria-hidden="true" />
						</a>
						<a href="#contact" aria-label="Contact QTMA">
							<Mail aria-hidden="true" />
						</a>
					</div>
				</div>
				<div className="site-container footer__bottom">
					<span>© {new Date().getFullYear()} QTMA</span>
					<span>Made at Queen&apos;s University</span>
				</div>
			</footer>
		</main>
	);
}
