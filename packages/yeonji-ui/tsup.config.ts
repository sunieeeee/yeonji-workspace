import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
export default defineConfig({
	// 어떤 소스 파일부터 빌드 시작할지
	entry: ["src/index.ts", "src/reset.ts"],

	// 결과물을 ESM(import)과 CJS(require) 두 형식으로 각각 생성
	format: ["esm", "cjs"],

	// .d.ts 타입 선언 파일도 같이 생성
	dts: true,
	sourcemap: true,
	splitting: false,
	shims: true,

	// 결과물을 dist 폴더에 넣기
	outDir: "dist",
	external: [
		"react",
		"react-dom",
		"react/jsx-runtime",
		"react/jsx-dev-runtime",
	],
	outExtension({ format }) {
		return {
			js: format === "cjs" ? ".cjs" : ".js",
		};
	},

	// .css.ts 파일을 진짜 CSS로 뽑아내는 플러그인 끼워넣기
	esbuildPlugins: [vanillaExtractPlugin()],
});
