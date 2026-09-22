import Image from "next/image";

import type { ProductImage, ProductMember } from "@/data/products";

type ProductTeamProps = {
	name: string;
	members?: ProductMember[];
	teamPhoto?: ProductImage;
};

export default function ProductTeam({
	name,
	members,
	teamPhoto,
}: ProductTeamProps) {
	const hasMembers = Boolean(members?.length);

	return (
		<section
			aria-labelledby="product-team-heading"
			className="bg-white text-qtmaInk"
		>
			<div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-12 lg:px-0">
				<p className="m-0 text-[15px] font-normal uppercase leading-none text-black/50">
					The team
				</p>
				<h2
					className="mb-0 mt-4 text-[clamp(2.25rem,4vw,3rem)] font-normal leading-none text-qtmaBlue"
					id="product-team-heading"
				>
					Meet the brains behind it
				</h2>

				<div
					className={`mt-6 grid items-start gap-8 ${
						hasMembers && teamPhoto
							? "lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-7"
							: ""
					}`}
				>
					{teamPhoto ? (
						<div className="relative aspect-video w-full max-w-6xl lg:order-last">
							<Image
								alt={teamPhoto.alt}
								className="object-contain"
								fill
								sizes="(max-width: 767px) 100vw, 768px"
								src={teamPhoto.src}
							/>
						</div>
					) : null}

					{hasMembers ? (
						<ul className="m-0 grid list-none gap-2 p-0 sm:grid-cols-2 lg:order-first lg:grid-cols-1 lg:pt-9">
							{members?.map((member) => (
								<li key={`${member.name}-${member.role}`}>
									{member.linkedinUrl ? (
										<a
											aria-label={`${member.name}'s LinkedIn profile`}
											className="group inline-block rounded-sm focus-visible:outline-offset-2"
											href={member.linkedinUrl}
											rel="noreferrer"
											target="_blank"
										>
											<span className="block text-xl font-medium leading-[1.05] transition-colors group-hover:text-qtmaBlue group-focus-visible:text-qtmaBlue">
												{member.name}
											</span>
											<span className="mt-1 block text-xs italic leading-tight text-black/45">
												{member.role}
											</span>
										</a>
									) : (
										<>
											<span className="block text-xl font-medium leading-[1.05]">
												{member.name}
											</span>
											<span className="mt-1 block text-xs italic leading-tight text-black/45">
												{member.role}
											</span>
										</>
									)}
								</li>
							))}
						</ul>
					) : null}
				</div>
			</div>
		</section>
	);
}
