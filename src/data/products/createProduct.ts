import type { Product } from "./types";

type ProductDetails = Omit<Product, "logo" | "pitch" | "slug" | "teamPhoto"> & {
	assetName?: string;
	hasPitch?: boolean;
	hasTeamPhoto?: boolean;
	logo?: string;
	slug?: string;
};

export function createProduct({
	assetName,
	hasPitch = true,
	hasTeamPhoto = true,
	logo,
	slug,
	...product
}: ProductDetails): Product {
	const productAssetName = assetName ?? product.name;
	const assetPath = `/assets/Products/${product.year}/${productAssetName}`;

	return {
		...product,
		slug: slug ?? product.name.toLowerCase(),
		logo: logo ?? `${assetPath}_Logo.png`,
		pitch: hasPitch ? `${assetPath}_Pitch.pdf` : undefined,
		teamPhoto: hasTeamPhoto
			? {
					src: `${assetPath}_Team.png`,
					alt: `${product.name} team`,
				}
			: undefined,
	};
}
