export type ProductSummary = {
	name: string;
	description: string;
	imageAlt: string;
};

export type ValueItem = {
	number: string;
	title: string;
	description: string;
};

export const products: ProductSummary[] = [
	{
		name: "Astro",
		description: "Product description coming soon.",
		imageAlt: "Placeholder artwork for the Astro student planning product",
	},
	{
		name: "Trevo",
		description: "Product description coming soon.",
		imageAlt: "Placeholder artwork for the Trevo social travel product",
	},
	{
		name: "Plotd",
		description: "Product description coming soon.",
		imageAlt: "Placeholder artwork for the Plotd social planning product",
	},
	{
		name: "bons.ai",
		description: "Product description coming soon.",
		imageAlt:
			"Placeholder artwork for the bons.ai personalized guidance product",
	},
];

export const values: ValueItem[] = [
	{
		number: ".01",
		title: "Be curious.",
		description:
			"We ask better questions, stay open to unfamiliar ideas, and never stop looking for a more thoughtful way forward.",
	},
	{
		number: ".02",
		title: "Build boldly.",
		description:
			"We turn ambitious thinking into tangible work, learning quickly and treating every challenge as a chance to improve.",
	},
	{
		number: ".03",
		title: "Grow together.",
		description:
			"Our best work crosses disciplines. We listen generously, share what we know, and make the people around us better.",
	},
	{
		number: ".04",
		title: "Create impact.",
		description:
			"We measure ideas by the people they serve and build with intention, care, and the courage to make a meaningful difference.",
	},
];
