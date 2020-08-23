const NextI18Next = require("next-i18next").default;
const path = require("path");

module.exports = new NextI18Next({
  otherLanguages: ["hy", "en", "ru"],
  localeSubpaths: {
    ru: "ru",
    en: "en",
  },
  localePath: path.resolve("./public/locales"),
  shallowRender: true,
});
