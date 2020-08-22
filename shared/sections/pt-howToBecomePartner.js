import { withTranslation } from "../../i18n";
import Heading from "shared/heading";
import { points } from "constants/howToBecomePartner";

const HowToBecomePartner = ({ t, i18n }) => {
  return (
    <section>
      <div className='container'>
        <div className='grid xs:grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 lg:gap-1 lg:mx-8 xs:mx-0 '>
          {points.map((item) => (
            <div
              key={item.src}
              className='grid grid-rows-1 md:grid-cols-2 xs:grid-cols-1 lg:py-6 xs:py-0 xs:pt-2 xs:pb-16'
            >
              <img src={item.src} className='h-auto md:w-auto xs:w-10/12 xs:mx-auto' />
              <div className='xs:text-center md:text-left'>
                <h3 className='text-2xl font-bold'>{t(item.title_key)}</h3>
                <p className='mt-4 text-sm'>{t(item.desc_key)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default withTranslation("sections")(HowToBecomePartner);
