import roster from "@/data/25-26-members/team-members";

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

type PortfolioId =
	| "co-chairs"
	| "developers"
	| "sr-developers"
	| "product-managers"
	| "ui-ux"
	| "sr-ui-ux"
	| "business-analysts"
	| "sr-business-analysts"
	| "operations";

type RosterMember = {
	name: string;
	role: string;
	group: PortfolioId;
	image?: string;
	email: string;
	program: string;
	years: string;
	linkedin: string;
	askMeAbout: string;
};

type GroupedTeamMember = TeamMember & { group: PortfolioId };

const toId = (name: string) =>
	name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");

const teamMembers = (roster as RosterMember[]).map<GroupedTeamMember>(
	(member) => ({
		askMeAbout: member.askMeAbout,
		email: member.email,
		group: member.group,
		id: toId(member.name),
		imageAlt: `${member.name} headshot`,
		imageSrc: member.image ? `/assets/Members/${member.image}` : undefined,
		linkedinUrl: member.linkedin,
		name: member.name,
		position: member.role,
		program: member.program,
		yearsWithQtma: member.years,
	})
);

const portfolioDefinitions: Array<Omit<TeamPortfolio, "members">> = [
	{ id: "co-chairs", isCoChairs: true, name: "Co-Chairs" },
	{ id: "operations", name: "Club Operations" },
	{ id: "product-managers", name: "Product Managers" },
	{ id: "sr-business-analysts", name: "Senior Business Analysts" },
	{ id: "sr-developers", name: "Senior Developers" },
	{ id: "sr-ui-ux", name: "Senior UI/UX Designers" },
	{ id: "business-analysts", name: "Business Analysts" },
	{ id: "developers", name: "Developers" },
	{ id: "ui-ux", name: "UI/UX Designers" },
];

export const teamPortfolios: TeamPortfolio[] = portfolioDefinitions.map(
	(portfolio) => ({
		...portfolio,
		members: teamMembers
			.filter((member) => member.group === portfolio.id)
			.map(({ group: _, ...member }) => member),
	})
);
