import Image from "next/image";

import { Header } from "@/components/Header";
import { HistorySection } from "@/components/about/HistorySection";
import { ProcessSection } from "@/components/about/ProcessSection";
import { Network } from "@/components/home/Network";

const valueCards = [
	{
		description:
			"Work on products beyond the classroom. Collaborate with fellow students, designers, developers, and product managers to bring ideas to life and create solutions used by real people.",
		visual: "/assets/Visuals/gear.svg",
		visualClass: "-bottom-1 -right-1 w-[58%]",
		title: "Product Development",
	},
	{
		description:
			"Connect with students, alumni, and industry professionals passionate about technology and innovation. Build meaningful relationships and learn from experienced mentors.",
		visual: "/assets/Visuals/chain.svg",
		visualClass: "-bottom-1 -right-14 w-[68%] chain-visual",
		title: "Networking",
	},
	{
		description:
			"Develop technical and professional skills through training, workshops, mentorship, and hands-on project work. Gain practical experience in design, development, and business analysis.",
		visual: "/assets/Visuals/dartboard.svg",
		visualClass: "bottom-0 -right-1 w-[68%] -scale-x-100",
		title: "Skill Enhancement",
	},
	{
		description:
			"Build a portfolio of real products that showcases your skills, collaboration, and impact. Graduate with tangible work you can confidently share with future employers.",
		visual: "/assets/Visuals/portfolio.svg",
		visualClass: "-bottom-5 -right-5 w-[68%] portfolio-visual",
		title: "Portfolio Building",
	},
];

export default function AboutPage() {
	return (
		<main id="top">
			<Header />

			<section
				aria-labelledby="about-title"
				className="mx-auto w-full max-w-[1350px] px-5 pb-20 pt-12 sm:px-12 sm:pb-28 sm:pt-16 lg:px-[76px] lg:pb-32 lg:pt-14"
			>
				<div className="max-w-[1000px]">
					<p className="mb-7 mt-0 text-lg font-light uppercase leading-none tracking-[-0.02em] text-black/40 sm:mb-8 sm:text-md lg:text-xl">
						Canada&apos;s flagship software incubation club
					</p>
					<h1
						className="m-0 text-4xl font-light leading-[1.08] tracking-[-0.04em] text-qtmaBlue sm:text-5xl lg:text-6xl"
						id="about-title"
					>
						Turning ideas into products
					</h1>
					<p className="mb-0 mt-8 max-w-[660px] text-lg text-wrap font-light leading-[1.18] text-qtmaInk sm:mt-9 sm:text-sm lg:text-lg">
						Building from Queen&apos;s university, QTMA is Canada&apos;s premier
						student product incubation club, where ambitious students design,
						build, and launch products that solve real problems. We create an
						environment where designers, developers, and analysts learn by
						shipping—not just studying.
					</p>
				</div>

				<div className="relative mt-20 aspect-[3407/1898] overflow-hidden rounded-[24px] sm:mt-24 sm:rounded-[27px] lg:mt-20">
					<Image
						alt="Turning ideas into products"
						className="object-cover"
						fill
						priority
						sizes="(min-width: 1350px) 1198px, (min-width: 640px) calc(100vw - 96px), calc(100vw - 40px)"
						src="/assets/Visuals/about/qtma-team.png"
					/>
				</div>
			</section>

			<ProcessSection />

			<section
				aria-labelledby="value-title"
				className="mx-auto w-full max-w-[1350px] px-5 pb-20 sm:px-12 sm:pb-28 lg:px-[76px] lg:pb-32"
			>
				<header className="mb-10 sm:mb-14">
					<p className="m-0 text-lg font-light uppercase leading-none text-black/40 sm:text-xl">
						Our Value
					</p>
					<h2
						className="mb-0 mt-6 text-4xl font-light leading-none tracking-[-0.035em] text-qtmaBlue sm:mt-7 sm:text-5xl lg:text-6xl"
						id="value-title"
					>
						Connect. Learn. Experience.
					</h2>
				</header>

				<div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-x-16 md:gap-y-11">
					{valueCards.map((card) => (
						<article
							className="relative min-h-[320px] overflow-hidden rounded-[30px] bg-qtmaBlue px-10 pt-14 pb-10 text-white sm:min-h-[375px] sm:px-12 sm:py-14"
							key={card.title}
						>
							<Image
								alt=""
								aria-hidden="true"
								className={`pointer-events-none absolute h-auto opacity-50 ${card.visualClass}`}
								height={328}
								src={card.visual}
								width={419}
							/>
							<h3 className="relative m-0 text-3xl font-bold leading-none tracking-[-0.035em] sm:text-4xl">
								{card.title}
							</h3>
							<p className="relative mb-0 max-w-[400px] text-xl font-normal leading-[1.12] sm:mt-7 sm:text-lg">
								{card.description}
							</p>
						</article>
					))}
				</div>
			</section>

			<section
				aria-labelledby="team-structure-title"
				className="mx-auto w-full max-w-[1350px] px-5 pb-12 sm:px-12 sm:pb-14 lg:px-[76px] lg:pb-16"
			>
				<div className="mx-auto max-w-[760px] text-center">
					<p className="m-0 text-lg font-light uppercase leading-none text-black/40 sm:text-xl">
						Our Team Structure
					</p>
					<h2
						className="mb-0 mt-6 text-4xl font-light leading-none tracking-[-0.035em] text-qtmaBlue sm:mt-7 sm:text-5xl lg:text-6xl"
						id="team-structure-title"
					>
						4 Teams. 4 Functions.
					</h2>
					<p className="mb-0 mt-8 text-lg text-left font-light leading-[1.2] text-qtmaInk sm:mt-9 sm:text-xl">
						Since 2014, QTMA has been building products that address real
						student needs and market opportunities. Members work within one of
						four product teams, each made up of
						<span className="italic">
							{" "}
							Product Managers, Business Analysts, Developers, and UI/UX
							Designers
						</span>{" "}
						who collaborate to take ideas from concept to launch.
					</p>
				</div>

				<Image
					alt="Our Team Structure"
					className="mt-12 h-auto w-full sm:mt-16"
					height={474}
					sizes="(min-width: 1350px) 1198px, (min-width: 640px) calc(100vw - 96px), calc(100vw - 40px)"
					src="/assets/Visuals/club-structure.svg"
					width={1250}
				/>
			</section>

			<Network />

			<HistorySection />
		</main>
	);
}
