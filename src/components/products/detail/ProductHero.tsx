import Image from "next/image";

import type { Product } from "@/data/products";

type ProductHeroProps = {
	product: Product;
};

export default function ProductHero({ product }: ProductHeroProps) {
	return (
		<section
			aria-labelledby="product-title"
			className="mx-auto w-full max-w-[1120px] px-5 pb-8 pt-12 text-center sm:px-8 sm:pb-10 sm:pt-16 lg:pb-14 lg:pt-20"
		>
			<div>
				<p className="m-0 text-xl font-semibold text-qtmaBlue sm:text-2xl">
					{product.year}
				</p>

				<div className="mt-6 flex flex-wrap items-center justify-center gap-5 sm:mt-8 sm:gap-7">
					<h1
						className="m-0 text-4xl font-semibold leading-none tracking-tight text-black sm:text-5xl lg:text-6xl"
						id="product-title"
					>
						{product.name}
					</h1>
					<div className="relative h-36 w-36 shrink-0 sm:h-48 sm:w-48">
						<Image
							alt={`${product.name} logo`}
							className="object-contain"
							fill
							priority
							sizes="(min-width: 640px) 192px, 144px"
							src={product.logo}
						/>
					</div>
				</div>
				<p className="mb-0 mt-6 text-xl font-light leading-relaxed text-[#9b9b9b] sm:mt-7 sm:text-2xl">
					&ldquo;{product.slogan}&rdquo;
				</p>
			</div>
		</section>
	);
}
