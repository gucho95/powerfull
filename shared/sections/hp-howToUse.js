import { useTranslation } from "../../i18n";
import { points } from "constants/howToUse";
import Heading from "shared/heading";
import { withTranslation } from "../../i18n";

const HowToUse = ({ t, i18n }) => {
  return (
    <section>
      <div className='container'>
        <Heading text={t("hm_sec2_title")} />
        <div className='lg:flex xs:justify-center xs:grid xs:gap-4 lg:gap-4 xs:row-gap-4 lg:grid-cols-0  md:grid-cols-2 xs:grid-cols-1 lg:mx-8 xs:mx-0'>
          {points.map((item, key) => (
            <div
              className={`group flex flex-col justify-center items-center  xs:opacity-100 hover:opacity-100  transition-opacity  xs:w-11/12 mx-auto h-400px   hover:shadow-block-hover xs:shadow-block-hover lg:shadow-none`}
              key={key}
            >
              <div className='flex flex-col justify-center items-center h-200px text-center xs:bg-white lg:bg-primary-gray w-full shadow-block group-hover:shadow-none group-hover:bg-white'>
                <img src={item.src} alt={item.alt} className='h-110px' />
                <h3 children={t(item.title_key)} className='font-bold xl:text-2xl text-primary-dark xs:text-xl ' />
              </div>
              <p
                className='item-desc flex flex-col justify-center items-center bg-primary-blue px-2 xl:text-sm xs:text-xs w-full text-justify lg:h-0 xs:h-200px overflow-hidden transition-all duration-200 ease-in-out group-hover:h-200px'
                children={t(item.desc_key)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default withTranslation("sections")(HowToUse);
