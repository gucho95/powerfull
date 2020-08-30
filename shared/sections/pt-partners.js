import { withTranslation } from "../../i18n";
import Heading from "shared/heading";
import Carousel from "shared/carousel";

const OurPartners = ({ t, i18n }) => {
  return (
    <section>
      <div className='container'>
        <Heading text={t("pt_sec4_title")} />
        <Carousel.With4Slides />
        <div className='mt-8'>
          <Heading text={t("pt_sec4_desc")} border={false} />
        </div>
      </div>
    </section>
  );
};

export default withTranslation("sections")(OurPartners);
