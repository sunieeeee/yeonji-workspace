// theme/base.css.ts
import { globalStyle } from "@vanilla-extract/css";
import { primitive } from "./primitive.css";
import { vars } from "./contract.css";

/**
 * 루트 폰트 설정
 * html의 font-size는 절대 고정하지 않음 (브라우저 기본값 16px 유지)
 * → 사용자 접근성 설정(브라우저 폰트 크기 조정)을 그대로 존중하기 위함
 */
globalStyle("html", {
	fontFamily: primitive.fontFamily.sans,
	WebkitTextSizeAdjust: "100%",
	scrollbarGutter: "stable",
});

/**
 * body 기본 텍스트/배경
 * color, backgroundColor는 semantic(vars) 참조
 * → light/dark 테마 전환 시 자동으로 같이 바뀜
 */
globalStyle("body", {
	fontSize: primitive.spacing[4], // 1rem = 16px, primitive 직접 참조
	color: vars.color.text.default,
	backgroundColor: vars.color.surface.page,
	WebkitFontSmoothing: "antialiased",
	MozOsxFontSmoothing: "grayscale",
});

/**
 * 헤딩 태그 기본 굵기
 * reset에서 font: inherit 처리했으므로 헤딩만 다시 굵게 지정
 */
globalStyle("h1, h2, h3, h4, h5, h6", {
	fontWeight: primitive.fontWeight.bold,
	color: vars.color.text.default,
});

/**
 * 강조 텍스트
 */
globalStyle("strong, b", {
	fontWeight: primitive.fontWeight.bold,
});

/**
 * 링크 기본 색상
 * semantic action 토큰 재사용 — 링크도 클릭 가능한 요소이므로 action 카테고리가 적절
 */
globalStyle("a", {
	color: vars.color.action.primary.default,
});

globalStyle("a:hover", {
	color: vars.color.action.primary.hover,
});

/**
 * 선택 영역(드래그로 텍스트 선택 시) 배경색
 */
globalStyle("::selection", {
	backgroundColor: vars.color.action.primary.default,
	color: vars.color.text.inverse,
});

globalStyle("*:focus:not(:focus-visible)", {
	outline: "none",
});

globalStyle("*:focus-visible", {
	outline: `2px solid ${vars.color.action.primary.default}`,
	outlineOffset: "2px",
});
