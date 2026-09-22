import Image from "next/image";

export function Network() {
	return (
		<section
			aria-labelledby="network-title"
			className="bg-white pt-10 sm:pt-12"
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

			<div className="bg-qtmaOffWhite py-6 sm:py-8 lg:py-10">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<Image
						alt="Companies and institutions where QTMA alumni have worked and studied"
						className="h-auto w-full"
						height={727}
						sizes="(min-width: 1280px) 1152px, 100vw"
						src="/assets/placement-logos-svg/placement-logos.svg"
						width={1165}
					/>
				</div>
			</div>
		</section>
	);
}
