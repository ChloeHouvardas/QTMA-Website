/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				qtmaBlue: "#2a61d5",
				qtmaBlueDark: "#17449f",
				qtmaInk: "#111111",
				qtmaOffWhite: "#f7f8fb",
				qtmaMuted: "#64676e",
				qtmaBorder: "#e2e2e2",
			},
			boxShadow: {
				qtma: "0 18px 50px rgba(15, 34, 72, 0.1)",
			},
		},
	},
	plugins: [],
};
