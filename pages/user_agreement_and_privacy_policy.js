import { withTranslation } from "../i18n";

const Privacy = ({ t, i18n }) => {
  return <div className='bg-white'>privacy</div>;
};

Privacy.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Privacy);
