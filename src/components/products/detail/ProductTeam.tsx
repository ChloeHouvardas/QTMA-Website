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
			<div className="mx-auto w-full max-w-[1250px] px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
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
					className={`mt-8 grid items-start gap-8 lg:mt-10 ${
						hasMembers && teamPhoto
							? "lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-7"
							: ""
					}`}
				>
					{hasMembers ? (
						<ul className="m-0 grid list-none gap-2 p-0 sm:grid-cols-2 lg:grid-cols-1 lg:pt-9">
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

					{teamPhoto ? (
						<div className="relative aspect-[1.68/1] overflow-visible bg-[#f4f4f4] shadow-[0_4px_7px_rgba(0,0,0,0.25)]">
							<Image
								alt={teamPhoto.alt}
								className="object-cover"
								fill
								sizes={
									hasMembers
										? "(max-width: 1023px) 100vw, 700px"
										: "(max-width: 1120px) 100vw, 1060px"
								}
								src={teamPhoto.src}
							/>
						</div>
					) : null}
				</div>
			</div>
		</section>
	);
}
