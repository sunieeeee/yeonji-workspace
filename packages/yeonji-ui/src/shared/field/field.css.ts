import { recipe } from "@vanilla-extract/recipes";
import { primitive } from "../../theme";
import { fieldTokens } from "./field.tokens.css";

// 필드형 컴포넌트의 바깥 컨테이너 (border/bg/상태)
export const fieldRoot = recipe({
	base: {
		display: "inline-flex",
		alignItems: "center",
		width: "100%",
		maxWidth: "100%",
		boxSizing: "border-box",
		border: `1px solid ${fieldTokens.border.default}`,
		borderRadius: fieldTokens.radius,
		background: fieldTokens.bg.default,
		overflow: "hidden",
		transition: `border-color ${primitive.duration.base} ${primitive.easing.standard}, background-color ${primitive.duration.base} ${primitive.easing.standard}, box-shadow ${primitive.duration.base} ${primitive.easing.standard}`,
		selectors: {
			"&:hover": {
				borderColor: fieldTokens.border.hover,
				background: fieldTokens.bg.hover,
			},
			"&:active": {
				borderColor: fieldTokens.border.active,
				background: fieldTokens.bg.active,
			},
			"&:focus-within": {
				borderColor: fieldTokens.border.focus,
				boxShadow: fieldTokens.shadowFocus,
			},
			"&:has(:disabled)": {
				borderColor: fieldTokens.border.disabled,
				background: fieldTokens.bg.disabled,
				boxShadow: "none",
				cursor: "not-allowed",
			},
		},
	},
	variants: {
		size: {
			sm: { height: fieldTokens.height.sm },
			md: { height: fieldTokens.height.md },
			lg: { height: fieldTokens.height.lg },
		},
		cursor: {
			text: { cursor: "text" },
			pointer: { cursor: "pointer" },
		},
	},
	defaultVariants: { size: "md", cursor: "text" },
});

// input, button 등 필드 내부 네이티브 엘리먼트 리셋
export const fieldElement = recipe({
	base: {
		flex: 1,
		width: "100%",
		minWidth: 0,
		boxSizing: "border-box",
		height: "100%",
		border: 0,
		outline: 0,
		background: "transparent",
		color: fieldTokens.text.default,
		font: "inherit",
		selectors: {
			"&::placeholder": { color: fieldTokens.text.placeholder },
			"&:disabled": { color: fieldTokens.text.disabled, cursor: "not-allowed" },
		},
	},
	variants: {
		size: {
			sm: { paddingInline: fieldTokens.paddingInline.sm },
			md: { paddingInline: fieldTokens.paddingInline.md },
			lg: { paddingInline: fieldTokens.paddingInline.lg },
		},
	},
	defaultVariants: { size: "md" },
});
