import Head from "next/head";
import Header from "shared/header";
import Footer from "shared/footer";
import FullPage from "shared/fullPage";
import { withTranslation } from "../i18n";
// full page sections
import BecomePartner from "shared/sections/pt-becomePartner";
import WeOffer from "shared/sections/pt-weOffer";
import HowToBecomePartner from "shared/sections/pt-howToBecomePartner";
import OurPartners from "shared/sections/pt-partners";

const Partners = ({}) => {
  return (
    <div>
      <Head>
        <title>Powerfull | Partners</title>
      </Head>
      <Header />
      <FullPage sections={[<BecomePartner />, <WeOffer />, <HowToBecomePartner />, <OurPartners />]} />
      <Footer />
    </div>
  );
};

Partners.getInitialProps = async () => ({
  namespacesRequired: ["common", "sections", "footer"],
});

export default withTranslation()(Partners);
