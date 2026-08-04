import { recipe } from "@vanilla-extract/recipes";
import { primitive } from "../../theme";

export const root = recipe({
	base: {
		display: "flex",
	},
	variants: {
		flexDirection: {
			row: {
				flexDirection: "row",
			},
			column: {
				flexDirection: "column",
			},
		},
		alignItems: {
			flexStart: {
				alignItems: "flex-start",
			},
			center: {
				alignItems: "center",
			},
			flexEnd: {
				alignItems: "flex-end",
			},
		},
		justifyContent: {
			flexStart: {
				justifyContent: "flex-start",
			},
			center: {
				justifyContent: "center",
			},
			flexEnd: {
				justifyContent: "flex-end",
			},
			spaceBetween: {
				justifyContent: "space-between",
			},
		},
		gap: {
			"0": { gap: primitive.spacing[0] },
			"1": { gap: primitive.spacing[1] },
			"2": { gap: primitive.spacing[2] },
			"3": { gap: primitive.spacing[3] },
			"4": { gap: primitive.spacing[4] },
			"5": { gap: primitive.spacing[5] },
			"6": { gap: primitive.spacing[6] },
			"7": { gap: primitive.spacing[7] },
			"8": { gap: primitive.spacing[8] },
			"10": { gap: primitive.spacing[10] },
			"12": { gap: primitive.spacing[12] },
		},
	},
});
