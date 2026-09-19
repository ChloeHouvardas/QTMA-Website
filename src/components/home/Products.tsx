import Image from "next/image";
import Link from "next/link";

import type { ProductSummary } from "@/data/home-content";

type ProductCardProps = {
	product: ProductSummary;
};

type ProductsProps = {
	products: ProductSummary[];
};

export function ProductCard({ product }: ProductCardProps) {
	return (
		<article className="group min-w-0">
			<Link
				className="block rounded-xl text-inherit no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-qtmaBlue"
				href={product.href}
			>
				<div className="relative aspect-[4/5] overflow-hidden rounded-[10px] shadow-[0_5px_8.5px_rgba(0,0,0,0.25)]">
					<Image
						alt={product.imageAlt}
						className={`object-cover ${product.zoomImage ? "scale-110" : ""}`}
						fill
						sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
						src={product.imageSrc}
					/>
				</div>
				<div className="mt-[25px]">
					<h3 className="m-0 inline-flex items-center gap-1.5 text-[22px] font-normal leading-none">
						{product.name}
						<Image
							alt=""
							aria-hidden="true"
							className="h-[15px] w-[20px] -rotate-[57deg]"
							height={15}
							src="/assets/figma/products-arrow.svg"
							width={20}
						/>
					</h3>
					<p className="mb-0 mt-[10px] text-[20px] font-light leading-none text-black/50">
						{product.description}
					</p>
				</div>
			</Link>
		</article>
	);
}

export function Products({ products }: ProductsProps) {
	return (
		<section
			aria-labelledby="products-title"
			className="scroll-mt-5 bg-white py-[clamp(80px,8vw,120px)]"
			id="products"
		>
			<div className="mx-auto w-full max-w-[calc(1250px+(2*clamp(20px,4vw,48px)))] px-[clamp(20px,4vw,48px)] max-md:px-5">
				<div className="mb-[50px] flex flex-col items-start gap-[15px]">
					<p className="m-0 text-[22px] font-normal uppercase leading-none text-black/50 max-sm:text-lg">
						2025-2026 Products
					</p>
					<h2
						id="products-title"
						className="m-0 max-w-[832px] text-[48px] font-normal leading-none text-qtmaBlue max-sm:text-[36px]"
					>
						Here are some cool things we built :&#41;
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[clamp(18px,3.4vw,43px)]">
					{products.map((product) => (
						<ProductCard key={product.name} product={product} />
					))}
				</div>
			</div>
		</section>
	);
}
