import { createGlobalTheme } from "@vanilla-extract/css";

export const primitive = createGlobalTheme(":root", {
	fontFamily: {
		sans: `"Pretendard", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Segoe UI", "Noto Sans KR", sans-serif`,
	},
	fontSize: {
		xs: "0.75rem", // 12px
		sm: "0.875rem", // 14px
		base: "1rem", // 16px
		lg: "1.125rem", // 18px
		xl: "1.5rem", // 24px
		xxl: "1.875rem", // 30px
	},

	fontWeight: {
		regular: "400",
		medium: "500",
		bold: "700",
	},

	lineHeight: {
		tight: "1.2",
		normal: "1.5",
		relaxed: "1.75",
	},
	color: {
		white: "#ffffff",
		black: "#0b1020",

		gray: {
			25: "#fcfcfd",
			50: "#f5f7fb",
			100: "#f1f5f9",
			200: "#e2e8f0",
			300: "#cbd5e1",
			400: "#a8b3c5",
			500: "#64748b",
			600: "#475569",
			700: "#334155",
			800: "#1e293b",
			900: "#172033",
		},

		primary: {
			25: "#fbfbff",
			50: "#f4f5ff",
			100: "#e8ebff",
			200: "#d5dcff",
			300: "#aebcff",
			400: "#8294ff",
			500: "#5f6ff2",
			600: "#4f46e5",
			700: "#4338ca",
			800: "#3730a3",
			900: "#312e81",
		},

		success: {
			50: "#ecfdf5",
			100: "#d1fae5",
			500: "#10b981",
			600: "#059669",
			700: "#047857",
		},
		warning: {
			50: "#fffbeb",
			100: "#fef3c7",
			500: "#f59e0b",
			600: "#d97706",
			700: "#b45309",
		},
		danger: {
			50: "#fff1f2",
			100: "#ffe4e6",
			500: "#f43f5e",
			600: "#e11d48",
			700: "#be123c",
		},
		info: {
			50: "#eff6ff",
			100: "#dbeafe",
			500: "#3b82f6",
			600: "#2563eb",
			700: "#1d4ed8",
		},
	},

	spacing: {
		0: "0px",
		1: "0.25rem",
		2: "0.5rem",
		3: "0.75rem",
		4: "1rem",
		5: "1.25rem",
		6: "1.5rem",
		7: "1.75rem",
		8: "2rem",
		10: "2.5rem",
		12: "3rem",
	},

	radius: {
		none: "0px",
		xs: "0.25rem",
		sm: "0.375rem",
		md: "0.5rem",
		lg: "0.75rem",
		xl: "1rem",
		"2xl": "1.25rem",
		full: "9999px",
	},

	shadow: {
		xs: "0 1px 2px rgba(15, 23, 42, 0.05)",
		sm: "0 4px 10px rgba(15, 23, 42, 0.06)",
		md: "0 12px 28px rgba(15, 23, 42, 0.1)",
		lg: "0 20px 48px rgba(15, 23, 42, 0.14)",
		focus: "0 0 0 3px rgba(95, 111, 242, 0.18)",
	},

	zIndex: {
		dropdown: "1000",
		popover: "1100",
		drawer: "1200",
		modal: "1300",
		toast: "1400",
	},

	duration: { fast: "120ms", base: "180ms", slow: "260ms" },
	easing: { standard: "cubic-bezier(0.2, 0, 0, 1)" },

	controlHeight: { sm: "30px", md: "34px", lg: "38px" },
});
