import { createProduct } from "../createProduct";

export const astro = createProduct({
	year: "2025-2026",
	name: "Astro",
	slogan: "Content creation, streamlined",
	logo: "/assets/Products/2025-2026/astro_logo.svg",
	hasPitch: false,
	pitch: "/assets/Products/2025-2026/astro_pitch_deck.pdf",
	teamPhoto: {
		src: "/assets/Products/2025-2026/astro_team_photo.JPG",
		alt: "Astro team",
	},
	overview:
		"Astro is a cost-effective content management platform that streamlines the content creation process for early-stage founders and creators.",
});
