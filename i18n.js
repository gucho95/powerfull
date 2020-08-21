const NextI18Next = require("next-i18next").default;
const path = require("path");

module.exports = new NextI18Next({
  defaultLanguage: "hy",
  otherLanguages: ["en", "ru"],
  localeSubpaths: {
    ru: "ru",
    en: "en",
  },
  localePath: path.resolve("./public/locales"),
});
