"use client";

import { useState } from "react";

import { archiveProducts, productYears } from "@/data/products";

import ProductArchiveGrid from "./ProductArchiveGrid";
import ProductYearNav from "./ProductYearNav";

type ProductArchiveProps = {
	defaultYear?: string;
};

export default function ProductArchive({
	defaultYear = productYears[0],
}: ProductArchiveProps) {
	const [selectedYear, setSelectedYear] = useState(defaultYear);
	const visibleProducts = archiveProducts.filter(
		(product) => product.year === selectedYear
	);

	return (
		<div className="mx-auto grid w-full max-w-[1296px] gap-8 px-5 pb-24 lg:grid-cols-[120px_minmax(0,1fr)_120px] lg:items-center lg:gap-14">
			<ProductYearNav
				onYearChange={setSelectedYear}
				selectedYear={selectedYear}
			/>
			<ProductArchiveGrid products={visibleProducts} year={selectedYear} />
		</div>
	);
}
