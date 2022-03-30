module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			display: ["Titillium Web", "sans-serif"],
			body: ["Poppins", "sans-serif"],
		},
		boxShadow: {
			md: "-1px -1px 30px -9px rgba(8,253,216,0.75)",
			none: "none",
		},
		extend: {
			colors: {
				back: "#1d1d1d",
				text: "#08FDD8",
				nav: "#151617",
			},
		},
	},
	variants: {
		extend: {
			width: ["responsive", "hover", "focus"],
		},
	},
	plugins: [],
};
