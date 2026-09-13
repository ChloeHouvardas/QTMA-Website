export type ProductSummary = {
	name: string;
	description: string;
	imageAlt: string;
};

export type ValueItem = {
	number: string;
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
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
		title: "Real World Experience",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageSrc: "/assets/content-placeholder.svg",
		imageAlt: "",
	},
	{
		number: ".02",
		title: "Mentorship & Growth",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageSrc: "/assets/content-placeholder.svg",
		imageAlt: "",
	},
	{
		number: ".03",
		title: "Cross-Functional Teams",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageSrc: "/assets/content-placeholder.svg",
		imageAlt: "",
	},
	{
		number: ".04",
		title: "Ownership & Impact",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		imageSrc: "/assets/content-placeholder.svg",
		imageAlt: "",
	},
];
