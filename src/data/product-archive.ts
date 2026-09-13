export type ProductArchiveItem = {
	name: string;
	slug: string;
	year: string;
	slogan: string;
	logo: string;
	pitch: string;
	teamPhoto?: string;
	overview?: string;
};

type ProductDetails = {
	year: string;
	name: string;
	slogan: string;
	overview?: string;
	hasTeamPhoto?: boolean;
};

function createProduct({
	year,
	name,
	slogan,
	overview,
	hasTeamPhoto = true,
}: ProductDetails): ProductArchiveItem {
	const assetPath = `/assets/Products/${year}/${name}`;

	return {
		name,
		slug: name.toLowerCase(),
		year,
		slogan,
		logo: `${assetPath}_Logo.png`,
		pitch: `${assetPath}_Pitch.pdf`,
		teamPhoto: hasTeamPhoto ? `${assetPath}_Team.png` : undefined,
		overview,
	};
}

export const productYears = [
	"2024-2025",
	"2023-2024",
	"2022-2023",
	"2021-2022",
	"2020-2021",
	"2019-2020",
] as const;

export const archiveProducts: ProductArchiveItem[] = [
	createProduct({
		year: "2024-2025",
		name: "Nucleus",
		slogan: "Stop procrastinating and start working",
		overview:
			"As academic workloads become increasingly complex, students struggle to synthesize critical information scattered across multiple syllabi, platforms, and calendars. Nucleus centralizes academic life in one actionable, personalized dashboard so students can stay organized and focused.",
	}),
	createProduct({
		year: "2024-2025",
		name: "Inquiro",
		slogan: "Data-driven investment tool for retail investors",
		overview:
			"Inquiro makes financial research more approachable. Its data-powered search helps retail investors ask questions about public companies in natural language and receive clear, synthesized answers from otherwise fragmented information.",
	}),
	createProduct({
		year: "2024-2025",
		name: "Fujiplans",
		slogan: "Giving educators their time back",
		overview:
			"FujiPlans is an AI-powered collaborative platform that streamlines lesson planning and curriculum alignment. It reduces repetitive administrative work so educators can spend more time teaching and engaging with students.",
	}),
	createProduct({
		year: "2024-2025",
		name: "Lilchef",
		slogan: "Your go-to kitchen companion",
		overview:
			"Lil'Chef helps young adults build confidence in the kitchen through personalized meal discovery, planning, and guided cooking assistance tailored to their dietary needs and goals.",
	}),
	createProduct({
		year: "2023-2024",
		name: "Dilliad",
		slogan: "Your AI-powered personal stylist",
	}),
	createProduct({
		year: "2023-2024",
		name: "Pantree",
		slogan: "Never waste food again",
	}),
	createProduct({
		year: "2023-2024",
		name: "Orah",
		slogan: "Reclaim your time, earn rewards",
	}),
	createProduct({
		year: "2023-2024",
		name: "Parki",
		slogan: "Finding parking, made easy",
	}),
	createProduct({
		year: "2022-2023",
		name: "Feastly",
		slogan: "Let's feast on something delicious",
	}),
	createProduct({
		year: "2022-2023",
		name: "Kartt",
		slogan: "Shop smart with Kartt",
	}),
	createProduct({
		year: "2022-2023",
		name: "Sift",
		slogan: "Choose the gift you want, stress free",
	}),
	createProduct({
		year: "2022-2023",
		name: "Venato",
		slogan: "Helping students reach their full potential",
	}),
	createProduct({
		year: "2021-2022",
		name: "Casa",
		slogan: "Making the roommate finding process as easy as possible",
	}),
	createProduct({
		year: "2021-2022",
		name: "Haus",
		slogan: "Helping Hausmates collaborate and save on groceries",
	}),
	createProduct({
		year: "2021-2022",
		name: "Loco",
		slogan: "The travel app for true Locos",
	}),
	createProduct({
		year: "2021-2022",
		name: "Soar",
		slogan: "Find teammates to build your next side project",
	}),
	createProduct({
		year: "2020-2021",
		name: "Eagle",
		slogan: "Your delivery service companion",
		hasTeamPhoto: false,
	}),
	createProduct({
		year: "2020-2021",
		name: "Pronto",
		slogan: "Convenient lending for everyone",
		hasTeamPhoto: false,
	}),
	createProduct({
		year: "2020-2021",
		name: "Voluntera",
		slogan: "The one-stop shop for social impact",
		hasTeamPhoto: false,
	}),
	createProduct({
		year: "2020-2021",
		name: "Loop",
		slogan: "Authentic connections with good friends",
		hasTeamPhoto: false,
	}),
	createProduct({
		year: "2019-2020",
		name: "Hungover",
		slogan: "Taking your pregame to the next level",
	}),
	createProduct({
		year: "2019-2020",
		name: "Studii",
		slogan: "Academic collaboration at your fingertips",
	}),
	createProduct({
		year: "2019-2020",
		name: "Wob",
		slogan: "Get the latest word on the street",
	}),
	createProduct({
		year: "2019-2020",
		name: "Stocked",
		slogan: "The best a fridge can get",
	}),
];

export function getProduct(year: string, slug: string) {
	return archiveProducts.find(
		(product) => product.year === year && product.slug === slug,
	);
}
