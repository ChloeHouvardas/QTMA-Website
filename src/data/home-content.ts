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
		description:
			"Astro is a cost-effective content management platform that streamlines the content creation process for early-stage founders and creators.",
		imageAlt: "Astro",
	},
	{
		name: "Trevo",
		description:
			"Trevo re-imagines the way you travel by combining Exploring, Planning, and Sharing into one loop.",
		imageAlt: "Trevo",
	},
	{
		name: "Plotd",
		description:
			"A social challenge app turning open ended planning into side quests, helping people go out, and logging real experiences.",
		imageAlt: "Plotd",
	},
	{
		name: "bons.ai",
		description:
			"Offering a better way to learn languages through AI-powered personalized lessons grounded in real world scenarios.",
		imageAlt: "bons.ai",
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
