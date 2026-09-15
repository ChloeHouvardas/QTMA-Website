export type TeamMember = {
	id: string;
	name: string;
	position: string;
	imageSrc?: string;
	imageAlt?: string;
	program?: string;
	yearsWithQtma?: string;
	products?: string[];
	askMeAbout?: string;
	linkedinUrl?: string;
	email?: string;
};

export type TeamPortfolio = {
	id: string;
	name: string;
	members: TeamMember[];
	isCoChairs?: boolean;
};

const programs = ["COM '28", "CISC '27", "COMM '27", "COMP '28"];
const productPairs = [
	["Nucleus", "Inquiro"],
	["Fujiplans", "Pantree"],
	["Orah", "Parki"],
	["Dilliad", "Lilchef"],
];
const superlatives = [
	"their latest side project.",
	"the best study spots in Kingston.",
	"a very specific Spotify playlist.",
	"their favourite product teardown.",
];

const createMembers = (portfolioId: string, count: number): TeamMember[] =>
	Array.from({ length: count }, (_, index) => {
		const memberNumber = index + 1;
		const profileIndex = index % programs.length;
		const slug = `${portfolioId}-person-${memberNumber}`;

		return {
			askMeAbout: superlatives[profileIndex],
			email: `${slug}@example.com`,
			id: slug,
			imageAlt: "Simon Risk headshot",
			imageSrc: "/assets/Members/simonRisk.jpg",
			linkedinUrl: `https://www.linkedin.com/in/${slug}/`,
			name: `Person ${memberNumber}`,
			position: "Position",
			products: productPairs[profileIndex],
			program: programs[profileIndex],
			yearsWithQtma: String((index % 3) + 1),
		};
	});

export const teamPortfolios: TeamPortfolio[] = [
	{
		id: "co-chairs",
		isCoChairs: true,
		name: "Co-Chairs",
		members: createMembers("co-chairs", 4),
	},
	{
		id: "portfolio-2",
		name: "Portfolio 2",
		members: createMembers("portfolio-2", 4),
	},
	{
		id: "portfolio-3",
		name: "Portfolio 3",
		members: createMembers("portfolio-3", 4),
	},
	{
		id: "portfolio-4",
		name: "Portfolio 4",
		members: createMembers("portfolio-4", 4),
	},
	{
		id: "portfolio-5",
		name: "Portfolio 5",
		members: createMembers("portfolio-5", 4),
	},
	{
		id: "portfolio-6",
		name: "Portfolio 6",
		members: createMembers("portfolio-6", 9),
	},
	{
		id: "portfolio-7",
		name: "Portfolio 7",
		members: createMembers("portfolio-7", 8),
	},
];
