import type { Product } from "./types";

type ProductDetails = Omit<Product, "logo" | "pitch" | "slug" | "teamPhoto"> & {
	assetName?: string;
	hasTeamPhoto?: boolean;
	slug?: string;
};

export function createProduct({
	assetName,
	hasTeamPhoto = true,
	slug,
	...product
}: ProductDetails): Product {
	const productAssetName = assetName ?? product.name;
	const assetPath = `/assets/Products/${product.year}/${productAssetName}`;

	return {
		...product,
		slug: slug ?? product.name.toLowerCase(),
		logo: `${assetPath}_Logo.png`,
		pitch: `${assetPath}_Pitch.pdf`,
		teamPhoto: hasTeamPhoto
			? {
					src: `${assetPath}_Team.png`,
					alt: `${product.name} team`,
				}
			: undefined,
	};
}
