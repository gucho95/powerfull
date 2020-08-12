import { useTranslation } from "../i18n";
export default function Privacy() {
  const [t, i18n] = useTranslation();
  console.log("i18nLanguage", i18n.language);
  return <div className='bg-white'>privacy</div>;
}
