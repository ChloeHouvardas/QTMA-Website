"use client";

import { ArrowRight } from "lucide-react";
import type { FormEvent } from "react";

export function ContactForm() {
	const preventSubmission = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form className="contact-form" onSubmit={preventSubmission}>
			<div>
				<p className="contact-form__eyebrow">UPDATES FROM QTMA</p>
				<h3>Don&apos;t miss what&apos;s next.</h3>
				<p className="contact-form__description">
					Leave your details and be the first to hear about our products,
					events, and community.
				</p>
			</div>

			<div className="contact-form__fields">
				<label>
					<span>Name</span>
					<input
						autoComplete="name"
						name="name"
						placeholder="Your name"
						type="text"
					/>
				</label>
				<label>
					<span>Email</span>
					<input
						autoComplete="email"
						name="email"
						placeholder="you@example.com"
						type="email"
					/>
				</label>
			</div>

			<button
				className="button button--dark contact-form__button"
				type="submit"
			>
				Notify Me <ArrowRight aria-hidden="true" />
			</button>
			<p className="contact-form__note" aria-live="polite">
				Preview only — notifications are not yet available.
			</p>
		</form>
	);
}
