import { createThemeContract, createGlobalTheme } from "@vanilla-extract/css";
import { vars, primitive } from "../../theme";

export const fieldTokens = createThemeContract({
	border: {
		default: null,
		hover: null,
		active: null,
		disabled: null,
		focus: null,
	},
	bg: { default: null, hover: null, active: null, disabled: null },
	text: { default: null, placeholder: null, disabled: null },
	radius: null,
	height: { sm: null, md: null, lg: null },
	paddingInline: { sm: null, md: null, lg: null },
	shadowFocus: null,
});

// vars(semantic)를 참조만 함 — 값을 복사하지 않으므로 라이트/다크 전환에 그대로 따라감
createGlobalTheme(":root", fieldTokens, {
	border: {
		default: vars.color.border.default,
		hover: vars.color.border.hover,
		active: vars.color.border.active,
		disabled: vars.color.border.disabled,
		focus: vars.color.border.focus,
	},
	bg: {
		default: vars.color.surface.default,
		hover: vars.color.surface.hover,
		active: vars.color.surface.active,
		disabled: vars.color.surface.disabled,
	},
	text: {
		default: vars.color.text.default,
		placeholder: vars.color.text.placeholder,
		disabled: vars.color.text.disabled,
	},
	radius: primitive.radius.sm,
	height: {
		sm: primitive.controlHeight.sm,
		md: primitive.controlHeight.md,
		lg: primitive.controlHeight.lg,
	},
	paddingInline: {
		sm: primitive.spacing[2],
		md: primitive.spacing[3],
		lg: primitive.spacing[4],
	},
	shadowFocus: primitive.shadow.focus,
});
