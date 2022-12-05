import { defineConfig } from "vite";
import sdk from "vite-plugin-sdk";

export default defineConfig({
	plugins: [
		sdk({
			internalDependencies: ["devalue", "fp-ts", "get-port", "node-fetch"],
		}),
	],
	build: {
		lib: {
			entry: {
				index: "./src/index.ts",
				client: "./src/client.ts",
			},
		},
	},
	test: {
		coverage: {
			reporter: ["lcovonly", "text"],
		},
		setupFiles: ["./test/__setup__"],
	},
});
