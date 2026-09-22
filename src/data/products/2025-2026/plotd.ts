import { createProduct } from "../createProduct";

export const plotd = createProduct({
	year: "2025-2026",
	name: "Plotd",
	slogan: "Turn plans into side quests",
	logo: "/assets/Products/2025-2026/plotd_logo.svg",
	hasPitch: false,
	pitch: "/assets/Products/2025-2026/plotd_pitch_deck.pdf",
	teamPhoto: {
		src: "/assets/Products/2025-2026/plotd_team_photo.JPG",
		alt: "Plotd team",
	},
	overview:
		"Plotd is a social challenge app that turns open-ended planning into side quests, helping people get out and log real experiences.",
});
