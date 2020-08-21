import { Fragment } from "react";
import Heading from "shared/heading";
import Footer from "shared/footer";
import { withTranslation } from "../../i18n";

const BecomePartner = ({ t, i18n }) => {
  return (
    <Fragment>
      <section className='last-section'>
        <div className='container flex flex-col items-center'>
          <Heading text={t("pt_sec1_title")} />
          <img src='/assets/for_partners/become_partner.png' className='h-96' />
          <p className='font-bold text-primary-light text-center mt-16 mb-16 px-4'>{t("pt_sec1_desc")}</p>
        </div>
      </section>
    </Fragment>
  );
};

export default withTranslation("sections")(BecomePartner);
