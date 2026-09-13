import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import ProductHero from "@/components/products/detail/ProductHero";
import ProductOverview from "@/components/products/detail/ProductOverview";
import ProductTeam from "@/components/products/detail/ProductTeam";
import { archiveProducts, getProduct } from "@/data/products";

type ProductPageProps = {
	params: {
		year: string;
		slug: string;
	};
};

export function generateStaticParams() {
	return archiveProducts.map((product) => ({
		year: product.year,
		slug: product.slug,
	}));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
	const product = getProduct(params.year, params.slug);

	if (!product) return {};

	return {
		title: `${product.name} | QTMA Products`,
		description: product.overview ?? product.slogan,
	};
}

export default function ProductPage({ params }: ProductPageProps) {
	const product = getProduct(params.year, params.slug);

	if (!product) notFound();

	return (
		<div id="top">
			<Header />
			<main>
				<div className="mx-auto w-full max-w-[1120px] px-5 pt-8 sm:px-8 sm:pt-10">
					<Link
						className="inline-flex text-sm text-[#777] transition-colors hover:text-qtmaBlue focus-visible:text-qtmaBlue"
						href="/products"
					>
						<span aria-hidden="true" className="mr-2">
							←
						</span>
						All products
					</Link>
				</div>

				<ProductHero product={product} />

				{product.overview || product.pitch ? (
					<ProductOverview
						heading={product.overviewHeading}
						name={product.name}
						overview={product.overview ?? product.slogan}
						pitch={product.pitch}
					/>
				) : null}

				{product.members?.length || product.teamPhoto ? (
					<ProductTeam
						members={product.members}
						name={product.name}
						teamPhoto={product.teamPhoto}
					/>
				) : null}
			</main>
		</div>
	);
}
