import Head from "next/head";
import Header from "shared/header";
import Footer from "shared/footer";
import { withTranslation } from "../i18n";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Powerfull | Contact</title>
      </Head>
      <Header />
      <Footer />
    </div>
  );
};

Contact.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Contact);
