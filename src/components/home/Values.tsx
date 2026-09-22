"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { ValueItem } from "@/data/home-content";

type ValuesProps = {
	values: ValueItem[];
};

export function Values({ values }: ValuesProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	const clearHoverTimer = () => {
		if (hoverTimer.current !== null) {
			clearTimeout(hoverTimer.current);
			hoverTimer.current = null;
		}
	};

	const activate = (index: number) => {
		clearHoverTimer();
		setActiveIndex(index);
	};

	useEffect(
		() => () => {
			if (hoverTimer.current !== null) {
				clearTimeout(hoverTimer.current);
			}
		},
		[]
	);

	return (
		<section
			aria-labelledby="values-title"
			className="scroll-mt-5 bg-white pb-[clamp(80px,9vw,128px)]"
			id="values"
		>
			<div className="mx-auto w-full max-w-[1344px] px-5 sm:px-8 lg:px-12">
				<header className="mb-[50px] flex flex-col items-start gap-[15px]">
					<p className="m-0 text-[22px] font-normal uppercase leading-none text-black/50 max-sm:text-lg">
						OUR VALUE
					</p>
					<h2
						className="m-0 text-[48px] font-normal leading-none text-qtmaBlue max-sm:text-[36px]"
						id="values-title"
					>
						Why QTMA?
					</h2>
				</header>

				<div className="flex flex-col gap-[22px] xl:h-[446px] xl:flex-row">
					{values.map((value, index) => {
						const active = activeIndex === index;
						const contentId = `value-content-${value.number}`;
						const headingId = `value-heading-${value.number}`;

						return (
							<div
								className={`group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-[30px] border border-[#d7d7d7] bg-white p-6 text-left text-qtmaInk transition-[min-height,flex-basis,border-color,box-shadow] duration-500 ease-out motion-reduce:transition-none sm:p-7 xl:h-[446px] xl:min-w-0 xl:p-[30px] ${
									active
										? "min-h-[446px] border-[#c7c7c7] shadow-[0_12px_36px_rgba(30,55,105,0.08)] xl:flex-[0_0_445px]"
										: "min-h-[132px] hover:border-[#aebfe8] xl:flex-[0_0_calc((100%_-_511px)_/_3)]"
								}`}
								key={value.number}
								onPointerLeave={clearHoverTimer}
								onPointerMove={(event) => {
									if (
										event.pointerType !== "mouse" ||
										active ||
										hoverTimer.current !== null
									) {
										return;
									}

									hoverTimer.current = setTimeout(() => {
										hoverTimer.current = null;
										setActiveIndex(index);
									}, 15);
								}}
							>
								<button
									aria-controls={contentId}
									aria-expanded={active}
									aria-labelledby={headingId}
									className="absolute inset-0 z-20 cursor-pointer rounded-[30px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-qtmaBlue"
									onClick={() => activate(index)}
									onFocus={() => activate(index)}
									type="button"
								/>

								<h3
									className="relative z-10 m-0 max-w-[190px] text-[clamp(1.35rem,2vw,1.75rem)] font-medium leading-[1.08] tracking-[-0.035em] sm:max-w-[315px]"
									id={headingId}
								>
									{value.title}
								</h3>

								<div
									aria-hidden={!active}
									className={`relative z-10 mt-4 max-w-[350px] text-sm leading-[1.5] text-[#666666] transition-[opacity,transform] duration-300 motion-reduce:transition-none sm:text-[15px] ${
										active
											? "translate-y-0 opacity-100 delay-150 motion-reduce:delay-0"
											: "pointer-events-none translate-y-2 opacity-0"
									}`}
									id={contentId}
								>
									{value.description}
								</div>

								<div
									aria-hidden={!active}
									className={`absolute bottom-[18px] left-[18px] right-[18px] h-[210px] overflow-hidden rounded-[20px] transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none sm:bottom-5 sm:left-5 sm:right-5 ${
										active
											? "scale-100 opacity-100 delay-100 motion-reduce:delay-0"
											: "pointer-events-none scale-[0.97] opacity-0"
									}`}
								>
									<Image
										alt={value.imageAlt || `${value.title} image`}
										className="object-cover"
										fill
										sizes="(min-width: 1280px) 405px, calc(100vw - 76px)"
										src={value.imageSrc}
									/>
									<span className="absolute bottom-3 right-4 z-10 text-[4.5rem] font-medium leading-none tracking-[-0.075em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] sm:bottom-4 sm:right-5 sm:text-[5.25rem]">
										{value.number}
									</span>
								</div>

								<span
									aria-hidden="true"
									className={`absolute bottom-5 right-6 text-[4.5rem] font-medium leading-none tracking-[-0.075em] text-qtmaBlue transition-[opacity,transform] duration-300 motion-reduce:transition-none sm:bottom-6 sm:right-7 sm:text-[5.25rem] xl:bottom-7 xl:left-[30px] xl:right-auto ${
										active
											? "pointer-events-none translate-y-2 opacity-0"
											: "translate-y-0 opacity-100 delay-150 motion-reduce:delay-0"
									}`}
								>
									{value.number}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
