const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
  ru: "ru",
  en: "en",
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
