"use client";

import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";

import type { FaqItem } from "@/data/contact-content";

type FaqProps = {
	items: FaqItem[];
};

export function Faq({ items }: FaqProps) {
	const [openItem, setOpenItem] = useState<number | null>(null);
	const idPrefix = useId();

	return (
		<section aria-labelledby="faq-heading" className="mt-[104px] sm:mt-[120px]">
			<p className="m-0 text-lg font-normal uppercase leading-none text-gray-400">
				Frequently Asked Questions
			</p>
			<h2
				className="mb-0 mt-[15px] text-[clamp(3rem,4.2vw,2.25rem)] font-light leading-none text-qtmaBlue"
				id="faq-heading"
			>
				FAQ
			</h2>

			<div className="mt-[37px] border-t border-qtmaBorder">
				{items.map((item, index) => {
					const isOpen = openItem === index;
					const buttonId = `${idPrefix}-button-${index}`;
					const answerId = `${idPrefix}-answer-${index}`;

					return (
						<div className="border-b border-qtmaBorder" key={item.question}>
							<button
								aria-controls={answerId}
								aria-expanded={isOpen}
								className={`flex w-full cursor-pointer items-center justify-between gap-6 bg-transparent px-0 text-left text-[18px] font-normal leading-[1.2] text-qtmaInk sm:text-[20px] ${
									isOpen
										? "pb-3 pt-5 sm:pb-3 sm:pt-[23px]"
										: "py-5 sm:py-[23px]"
								}`}
								id={buttonId}
								onClick={() => setOpenItem(isOpen ? null : index)}
								type="button"
							>
								<span className="py-3">{item.question}</span>
								<span className="shrink-0 text-qtmaBlue" aria-hidden="true">
									{isOpen ? (
										<Minus className="h-6 w-6" strokeWidth={2} />
									) : (
										<Plus className="h-6 w-6" strokeWidth={2} />
									)}
								</span>
							</button>
							<div
								aria-hidden={!isOpen}
								aria-labelledby={buttonId}
								className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out ${
									isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
								}`}
								id={answerId}
								role="region"
							>
								<p
									className={`m-0 min-h-0 pr-12 text-[15px] leading-[1.35] text-qtmaMuted transition-opacity duration-200 ease-out ${
										isOpen ? "pb-6 opacity-100 sm:pb-7" : "pb-0 opacity-0"
									}`}
								>
									{item.answer}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
