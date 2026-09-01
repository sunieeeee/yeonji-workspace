import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
	color: {
		surface: {
			page: null,
			default: null,
			subtle: null,
			elevated: null,
			hover: null, // 추가
			active: null, // 추가
			disabled: null, // 추가
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
			hover: null, // 추가
			active: null, // 추가
			disabled: null, // 추가
			focus: null, // 추가
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
