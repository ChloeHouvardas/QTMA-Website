import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
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
			<main className="mx-auto w-full max-w-[1120px] px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
				<Link
					className="inline-flex text-sm text-[#777] transition-colors hover:text-qtmaBlue"
					href="/products"
				>
					&larr; All products
				</Link>

				<section className="mt-10 grid items-center gap-10 rounded-[28px] bg-white p-8 shadow-[0_7px_28px_rgba(0,0,0,0.13)] md:grid-cols-[220px_minmax(0,1fr)] md:p-12">
					<div className="relative mx-auto h-[180px] w-full max-w-[210px]">
						<Image
							alt={`${product.name} logo`}
							className="object-contain"
							fill
							priority
							sizes="210px"
							src={product.logo}
						/>
					</div>
					<div>
						<p className="m-0 text-sm font-medium text-qtmaBlue">
							{product.year}
						</p>
						<h1 className="mb-0 mt-2 text-5xl font-semibold leading-tight text-black sm:text-6xl">
							{product.name}
						</h1>
						<p className="mb-0 mt-4 text-xl font-light text-[#777]">
							{product.slogan}
						</p>
					</div>
				</section>

				<section className="mx-auto max-w-[850px] py-16">
					<h2 className="text-3xl font-semibold text-qtmaBlue">
						{product.overviewHeading ?? `About ${product.name}`}
					</h2>
					<p className="mt-5 text-lg font-light leading-8 text-[#555]">
						{product.overview ?? product.slogan}
					</p>
					<a
						className="mt-7 inline-flex rounded-full bg-qtmaBlue px-6 py-3 font-medium text-white transition-colors hover:bg-qtmaBlueDark"
						href={product.pitch}
						rel="noreferrer"
						target="_blank"
					>
						View pitch deck
					</a>
				</section>

				{product.teamPhoto ? (
					<section className="mx-auto max-w-[850px]">
						<h2 className="mb-6 text-3xl font-semibold text-qtmaBlue">
							Meet the team
						</h2>
						<Image
							alt={product.teamPhoto.alt}
							className="h-auto w-full rounded-[24px]"
							height={1333}
							sizes="(max-width: 900px) 100vw, 850px"
							src={product.teamPhoto.src}
							width={2000}
						/>
					</section>
				) : null}
			</main>
		</div>
	);
}
