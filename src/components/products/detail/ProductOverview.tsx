type ProductOverviewProps = {
	name: string;
	heading?: string;
	overview: string;
	pitch?: string;
};

export default function ProductOverview({
	name,
	heading,
	overview,
	pitch,
}: ProductOverviewProps) {
	return (
		<section
			aria-labelledby="product-overview-heading"
			className="border-y border-[#e9e9e9] bg-[#fafafa]"
		>
			<div className="mx-auto w-full max-w-[960px] px-5 py-16 text-left sm:px-8 sm:py-24">
				<div className="mx-auto max-w-[680px]">
					<p className="m-0 text-sm font-light tracking-[0.18em] text-gray-400 uppercase">
						Overview
					</p>
					<h2
						className="mb-0 mt-5 text-4xl font-light leading-tight tracking-[-0.035em] text-qtmaBlue sm:text-5xl"
						id="product-overview-heading"
					>
						{heading ?? `About ${name}`}
					</h2>
					<p className="mb-0 mt-7 text-lg font-light leading-8 text-[#555] sm:text-xl sm:leading-9">
						{overview}
					</p>

					{pitch ? (
						<div className="mt-10 text-left sm:mt-12">
							<div className="overflow-hidden rounded-[18px] border border-[#e1e4eb] bg-white shadow-[0_12px_32px_rgba(15,34,72,0.08)] sm:rounded-[22px]">
								<object
									aria-label={`${name} pitch deck`}
									className="aspect-[16/10] w-full bg-white"
									data={`${pitch}#view=FitH&toolbar=0`}
									type="application/pdf"
								>
									<p className="p-6 text-sm text-[#555]">
										The embedded pitch deck is unavailable. You can{" "}
										<a className="text-qtmaBlue underline" href={pitch}>
											open the {name} pitch deck
										</a>
										.
									</p>
								</object>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</section>
	);
}
