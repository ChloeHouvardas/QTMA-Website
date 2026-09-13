import { Header } from "@/components/Header";
import ProductArchive from "@/components/products/ProductArchive";

export default function ProductsPage() {
	return (
		<div id="top">
			<Header />
			<main>
				<div className="mx-auto grid w-full max-w-[1296px] px-2 pt-20 sm:pt-24 lg:grid-cols-[120px_minmax(0,1fr)_120px] lg:gap-14">
					<h1 className="pb-16 text-center text-5xl font-semibold text-qtmaBlue sm:pb-20 sm:text-7xl lg:col-start-2">
						Products
					</h1>
				</div>
				<ProductArchive />
			</main>
		</div>
	);
}
