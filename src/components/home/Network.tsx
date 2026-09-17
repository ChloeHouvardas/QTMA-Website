import Image from "next/image";

const placementLogos = [
	{ alt: "Boston Consulting Group", src: "/assets/Placement Logos/bcg.png" },
	{ alt: "NEXT Canada", src: "/assets/Placement Logos/next36.png" },
	{ alt: "Amazon", src: "/assets/Placement Logos/amazon.png" },
	{ alt: "Google", src: "/assets/Placement Logos/google.png" },
	{ alt: "Uber", src: "/assets/Placement Logos/uber.png" },
	{ alt: "Moelis", src: "/assets/Placement Logos/moelis.png" },
	{ alt: "Shopify", src: "/assets/Placement Logos/shopify.png" },
	{ alt: "Meta", src: "/assets/Placement Logos/meta.png" },
	{ alt: "Tesla", src: "/assets/Placement Logos/tesla.png" },
	{ alt: "Evercore", src: "/assets/Placement Logos/evercore.png" },
	{ alt: "Morgan Stanley", src: "/assets/Placement Logos/morganstanley.png" },
	{ alt: "McKinsey & Company", src: "/assets/Placement Logos/mckinsey.png" },
	{ alt: "Microsoft", src: "/assets/Placement Logos/microsoft.png" },
	{ alt: "Dropbox", src: "/assets/Placement Logos/dropbox.png" },
	{ alt: "J.P. Morgan", src: "/assets/Placement Logos/jpmorgan.png" },
	{ alt: "YouTube", src: "/assets/Placement Logos/youtube.png" },
	{ alt: "Barclays", src: "/assets/Placement Logos/barclays.png" },
	{
		alt: "Ontario Teachers'",
		src: "/assets/Placement Logos/ontarioteachers.png",
	},
	{ alt: "Wealthsimple", src: "/assets/Placement Logos/wealthsimple.png" },
	{ alt: "PayPal", src: "/assets/Placement Logos/paypal.png" },
	{ alt: "Cohere", src: "/assets/Placement Logos/cohere.png" },
	{ alt: "Palantir", src: "/assets/Placement Logos/palantir.png" },
	{ alt: "Aritzia", src: "/assets/Placement Logos/aritzia.png" },
	{ alt: "Dior", src: "/assets/Placement Logos/dior.png" },
	{ alt: "Financial Times", src: "/assets/Placement Logos/financialtimes.png" },
	{ alt: "Harvard University", src: "/assets/Placement Logos/harvard.png" },
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
					<p className="m-0 text-lg font-normal uppercase leading-none text-black/50 sm:text-xl">
						Our Network
					</p>
					<h2
						className="m-0 text-4xl font-normal leading-none text-qtmaBlue sm:text-5xl"
						id="network-title"
					>
						Where it leads you
					</h2>
					<p className="m-0 max-w-5xl text-base font-normal leading-tight text-qtmaInk sm:text-lg">
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
							className="flex h-14 items-center justify-center sm:h-16 lg:h-24"
							key={logo.src}
						>
							<Image
								alt={logo.alt}
								className="h-14 w-auto max-w-full object-contain sm:h-12 lg:h-20"
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
