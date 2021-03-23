module.exports = {
	theme: {
		fontSize: {
			12: "0.75rem",
			14: "0.875rem",
			16: "1rem",
			18: "1.125rem",
			20: "1.25rem",
			22: "1.375rem",
			24: "1.5rem",
			28: "1.75rem",
			32: "2rem",
		},
		// lineClamp: {
		//   1: 1,
		//   2: 2,
		//   3: 3,
		// },
		extend: {
			colors: {
				text: "var(--color-text)",
				textContrast: "var(--color-text-contrast)",
				textSubtle: "var(--color-text-subtle)",
				bg: "var(--color-bg)",
				bgOffset: "var(--color-bg-offset)",
				bgContrast: "var(--color-bg-contrast)",
				bgContrast80: "var(--color-bg-contrast-80)",
				primary: "var(--color-primary)",
				primaryOffset: "var(--color-primary-offset)",
				secondary: "var(--color-secondary)",
			},
			fontFamily: {
				var: ["Recursive", "sans-serif"],
			},
			gridTemplateColumns: {
				grid: "1fr minmax(0, 8ch) min(65ch, 100%) minmax(0, 8ch) 1fr;",
			},
			maxWidth: {
				"65ch": "65ch",
			},
		},
	},
	variants: {
		extend: {
			ringColor: ["hover", "active"],
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
	],
	purge:
		process.env.NODE_ENV === "production"
			? {
					enabled: true,
					content: ["src/**/*.njk", "src/**/*.js", "src/**/*.md"],
			  }
			: {},
};
