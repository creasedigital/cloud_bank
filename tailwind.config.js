const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xs: "500px",
			...defaultTheme.screens,
		},
		extend: {},
		colors: {
			navGreen: "#489494",
			deepNavGreen: "#008080",
			navRed: "#DB261B",
			bgColor: "#E5E5E5",
			grayOne: "#333333",
			activeNavColor: "#D7ECEC",
			white: "#FFFFFF",
			black: "#000000",
		},
	},
	plugins: [],
};
