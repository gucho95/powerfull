import Header from "shared/header";
import Footer from "shared/footer";
import { withTranslation } from "../i18n";

const Partners = ({}) => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

Partners.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Partners);
