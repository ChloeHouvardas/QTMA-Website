"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type HistorySlide = {
	description: string;
	imageAlt: string;
	imageSrc: string;
	period: string;
	title: string;
};

const historySlides: HistorySlide[] = [
	{
		description:
			"QTMA was founded by Justin Herlick and Aleko Kiriakou to bridge the gap between Queen's University and the broader tech industry. Initially only a Commerce club, QTMA primarily focused on researching and analyzing key market trends.",
		imageAlt: "QTMA members during the club's founding year",
		imageSrc: "/assets/Club Data/History/Founding.png",
		period: "2014",
		title: "The Founding",
	},
	{
		description:
			"QTMA expands its presence by launching Insights – a yearly research pitch competition amongst internal members – and Byte Size – the club's weekly tech newsletters. The club becomes accessible to Engineering and Computer Science students. In addition, Project Tädistö is rolled out as an initiative for internal technical teams of three to develop apps.",
		imageAlt: "QTMA members during the club's expansion",
		imageSrc: "/assets/Club Data/History/Expansion.png",
		period: "2015–2016",
		title: "Club Expansion",
	},
	{
		description:
			"To reach a wider audience, QTMA partners with Queen's clubs, including the Queen's Startup Summit (QSS) and Queen's Entrepreneurs Competition (QEC), as well as companies such as Shopify, IBM, Microsoft, Hitachi, Deloitte, and Trend Micro. Additional initiatives are launched including tech recruiting panels and a fintech hackathon.",
		imageAlt: "QTMA members during the club's public-facing initiatives",
		imageSrc: "/assets/Club Data/History/Initiatives.png",
		period: "2017–2018",
		title: "Public Facing Initiatives",
	},
	{
		description:
			"QTMA continues its mandate of making Queen's University a leading tech hub in Canada by becoming a full year product incubator. Across 4 interdisciplinary product teams, students work together to build tangible products that can be showcased and launched, providing them with a realistic preview of the industry and growing their network in the tech community.",
		imageAlt: "QTMA members building products together",
		imageSrc: "/assets/Club Data/History/Innovation.png",
		period: "2019–Present",
		title: "Innovation & Product Incubation",
	},
];

type HistoryControlsProps = {
	activeIndex: number;
	className: string;
	onNext: () => void;
	onPrevious: () => void;
	onSelect: (index: number) => void;
};

function HistoryControls({
	activeIndex,
	className,
	onNext,
	onPrevious,
	onSelect,
}: HistoryControlsProps) {
	return (
		<div
			aria-label="History carousel controls"
			className={className}
			role="group"
		>
			<button
				aria-label="Show previous history slide"
				className="flex h-11 w-11 items-center justify-center border-0 bg-transparent p-0 text-black/30 transition-colors hover:text-qtmaBlue focus-visible:text-qtmaBlue"
				onClick={onPrevious}
				type="button"
			>
				<ChevronLeft aria-hidden="true" className="h-5 w-5" strokeWidth={1} />
			</button>

			<div
				aria-label="Choose a history slide"
				className="flex items-center"
				role="group"
			>
				{historySlides.map((slide, index) => {
					const active = index === activeIndex;

					return (
						<button
							aria-label={`Show ${slide.period}: ${slide.title}`}
							aria-pressed={active}
							className="flex h-11 min-w-8 items-center justify-center border-0 bg-transparent px-1 py-0"
							key={slide.period}
							onClick={() => onSelect(index)}
							type="button"
						>
							<span
								aria-hidden="true"
								className={`h-3 rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none ${
									active ? "w-10 bg-qtmaBlue" : "w-3 bg-gray-300"
								}`}
							/>
						</button>
					);
				})}
			</div>

			<button
				aria-label="Show next history slide"
				className="flex h-11 w-11 items-center justify-center border-0 bg-transparent p-0 text-black/30 transition-colors hover:text-qtmaBlue focus-visible:text-qtmaBlue"
				onClick={onNext}
				type="button"
			>
				<ChevronRight aria-hidden="true" className="h-5 w-5" strokeWidth={1} />
			</button>
		</div>
	);
}

export function HistorySection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeSlide = historySlides[activeIndex];

	const showPreviousSlide = () => {
		setActiveIndex(
			(currentIndex) =>
				(currentIndex - 1 + historySlides.length) % historySlides.length
		);
	};

	const showNextSlide = () => {
		setActiveIndex((currentIndex) => (currentIndex + 1) % historySlides.length);
	};

	return (
		<section
			aria-labelledby="history-heading"
			className="mt-4 bg-gray-100 py-16 sm:py-20 lg:py-24"
		>
			<h2 className="sr-only" id="history-heading">
				Our History
			</h2>

			<div className="mx-auto grid w-full max-w-[1350px] grid-cols-1 gap-8 px-5 sm:px-12 lg:grid-cols-5 lg:gap-x-16 lg:gap-y-0 lg:px-[76px]">
				<div className="flex flex-col lg:col-span-2 lg:col-start-1">
					<p className="m-0 text-base font-light uppercase leading-none text-black/40 sm:text-lg">
						Our History <span aria-hidden="true">•</span> {activeSlide.period}
					</p>
					<h3 className="mb-0 mt-5 text-4xl font-light leading-tight tracking-[-0.035em] text-qtmaBlue sm:text-5xl">
						{activeSlide.title}
					</h3>
					<p className="mb-0 mt-4 max-w-lg text-base font-light leading-snug text-qtmaInk sm:text-lg">
						{activeSlide.description}
					</p>

					<HistoryControls
						activeIndex={activeIndex}
						className="hidden items-center justify-center lg:mt-auto lg:flex lg:pt-10"
						onNext={showNextSlide}
						onPrevious={showPreviousSlide}
						onSelect={setActiveIndex}
					/>
				</div>

				<div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-white lg:col-span-3 lg:col-start-3">
					{historySlides.map((slide, index) => {
						const active = index === activeIndex;

						return (
							<Image
								alt={active ? slide.imageAlt : ""}
								aria-hidden={!active}
								className={`object-cover transition-opacity duration-500 motion-reduce:transition-none ${
									active ? "opacity-100" : "opacity-0"
								}`}
								fill
								key={slide.imageSrc}
								priority={index === 0}
								sizes="(min-width: 1024px) 55vw, (min-width: 640px) calc(100vw - 96px), calc(100vw - 40px)"
								src={slide.imageSrc}
							/>
						);
					})}
				</div>

				<HistoryControls
					activeIndex={activeIndex}
					className="flex items-center justify-center lg:hidden"
					onNext={showNextSlide}
					onPrevious={showPreviousSlide}
					onSelect={setActiveIndex}
				/>

				<p aria-atomic="true" aria-live="polite" className="sr-only">
					Slide {activeIndex + 1} of {historySlides.length}:{" "}
					{activeSlide.period}, {activeSlide.title}
				</p>
			</div>
		</section>
	);
}
