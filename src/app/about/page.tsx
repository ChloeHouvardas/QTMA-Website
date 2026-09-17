import { Header } from "@/components/Header";

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

				<div className="mt-20 aspect-[3407/1898] overflow-hidden rounded-[24px] sm:mt-24 sm:rounded-[27px] lg:mt-20">
					<div
						aria-label="image"
						className="flex h-full w-full items-center justify-center bg-[#f3f5f8] text-lg text-black/50"
						role="img"
					>
						image
					</div>
				</div>
			</section>
		</main>
	);
}
