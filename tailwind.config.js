/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		extend: {
			colors: {
				qtmaPrimaryDark: "#2C3357",
				qtmaPrimaryBlue: "#3576d3",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			padding: {
				0.5: "1px",
			},
		},
	},
};
