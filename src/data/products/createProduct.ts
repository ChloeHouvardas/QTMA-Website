import type { Product, ProductMember } from "./types";

const mockTeamMembers: ProductMember[] = [
	{ name: "Person 1", role: "Team Member" },
	{ name: "Person 2", role: "Team Member" },
	{ name: "Person 3", role: "Team Member" },
	{ name: "Person 4", role: "Team Member" },
	{ name: "Person 5", role: "Team Member" },
	{ name: "Person 6", role: "Team Member" },
	{ name: "Person 7", role: "Team Member" },
	{ name: "Person 8", role: "Team Member" },
];

type ProductDetails = Omit<Product, "logo" | "pitch" | "slug" | "teamPhoto"> & {
	assetName?: string;
	hasPitch?: boolean;
	hasTeamPhoto?: boolean;
	slug?: string;
};

export function createProduct({
	assetName,
	hasPitch = true,
	hasTeamPhoto = true,
	slug,
	...product
}: ProductDetails): Product {
	const productAssetName = assetName ?? product.name;
	const assetPath = `/assets/Products/${product.year}/${productAssetName}`;

	return {
		...product,
		members: product.members ?? mockTeamMembers,
		slug: slug ?? product.name.toLowerCase(),
		logo: `${assetPath}_Logo.png`,
		pitch: hasPitch ? `${assetPath}_Pitch.pdf` : undefined,
		teamPhoto: hasTeamPhoto
			? {
					src: `${assetPath}_Team.png`,
					alt: `${product.name} team`,
				}
			: undefined,
	};
}
