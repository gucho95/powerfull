import { useTranslation } from "../i18n";

const Privacy = () => {
  const [t, i18n] = useTranslation();
  console.log("i18nLanguage", i18n.language);
  return <div className='bg-white'>privacy</div>;
};

Privacy.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Privacy);
