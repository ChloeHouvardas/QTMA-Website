import Image from "next/image";

export function LogoAndDecos({ className = "" }) {
	// className controls width (e.g. "w-full md:w-3/4 lg:w-2/3").
	return (
		<div
			className={`relative overflow-visible ${className} aspect-[1172/448]`}
		>
			<Image
				src="/assets/Visuals/QTMALogoAndDecos.svg"
				alt="Decorative Patches"
				fill
				style={{ objectFit: "contain" }}
				sizes="100vw"
			/>
		</div>
	);
}
