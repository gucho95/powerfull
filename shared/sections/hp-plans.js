import { withTranslation } from "../../i18n";
import { plans } from "constants/plans";
import Heading from "shared/heading";

const Plans = ({ t, i18n }) => {
  return (
    <section>
      <div className='container w-full'>
        <Heading text={t("hm_sec3_title")} />
        <div className='lg:flex xs:justify-center xs:grid xs:gap-4 lg:gap-6 xs:row-gap-4 lg:grid-cols-0  md:grid-cols-2 xs:grid-cols-1 '>
          {plans.map((item, key) => (
            <div
              className={`flex flex-col justify-center lg:opacity-25 xs:opacity-100 hover:opacity-100  transition-opacity duration-500 bg-white lg:w-260px xs:w-11/12 mx-auto  h-400px`}
              key={key}
            >
              <div className='flex flex-col justify-center items-center h-200px bg-white'>
                <img src={item.src} alt={item.alt} className='h-110px' />
                <p children={t(item.desc_t_key)} className='text-primary-blue my-4 font-bold' />
              </div>
              <div className='flex justify-center items-center bg-primary-blue h-200px  font-bold text-sm w-full'>
                <h3 children={`${item.price} ${t("amd")}`} className='font-bold text-2xl  text-white' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default withTranslation("sections")(Plans);
