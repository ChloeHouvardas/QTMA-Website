"use client";

import Image from "next/image";
import { useState } from "react";

import type { ValueItem } from "@/data/home-content";

type ValuesProps = {
	values: ValueItem[];
};

export function Values({ values }: ValuesProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section
			className="scroll-mt-5 bg-[#0d0f13] py-[clamp(90px,10vw,150px)] text-white"
			id="values"
			aria-labelledby="values-title"
		>
			<div className="mx-auto w-full max-w-[calc(1250px+(2*clamp(20px,4vw,48px)))] px-[clamp(20px,4vw,48px)] max-md:px-5">
				<div className="mb-[clamp(42px,5vw,68px)] flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-6">
					<div>
						<p className="mb-[18px] mt-0 text-[0.73rem] font-bold uppercase leading-[1.4] tracking-[0.15em] text-[#aac3ff]">
							HOW WE SHOW UP
						</p>
						<h2
							id="values-title"
							className="m-0 text-[clamp(2.45rem,5vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.055em]"
						>
							OUR VALUES
						</h2>
					</div>
					<p className="mb-[3px] mt-0 max-w-[410px] text-base leading-[1.65] text-[#a8aeb9] max-md:max-w-[520px]">
						Principles that shape how we think, collaborate, and build.
					</p>
				</div>

				<div className="grid gap-2 md:flex md:min-h-[490px]">
					{values.map((value, index) => {
						const active = activeIndex === index;
						return (
							<button
								aria-expanded={active}
								className={`relative grid w-full cursor-pointer overflow-hidden rounded-[2px] border p-[22px] text-left text-white transition-[min-height,background-color,flex] duration-300 md:min-w-[88px] md:grid-cols-1 md:grid-rows-[auto_1fr] lg:min-w-[108px] lg:p-[27px] ${
									active
										? "min-h-[210px] border-qtmaBlue bg-qtmaBlue md:flex-[1_1_600px] lg:grid-cols-[minmax(230px,0.9fr)_minmax(210px,1.1fr)]"
										: "min-h-[82px] border-[#2b2e34] bg-[#171a20] md:flex-[0_1_0]"
								} grid-cols-[auto_1fr]`}
								key={value.number}
								onClick={() => setActiveIndex(index)}
								onFocus={() => setActiveIndex(index)}
								onMouseEnter={() => setActiveIndex(index)}
								type="button"
							>
								<span className="relative z-[1] pt-1 text-[0.78rem] font-bold tracking-[0.08em] md:pt-0">
									{value.number}
								</span>
								<div
									className={`relative z-[1] min-w-0 pl-3.5 md:self-end md:pl-0 ${
										active
											? ""
											: "md:absolute md:bottom-7 md:left-[25px] md:origin-bottom-left md:-rotate-90"
									}`}
								>
									<h3 className="m-0 text-[1.75rem] font-medium leading-[0.96] tracking-[-0.06em] md:whitespace-nowrap md:text-[clamp(2.25rem,4vw,4.2rem)]">
										{value.title}
									</h3>
									<p
										className={`mr-5 mt-4 max-w-[390px] text-[0.95rem] leading-[1.65] transition md:mt-[22px] ${
											active
												? "block translate-y-0 opacity-[0.88]"
												: "hidden translate-y-2 opacity-0 md:block"
										}`}
									>
										{value.description}
									</p>
								</div>
								<div
									className={`relative col-start-2 row-span-2 ml-[22px] hidden self-stretch overflow-hidden rounded-[2px] lg:block ${
										active ? "" : "lg:hidden"
									}`}
									aria-hidden="true"
								>
									<Image
										alt=""
										className="object-cover"
										fill
										sizes="(max-width: 767px) 100vw, 34vw"
										src="/assets/content-placeholder.svg"
									/>
								</div>
							</button>
						);
					})}
				</div>
			</div>
		</section>
	);
}
