import { createProduct } from "../createProduct";

export const trevo = createProduct({
	year: "2025-2026",
	name: "Trevo",
	slogan: "Explore, plan, and share travel",
	logo: "/assets/Products/2025-2026/trevo_logo.svg",
	hasPitch: false,
	pitch: "/assets/Products/2025-2026/trevo_pitch_deck.pdf",
	teamPhoto: {
		src: "/assets/Products/2025-2026/trevo_team_photo.JPG",
		alt: "Trevo team",
	},
	overview:
		"Trevo re-imagines the way you travel by combining exploring, planning, and sharing into one loop.",
});
