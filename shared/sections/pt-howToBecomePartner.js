import { withTranslation } from "../../i18n";
import Heading from "shared/heading";
import { points } from "constants/howToBecomePartner";

const HowToBecomePartner = ({ t, i18n }) => {
  return (
    <section>
      <div className='container'>
        <div className='grid grid-cols-2 grid-rows-2 gap-1 a'>
          {points.map((item) => (
            <div key={item.src} className='grid grid-rows-1 grid-cols-2'>
              <img src={item.src} className='h-auto' />
              <div>
                <h3 className='text-2xl font-bold'>{t(item.title_key)}</h3>
                <p className='mt-4'>{t(item.desc_key)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default withTranslation("sections")(HowToBecomePartner);
