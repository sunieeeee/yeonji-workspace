import { globalStyle } from "@vanilla-extract/css";

/**
 * Meyer Reset v2.0 기반
 * http://meyerweb.com/eric/tools/css/reset/
 * 모든 기본 여백/테두리/폰트 크기를 초기화
 */
globalStyle(
	`html, body, div, span, applet, object, iframe,
   h1, h2, h3, h4, h5, h6, p, blockquote, pre,
   a, abbr, acronym, address, big, cite, code,
   del, dfn, em, img, ins, kbd, q, s, samp,
   small, strike, strong, sub, sup, tt, var,
   b, u, i, center,
   dl, dt, dd, ol, ul, li,
   fieldset, form, label, legend,
   table, caption, tbody, tfoot, thead, tr, th, td,
   article, aside, canvas, details, embed, figure,
   figcaption, footer, header, hgroup, menu, nav,
   output, ruby, section, summary, time, mark, audio, video`,
	{
		margin: 0,
		padding: 0,
		border: 0,
		fontSize: "100%",
		font: "inherit",
		verticalAlign: "baseline",
	},
);

/**
 * HTML5 시맨틱 태그의 display 초기화
 * 구형 브라우저가 이 태그들을 인식 못 하고 inline 취급하는 걸 방지
 */
globalStyle(
	`article, aside, details, figcaption, figure,
   footer, header, hgroup, menu, nav, section`,
	{
		display: "block",
	},
);

/**
 * body 기본 line-height 초기화
 */
globalStyle("body", {
	lineHeight: 1,
});

/**
 * 리스트 마커 제거
 */
globalStyle("ol, ul", {
	listStyle: "none",
});

/**
 * blockquote, q 태그의 브라우저 기본 따옴표 제거
 */
globalStyle("blockquote, q", {
	quotes: "none",
});

globalStyle("blockquote::before, blockquote::after, q::before, q::after", {
	content: '""',
});

/**
 * 테이블 border 초기화
 */
globalStyle("table", {
	borderCollapse: "collapse",
	borderSpacing: 0,
});
