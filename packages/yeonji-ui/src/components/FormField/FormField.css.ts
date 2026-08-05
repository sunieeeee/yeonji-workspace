import { recipe } from "@vanilla-extract/recipes";
import { primitive } from "../../theme";
import { vars } from "../../theme/contract.css";
export const root = recipe({
	base: {
		display: "flex",
		flexDirection: "column",
		gap: primitive.spacing[2],
		width: "fit-content",
		maxWidth: "100%",
		color: vars.color.text.default,
	},
	variants: {
		fullWidth: {
			true: {
				width: "100%",
			},
		},
		layout: {
			horizontal: {},
			vertical: {},
		},
		size: {},
	},
});
