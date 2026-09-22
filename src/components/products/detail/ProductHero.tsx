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

				<h1
					className="mb-0 mt-6 text-4xl font-semibold leading-none tracking-tight text-black sm:mt-8 sm:text-5xl lg:text-6xl"
					id="product-title"
				>
					{product.name}
				</h1>
				<p className="mb-0 mt-6 text-xl font-light leading-relaxed text-[#9b9b9b] sm:mt-7 sm:text-2xl">
					&ldquo;{product.slogan}&rdquo;
				</p>
			</div>
		</section>
	);
}
