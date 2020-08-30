import Head from "next/head";
import { withTranslation } from "../../../i18n";
import en from "./en";
import ru from "./ru";
import hy from "./hy";

const PrivacyLanguage = {
  en,
  ru,
  hy,
};

const Privacy = ({ t, i18n }) => {
  const { language } = i18n;
  const Component = PrivacyLanguage[language];
  return (
    <div className='bg-white'>
      <Head>
        <title>Powerfull | User Agrement </title>
      </Head>
      <Component />
    </div>
  );
};

Privacy.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation()(Privacy);
