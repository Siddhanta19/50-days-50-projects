// const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		"index.html",
		"./src/**/*.{js,jsx,ts,tsx,vue,html}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {},
	},
	plugins: [require("tw-elements/dist/plugin")],
};
