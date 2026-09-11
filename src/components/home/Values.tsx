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
			className="section values"
			id="values"
			aria-labelledby="values-title"
		>
			<div className="site-container">
				<div className="section-heading section-heading--split values__heading">
					<div>
						<p className="eyebrow eyebrow--light">HOW WE SHOW UP</p>
						<h2 id="values-title">OUR VALUES</h2>
					</div>
					<p>Principles that shape how we think, collaborate, and build.</p>
				</div>

				<div className="values__list">
					{values.map((value, index) => {
						const active = activeIndex === index;
						return (
							<button
								aria-expanded={active}
								className={`value-card${active ? " is-active" : ""}`}
								key={value.number}
								onClick={() => setActiveIndex(index)}
								onFocus={() => setActiveIndex(index)}
								onMouseEnter={() => setActiveIndex(index)}
								type="button"
							>
								<span className="value-card__number">{value.number}</span>
								<div className="value-card__content">
									<h3>{value.title}</h3>
									<p>{value.description}</p>
								</div>
								<div className="value-card__art" aria-hidden="true">
									<Image
										alt=""
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
