import Head from "next/head";
import { withTranslation } from "../i18n";

const Privacy = ({ t, i18n }) => {
  return (
    <div className='bg-white'>
      <Head>
        <title>Powerfull | Homepage</title>
      </Head>
      privacy
    </div>
  );
};

Privacy.getInitialProps = async () => ({
  namespacesRequired: ["common", "sections", "footer"],
});

export default withTranslation()(Privacy);
