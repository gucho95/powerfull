import { useTranslation } from "../../i18n";
import { points } from "constants/howToUse";
import Heading from "shared/heading";
import { withTranslation } from "../../i18n";

const HowToUse = ({ t, i18n }) => {
  return (
    <section>
      <div className='container'>
        <Heading text={t("hm_sec2_title")} />
        <div className='flex'>
          {points.map((item, key) => (
            <div
              className={`flex flex-col justify-center items-center opacity-25 hover:opacity-100 transition-opacity duration-500 bg-white w-300px h-400px mx-2`}
              key={key}
            >
              <div className='flex flex-col justify-center items-center h-200px text-center'>
                <img src={item.src} alt={item.alt} className='h-110px' />
                <h3 children={t(item.title_key)} className='font-bold text-2xl text-primary-dark' />
              </div>
              <div
                className='flex flex-col justify-center items-center bg-primary-blue h-200px px-2 text-sm w-full text-justify'
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
