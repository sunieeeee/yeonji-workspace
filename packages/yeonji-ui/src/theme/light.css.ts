import { createTheme } from "@vanilla-extract/css";
import { vars } from "./contract.css";
import { primitive } from "./primitive.css";

export const lightTheme = createTheme(vars, {
	color: {
		surface: {
			page: primitive.color.gray[50],
			default: primitive.color.white,
			subtle: primitive.color.gray[100],
			elevated: primitive.color.white,
			hover: primitive.color.gray[50],
			active: primitive.color.gray[100],
			disabled: primitive.color.gray[200],
		},
		text: {
			default: primitive.color.gray[900],
			muted: primitive.color.gray[600],
			subtle: primitive.color.gray[500],
			inverse: primitive.color.white,
			disabled: primitive.color.gray[400],
			placeholder: primitive.color.gray[400],
		},
		border: {
			default: primitive.color.gray[200],
			strong: primitive.color.gray[300],
			active: primitive.color.gray[400],
			hover: primitive.color.gray[300],
			disabled: primitive.color.gray[200],
			focus: primitive.color.primary[500],
		},
		action: {
			primary: {
				default: primitive.color.primary[500],
				hover: primitive.color.primary[600],
				active: primitive.color.primary[700],
				disabled: primitive.color.gray[300],
			},
		},
		feedback: {
			success: primitive.color.success[500],
			warning: primitive.color.warning[500],
			danger: primitive.color.danger[500],
			info: primitive.color.info[500],
		},
	},
});
