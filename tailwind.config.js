/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"regal-violet": "#8382EB",
				"navy-blue": "#264373",
				"light-violet": "#6765F0",
			},
		},
	},
	plugins: [],
};
