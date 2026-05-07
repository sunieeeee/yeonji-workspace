import { rmSync } from "node:fs";
import { spawn } from "node:child_process";
import process from "node:process";
import { build, context } from "esbuild";

const watchMode = process.argv.includes("--watch");
const componentEntryPoints = ["src/index.ts"];
const styleEntryPoints = [
	"src/reset.ts",
	"src/tokens.ts",
	"src/theme.ts",
	"src/styles.ts",
];

const allEntryPoints = [
	"src/index.ts",
	"src/reset.ts",
	"src/tokens.ts",
	"src/theme.ts",
	"src/styles.ts",
];

const sharedOptions = {
	outdir: "dist",
	bundle: true,
	splitting: false,
	sourcemap: true,
	platform: "node",
	target: "es2020",
	entryNames: "[name]",
	assetNames: "[name]",
	loader: {
		".css": "css",
		".module.css": "local-css",
	},
	external: [
		"react",
		"react-dom",
		"react/jsx-runtime",
		"react/jsx-dev-runtime",
	],
	logLevel: "info",
};

function createBuildOptions(entryPoints, overrides = {}) {
	return {
		...sharedOptions,
		entryPoints,
		...overrides,
	};
}

function runTsc(args) {
	return new Promise((resolve, reject) => {
		const child = spawn(
			process.platform === "win32" ? "pnpm.cmd" : "pnpm",
			["exec", "tsc", "-p", "tsconfig.json", ...args],
			{ stdio: "inherit" },
		);

		child.on("exit", (code) => {
			if (code === 0) {
				resolve(child);
				return;
			}

			reject(new Error(`tsc exited with code ${code ?? 1}`));
		});

		child.on("error", reject);
	});
}

async function buildOnce() {
	rmSync("dist", { recursive: true, force: true });

	await build(createBuildOptions(componentEntryPoints, { format: "esm" }));
	await build(createBuildOptions(styleEntryPoints, { format: "esm" }));

	await build(
		createBuildOptions(componentEntryPoints, {
			format: "cjs",
			outExtension: { ".js": ".cjs" },
		}),
	);
	await build(
		createBuildOptions(styleEntryPoints, {
			format: "cjs",
			outExtension: { ".js": ".cjs" },
		}),
	);

	await runTsc(["--emitDeclarationOnly"]);
}

async function watch() {
	rmSync("dist", { recursive: true, force: true });

	const esmIndexContext = await context(
		createBuildOptions(componentEntryPoints, { format: "esm" }),
	);
	const esmStylesContext = await context(
		createBuildOptions(styleEntryPoints, { format: "esm" }),
	);
	const cjsIndexContext = await context(
		createBuildOptions(componentEntryPoints, {
			format: "cjs",
			outExtension: { ".js": ".cjs" },
		}),
	);
	const cjsStylesContext = await context(
		createBuildOptions(styleEntryPoints, {
			format: "cjs",
			outExtension: { ".js": ".cjs" },
		}),
	);

	await esmIndexContext.watch();
	await esmStylesContext.watch();
	await cjsIndexContext.watch();
	await cjsStylesContext.watch();

	const tscWatcher = spawn(
		process.platform === "win32" ? "pnpm.cmd" : "pnpm",
		[
			"exec",
			"tsc",
			"-p",
			"tsconfig.json",
			"--emitDeclarationOnly",
			"--watch",
			"--preserveWatchOutput",
		],
		{ stdio: "inherit" },
	);

	const shutdown = async () => {
		tscWatcher.kill("SIGTERM");
		await esmIndexContext.dispose();
		await esmStylesContext.dispose();
		await cjsIndexContext.dispose();
		await cjsStylesContext.dispose();
		process.exit(0);
	};

	process.on("SIGINT", shutdown);
	process.on("SIGTERM", shutdown);
}

if (watchMode) {
	watch().catch((error) => {
		console.error(error);
		process.exit(1);
	});
} else {
	buildOnce().catch((error) => {
		console.error(error);
		process.exit(1);
	});
}
