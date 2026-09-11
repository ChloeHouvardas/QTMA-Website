import Image from "next/image";

import type { ProductSummary } from "@/data/home-content";

type ProductCardProps = {
	index: number;
	product: ProductSummary;
};

type ProductsProps = {
	products: ProductSummary[];
};

export function ProductCard({ index, product }: ProductCardProps) {
	return (
		<article className="group min-w-0">
			<div className="relative aspect-[4/4.65] overflow-hidden rounded-[3px] bg-[#edf2fc] sm:aspect-[4/5]">
				<Image
					alt={product.imageAlt}
					className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.035]"
					fill
					priority={index < 2}
					sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 25vw"
					src="/assets/content-placeholder.svg"
				/>
				<span className="absolute bottom-[18px] left-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-[0.72rem] font-bold">
					{String(index + 1).padStart(2, "0")}
				</span>
			</div>
			<div className="mt-6 border-t border-qtmaBorder pt-5">
				<h3 className="mb-3.5 mt-0 text-[clamp(1.6rem,2vw,2rem)] font-medium tracking-[-0.04em]">
					{product.name}
				</h3>
				<p className="m-0 text-[0.92rem] leading-[1.65] text-qtmaMuted">
					{product.description}
				</p>
			</div>
		</article>
	);
}

export function Products({ products }: ProductsProps) {
	return (
		<section
			aria-labelledby="products-title"
			className="scroll-mt-5 bg-white py-[clamp(90px,10vw,150px)]"
			id="products"
		>
			<div className="mx-auto w-full max-w-[calc(1250px+(2*clamp(20px,4vw,48px)))] px-[clamp(20px,4vw,48px)] max-md:px-5">
				<div className="mb-[clamp(42px,5vw,68px)] flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-6">
					<div>
						<p className="mb-[18px] mt-0 text-2xl font-bold uppercase leading-[1.4] tracking-[0.15em] text-qtmaBlue">
							2026-2027 Products
						</p>
						<h2
							id="products-title"
							className="m-0 text-5xl font-normal leading-[0.98] tracking-[-0.055em]"
						>
							Here&apos;s some cool things we&apos;ve built
						</h2>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-[48px] sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-[clamp(18px,2vw,28px)]">
					{products.map((product, index) => (
						<ProductCard index={index} key={product.name} product={product} />
					))}
				</div>
			</div>
		</section>
	);
}
