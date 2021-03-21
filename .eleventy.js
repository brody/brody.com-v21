const filters = require("./utils/filters.js");
const transforms = require("./utils/transforms.js");
const collections = require("./utils/collections.js");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const image = require("@11ty/eleventy-img");
const svgContents = require("eleventy-plugin-svg-contents");
const fs = require("fs");

async function imageShortcode(src, alt, sizes) {
	let metadata = await Image(src, {
		widths: [300, 600],
		formats: ["avif", "jpeg"],
	});

	let imageAttributes = {
		alt,
		sizes,
		loading: "lazy",
		decoding: "async",
	};

	// You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
	return image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
	// syntaxHighlight plugin
	eleventyConfig.addPlugin(syntaxHighlight, {
		templateFormats: ["njk", "md"],
	});
	eleventyConfig.addPlugin(svgContents);

	// eleventy-img shortcodes
	// eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
	// eleventyConfig.addLiquidShortcode("image", imageShortcode);
	// eleventyConfig.addJavaScriptFunction("image", imageShortcode);

	eleventyConfig.addNunjucksAsyncShortcode("image", async (src, alt) => {
		if (!alt) {
			throw new Error(`Missing \`alt\` on myImage from: ${src}`);
		}

		let stats = await Image(src, {
			widths: [25, 320, 640, 960, 1024],
			formats: ["jpeg"],
			urlPath: "/static/",
			outputDir: "./dist/static/",
		});

		let lowestSrc = stats["jpeg"][0];

		const srcset = Object.keys(stats).reduce(
			(acc, format) => ({
				...acc,
				[format]: stats[format].reduce(
					(_acc, curr) => `${_acc} ${curr.srcset} ,`,
					""
				),
			}),
			{}
		);

		const source = `<source type="image/jpeg" data-srcset="${srcset["jpeg"]}" >`;

		const img = `<img class="lazy w-full" 
                            alt="${alt}"
                            src = "${lowestSrc.url}"
                            data-src="${lowestSrc.url}"
                            data-sizes='(min-width: 1024px) 1024px, 100vw'
                            data-srcset="${srcset["jpeg"]}"
                            width="${lowestSrc.width}"
                            height="${lowestSrc.height}">`;

		return `<picture> ${source} ${img} </picture>`;
	});

	// Folders to copy to build dir (See. 1.1)
	eleventyConfig.addPassthroughCopy("src/static");
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy("src/notes/assets");

	// Filters
	Object.keys(filters).forEach((filterName) => {
		eleventyConfig.addFilter(filterName, filters[filterName]);
	});

	// Transforms
	Object.keys(transforms).forEach((transformName) => {
		eleventyConfig.addTransform(transformName, transforms[transformName]);
	});

	// Collections
	Object.keys(collections).forEach((collectionName) => {
		eleventyConfig.addCollection(collectionName, collections[collectionName]);
	});

	// This allows Eleventy to watch for file changes during local development.
	eleventyConfig.setUseGitIgnore(false);

	// Excerpt
	eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
		// Optional, default is "---"
		excerpt_separator: "~~",
	});

	eleventyConfig.setLibrary(
		"md",
		markdownIt({
			html: true,
			breaks: true,
			linkify: true,
		}).use(require("markdown-it-prism"))
	);

	eleventyConfig.addFilter("md", function (content = "") {
		return markdownIt({ html: true }).render(content);
	});

	eleventyConfig.setBrowserSyncConfig({
		callbacks: {
			ready: function (err, bs) {
				bs.addMiddleware("*", (req, res) => {
					const content_404 = fs.readFileSync("dist/404.html");
					// Add 404 http status code in request header.
					res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
					// Provides the 404 content without redirect.
					res.write(content_404);
					res.end();
				});
			},
		},
	});

	return {
		dir: {
			input: "src/",
			output: "dist",
			includes: "_includes",
			layouts: "_layouts",
		},
		templateFormats: ["html", "md", "njk"],
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",

		// 1.1 Enable eleventy to pass dirs specified above
		passthroughFileCopy: true,
	};
};
