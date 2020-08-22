import { useTranslation } from "../../i18n";
import { points } from "constants/howToUse";
import Heading from "shared/heading";
import { withTranslation } from "../../i18n";

const HowToUse = ({ t, i18n }) => {
  return (
    <section>
      <div className='container'>
        <Heading text={t("hm_sec2_title")} />
        <div className='lg:flex xs:justify-center xs:grid xs:gap-4 lg:gap-6 xs:row-gap-4 lg:grid-cols-0  md:grid-cols-2 xs:grid-cols-1'>
          {points.map((item, key) => (
            <div
              className={`flex flex-col justify-center items-center lg:opacity-25 xs:opacity-100 hover:opacity-100  transition-opacity duration-500 bg-white lg:w-260px xs:w-11/12 mx-auto h-400px`}
              key={key}
            >
              <div className='flex flex-col justify-center items-center h-200px text-center'>
                <img src={item.src} alt={item.alt} className='h-110px' />
                <h3 children={t(item.title_key)} className='font-bold xl:text-2xl text-primary-dark xs:text-xl ' />
              </div>
              <p
                className='flex flex-col justify-center items-center bg-primary-blue h-200px px-2 xl:text-sm xs:text-xs w-full text-justify'
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
