import Image from "next/image";

export function LogoAndDecos() {
  return (
	<div className={`relative overflow-visible w-full aspect-[1172/448]`}>
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
