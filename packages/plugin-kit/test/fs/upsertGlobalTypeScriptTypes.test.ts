import { expect, it, TestContext } from "vitest";
import { generateTypes, GenerateTypesConfig } from "prismic-ts-codegen";
import prettier from "prettier";
import { createMockFactory } from "@prismicio/mock";
import * as fs from "node:fs/promises";
import * as path from "node:path";

import { createMemoryAdapter } from "../__testutils__/createMemoryAdapter";
import { replaceTestAdapter } from "../__testutils__/replaceTestAdapter";

import { upsertGlobalTypeScriptTypes } from "../../src/fs";

/**
 * !!! DO NOT use this mock factory in tests !!!
 *
 * @remarks
 * Its seed is not specific to be used outside the most general cases.
 */
const mock = createMockFactory({ seed: import.meta.url });

const customTypeModels = [mock.model.customType()];
const sliceLibraries = [
	{
		id: "./slices",
		models: [mock.model.sharedSlice()],
	},
];
const sharedSliceModels = sliceLibraries.flatMap((library) => library.models);

type ExpectGlobalTypeScriptTypesArgs = {
	generateTypesConfig?: GenerateTypesConfig;
	format: boolean;
};

const expectGlobalTypeScriptTypes = async (
	ctx: TestContext,
	args: ExpectGlobalTypeScriptTypesArgs,
): Promise<void> => {
	const contents = await fs.readFile(
		path.join(ctx.project.root, "prismicio-types.d.ts"),
		"utf8",
	);

	let generatedTypes = generateTypes({
		...args.generateTypesConfig,
		clientIntegration: {
			includeCreateClientInterface: true,
			includeContentNamespace: true,
			...args.generateTypesConfig?.clientIntegration,
		},
	});
	generatedTypes = `// Code generated by Slice Machine. DO NOT EDIT.\n\n${generatedTypes}`;

	if (args.format) {
		expect(contents).toBe(
			await prettier.format(generatedTypes, { parser: "typescript" }),
		);
	} else {
		expect(contents).toBe(generatedTypes);
	}
};

it("contains TypeScript types for the model", async (ctx) => {
	await replaceTestAdapter(ctx, {
		adapter: createMemoryAdapter({ customTypeModels, sliceLibraries }),
	});

	await upsertGlobalTypeScriptTypes({
		actions: ctx.pluginRunner.rawActions,
		helpers: ctx.pluginRunner.rawHelpers,
	});

	await expectGlobalTypeScriptTypes(ctx, {
		generateTypesConfig: {
			customTypeModels,
			sharedSliceModels,
		},
		format: false,
	});
});

it("formats the output if formatting is enabled", async (ctx) => {
	await replaceTestAdapter(ctx, {
		adapter: createMemoryAdapter({ customTypeModels, sliceLibraries }),
	});

	await upsertGlobalTypeScriptTypes({
		actions: ctx.pluginRunner.rawActions,
		helpers: ctx.pluginRunner.rawHelpers,
		format: true,
	});

	await expectGlobalTypeScriptTypes(ctx, {
		generateTypesConfig: {
			customTypeModels,
			sharedSliceModels,
		},
		format: true,
	});
});

it("uses @prismicio/types types provider if no types provider is detected", async (ctx) => {
	await replaceTestAdapter(ctx, {
		adapter: createMemoryAdapter({ customTypeModels, sliceLibraries }),
	});

	await upsertGlobalTypeScriptTypes({
		actions: ctx.pluginRunner.rawActions,
		helpers: ctx.pluginRunner.rawHelpers,
	});

	await expectGlobalTypeScriptTypes(ctx, {
		generateTypesConfig: {
			customTypeModels,
			sharedSliceModels,
			typesProvider: "@prismicio/types",
		},
		format: false,
	});
});

it("uses @prismicio/client types provider if @prismicio/client@>=7 is detected", async (ctx) => {
	await fs.mkdir(
		path.join(ctx.project.root, "node_modules/@prismicio/client"),
		{ recursive: true },
	);
	await fs.writeFile(
		path.join(ctx.project.root, "node_modules/@prismicio/client/package.json"),
		JSON.stringify({
			name: "@prismicio/client",
			version: "7.0.0",
		}),
	);

	await replaceTestAdapter(ctx, {
		adapter: createMemoryAdapter({ customTypeModels, sliceLibraries }),
	});

	await upsertGlobalTypeScriptTypes({
		actions: ctx.pluginRunner.rawActions,
		helpers: ctx.pluginRunner.rawHelpers,
	});

	await expectGlobalTypeScriptTypes(ctx, {
		generateTypesConfig: {
			customTypeModels,
			sharedSliceModels,
			typesProvider: "@prismicio/client",
		},
		format: false,
	});
});

it("uses @prismicio/types types provider if @prismicio/client@>=7 cannot be resolved and @prismicio/types can be resolved", async (ctx) => {
	await fs.mkdir(path.join(ctx.project.root, "node_modules/@prismicio/types"), {
		recursive: true,
	});
	await fs.writeFile(
		path.join(ctx.project.root, "node_modules/@prismicio/types/package.json"),
		JSON.stringify({ name: "@prismicio/types" }),
	);

	await replaceTestAdapter(ctx, {
		adapter: createMemoryAdapter({ customTypeModels, sliceLibraries }),
	});

	await upsertGlobalTypeScriptTypes({
		actions: ctx.pluginRunner.rawActions,
		helpers: ctx.pluginRunner.rawHelpers,
	});

	await expectGlobalTypeScriptTypes(ctx, {
		generateTypesConfig: {
			customTypeModels,
			sharedSliceModels,
			typesProvider: "@prismicio/types",
		},
		format: false,
	});
});
