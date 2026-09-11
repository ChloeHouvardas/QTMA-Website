"use client";

import { ArrowRight } from "lucide-react";
import type { FormEvent } from "react";

export function ContactForm() {
	const preventSubmission = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form
			className="flex min-h-[430px] flex-col justify-between rounded-[3px] bg-white p-[clamp(30px,4.3vw,62px)] shadow-qtma md:min-h-[460px] lg:min-h-[520px]"
			onSubmit={preventSubmission}
		>
			<div>
				<p className="mb-5 mt-0 text-[0.72rem] font-bold tracking-[0.14em] text-qtmaBlue">
					UPDATES FROM QTMA
				</p>
				<h3 className="m-0 text-[clamp(2rem,3.8vw,3.4rem)] font-medium leading-none tracking-[-0.055em]">
					Don&apos;t miss what&apos;s next.
				</h3>
				<p className="mb-0 mt-5 max-w-[510px] leading-[1.6] text-qtmaMuted">
					Leave your details and be the first to hear about our products,
					events, and community.
				</p>
			</div>

			<div className="mt-[35px] grid grid-cols-1 gap-[18px] sm:grid-cols-2">
				<label className="grid gap-2.5">
					<span className="text-[0.78rem] font-semibold">Name</span>
					<input
						autoComplete="name"
						className="min-h-[45px] w-full rounded-none border-0 border-b border-[#b9bdc5] bg-transparent p-0 text-qtmaInk placeholder:text-[#a0a4ad] focus:border-qtmaBlue focus:outline-none"
						name="name"
						placeholder="Your name"
						type="text"
					/>
				</label>
				<label className="grid gap-2.5">
					<span className="text-[0.78rem] font-semibold">Email</span>
					<input
						autoComplete="email"
						className="min-h-[45px] w-full rounded-none border-0 border-b border-[#b9bdc5] bg-transparent p-0 text-qtmaInk placeholder:text-[#a0a4ad] focus:border-qtmaBlue focus:outline-none"
						name="email"
						placeholder="you@example.com"
						type="email"
					/>
				</label>
			</div>

			<button
				className="mt-9 inline-flex min-h-[52px] w-fit cursor-pointer items-center justify-center gap-3 rounded-full border border-qtmaInk bg-qtmaInk px-6 text-[0.9rem] font-semibold leading-none text-white transition-transform hover:-translate-y-0.5 [&_svg]:h-[18px] [&_svg]:w-[18px]"
				type="submit"
			>
				Notify Me <ArrowRight aria-hidden="true" />
			</button>
			<p className="mb-0 mt-3 text-[0.72rem] text-[#8b8f98]" aria-live="polite">
				Preview only - notifications are not yet available.
			</p>
		</form>
	);
}
