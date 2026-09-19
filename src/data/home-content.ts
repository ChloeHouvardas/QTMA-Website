export type ProductSummary = {
	name: string;
	description: string;
	href: string;
	imageSrc: string;
	imageAlt: string;
	zoomImage?: boolean;
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
		href: "/products/2025-2026/astro",
		imageSrc: "/assets/Products/2025-2026/astro.png",
		imageAlt: "Astro",
		zoomImage: true,
	},
	{
		name: "Trevo",
		description:
			"Trevo re-imagines the way you travel by combining Exploring, Planning, and Sharing into one loop.",
		href: "/products/2025-2026/trevo",
		imageSrc: "/assets/Products/2025-2026/trevo.png",
		imageAlt: "Trevo",
	},
	{
		name: "Plotd",
		description:
			"A social challenge app turning open ended planning into side quests, helping people go out, and logging real experiences.",
		href: "/products/2025-2026/plotd",
		imageSrc: "/assets/Products/2025-2026/plotd.png",
		imageAlt: "Plotd",
	},
	{
		name: "bons.ai",
		description:
			"Offering a better way to learn languages through AI-powered personalized lessons grounded in real world scenarios.",
		href: "/products/2025-2026/bons-ai",
		imageSrc: "/assets/Products/2025-2026/bonsai.png",
		imageAlt: "bons.ai",
	},
];

export const values: ValueItem[] = [
	{
		number: ".01",
		title: "Real World Experience",
		description:
			"Work on products beyond the classroom. Collaborate with fellow student designers, developers, and product managers to bring ideas to life and create solutions used by real people.",
		imageSrc: "/assets/Visuals/home/real-world-experience.svg",
		imageAlt: "Product Development",
	},
	{
		number: ".02",
		title: "Mentorship & Growth",
		description:
			"Connect with students, alumni, and industry professionals passionate about technology and innovation. Build meaningful relationships and learn from experienced mentors.",
		imageSrc: "/assets/Visuals/home/mentorship-and-growth.svg",
		imageAlt: "Networking",
	},
	{
		number: ".03",
		title: "Cross Functional Teams",
		description:
			"Develop technical and professional skills through training, workshops, mentorship, and hands-on project work. Gain practical experience in design, development, and business analysis.",
		imageSrc: "/assets/Visuals/home/cross-functional-teams.svg",
		imageAlt: "Skill Enhancement",
	},
	{
		number: ".04",
		title: "Ownership & Impact",
		description:
			"Build a portfolio of real products that showcases your skills, collaboration, and impact. Graduate with tangible work you can confidently share with future employers.",
		imageSrc: "/assets/Visuals/home/ownership-and-impact.svg",
		imageAlt: "Ownership and Impact",
	},
];
