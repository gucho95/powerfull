import Head from "next/head";
import Header from "shared/header";
import FullPage from "shared/fullPage";
import { withTranslation } from "../../i18n";
// full page sections
import BecomePartner from "shared/sections/pt-becomePartner";
import WeOffer from "shared/sections/pt-weOffer";
import HowToBecomePartner from "shared/sections/pt-howToBecomePartner";
import OurPartners from "shared/sections/pt-partners";
import Loader from "shared/loader";

const Partners = ({ t }) => {
  return (
    <div>
      <Loader />
      <Head>
        <title>Powerfull | Partners</title>
      </Head>
      <Header />
      <FullPage sections={[<BecomePartner />, <WeOffer />, <HowToBecomePartner />, <OurPartners />]} />
    </div>
  );
};

Partners.getInitialProps = async () => ({
  namespacesRequired: ["sections"],
});

export default withTranslation("sections")(Partners);
