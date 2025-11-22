import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";

type Props = {
	name: string;
	image: string;
	subPosition?: string;
	linkedIn?: string;
};

export function TeamMemberCard({ name, image, subPosition, linkedIn }: Props) {
	const websiteContributors = ["Janevra Pier", "Kayne Lee", "Simon Risk", "Chloe Houvardas"];
	const isContributor = websiteContributors.includes(name);

	return (
		<div className="flex flex-col items-center justify-center text-center">
			<a
				href={linkedIn}
				target="_blank"
				rel="noreferrer"
				className="cursor-default"
			>
				<div className="relative w-[190px] h-[190px] flex items-center justify-center">
					{/* Outer ring */}
					<div className="absolute inset-0 rounded-full bg-blue-600 z-0" />

					{/* Middle ring */}
					<div className="absolute inset-[2px] rounded-full bg-white z-0" />

					{/* Inner ring */}
					<div className="absolute inset-[4px] rounded-full bg-blue-700 z-0" />

					{/* Final image ring */}
					<div className="absolute inset-[6px] rounded-full bg-white z-0" />

					{/* Image */}
					<Image
						alt={`Photo of ${name}`}
						src={image}
						width={175}
						height={175}
						className="rounded-full object-cover aspect-square z-10 cursor-pointer hover:opacity-90 transition-opacity duration-300"
					/>
				</div>
			</a>
			<p className={`${isContributor ? 'relative group' : ''}`}>
				{name}
				{isContributor && (
					<span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50">
						Thank you for helping with the website!
					</span>
				)}
			</p>
		</div>
	);
}
