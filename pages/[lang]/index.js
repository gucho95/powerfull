import Head from "next/head";
import Header from "shared/header";
import FullPage from "shared/fullPage";
// full page sections
import Products from "shared/sections/hp-products";
import HowToUse from "shared/sections/hp-howToUse";
import Plans from "shared/sections/hp-plans";
import About from "shared/sections/hp-about";
import { withTranslation } from "../../i18n";
import Loader from "shared/loader";

const IndexPage = ({ t }) => {
  return (
    <div>
      <Loader />
      <Head>
        <title>Powerfull | We make Armenia Powerfull</title>
      </Head>
      <Header />
      <FullPage sections={[<Products />, <HowToUse />, <Plans />, <About />]} />
    </div>
  );
};

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sections"],
});

export default withTranslation("sections")(IndexPage);
