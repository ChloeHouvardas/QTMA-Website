import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

export type MemberCardProps = {
	isCoChair?: boolean;
	name: string;
	role: string;
	image?: string;
	imageAlt?: string;
	program?: string;
	yearsWithQtma?: string;
	products?: string[];
	askMeAbout?: string;
	linkedinUrl?: string;
	email?: string;
};

export function MemberCard({
	isCoChair = false,
	name,
	role,
	image,
	imageAlt,
	program,
	yearsWithQtma,
	products,
	askMeAbout,
	linkedinUrl,
	email,
}: MemberCardProps) {
	const productsLabel = products?.join(", ");
	const hasDetails = program || yearsWithQtma || productsLabel || askMeAbout;

	return (
		<article className="w-full max-w-[320px]">
			<div
				className={`group relative overflow-hidden rounded-[28px] bg-qtmaInk ${
					isCoChair ? "aspect-[3/4]" : "aspect-[4/5]"
				}`}
			>
				{image ? (
					<Image
						alt={imageAlt ?? `${name} headshot`}
						className="object-cover transition duration-300 ease-out group-hover:scale-105 group-hover:blur-md group-focus-within:scale-105 group-focus-within:blur-md motion-reduce:transition-none"
						fill
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 320px"
						src={image}
					/>
				) : (
					<div
						aria-label={name}
						className="flex h-full items-center justify-center p-4 text-center text-sm text-white/70"
						role="img"
					>
						{name}
					</div>
				)}
				<div
					aria-hidden="true"
					className="absolute inset-0 bg-qtmaInk/10 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
				/>
				{(linkedinUrl || email) && (
					<div className="absolute right-4 top-4 z-10 flex flex-col gap-2 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none">
						{linkedinUrl && (
							<a
								aria-label={`${name}'s LinkedIn profile`}
								className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-qtmaBlue transition hover:scale-110 hover:bg-qtmaBlue hover:text-white focus-visible:scale-110 focus-visible:bg-qtmaBlue focus-visible:text-white"
								href={linkedinUrl}
								rel="noreferrer"
								target="_blank"
							>
								<Linkedin aria-hidden="true" size={19} strokeWidth={2.25} />
							</a>
						)}
						{email && (
							<a
								aria-label={`Email ${name}`}
								className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-qtmaBlue transition hover:scale-110 hover:bg-qtmaBlue hover:text-white focus-visible:scale-110 focus-visible:bg-qtmaBlue focus-visible:text-white"
								href={`mailto:${email}`}
							>
								<Mail aria-hidden="true" size={20} strokeWidth={2.25} />
							</a>
						)}
					</div>
				)}
				{hasDetails && (
					<div className="absolute inset-x-0 bottom-0 z-10 translate-y-3 p-5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 motion-reduce:transition-none">
						<dl className="space-y-1 text-xs leading-tight font-thin">
							{program && (
								<div>
									<dt className="sr-only">Program</dt>
									<dd>Program: {program}</dd>
								</div>
							)}
							{yearsWithQtma && (
								<div>
									<dt className="sr-only">Years with QTMA</dt>
									<dd>Years with QTMA: {yearsWithQtma}</dd>
								</div>
							)}
							{productsLabel && (
								<div>
									<dt className="sr-only">Products worked on</dt>
									<dd>Products: {productsLabel}</dd>
								</div>
							)}
							{askMeAbout && (
								<div>
									<dt className="sr-only">Superlative</dt>
									<dd>Ask me about {askMeAbout}</dd>
								</div>
							)}
						</dl>
					</div>
				)}
			</div>
			<div className="pt-5 text-center">
				<h3 className="text-xl font-normal leading-none text-qtmaInk">
					{name}
				</h3>
				<p className="mt-1 text-sm font-light uppercase text-[#999999]">
					{role}
				</p>
			</div>
		</article>
	);
}
