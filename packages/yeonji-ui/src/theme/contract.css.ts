import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
	color: {
		surface: {
			page: null,
			default: null,
			subtle: null,
			elevated: null,
		},
		text: {
			default: null,
			muted: null,
			subtle: null,
			inverse: null,
			disabled: null,
			placeholder: null,
		},
		border: {
			default: null,
			strong: null,
		},
		action: {
			primary: {
				default: null,
				hover: null,
				active: null,
				disabled: null,
			},
		},
		feedback: {
			success: null,
			warning: null,
			danger: null,
			info: null,
		},
	},
});
