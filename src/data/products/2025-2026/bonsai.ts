import { createProduct } from "../createProduct";

export const bonsai = createProduct({
	year: "2025-2026",
	name: "bons.ai",
	slug: "bons-ai",
	slogan: "Language learning for real life",
	logo: "/assets/Products/2025-2026/bonsai_logo.svg",
	hasPitch: false,
	pitch: "/assets/Products/2025-2026/bonsai_pitch_deck.pdf",
	teamPhoto: {
		src: "/assets/Products/2025-2026/bonsai_team_photo.JPG",
		alt: "bons.ai team",
	},
	overview:
		"bons.ai offers a better way to learn languages through AI-powered personalized lessons grounded in real-world scenarios.",
});
