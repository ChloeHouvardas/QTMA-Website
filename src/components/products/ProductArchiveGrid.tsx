import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/data/products";

type ProductArchiveGridProps = {
	products: Product[];
	year: string;
};

function ProductCard({ product }: { product: Product }) {
	return (
		<Link
			className="group flex min-h-[210px] items-center gap-7 rounded-[26px] border-2 border-transparent bg-white px-8 py-8 shadow-[0_7px_22px_rgba(0,0,0,0.17)] transition duration-200 hover:-translate-y-1 hover:border-qtmaBlue/35 hover:shadow-[0_12px_28px_rgba(0,0,0,0.19)] focus-visible:border-qtmaBlue max-lg:flex-col max-lg:justify-center max-lg:text-center sm:min-h-[230px] lg:px-10"
			href={`/products/${product.year}/${product.slug}`}
		>
			<div className="relative h-[115px] w-[125px] shrink-0">
				<Image
					alt={`${product.name} logo`}
					className="object-contain"
					fill
					sizes="125px"
					src={product.logo}
				/>
			</div>
			<div className="min-w-0">
				<h2 className="m-0 text-[clamp(1.75rem,2.2vw,2.25rem)] font-normal leading-tight text-black">
					{product.name}
				</h2>
				<p className="mb-0 mt-3 text-base font-light leading-tight text-[#a0a0a0]">
					{product.slogan}
				</p>
			</div>
		</Link>
	);
}

export default function ProductArchiveGrid({
	products,
	year,
}: ProductArchiveGridProps) {
	return (
		<section
			aria-label={`${year} products`}
			className="grid grid-cols-1 gap-6 sm:grid-cols-2"
		>
			{products.map((product) => (
				<ProductCard key={product.slug} product={product} />
			))}
		</section>
	);
}
