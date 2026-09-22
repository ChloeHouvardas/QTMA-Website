import { archiveProducts, productYears } from "@/data/products";

import ProductArchiveGrid from "./ProductArchiveGrid";
import ProductYearNav from "./ProductYearNav";

type ProductArchiveProps = {
	selectedYear?: string;
};

export default function ProductArchive({
	selectedYear = productYears[0],
}: ProductArchiveProps) {
	const visibleProducts = archiveProducts.filter(
		(product) => product.year === selectedYear
	);

	return (
		<div className="mx-auto grid w-full max-w-[1296px] gap-8 px-5 pb-24 lg:grid-cols-[120px_minmax(0,1fr)_120px] lg:items-center lg:gap-14">
			<ProductYearNav selectedYear={selectedYear} />
			<ProductArchiveGrid products={visibleProducts} year={selectedYear} />
		</div>
	);
}
