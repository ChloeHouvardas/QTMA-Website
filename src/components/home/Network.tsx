import Image from "next/image";

type PlacementLogo = {
	alt: string;
	className?: string;
	containerClassName?: string;
	src: string;
};

const placementLogos: PlacementLogo[] = [
	{
		alt: "Boston Consulting Group",
		className: "h-10 w-auto max-w-full object-contain sm:h-8 lg:h-14",
		src: "/assets/Visuals/Boston_Consulting_Group_2020_logo.svg",
	},
	{ alt: "NEXT Canada", src: "/assets/Placement Logos/next36.png" },
	{ alt: "Amazon", src: "/assets/placement-logos-svg/amazon.svg" },
	{ alt: "Google", src: "/assets/placement-logos-svg/google.svg" },
	{
		alt: "Uber",
		className: "h-10 w-auto max-w-full object-contain sm:h-8 lg:h-14",
		src: "/assets/placement-logos-svg/uber.svg",
	},
	{
		alt: "Moelis",
		className: "h-10 w-auto max-w-full object-contain sm:h-8 lg:h-14",
		src: "/assets/placement-logos-svg/moelis.svg",
	},
	{
		alt: "Shopify",
		className: "h-16 w-auto max-w-full object-contain sm:h-16 lg:h-24",
		src: "/assets/placement-logos-svg/shopify.svg",
	},
	{
		alt: "Meta",
		className: "h-10 w-auto max-w-full object-contain sm:h-8 lg:h-14",
		src: "/assets/placement-logos-svg/meta.svg",
	},
	{ alt: "Tesla", src: "/assets/placement-logos-svg/tesla.svg" },
	{ alt: "Evercore", src: "/assets/placement-logos-svg/evercore.svg" },
	{
		alt: "Morgan Stanley",
		className: "h-16 w-auto max-w-full object-contain sm:h-20 lg:h-28",
		containerClassName: "h-16 sm:h-20 lg:h-28",
		src: "/assets/placement-logos-svg/morganstanely.svg",
	},
	{
		alt: "McKinsey & Company",
		src: "/assets/placement-logos-svg/mckinsey.svg",
	},
	{
		alt: "Microsoft",
		className: "h-16 w-auto max-w-full object-contain sm:h-16 lg:h-24",
		src: "/assets/placement-logos-svg/microsoft.svg",
	},
	{ alt: "Dropbox", src: "/assets/placement-logos-svg/dropbox.svg" },
	{ alt: "J.P. Morgan", src: "/assets/placement-logos-svg/jpmorgan.svg" },
	{ alt: "YouTube", src: "/assets/placement-logos-svg/youtube.svg" },
	{ alt: "Barclays", src: "/assets/placement-logos-svg/barclays.svg" },
	{
		alt: "Ontario Teachers'",
		className: "h-10 w-auto max-w-full object-contain sm:h-8 lg:h-14",
		src: "/assets/placement-logos-svg/ontarioteachers.svg",
	},
	{
		alt: "Wealthsimple",
		src: "/assets/placement-logos-svg/wealthsimple.svg",
	},
	{ alt: "PayPal", src: "/assets/placement-logos-svg/paypal.svg" },
	{ alt: "Cohere", src: "/assets/placement-logos-svg/cohere.svg" },
	{ alt: "Palantir", src: "/assets/placement-logos-svg/palantir.svg" },
	{ alt: "Aritzia", src: "/assets/Placement Logos/aritzia.png" },
	{
		alt: "Dior",
		className: "h-10 w-auto max-w-full object-contain sm:h-8 lg:h-14",
		src: "/assets/placement-logos-svg/dior.svg",
	},
	{
		alt: "Financial Times",
		src: "/assets/placement-logos-svg/financialtimes.svg",
	},
	{ alt: "Harvard University", src: "/assets/placement-logos-svg/harvard.svg" },
	{ alt: "Stanford University", src: "/assets/Placement Logos/stanford.png" },
	{ alt: "Wharton School", src: "/assets/Placement Logos/wharton.png" },
];

export function Network() {
	return (
		<section
			aria-labelledby="network-title"
			className="bg-white pt-20 sm:pt-24"
		>
			<div className="mx-auto w-full max-w-[1344px] px-5 sm:px-8 lg:px-12">
				<header className="mb-12 flex flex-col items-start gap-4 sm:mb-14">
					<p className="m-0 text-lg font-light uppercase leading-none text-black/50 sm:text-xl">
						Our Network
					</p>
					<h2
						className="m-0 text-4xl font-normal leading-none text-qtmaBlue sm:text-5xl"
						id="network-title"
					>
						Where it leads you
					</h2>
					<p className="m-0 max-w-5xl text-base font-light leading-tight text-qtmaInk sm:text-lg">
						From global technology firms to fast-growing startups, QTMA alumni
						have built careers at some of the world&apos;s most impactful
						companies.
					</p>
				</header>
			</div>

			<div className="bg-qtmaOffWhite py-12 sm:py-16 lg:py-20">
				<div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 items-center gap-x-6 gap-y-8 px-8 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 sm:px-12 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-12 lg:px-16">
					{placementLogos.map((logo) => (
						<div
							className={`flex items-center justify-center ${
								logo.containerClassName ?? "h-14 sm:h-16 lg:h-24"
							}`}
							key={logo.src}
						>
							<Image
								alt={logo.alt}
								className={
									logo.className ??
									"h-14 w-auto max-w-full object-contain sm:h-12 lg:h-20"
								}
								height={183}
								sizes="(min-width: 1024px) 220px, (min-width: 640px) 25vw, 40vw"
								src={logo.src}
								width={322}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
