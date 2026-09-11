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
		<article className="product-card">
			<div className="product-card__image">
				<Image
					alt={product.imageAlt}
					fill
					priority={index < 2}
					sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 25vw"
					src="/assets/content-placeholder.svg"
				/>
				<span>{String(index + 1).padStart(2, "0")}</span>
			</div>
			<div className="product-card__body">
				<h3>{product.name}</h3>
				<p>{product.description}</p>
			</div>
		</article>
	);
}

export function Products({ products }: ProductsProps) {
	return (
		<section
			aria-labelledby="products-title"
			className="section products"
			id="products"
		>
			<div className="site-container">
				<div className="section-heading section-heading--split">
					<div>
						<p className="eyebrow eyebrow--blue">WHAT WE&apos;RE BUILDING</p>
						<h2 id="products-title">2026–2027 PRODUCTS</h2>
					</div>
					<p>
						Four teams. Four original ideas. One year to turn ambitious problems
						into products people love.
					</p>
				</div>

				<div className="product-grid">
					{products.map((product, index) => (
						<ProductCard index={index} key={product.name} product={product} />
					))}
				</div>
			</div>
		</section>
	);
}
