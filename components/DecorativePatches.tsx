import React from "react";
import Image from "next/image";

type Props = {
	className?: string;
	children?: React.ReactNode;
	// width and height are in px and used as defaults (u can override with className)
	width?: number;
	height?: number;
};

export default function DecorativePatches({ children, className = "" }: Props) {
	return (
		<div
			className={`relative overflow-visible w-full aspect-[1172/448] ${className}`}
		>
			<Image
				src="/assets/Visuals/QTMADecorativePatches.svg"
				alt="Decorative Patches"
				fill
				style={{ objectFit: "contain" }}
				sizes="100vw"
			/>

			{children ? (
				<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
					<div className="w-3/4 h-auto flex flex-col items-center justify-center gap-0">
						{children}
						<h2 className="text-center text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light leading-none -mt-1">
							QUEEN'S TECHNOLOGY AND MEDIA ASSOCIATION
						</h2>
					</div>
				</div>
			) : null}
		</div>
	);
}
