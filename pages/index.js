import { useEffect } from "react";
import Router from "next/router";

import i18nConfig from "../i18n";

const { defaultLanguage } = i18nConfig;

export default function Index() {
  console.log(defaultLanguage);
  useEffect(() => {
    Router.replace(`/${defaultLanguage}`);
  }, []);

  return null;
}
