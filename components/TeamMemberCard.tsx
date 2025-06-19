import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";

type Props = {
	name: string;
	image: string;
	subPosition?: string;
	linkedIn?: string;
};

export function TeamMemberCard({ name, image, subPosition, linkedIn }: Props) {
	return (
		<div className="flex flex-col items-center justify-center text-center">
			<a
				href={linkedIn}
				target="_blank"
				rel="noreferrer"
				className="cursor-default"
			>
				<div className="relative w-[220px] h-[220px] flex items-center justify-center">
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
						width={200}
						height={200}
						className="rounded-full object-cover aspect-square z-10 cursor-pointer hover:opacity-90 transition-opacity duration-300"
					/>
				</div>
			</a>
			<p className="">{name}</p>
		</div>
	);
}
