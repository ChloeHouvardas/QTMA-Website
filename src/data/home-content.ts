export type ProductSummary = {
	name: string;
	description: string;
	imageSrc: string;
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
		imageSrc: "/assets/Products/2025-2026/astro.png",
		imageAlt: "Astro",
	},
	{
		name: "Trevo",
		description:
			"Trevo re-imagines the way you travel by combining Exploring, Planning, and Sharing into one loop.",
		imageSrc: "/assets/Products/2025-2026/trevo.png",
		imageAlt: "Trevo",
	},
	{
		name: "Plotd",
		description:
			"A social challenge app turning open ended planning into side quests, helping people go out, and logging real experiences.",
		imageSrc: "/assets/Products/2025-2026/plotd.png",
		imageAlt: "Plotd",
	},
	{
		name: "bons.ai",
		description:
			"Offering a better way to learn languages through AI-powered personalized lessons grounded in real world scenarios.",
		imageSrc: "/assets/Products/2025-2026/bonsai.png",
		imageAlt: "bons.ai",
	},
];

export const values: ValueItem[] = [
	{
		number: ".01",
		title: "Product Development",
		description:
			"Work on products beyond the classroom. Collaborate with fellow student designers, developers, and product managers to bring ideas to life and create solutions used by real people.",
		imageSrc: "/assets/Visuals/gear.svg",
		imageAlt: "Product Development",
	},
	{
		number: ".02",
		title: "Networking",
		description:
			"Connect with students, alumni, and industry professionals passionate about technology and innovation. Build meaningful relationships and learn from experienced mentors.",
		imageSrc: "/assets/Visuals/chain.svg",
		imageAlt: "Networking",
	},
	{
		number: ".03",
		title: "Skill Enhancement",
		description:
			"Develop technical and professional skills through training, workshops, mentorship, and hands-on project work. Gain practical experience in design, development, and business analysis.",
		imageSrc: "/assets/Visuals/dartboard.svg",
		imageAlt: "Skill Enhancement",
	},
	{
		number: ".04",
		title: "Portfolio Building",
		description:
			"Build a portfolio of real products that showcases your skills, collaboration, and impact. Graduate with tangible work you can confidently share with future employers.",
		imageSrc: "/assets/Visuals/portfolio.svg",
		imageAlt: "Portfolio Building",
	},
];
