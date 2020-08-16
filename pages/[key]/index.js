import Head from "next/head";
import Header from "shared/header";
import FullPage from "shared/fullPage";

// full page sections
import Products from "shared/sections/products";
import HowToUse from "shared/sections/howToUse";
import Plans from "shared/sections/plans";
import About from "shared/sections/about";
import { withTranslation } from "i18n";

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Powerfull | Homepage</title>
      </Head>
      <Header />
      <FullPage sections={[<Products />, <HowToUse />, <Plans />, <About />]} />
    </div>
  );
};

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ["common", "header", "footer", "sections"],
});

export default withTranslation("common")(IndexPage);
