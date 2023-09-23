//vite.config.ts
import { SearchPlugin } from "vitepress-plugin-search"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

//default options
var options = {
	//    ...flexSearchIndexOptions,
	previewLength: 62,
	buttonLabel: "Search",
	placeholder: "Search docs",
	allow: [],
	ignore: [],
}

export default {
	plugins: [
		SearchPlugin(options),
		AutoImport({
			include: [/\.vue$/, /\.md$/],
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			dirs: ["components"],
			include: [/\.vue$/, /\.md$/],
			resolvers: [ElementPlusResolver({ ssr: false })],
		}),
	],
	ssr: { noExternal: ["element-plus"] },
	css: {
		postcss: {
			plugins: [
				{
					postcssPlugin: "internal:charset-removal",
					AtRule: {
						charset: (atRule) => {
							if (atRule.name === "charset") {
								atRule.remove()
							}
						},
					},
				},
				require("tailwindcss"),
				require("autoprefixer"),
			],
		},
	},
}
