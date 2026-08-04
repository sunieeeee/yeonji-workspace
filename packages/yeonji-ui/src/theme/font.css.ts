import { globalFontFace } from "@vanilla-extract/css";

globalFontFace("Pretendard", {
	src: 'url(pretendard/dist/web/variable/woff2/PretendardVariable.woff2) format("woff2-variations")',
	fontWeight: "45 920", // 이 폰트가 지원하는 웨이트 범위
	fontStyle: "normal",
	fontDisplay: "swap",
});
