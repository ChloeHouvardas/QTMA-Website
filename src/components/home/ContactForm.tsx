"use client";

import type { FormEvent } from "react";

export function ContactForm() {
	const preventSubmission = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form
			className="flex rounded-[10px] border border-qtmaBorder bg-white p-[30px] lg:h-[379px]"
			onSubmit={preventSubmission}
		>
			<div className="flex w-full flex-1 flex-col gap-[30px] lg:justify-between lg:gap-0">
				<div className="flex flex-col gap-1.5">
					<h3 className="m-0 text-[20px] font-normal leading-none">
						Notify Me
					</h3>
					<p className="m-0 max-w-[513px] text-[22px] font-normal leading-[1.2] text-black/50">
						We&apos;ll send you a reminder when applications open.
					</p>
				</div>

				<div className="grid gap-3">
					<label>
						<span className="sr-only">Name</span>
						<input
							autoComplete="name"
							className="h-[51px] w-full rounded-[10px] border border-qtmaBorder bg-white px-5 text-[20px] font-normal tracking-[-0.05em] text-qtmaInk placeholder:text-[#999999] focus:border-qtmaBlue focus:outline-none"
							name="name"
							placeholder="Name"
							type="text"
						/>
					</label>
					<label>
						<span className="sr-only">Email</span>
						<input
							autoComplete="email"
							className="h-[51px] w-full rounded-[10px] border border-qtmaBorder bg-white px-5 text-[20px] font-normal tracking-[-0.05em] text-qtmaInk placeholder:text-[#999999] focus:border-qtmaBlue focus:outline-none"
							name="email"
							placeholder="Email"
							type="email"
						/>
					</label>
				</div>

				<button
					className="inline-flex h-[39px] w-fit cursor-pointer items-center justify-center rounded-[6px] border-0 bg-qtmaBlue px-[18px] text-[15px] font-normal leading-none text-white shadow-[inset_1px_2px_3px_rgba(255,255,255,0.25)] transition-colors hover:bg-qtmaBlueDark"
					type="submit"
				>
					Notify Me
				</button>
			</div>
		</form>
	);
}
