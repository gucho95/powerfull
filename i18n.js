const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");

module.exports = new NextI18Next({
  defaultLanguage: "hy",
  otherLanguages: ["en", "ru"],
  localeSubpaths: {
    hy: "",
    ru: "ru",
    en: "en",
  },
  localePath: path.resolve("./public/locales"),
});
