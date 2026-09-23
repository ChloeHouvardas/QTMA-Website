import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Header } from "@/components/Header";
import { Products } from "@/components/home/Products";
import { Values } from "@/components/home/Values";
import { products, values } from "@/data/home-content";

const instagramUrl = "https://www.instagram.com/queenstechmedia/?hl=en";

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

			<section
				className="relative flex min-h-[560px] items-center overflow-hidden bg-white text-qtmaInk md:min-h-[590px] lg:min-h-[655px]"
				aria-labelledby="hero-title"
			>
				<div
					className="pointer-events-none absolute left-0 top-[-15%] flex h-[115%] w-[min(82vw,1064px)] flex-col gap-[3px] opacity-45 sm:w-[min(78vw,1064px)] sm:opacity-70 md:w-[min(73vw,1064px)] md:opacity-100"
					aria-hidden="true"
				>
					{heroBands.map((band, index) => (
						<span
							className="hero-band-wave min-h-px flex-1 bg-[linear-gradient(90deg,rgba(124,200,255,0.05)_0%,rgba(124,200,255,0.6)_51%,rgba(193,183,255,0.3)_75%,rgba(255,255,255,0.3)_100%)] blur-[1px]"
							key={index}
							style={{
								animationDelay: `${index * 90}ms`,
								opacity: band.opacity,
								width: `${band.left}%`,
							}}
						/>
					))}
				</div>
				<div
					className="pointer-events-none absolute right-0 top-[-15%] flex h-[115%] w-[min(82vw,1064px)] scale-x-[-1] flex-col gap-[3px] opacity-45 sm:w-[min(78vw,1064px)] sm:opacity-70 md:w-[min(73vw,1064px)] md:opacity-100"
					aria-hidden="true"
				>
					{heroBands.map((band, index) => (
						<span
							className="hero-band-wave min-h-px flex-1 bg-[linear-gradient(90deg,rgba(124,200,255,0.05)_0%,rgba(124,200,255,0.6)_51%,rgba(193,183,255,0.3)_75%,rgba(255,255,255,0.3)_100%)] blur-[1px]"
							key={index}
							style={{
								animationDelay: `${index * 90}ms`,
								opacity: band.opacity,
								width: `${band.right}%`,
							}}
						/>
					))}
				</div>
				<div className="relative z-[2] mx-auto w-full max-w-[calc(1250px+(2*clamp(20px,4vw,48px)))] px-5 py-[76px] text-center md:px-[clamp(20px,4vw,48px)] lg:py-[82px]">
					<p className="mb-4 mt-0 text-[15px] font-bold leading-[1.2] text-qtmaBlue sm:mb-5 sm:text-[22px]">
						WELCOME TO QTMA
					</p>
					<h1
						id="hero-title"
						className="mx-auto my-0 max-w-[850px] text-[clamp(2.35rem,11vw,3.3rem)] font-bold uppercase leading-[1.07] tracking-[0.055em] sm:text-[clamp(3rem,8vw,4.25rem)] md:tracking-[0.1em] lg:text-[clamp(3.75rem,5.15vw,4.6875rem)]"
					>
						Launch the
						<br />
						Next{" "}
						<span className="inline-block cursor-default text-qtmaBlue transition-transform duration-300 ease-out hover:scale-110">
							big thing
						</span>
					</h1>
					<p className="mx-auto mb-0 mt-5 max-w-[350px] text-base leading-[1.25] text-[#999999] sm:max-w-[470px] sm:text-lg md:max-w-[500px] md:text-xl md:leading-[1.05]">
						Queen&apos;s University&apos;s largest product incubator, taking
						products from idea to launch.
					</p>
					<div className="mx-auto mt-[26px] flex max-w-[280px] flex-col items-stretch gap-3.5 sm:mt-[22px] sm:max-w-none sm:flex-row sm:justify-center sm:gap-8">
						<Link
							className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[15px] border-[1.5px] border-qtmaBlue bg-qtmaBlue text-[11px] font-normal uppercase text-white shadow-[0_2px_3px_#6b9aff,3px_5px_5px_rgba(0,0,0,0.22)] transition-transform hover:-translate-y-0.5 sm:w-[175px]"
							href="/about"
						>
							Learn more
							<Image
								alt=""
								aria-hidden="true"
								className="h-[11px] w-[13px]"
								height={11}
								src="/assets/figma/hero-arrow.svg"
								width={13}
							/>
						</Link>
						<Link
							className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[15px] border-[1.5px] border-qtmaBlue bg-white text-[11px] font-normal uppercase text-qtmaBlue shadow-[3px_5px_5px_rgba(0,0,0,0.22)] transition-transform hover:-translate-y-0.5 sm:w-[175px]"
							href="/team"
						>
							Meet the team
						</Link>
					</div>
				</div>
			</section>

			<Products products={products} />

			<Values values={values} />

			<section
				className="scroll-mt-20 bg-white pb-[clamp(80px,9vw,128px)]"
				id="contact"
				aria-labelledby="contact-title"
			>
				<div className="mx-auto w-full max-w-[calc(1250px+(2*clamp(20px,4vw,48px)))] px-[clamp(20px,4vw,48px)] max-md:px-5">
					<div className="mb-12 flex w-full flex-col items-start gap-4 text-left">
						<p className="m-0 text-[22px] font-normal uppercase leading-none text-black/50 max-sm:text-lg">
							OUR CONTACT
						</p>
						<h2
							id="contact-title"
							className="m-0 max-w-[832px] text-[48px] font-normal leading-none text-qtmaBlue max-sm:text-[36px]"
						>
							Let&apos;s build the future!
						</h2>
					</div>

					<div className="w-full">
						<article className="grid gap-2 rounded-xl border border-qtmaBorder bg-white p-6 md:grid-cols-2 md:items-stretch md:p-8">
							<div className="flex flex-col items-start justify-center">
								<div className="flex flex-col gap-2">
									<h3 className="m-0 text-2xl font-normal leading-tight">
										Follow @queenstechmedia on Instagram
									</h3>
									<p className="m-0 text-xl font-normal leading-none text-black/50 md:text-2xl">
										Stay in the loop!
									</p>
								</div>

								<a
									className="mt-6 inline-flex h-10 w-fit items-center justify-center gap-1 rounded-lg border border-gray-300 bg-white px-3 text-sm font-normal leading-none shadow-sm transition-transform hover:-translate-y-px [&_svg]:h-3 [&_svg]:w-3"
									href={instagramUrl}
									rel="noreferrer"
									target="_blank"
								>
									Follow Us
									<ArrowUpRight aria-hidden="true" />
								</a>
							</div>

							<Image
								alt="Queen's Tech and Media Association Instagram profile"
								className="h-44 w-full self-center rounded-lg object-contain"
								height={220}
								src="/assets/Visuals/home/instagram-mockup.png"
								width={600}
							/>
						</article>
					</div>
				</div>
			</section>
		</main>
	);
}
