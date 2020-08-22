import { withTranslation } from "../../i18n";
import Heading from "shared/heading";
import { partners } from "constants/partners";
import Carousel from "shared/carousel";

const OurPartners = ({ t, i18n }) => {
  return (
    <section>
      <div className='container'>
        <Heading text={t("pt_sec4_title")} />
        <Carousel />
        {/* <div className='grid grid-cols-7 gap-6'>
          {partners.map((item) => (
            <div className=' bg-white' key={item.src}>
              <img src={item.src} alt={item.alt} className='w-full' />
            </div>
          ))}
        </div> */}
        <div className='mt-8'>
          <Heading text={t("pt_sec4_desc")} border={false} />
        </div>
      </div>
    </section>
  );
};

export default withTranslation("sections")(OurPartners);
