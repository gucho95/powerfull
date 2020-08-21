import { withTranslation } from "../../i18n";
import Heading from "shared/heading";
import Carousel3D from "shared/carousel3D";

const OurPartners = ({ t, i18n }) => {
  return (
    <section>
      <div className='container'>
        <Heading text={t("pt_sec4_title")} />
        <div className='flex justify-around'>
          <Carousel3D />
        </div>
        <div className='mt-8'>
          <Heading text={t("pt_sec4_desc")} border={false} />
        </div>
      </div>
    </section>
  );
};

export default withTranslation("sections")(OurPartners);
