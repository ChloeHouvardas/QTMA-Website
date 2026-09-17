import { MemberCard } from "@/components/team/MemberCard";
import type { TeamPortfolio } from "@/data/25-26-members/team-content";

export default function PortfolioSection({
	id,
	isCoChairs = false,
	name,
	members,
}: TeamPortfolio) {
	const headingId = `${id}-heading`;
	return (
		<section
			aria-labelledby={headingId}
			className={
				isCoChairs
					? "mx-auto mt-16 max-w-[1296px] px-6 sm:px-8 md:mt-24"
					: undefined
			}
		>
			<h2
				className="mb-8 text-center text-3xl font-semibold uppercase text-qtmaBlue md:mb-10 md:text-4xl"
				id={headingId}
			>
				{name}
			</h2>
			<div
				className={`grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-4 md:gap-x-8 md:gap-y-10 ${
					isCoChairs ? "md:gap-x-10 md:gap-y-12 md:[&>article]:max-w-none" : ""
				}`}
			>
				{members.map((member) => (
					<MemberCard
						image={member.imageSrc}
						imageAlt={member.imageAlt}
						isCoChair={isCoChairs}
						key={member.id}
						name={member.name}
						askMeAbout={member.askMeAbout}
						email={member.email}
						linkedinUrl={member.linkedinUrl}
						products={member.products}
						program={member.program}
						role={member.position}
						yearsWithQtma={member.yearsWithQtma}
					/>
				))}
			</div>
		</section>
	);
}
