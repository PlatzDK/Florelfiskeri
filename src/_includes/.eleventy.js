const translations = require("./src/_data/translations.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("t", (key, lang) =>
    (lang && translations[lang] && translations[lang][key]) || key
  );

  // Kopiér statiske aktiver
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "docs" },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
