"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProcessStage = {
	description: string;
	imageAlt: string;
	imageSrc?: string;
	monthRange: string;
	title: string;
};

const processStages: ProcessStage[] = [
	{
		description:
			"Turning opportunities into ideas. Each summer, teams explore emerging trends, unmet needs, and market opportunities to identify promising product concepts. Through planning sessions, workshops, and product discovery, ideas are refined into clear directions for the year ahead.",
		imageAlt: "Ideation process image",
		imageSrc: "/assets/Visuals/about/ideation.JPG",
		monthRange: "May–Jul",
		title: "Ideation",
	},
	{
		description:
			"Validating before building. In the fall, teams conduct user interviews, gather feedback, and analyze the market to better understand the problem they’re solving. Every assumption is challenged and tested to ensure the product is grounded in real user needs.",
		imageAlt: "Validation process image",
		imageSrc: "/assets/Visuals/about/validation.JPG",
		monthRange: "Aug–Oct",
		title: "Validation",
	},
	{
		description:
			"Building through iteration. With a validated concept in place, teams move into design and development. Through weekly sprints, prototyping, testing, and continuous refinement, ideas gradually evolve into polished digital products.",
		imageAlt: "Prototyping process image",
		imageSrc: "/assets/Visuals/about/prototyping.JPG",
		monthRange: "Nov–Jan",
		title: "Prototyping",
	},
	{
		description:
			"Bringing products to launch. Throughout the year, teams showcase their progress at Demo Days, presenting their products to industry professionals, company representatives, and experienced judges. These milestones celebrate months of research, design, development, and iteration.",
		imageAlt: "Launch process image",
		imageSrc: "/assets/Visuals/about/launch-process.JPG",
		monthRange: "Feb–Apr",
		title: "Launch",
	},
];

const baseBarHeights = [
	5, 13, 8, 18, 7, 15, 10, 21, 6, 12, 17, 9, 4, 19, 11, 14, 7, 22, 9, 16, 5, 13,
	20, 8, 11, 6, 18, 10, 15, 7, 23, 12,
];
const peakVariations = [
	-4, 5, -1, 7, -5, 3, 6, -2, 4, -6, 1, 5, -3, 8, -1, 3, -5, 6, -2, 4, -7, 2, 5,
	-4, 7, -1, 3, -6, 5, -2, 6, -3,
];
const waveBarCount = 128;
const stageViewportHeight = 50;

function getBarHeight(barIndex: number, activeIndex: number) {
	const barsPerStage = waveBarCount / processStages.length;
	const stageIndex = Math.floor(barIndex / barsPerStage);
	const baseHeight = baseBarHeights[barIndex % baseBarHeights.length];

	if (stageIndex !== activeIndex) {
		return baseHeight;
	}

	const stagePosition = barIndex % barsPerStage;
	const distanceFromPeak = Math.abs(stagePosition - (barsPerStage - 1) / 2);
	const bellCurve = Math.exp(
		-3 * Math.pow(distanceFromPeak / (barsPerStage * 0.133), 2)
	);
	const peakVariation = peakVariations[barIndex % peakVariations.length];
	const waveHeight = Math.round(
		baseHeight + 42 * bellCurve + peakVariation * Math.max(0.35, bellCurve)
	);

	return Math.max(baseHeight, waveHeight);
}

function StageImageSwapper({ activeIndex }: { activeIndex: number }) {
	return (
		<div className="relative aspect-[3407/1898] overflow-hidden rounded-[24px] bg-[#f3f5f8] sm:mx-auto sm:max-w-[700px] sm:rounded-[27px]">
			{processStages.map((stage, index) => {
				const active = index === activeIndex;

				return (
					<div
						aria-hidden={!active}
						className={`absolute inset-0 flex items-center justify-center px-6 text-center text-lg text-black/50 transition-opacity duration-500 motion-reduce:transition-none ${
							active ? "opacity-100" : "pointer-events-none opacity-0"
						}`}
						key={stage.title}
					>
						{stage.imageSrc ? (
							<Image
								alt={stage.imageAlt}
								className="object-cover"
								fill
								sizes="(min-width: 1024px) 50vw, 100vw"
								src={stage.imageSrc}
							/>
						) : (
							stage.imageAlt
						)}
					</div>
				);
			})}
		</div>
	);
}

function StageWaveBar({ activeIndex }: { activeIndex: number }) {
	const activeStage = processStages[activeIndex];

	return (
		<div aria-hidden="true" className="relative mt-8 pt-12 sm:mt-10">
			<div
				className="absolute top-0 z-10 -translate-x-1/2 rounded-lg bg-[#e8efff] px-3 py-2 text-center text-qtmaBlue shadow-sm transition-[left] duration-500 motion-reduce:transition-none"
				style={{
					left: `${((activeIndex + 0.5) / processStages.length) * 100}%`,
				}}
			>
				<p className="m-0 text-sm font-medium leading-none">
					{activeStage.title}
				</p>
				<p className="mb-0 mt-1 text-xs font-light leading-none">
					{activeStage.monthRange}
				</p>
			</div>

			<div className="relative flex h-16 w-full items-end justify-between ">
				{Array.from({ length: waveBarCount }, (_, index) => {
					const stageIndex = Math.floor(
						index / (waveBarCount / processStages.length)
					);
					const active = stageIndex === activeIndex;

					return (
						<span
							className={`w-px shrink-0 bg-black/25 transition-[height,background-color] duration-500 ease-out motion-reduce:transition-none ${
								active
									? "process-wave-bar-active bg-qtmaBlue"
									: "process-wave-bar"
							}`}
							key={index}
							style={{
								animationDelay: `${(index % 12) * 70}ms`,
								height: `${getBarHeight(index, activeIndex)}px`,
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}

export function ProcessSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const spacerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let rafId: number | null = null;

		const clamp = (value: number) => Math.min(1, Math.max(0, value));

		const getProgress = () => {
			const el = spacerRef.current;
			if (!el) return 0;
			const rect = el.getBoundingClientRect();
			const scrollable = rect.height - window.innerHeight;
			if (scrollable <= 0) return 0;
			return clamp(-rect.top / scrollable);
		};

		const update = () => {
			rafId = null;
			const progress = getProgress();
			const index = Math.min(
				processStages.length - 1,
				Math.floor(progress * processStages.length)
			);
			setActiveIndex(index);
		};

		const onScroll = () => {
			if (rafId === null) rafId = requestAnimationFrame(update);
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		update();

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (rafId !== null) cancelAnimationFrame(rafId);
		};
	}, []);

	return (
		<section
			aria-labelledby="process-title"
			className="mx-auto w-full max-w-[1350px] px-5 pb-20 sm:px-12 sm:pb-28 lg:px-[76px] lg:pb-32"
		>
			<div>
				<p className="m-0 text-lg font-light uppercase leading-none text-black/40 sm:text-xl">
					Our Process
				</p>
				<h2
					className="mb-0 mt-6 text-4xl font-light leading-none tracking-[-0.035em] text-qtmaBlue sm:mt-7 sm:text-5xl lg:text-6xl"
					id="process-title"
				>
					What it looks like
				</h2>
				<p className="mb-0 mt-8 max-w-[620px] text-lg font-light leading-snug text-qtmaInk sm:mt-9 sm:text-xl">
					Every year, QTMA brings four innovative digital products to life.
					Through a process of ideation, research, development, and launch, our
					teams transform promising ideas into products with real-world impact.
				</p>
			</div>

			{/*
				The image, wave bar, and description row pin in place together
				(via a tall spacer + sticky inner panel) while the user scrolls
				through all 4 stages, then releases — so the highlighted stage
				stays visible the whole time it's changing, instead of scrolling
				out of view. The image is sized so the whole group fits on screen
				together while frozen.
			*/}
			<div
				className="relative mt-10 sm:mt-14"
				ref={spacerRef}
				style={{ height: `${processStages.length * stageViewportHeight}vh` }}
			>
				<div className="sticky top-14 pt-4 sm:pt-6">
					<StageImageSwapper activeIndex={activeIndex} />
					<StageWaveBar activeIndex={activeIndex} />

					<div
						aria-label="Process stages"
						className="mt-10 hidden items-start gap-10 lg:mt-12 lg:grid lg:grid-cols-4"
					>
						{processStages.map((stage, index) => {
							const active = index === activeIndex;

							return (
								<p
									className={`m-0 w-full origin-top-left text-xl font-light leading-snug transition-[color,transform] duration-300 motion-reduce:transition-none ${
										active ? "scale-[1.03] text-qtmaInk" : "text-black/25"
									}`}
									key={stage.title}
								>
									{stage.description}
								</p>
							);
						})}
					</div>

					{/*
						Below lg there isn't room to show every description at once
						without burying the relevant one among unrelated gray text
						(a single column on mobile, only 2 of 4 visible at a time on
						tablet), so instead show only the active stage's text and
						crossfade between stages — same technique as the image swap
						above. A sr-only list keeps all 4 stages' content available
						to screen readers even though only one is visually shown at
						a time.
					*/}
					<div className="relative mt-10 min-h-[16rem] lg:hidden">
						<ul className="sr-only">
							{processStages.map((stage) => (
								<li key={stage.title}>
									{stage.title} ({stage.monthRange}): {stage.description}
								</li>
							))}
						</ul>
						{processStages.map((stage, index) => {
							const active = index === activeIndex;

							return (
								<p
									aria-hidden="true"
									className={`absolute inset-x-0 top-0 m-0 text-lg font-light leading-snug text-qtmaInk transition-opacity duration-500 motion-reduce:transition-none sm:text-xl ${
										active ? "opacity-100" : "pointer-events-none opacity-0"
									}`}
									key={stage.title}
								>
									{stage.description}
								</p>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
