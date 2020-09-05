const NextI18Next = require("next-i18next").default;
const path = require("path");

module.exports = new NextI18Next({
  otherLanguages: ["ru", "hy", "en"],
  localeSubpaths: {
    ru: "ru",
    hy: "hy",
    en: "en",
  },
  localePath: path.resolve("./public/locales"),
  serverLanguageDetection: false,
  defaultLanguage: "en",
});
