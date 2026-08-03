import { defineConfig } from "tsup";

export default defineConfig({
	entry: [
		"src/index.ts",
		"src/reset.ts",
		"src/tokens.ts",
		"src/theme.ts",
		"src/styles.ts",
	],
	format: ["esm", "cjs"],
	dts: true,
	sourcemap: true,
	splitting: false,
	shims: true,
	outDir: "dist",
	esbuildOptions(options) {
		options.loader = {
			...options.loader,
			".css": "local-css",
			".module.css": "local-css",
		};
	},
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
});
